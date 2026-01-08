/**
 * Dealer Locator
 * Provides search and map functionality for finding FishArmor dealers
 */

(function() {
  'use strict';

  const EARTH_RADIUS_MILES = 3959;
  const strings = window.dealerLocatorStrings || {};

  class DealerLocator {
    constructor(section) {
      this.section = section;
      this.map = null;
      this.markers = [];
      this.infoWindow = null;
      this.dealers = [];
      this.filteredDealers = [];
      this.searchCenter = null;
      this.mapsLoaded = false;

      // DOM Elements
      this.mapContainer = section.querySelector('[data-dealer-map]');
      this.listContainer = section.querySelector('[data-dealer-list]');
      this.searchInput = section.querySelector('[data-dealer-search-input]');
      this.radiusSelect = section.querySelector('[data-dealer-radius]');
      this.searchButton = section.querySelector('[data-dealer-search-button]');
      this.geolocationButton = section.querySelector('[data-dealer-geolocation]');
      this.resultsInfo = section.querySelector('[data-dealer-results-info]');
      this.messageContainer = section.querySelector('[data-dealer-message]');

      // Config from data attributes
      this.config = {
        apiKey: this.mapContainer?.dataset.apiKey || '',
        defaultLat: parseFloat(this.mapContainer?.dataset.defaultLat) || 46.0,
        defaultLng: parseFloat(this.mapContainer?.dataset.defaultLng) || -94.0,
        defaultZoom: parseInt(this.mapContainer?.dataset.defaultZoom) || 5,
        markerColor: this.mapContainer?.dataset.markerColor || '#D32F2F',
        mapStyle: this.mapContainer?.dataset.mapStyle || 'dark'
      };

      // Load dealers from JSON
      this.loadDealers();

      // Initialize
      this.bindEvents();
      this.loadGoogleMaps();
    }

    loadDealers() {
      const dataScript = this.section.querySelector('[data-dealers]');
      if (dataScript) {
        try {
          this.dealers = JSON.parse(dataScript.textContent);
          // Sort alphabetically by state, then name
          this.dealers.sort((a, b) => {
            if (a.state !== b.state) return a.state.localeCompare(b.state);
            return a.name.localeCompare(b.name);
          });
          this.filteredDealers = [...this.dealers];
        } catch (e) {
          console.error('Failed to parse dealer data:', e);
        }
      }
    }

    bindEvents() {
      // Search button
      this.searchButton?.addEventListener('click', () => this.performSearch());

      // Enter key in search input
      this.searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.performSearch();
        }
      });

      // Geolocation button
      this.geolocationButton?.addEventListener('click', () => this.useMyLocation());

      // Radius change - re-filter if we have a search center
      this.radiusSelect?.addEventListener('change', () => {
        if (this.searchCenter) {
          this.filterByRadius(this.searchCenter);
        }
      });
    }

    loadGoogleMaps() {
      if (!this.config.apiKey) {
        this.showMessage(strings.mapError || 'Google Maps API key is required.');
        this.renderDealerList();
        return;
      }

      // Check if already loaded
      if (window.google && window.google.maps) {
        this.initMap();
        return;
      }

      // Load script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.config.apiKey}&callback=initDealerMap`;
      script.async = true;
      script.defer = true;

      window.initDealerMap = () => {
        this.mapsLoaded = true;
        this.initMap();
        delete window.initDealerMap;
      };

      script.onerror = () => {
        this.showMessage(strings.mapError || 'Failed to load Google Maps.');
        this.renderDealerList();
      };

      document.head.appendChild(script);
    }

    initMap() {
      if (!this.mapContainer || !window.google) return;

      // Clear loading state
      this.mapContainer.innerHTML = '';

      // Get map styles
      const stylesScript = this.section.querySelector('[data-map-styles]');
      let styles = [];
      if (stylesScript) {
        try {
          const allStyles = JSON.parse(stylesScript.textContent);
          styles = allStyles[this.config.mapStyle] || [];
        } catch (e) {
          console.error('Failed to parse map styles:', e);
        }
      }

      // Create map
      this.map = new google.maps.Map(this.mapContainer, {
        center: { lat: this.config.defaultLat, lng: this.config.defaultLng },
        zoom: this.config.defaultZoom,
        styles: styles,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
        zoomControl: true
      });

      // Create info window
      this.infoWindow = new google.maps.InfoWindow();

      // Add markers for all dealers
      this.addMarkers(this.dealers);

      // Render list
      this.renderDealerList();

      // Update results info
      this.updateResultsInfo(this.dealers.length, null);

      // Fit bounds to show all dealers
      this.fitBounds(this.dealers);

      // Auto-locate on mobile
      if (window.innerWidth < 1024 && navigator.geolocation) {
        this.useMyLocation();
      }
    }

    addMarkers(dealers) {
      // Clear existing markers
      this.markers.forEach(marker => marker.setMap(null));
      this.markers = [];

      const icon = {
        path: "M22.6746 0C10.2174 0 0 8.79169 0 21.5118C0 31.2116 4.33864 38.333 9.26606 42.998C11.7232 45.3243 14.3387 47.0534 16.6674 48.2077C18.9384 49.3333 21.1148 50 22.6746 50C24.2345 50 26.4108 49.3333 28.6818 48.2077C31.0105 47.0534 33.626 45.3243 36.0832 42.998C41.0106 38.333 45.3492 31.2116 45.3492 21.5118C45.3492 8.79169 35.1318 0 22.6746 0ZM29.6514 22.6746C29.6514 26.5278 26.5278 29.6514 22.6746 29.6514C18.8214 29.6514 15.6978 26.5278 15.6978 22.6746C15.6978 18.8214 18.8214 15.6978 22.6746 15.6978C26.5278 15.6978 29.6514 18.8214 29.6514 22.6746Z",
        fillColor: this.config.markerColor,
        fillOpacity: 1,
        anchor: new google.maps.Point(22.5, 50),
        strokeWeight: 0,
        scale: 0.6
      };

      dealers.forEach((dealer, index) => {
        if (!dealer.lat || !dealer.lng) return;

        const marker = new google.maps.Marker({
          map: this.map,
          position: { lat: dealer.lat, lng: dealer.lng },
          icon: icon,
          title: dealer.name
        });

        marker.dealerIndex = index;
        marker.dealer = dealer;

        marker.addListener('click', () => {
          this.showInfoWindow(dealer, marker);
          this.highlightListItem(dealer);
        });

        this.markers.push(marker);
      });
    }

    showInfoWindow(dealer, marker) {
      const fullAddress = `${dealer.address}, ${dealer.city}, ${dealer.state} ${dealer.zip}`;
      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

      let content = `
        <div class="dealer-info">
          <h4 class="dealer-info__name">${dealer.name}</h4>
          <p class="dealer-info__address">
            ${dealer.address}<br>
            ${dealer.city}, ${dealer.state} ${dealer.zip}
          </p>
          <div class="dealer-info__meta">
      `;

      if (dealer.phone) {
        content += `<a href="tel:${dealer.phone.replace(/\D/g, '')}" class="dealer-info__link">${dealer.phone}</a>`;
      }

      if (dealer.website) {
        content += `<a href="${dealer.website}" target="_blank" rel="noopener" class="dealer-info__link">${strings.website || 'Website'}</a>`;
      }

      content += `</div>`;

      if (dealer.distance !== undefined) {
        content += `<p class="dealer-info__distance">${dealer.distance.toFixed(1)} ${strings.milesAway || 'miles away'}</p>`;
      }

      content += `
          <a href="${directionsUrl}" target="_blank" rel="noopener" class="dealer-info__btn">
            ${strings.getDirections || 'Get Directions'}
          </a>
        </div>
      `;

      this.infoWindow.setContent(content);
      this.infoWindow.open(this.map, marker);
    }

    renderDealerList() {
      if (!this.listContainer) return;

      const dealers = this.filteredDealers;

      if (dealers.length === 0) {
        this.listContainer.innerHTML = '';
        return;
      }

      this.listContainer.innerHTML = dealers.map((dealer, index) => {
        const fullAddress = `${dealer.address}, ${dealer.city}, ${dealer.state} ${dealer.zip}`;
        const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

        return `
          <li class="dealer-locator__item" data-dealer-item data-index="${index}">
            <h3 class="dealer-locator__item-name">${dealer.name}</h3>
            <address class="dealer-locator__item-address">
              ${dealer.address}<br>
              ${dealer.city}, ${dealer.state} ${dealer.zip}
            </address>
            <div class="dealer-locator__item-meta">
              ${dealer.phone ? `<a href="tel:${dealer.phone.replace(/\D/g, '')}" class="dealer-locator__item-phone">${dealer.phone}</a>` : ''}
              ${dealer.website ? `<a href="${dealer.website}" target="_blank" rel="noopener" class="dealer-locator__item-website">${strings.website || 'Website'}</a>` : ''}
            </div>
            ${dealer.distance !== undefined ? `<div class="dealer-locator__item-distance">${dealer.distance.toFixed(1)} ${strings.milesAway || 'miles away'}</div>` : ''}
            <a href="${directionsUrl}" target="_blank" rel="noopener" class="dealer-locator__item-directions button button--secondary button--sm">
              ${strings.getDirections || 'Get Directions'}
            </a>
          </li>
        `;
      }).join('');

      // Add click handlers
      this.listContainer.querySelectorAll('[data-dealer-item]').forEach((item) => {
        item.addEventListener('click', (e) => {
          // Don't trigger on link clicks
          if (e.target.closest('a')) return;

          const index = parseInt(item.dataset.index);
          const dealer = this.filteredDealers[index];
          this.focusDealer(dealer);
        });
      });
    }

    highlightListItem(dealer) {
      // Remove existing highlights
      this.listContainer?.querySelectorAll('[data-dealer-item]').forEach(item => {
        item.classList.remove('is-active');
      });

      // Find and highlight matching item
      const index = this.filteredDealers.indexOf(dealer);
      if (index >= 0) {
        const item = this.listContainer?.querySelector(`[data-index="${index}"]`);
        if (item) {
          item.classList.add('is-active');
          item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }

    focusDealer(dealer) {
      if (!this.map || !dealer.lat || !dealer.lng) return;

      // Center map on dealer
      this.map.setCenter({ lat: dealer.lat, lng: dealer.lng });
      this.map.setZoom(14);

      // Find marker and show info window
      const marker = this.markers.find(m => m.dealer === dealer);
      if (marker) {
        this.showInfoWindow(dealer, marker);
      }

      // Highlight in list
      this.highlightListItem(dealer);
    }

    async performSearch() {
      const query = this.searchInput?.value.trim();

      if (!query) {
        this.showAllDealers();
        return;
      }

      // Show loading state
      this.setSearchLoading(true);

      try {
        const coords = await this.geocodeAddress(query);
        this.searchCenter = coords;
        this.filterByRadius(coords);
      } catch (error) {
        console.error('Search error:', error);
        this.showMessage(strings.searchError || 'Unable to find that location. Try a ZIP code.');
      } finally {
        this.setSearchLoading(false);
      }
    }

    useMyLocation() {
      if (!navigator.geolocation) {
        this.showMessage(strings.locationUnavailable || 'Geolocation is not supported by your browser.');
        return;
      }

      // Show loading state
      this.setGeolocationLoading(true);

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setGeolocationLoading(false);
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          this.searchCenter = coords;
          this.searchInput.value = ''; // Clear text input
          this.filterByRadius(coords);
        },
        (error) => {
          this.setGeolocationLoading(false);
          let message = strings.locationUnavailable || 'Unable to get your location.';
          if (error.code === error.PERMISSION_DENIED) {
            message = strings.locationDenied || 'Location access denied. Please enter your ZIP code.';
          }
          this.showMessage(message);
        },
        { timeout: 10000, enableHighAccuracy: false }
      );
    }

    geocodeAddress(address) {
      return new Promise((resolve, reject) => {
        if (!window.google) {
          reject(new Error('Google Maps not loaded'));
          return;
        }

        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ address: address }, (results, status) => {
          if (status === 'OK' && results[0]) {
            resolve({
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            });
          } else {
            reject(new Error(`Geocoding failed: ${status}`));
          }
        });
      });
    }

    filterByRadius(center) {
      const radiusValue = this.radiusSelect?.value || 'closest';
      const isClosest = radiusValue === 'closest';
      const radius = isClosest ? null : parseInt(radiusValue);

      // Calculate distances for all dealers
      const dealersWithDistance = this.dealers.map(dealer => ({
        ...dealer,
        distance: this.calculateDistance(center.lat, center.lng, dealer.lat, dealer.lng)
      }));

      // Sort by distance
      dealersWithDistance.sort((a, b) => a.distance - b.distance);

      // Filter: closest (3 on mobile, 10 on desktop) or by radius
      if (isClosest) {
        const isMobile = window.innerWidth < 1024;
        const closestCount = isMobile ? 3 : 10;
        this.filteredDealers = dealersWithDistance.slice(0, closestCount);
      } else {
        this.filteredDealers = dealersWithDistance.filter(d => d.distance <= radius);
      }

      // Hide message
      this.hideMessage();

      // Update UI
      this.renderDealerList();
      this.updateMarkerVisibility();
      this.updateResultsInfo(this.filteredDealers.length, isClosest ? 'closest' : radius);

      // Update map view
      if (this.filteredDealers.length > 0) {
        this.fitBounds(this.filteredDealers, center);
      } else {
        // No results - center on search location
        this.map?.setCenter(center);
        this.map?.setZoom(10);
        this.showMessage(strings.noResults?.replace('{{ radius }}', radius) || `No dealers found within ${radius} miles.`);
      }
    }

    showAllDealers() {
      this.searchCenter = null;
      this.searchInput.value = '';

      // Reset to all dealers without distance
      this.filteredDealers = this.dealers.map(d => {
        const { distance, ...dealer } = d;
        return dealer;
      });

      // Sort alphabetically
      this.filteredDealers.sort((a, b) => {
        if (a.state !== b.state) return a.state.localeCompare(b.state);
        return a.name.localeCompare(b.name);
      });

      this.hideMessage();
      this.renderDealerList();
      this.updateMarkerVisibility();
      this.updateResultsInfo(this.dealers.length, null);
      this.fitBounds(this.dealers);
    }

    updateMarkerVisibility() {
      this.markers.forEach(marker => {
        const isVisible = this.filteredDealers.some(d =>
          d.lat === marker.dealer.lat && d.lng === marker.dealer.lng
        );
        marker.setVisible(isVisible);
      });
    }

    fitBounds(dealers, includePoint = null) {
      if (!this.map || dealers.length === 0) return;

      const bounds = new google.maps.LatLngBounds();

      dealers.forEach(dealer => {
        if (dealer.lat && dealer.lng) {
          bounds.extend({ lat: dealer.lat, lng: dealer.lng });
        }
      });

      if (includePoint) {
        bounds.extend(includePoint);
      }

      this.map.fitBounds(bounds);

      // Don't zoom in too far for single dealer
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        if (this.map.getZoom() > 14) {
          this.map.setZoom(14);
        }
      });
    }

    calculateDistance(lat1, lng1, lat2, lng2) {
      const dLat = this.toRad(lat2 - lat1);
      const dLng = this.toRad(lng2 - lng1);

      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
        Math.sin(dLng / 2) * Math.sin(dLng / 2);

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return EARTH_RADIUS_MILES * c;
    }

    toRad(degrees) {
      return degrees * (Math.PI / 180);
    }

    updateResultsInfo(count, radius) {
      if (!this.resultsInfo) return;

      if (radius === 'closest') {
        this.resultsInfo.textContent = (strings.showingClosest || 'Showing {{ count }} closest dealers')
          .replace('{{ count }}', count);
      } else if (radius) {
        this.resultsInfo.textContent = (strings.showingResults || 'Showing {{ count }} dealers within {{ radius }} miles')
          .replace('{{ count }}', count)
          .replace('{{ radius }}', radius);
      } else {
        this.resultsInfo.textContent = (strings.showingAll || 'Showing all {{ count }} dealers')
          .replace('{{ count }}', count);
      }
    }

    showMessage(message) {
      if (this.messageContainer) {
        this.messageContainer.textContent = message;
        this.messageContainer.hidden = false;
      }
    }

    hideMessage() {
      if (this.messageContainer) {
        this.messageContainer.hidden = true;
      }
    }

    setSearchLoading(loading) {
      const textEl = this.searchButton?.querySelector('[data-search-text]');
      if (textEl) {
        textEl.textContent = loading
          ? (strings.searching || 'Searching...')
          : (strings.searchButton || 'Search');
      }
      if (this.searchButton) {
        this.searchButton.disabled = loading;
      }
    }

    setGeolocationLoading(loading) {
      const textEl = this.geolocationButton?.querySelector('[data-geolocation-text]');
      if (textEl) {
        textEl.textContent = loading
          ? (strings.locating || 'Locating...')
          : (strings.useLocation || 'Use My Location');
      }
      if (this.geolocationButton) {
        this.geolocationButton.disabled = loading;
      }
    }
  }

  // Initialize all dealer locator sections
  function init() {
    document.querySelectorAll('.dealer-locator-section').forEach(section => {
      new DealerLocator(section);
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Shopify theme editor support
  if (Shopify.designMode) {
    document.addEventListener('shopify:section:load', (event) => {
      if (event.target.classList.contains('dealer-locator-section')) {
        new DealerLocator(event.target);
      }
    });
  }
})();
