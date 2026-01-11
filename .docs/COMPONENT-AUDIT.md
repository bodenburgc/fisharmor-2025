# BODE Component Audit

Based on analysis of FishArmor live site (January 2026).

## Summary

| Category | Total | Used | Unused |
|----------|-------|------|--------|
| Sections | 98 | ~35 | ~63 |
| Snippets | 96 | ~70 | ~26 |
| Templates | 16 | 16 | 0 |
| Layouts | 2 | 2 | 0 |

---

## SECTIONS: Used vs Unused

### Global Sections (Always Loaded)

**Header Group:**
- `announcement-bar.liquid` ✅
- `header.liquid` ✅

**Footer Group:**
- `multicolumn-with-icons.liquid` ✅
- `footer.liquid` ✅
- `footer-copyright.liquid` ✅

**Overlay Group:**
- `cart-drawer.liquid` ✅
- `search-drawer.liquid` ✅
- `newsletter-popup.liquid` ✅
- `age-verifier.liquid` ⚠️ (exists but disabled)
- `cookie-banner.liquid` ✅
- `mobile-dock.liquid` ✅

### Template-Specific Sections (USED)

**Homepage (index.json):**
- `image-with-text-overlay.liquid` ✅
- `floating-product-collection.liquid` ✅
- `video-with-text.liquid` ✅
- `pro-staff.liquid` ✅
- `collection-list.liquid` ✅
- `featured-collections.liquid` ✅
- `featured-collection.liquid` ✅
- `product-bundle.liquid` ⚠️ (disabled in template)

**Product (product.json):**
- `main-product.liquid` ✅
- `help-drawer.liquid` ✅
- `product-details.liquid` ✅
- `product-recommendations.liquid` ✅
- `apps.liquid` ✅ (Judge.me reviews)
- `featured-collection.liquid` ✅
- `scrolling-banner.liquid` ⚠️ (disabled)
- `shop-the-look.liquid` ⚠️ (disabled)
- `scrolling-text.liquid` ⚠️ (disabled)
- `faq.liquid` ⚠️ (disabled)
- `recently-viewed.liquid` ⚠️ (disabled)

**Collection (collection.json):**
- `main-collection-banner.liquid` ✅
- `main-collection.liquid` ✅
- `recently-viewed.liquid` ✅

**Cart (cart.json):**
- `main-cart.liquid` ✅
- `recently-viewed.liquid` ✅

**Search (search.json):**
- `main-search.liquid` ✅
- `recently-viewed.liquid` ✅

**Blog (blog.json, article.json):**
- `main-blog.liquid` ✅
- `main-article-banner.liquid` ✅
- `main-article-overlay.liquid` ✅
- `blog-posts.liquid` ✅

**Customer Account:**
- `main-account.liquid` ✅
- `main-login.liquid` ✅
- `main-register.liquid` ✅
- `main-reset-password.liquid` ✅
- `main-addresses.liquid` ✅
- `main-activate-account.liquid` ✅
- `main-order.liquid` ✅

**Special Pages:**
- `main-page.liquid` ✅ (page.json, page.warranty.json, page.assembly.json)
- `main-page-full-width.liquid` ❓ (not in current templates)
- `main-404.liquid` ✅
- `dealer-locator.liquid` ✅ (page.dealers.json)
- `contact-form.liquid` ✅ (page.contact.json)
- `main-list-collections.liquid` ✅
- `newsletter-banner.liquid` ✅ (password.json)

**Password Page:**
- `main-password-header.liquid` ✅
- `main-password-footer.liquid` ✅

---

### UNUSED SECTIONS (Not in any template)

**Can likely REMOVE:**
```
blog-posts-collage.liquid        # Duplicate of blog-posts
collage-grid.liquid              # Duplicate of collage
compact-product-bundle.liquid    # Duplicate of product-bundle
comparison-table.liquid          # Duplicate of product-comparison
countdown-condensed.liquid       # Duplicate of countdown-timer
images-with-text.liquid          # Duplicate of image-with-text
images-with-text-overlay.liquid  # Duplicate of image-with-text-overlay
slideshow-hero.liquid            # Duplicate of slideshow
testimonials-banner.liquid       # Duplicate of testimonials
video-hero.liquid                # Duplicate of video
maps.liquid                      # Duplicate of map
```

