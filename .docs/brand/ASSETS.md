# FishArmor Brand Assets

**Brand Identity & Visual Assets Guide**

**Purpose:** Comprehensive guide to FishArmor logos, photography, icons, badges, and visual identity elements.

---

## 🎨 Logo Files

### Primary Logo

**File Locations:**
```
assets/logo-primary.svg          # Full color, horizontal
assets/logo-primary.png          # Full color, raster (for email)
assets/logo-reverse.svg          # White version for dark backgrounds
assets/logo-icon.svg             # Icon/mark only (no wordmark)
```

**Usage Guidelines:**

**Primary Logo (Full Color)**
- Use on white or light backgrounds
- Minimum size: 120px wide
- Clear space: Logo height × 0.5 on all sides

**Reverse Logo (White)**
- Use on dark backgrounds (Steel Ice, Frozen Lake, Navy)
- Use on photography with dark overlays
- Minimum size: 120px wide

**Icon Mark**
- Use in favicon, social media profile images
- Use when space is limited (< 100px)
- Minimum size: 32px × 32px

### Color Specifications

```css
/* Logo Colors */
Primary Brand Color: oklch(20% 0.015 240)  /* Steel Ice */
Accent Color: oklch(50% 0.18 15)           /* Safety Red */
Text Color: oklch(20% 0.015 240)           /* Steel Ice */
```

### Clear Space & Sizing

```
Minimum Sizes:
- Print: 1.5 inches wide
- Digital: 120px wide
- Favicon: 32px × 32px
- Social Media: 400px × 400px (square)

Clear Space:
- Equal to the height of the logo on all sides
- Never place text, graphics, or other elements within clear space
```

---

## 📸 Photography Guidelines

### Brand Photography Style

**Mood & Tone:**
- **Authentic:** Real ice fishermen, real Minnesota lakes, real conditions
- **Rugged:** Harsh weather, ice, cold, serious equipment
- **Technical:** Close-ups of products, materials, construction details
- **Minnesota Pride:** Lake Minnetonka, Mille Lacs, local landscapes

**Lighting:**
- **Golden Hour:** Sunrise/sunset over frozen lakes (warm tones)
- **Overcast:** Diffused natural light (authentic winter conditions)
- **Bright Snow:** High contrast, sharp shadows (visibility testing)

**What to Shoot:**

**Product Photography:**
```
✓ Cases on frozen lakes (real locations)
✓ Electronics inside cases (Vexilar, Humminbird, Garmin)
✓ Close-ups of latches, hinges, foam interiors
✓ Durability testing (drop tests, frozen latches)
✓ Cases in use (in ice houses, on sleds, in trucks)
```

**Lifestyle Photography:**
```
✓ Real ice fishermen using products
✓ Minnesota lakes (Minnetonka, Mille Lacs, Leech Lake)
✓ Ice houses, tip-ups, fishing gear
✓ Hands opening/closing cases
✓ Snowy landscapes, winter conditions
```

**Manufacturing Photography:**
```
✓ Minnesota facility (if applicable)
✓ Craftsmanship close-ups
✓ Quality control processes
✓ American-made messaging
```

### What NOT to Shoot

```
❌ Stock photography (generic winter scenes)
❌ Staged setups (models pretending to fish)
❌ Empty cases (show products inside)
❌ Tropical/warm weather (off-brand)
❌ Cheesy smiling shots (serious equipment)
```

### Photography Specs

```
Format: JPEG (for web), RAW (for archives)
Resolution: Minimum 2000px wide for hero images
Aspect Ratios:
  - Hero images: 16:9 (1920x1080)
  - Product images: 1:1 (square, 1200x1200)
  - Lifestyle images: 4:3 (1600x1200)
Color Space: sRGB (for web)
Compression: 80% quality for web (balance size vs quality)
```

### File Naming Convention

```
fisharmor-[type]-[subject]-[variant].jpg

Examples:
fisharmor-product-case-front.jpg
fisharmor-lifestyle-ice-house-01.jpg
fisharmor-hero-frozen-lake-sunrise.jpg
fisharmor-detail-latch-closeup.jpg
```

---

## 🏅 Badges & Trust Signals

### Made in Minnesota Badge

**File Locations:**
```
assets/badge-made-in-minnesota.svg
assets/badge-made-in-minnesota.png
```

**Usage:**
- Product pages (above Add to Cart)
- Footer (trust signal section)
- About page (brand story)

**Specs:**
```
Size: 80px × 80px (or proportional)
Colors: Pine Green background, White text
Icon: Minnesota state outline or USA flag
```

**HTML Example:**
```html
<span class="inline-flex items-center gap-2 bg-pine-green text-white px-4 py-2 rounded-full text-sm font-semibold">
  🇺🇸 Made in Minnesota
</span>
```

### Lifetime Warranty Badge

**File Locations:**
```
assets/badge-lifetime-warranty.svg
assets/badge-lifetime-warranty.png
```

**Usage:**
- Product pages (above Add to Cart)
- Homepage (trust section)
- Product detail specs

**Specs:**
```
Size: 80px × 80px
Colors: Safety Red background, White text
Icon: Shield or checkmark
```