**Over-engineered (replace with CSS):**
```
reveal-image-with-text.liquid
reveal-image-with-text-overlay.liquid
reveal-testimonials.liquid
reveal-video-with-text-overlay.liquid
```

**Niche/Optional (keep but document):**
```
collage.liquid                   # Not used but useful
countdown-timer.liquid           # Not used but useful
custom-liquid.liquid             # For custom code injection
empty-space.liquid               # Spacer section
featured-product.liquid          # Single product highlight
highlight-text.liquid            # Text emphasis
image-comparison.liquid          # Before/after slider
image-with-text.liquid           # Basic content block
logo-list.liquid                 # Partner logos
lookbook.liquid                  # Lifestyle imagery
main-giftcard-header.liquid      # Gift card pages
main-product-modal.liquid        # Quick view
map.liquid                       # Single location
newsletter.liquid                # Inline newsletter
number-counter.liquid            # Stats display
portfolio.liquid                 # Gallery
portfolio-on-scroll.liquid       # Animated gallery
product-comparison.liquid        # Compare products
quick-order-list.liquid          # B2B ordering
scroll-spy.liquid                # Navigation highlighting
shop-the-feed.liquid             # Instagram feed
slideshow.liquid                 # Hero carousel
testimonials.liquid              # Customer quotes
timeline.liquid                  # History display
video.liquid                     # Video embed
video-with-text-overlay.liquid   # Video with text
```

---

## SNIPPETS: Usage Status

### Core (Always Used)
```
css-variables.liquid        # Global CSS vars
js-variables.liquid         # Global JS config
icon.liquid                 # Icon library
button.liquid               # CTA buttons
media.liquid                # Image/video handler
```

### Product (Used on product pages)
```
product-card.liquid
product-card-horizontal.liquid
product-card-placeholder.liquid
product-card-bundle.liquid
product-price.liquid
product-badges.liquid
product-rating.liquid
product-inventory.liquid
product-media.liquid
product-media-gallery.liquid
product-thumbnail.liquid
product-video.liquid
product-variant-picker.liquid
product-variant-picker-button.liquid
product-variant-picker-dropdown.liquid
product-variant-picker-swatch.liquid
product-variant-picker-variant.liquid
product-variants.liquid
product-breadcrumb.liquid
product-placeholder.liquid
product-complementary.liquid
product-bundle-variant-picker.liquid
buy-buttons.liquid
back-in-stock.liquid
pickup-availability.liquid
```

### Header/Footer
```
header-logo.liquid
header-icons.liquid
header-nav-desktop.liquid
header-nav-drawer.liquid
header-nav-mega.liquid
header-drawer.liquid
footer-logo.liquid
footer-menu.liquid
footer-contact.liquid
footer-text.liquid
```

### Utility
```
section-heading.liquid
section-variables.liquid
section-gap-style.liquid
section-spacing-style.liquid
section-border-style.liquid
section-size-style.liquid
section-layout-class.liquid
section-overlay.liquid
direction.liquid
corner.liquid
alert.liquid
loading-bar.liquid
pagination.liquid
swatch.liquid
video.liquid
```

### Cart/Checkout
```
free-shipping-bar.liquid
gift-wrapping.liquid
gift-wrapping-list.liquid
gift-wrapping-list-horizontal.liquid
gift-wrap-item.liquid
gift-wrap-selector.liquid
gift-card-recipient-form.liquid
```

### Collection/Filtering
```
collection-card.liquid
facets.liquid
facets-drawer.liquid
facets-active.liquid
facets-sticky.liquid
sub-collections.liquid
subcollections.liquid          # DUPLICATE - remove one
```

### Social
```
social-icons.liquid
social-sharing.liquid
social-meta-tags.liquid
social-feed-card.liquid
social-feed-heading.liquid
```

### Content
```
article-card.liquid
article-comment.liquid
background-image.liquid
background-video.liquid
background-media.liquid
highlighted-text.liquid
newsletter-form.liquid
predictive-search.liquid
promotion-card.liquid
portfolio.liquid
collage.liquid
collage-grid.liquid
```

### Icons (Large files - audit for unused icons)
```
icon.liquid                 # 49KB - main icon library
icon-accordion.liquid       # 63KB
icon-announcement.liquid    # 62KB
icon-brand.liquid           # 22KB
icon-dock.liquid
icon-guarantee.liquid       # 88KB - LARGEST
icon-scribble.liquid
```

### Potentially Unused Snippets
```
subcollections.liquid       # Duplicate of sub-collections.liquid
mouse-cursor.liquid         # Gimmick feature
quick-order-list-row.liquid # Only if B2B enabled
```

---

## TEMPLATES

All templates are used:
```
index.json              # Homepage
product.json            # Product pages
product.modal.json      # Quick view
collection.json         # Collection pages
cart.json               # Cart page
search.json             # Search results
blog.json               # Blog listing
article.json            # Blog posts
page.json               # Generic pages
page.contact.json       # Contact page
page.dealers.json       # Dealer locator
page.warranty.json      # Warranty page
page.assembly.json      # Assembly instructions
list-collections.json   # All collections
404.json                # Not found
password.json           # Password/maintenance
customers/*.json        # Account pages (7 files)
```

---

## BLOCKS

Blocks in `/blocks/` directory:
```
_accordion-row.liquid   # Internal (underscore prefix)
_counter.liquid         # Internal
_custom-field.liquid    # Internal
accordion.liquid
button.liquid
contact-form.liquid
countdown-timer.liquid
custom-liquid.liquid
divider.liquid
group.liquid
heading.liquid
icon.liquid
image.liquid
map.liquid
newsletter.liquid
number-counter.liquid
popup-link.liquid
social-icons.liquid
spacer.liquid
subheading.liquid
text.liquid
video.liquid
```

All blocks appear to be used as they provide the building blocks for flexible sections.

---

## LAYOUTS

Both layouts are used:
```
theme.liquid            # Main layout (all pages)
password.liquid         # Password-protected pages
```

---

## Removal Priority

### Phase 1: Safe to Remove (Duplicates)
- `maps.liquid` → use `map.liquid`
- `collage-grid.liquid` → use `collage.liquid`
- `countdown-condensed.liquid` → use `countdown-timer.liquid`
- `images-with-text.liquid` → use `image-with-text.liquid`
- `images-with-text-overlay.liquid` → use `image-with-text-overlay.liquid`
- `slideshow-hero.liquid` → use `slideshow.liquid`
- `video-hero.liquid` → use `video.liquid`
- `testimonials-banner.liquid` → use `testimonials.liquid`
- `compact-product-bundle.liquid` → use `product-bundle.liquid`
- `comparison-table.liquid` → use `product-comparison.liquid`
- `subcollections.liquid` → use `sub-collections.liquid`
- `blog-posts-collage.liquid` → use `blog-posts.liquid`

### Phase 2: Remove Over-Engineered
- `reveal-image-with-text.liquid`
- `reveal-image-with-text-overlay.liquid`
- `reveal-testimonials.liquid`
- `reveal-video-with-text-overlay.liquid`

### Phase 3: Evaluate Icon Files
- `icon-guarantee.liquid` (88KB) - consider SVG sprite
- `icon-accordion.liquid` (63KB) - audit usage
- `icon-announcement.liquid` (62KB) - audit usage

---

## Notes

- Sections marked ⚠️ exist in templates but are disabled
- Sections marked ❓ may be used via theme editor but not in default JSON
- Before removing, search for `{% section 'name' %}` and `render 'name'` calls
- Some "unused" sections may be added by merchants via theme customizer

---

*Last updated: January 2026*
*Based on: FishArmor live site analysis*