### Other Badges

**Waterproof Badge**
```
Icon: Water droplet
Color: Blue/Steel Ice
Text: "IP67 Waterproof"
```

**Cold-Rated Badge**
```
Icon: Snowflake
Color: Frost/White
Text: "Tested to -40°F"
```

**Free Shipping Badge**
```
Icon: Truck
Color: Pine Green
Text: "Free Shipping Over $50"
```

---

## 🎯 Icons & Symbols

### Icon Library

**Style:** Outline style, 2px stroke weight, rounded caps

**Icon Set:**
```
✓ Shopping cart
✓ User account
✓ Search
✓ Menu (hamburger)
✓ Chevron down/up
✓ Close (X)
✓ Check mark
✓ Star (ratings)
✓ Shield (warranty)
✓ Snowflake (cold rating)
✓ Water droplet (waterproof)
✓ Truck (shipping)
✓ USA map (Made in USA)
✓ Minnesota state outline
```

**File Locations:**
```
assets/icon-[name].svg

Examples:
assets/icon-cart.svg
assets/icon-account.svg
assets/icon-shield.svg
assets/icon-snowflake.svg
```

**Usage:**
```html
<!-- Inline SVG -->
<svg class="w-6 h-6" aria-hidden="true">
  <use href="#icon-cart"></use>
</svg>

<!-- Or render Liquid snippet -->
{% render 'bode-icon', icon: 'cart', size: 24 %}
```

---

## 📐 Brand Patterns & Graphics

### Background Patterns (Optional)

**Ice Texture Pattern:**
- Subtle ice crystal pattern for section backgrounds
- Low opacity (5-10%)
- Steel Ice or Frost color

**Grid Pattern:**
- Technical/blueprint feel
- Use sparingly (product spec sections)
- Pine Green or Steel Ice

**Location:**
```
assets/pattern-ice-texture.svg
assets/pattern-grid.svg
```

---

## 🖼️ Image Optimization

### Shopify Image CDN

Use Shopify's built-in CDN for all product and content images:

```liquid
{{ product.featured_image | image_url: width: 800 }}
{{ product.featured_image | image_url: width: 800, format: 'webp' }}
```

### Responsive Images

Always provide srcset for responsive images:

```liquid
<img
  src="{{ image | image_url: width: 800 }}"
  srcset="
    {{ image | image_url: width: 400 }} 400w,
    {{ image | image_url: width: 800 }} 800w,
    {{ image | image_url: width: 1200 }} 1200w
  "
  sizes="(min-width: 1024px) 50vw, 100vw"
  alt="{{ product.title }}"
  loading="lazy"
>
```

### WebP Format

For modern browsers, serve WebP:

```liquid
<picture>
  <source srcset="{{ image | image_url: width: 800, format: 'webp' }}" type="image/webp">
  <img src="{{ image | image_url: width: 800 }}" alt="{{ product.title }}">
</picture>
```

---

## 🎬 Video Assets (Future)

### Product Videos

**Planned Assets:**
```
- Product overview (30-60 seconds)
- Durability testing (drop test, cold test)
- How-to-use (packing electronics, foam customization)
- Customer testimonials (Minnesota ice fishermen)
```

**Video Specs:**
```
Format: MP4 (H.264)
Resolution: 1920x1080 (1080p)
Frame Rate: 30fps or 60fps
Hosting: YouTube or Vimeo (embed on site)
Length: 30-90 seconds (short, scannable)
```

---

## 📦 Asset Delivery

### For Developers

**Asset Package Structure:**
```
fisharmor-assets/
├── logos/
│   ├── logo-primary.svg
│   ├── logo-reverse.svg
│   └── logo-icon.svg
├── badges/
│   ├── badge-made-in-minnesota.svg
│   └── badge-lifetime-warranty.svg
├── icons/
│   ├── icon-cart.svg
│   ├── icon-shield.svg
│   └── [20+ icons]
├── photography/
│   ├── hero/
│   ├── product/
│   ├── lifestyle/
│   └── manufacturing/
└── patterns/
    ├── pattern-ice-texture.svg
    └── pattern-grid.svg
```

### Asset Checklist

Before launch, ensure you have:

- [ ] Primary logo (SVG + PNG)
- [ ] Reverse logo (white version)
- [ ] Logo icon/mark
- [ ] Made in Minnesota badge
- [ ] Lifetime Warranty badge
- [ ] Hero images (3+ Minnesota lake scenes)
- [ ] Product images (6+ per product)
- [ ] Lifestyle images (10+ ice fishing scenes)
- [ ] Icon set (20+ UI icons)
- [ ] Favicon (32x32, 192x192, 512x512)
- [ ] Social media images (OG image, Twitter card)

---

## 🔗 Related Documentation

- `docs/brand/COLORS.md` - Color palette reference
- `docs/brand/TYPOGRAPHY.md` - Font usage guidelines
- `docs/brand/VOICE.md` - Brand messaging and tone
- `docs/design-system/TOKENS.md` - Design tokens

---

**Last Updated:** October 26, 2025  
**Status:** 🟡 Awaiting client assets (logos, photography, badges)  
**Maintained By:** BODE Design + Scales Advertising
