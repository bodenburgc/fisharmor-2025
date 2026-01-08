# FishArmor - Brand Typography

FishArmor uses a combination of impactful display typography and highly readable body fonts to create a rugged, professional, technical presence suitable for serious ice fishermen.

---

## Primary Typeface System

**Headline Font: Gazzetta**
```css
--font-headline: 'Gazzetta', 'Impact', sans-serif;
```
- Bold, condensed display typeface
- Excellent for large headlines and product names
- High impact and attention-grabbing (like safety equipment on the ice)
- Use in all caps for maximum effect
- Fallback to Impact for system compatibility

**Why Gazzetta for FishArmor:**
- Projects rugged confidence (ice fishing requires tough gear)
- Technical without being cold (approachable expertise)
- Bold enough to read on mobile devices
- Matches the durability of roto-molded products

**Body Font: Barlow Family**
```css
--font-body: 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body-semi: 'Barlow Semi Condensed', 'Barlow', sans-serif;
--font-body-condensed: 'Barlow Condensed', 'Barlow', sans-serif;
```
- Clean, modern sans-serif with excellent readability
- Multiple widths for design flexibility
- **Barlow Regular:** Primary body text, descriptions
- **Barlow Semi Condensed:** Secondary text, captions, specifications
- **Barlow Condensed:** Space-constrained areas, product spec tables
- System font fallbacks ensure fast loading (critical on the ice with slow connections)

**Why Barlow for FishArmor:**
- Technical readability (ice fishermen read specs carefully)
- Works at small sizes for mobile (used in field)
- Professional without being corporate
- Excellent for detailed product specifications

---

## Fluid Typography Scale

The typography system uses `clamp()` for responsive scaling between mobile and desktop breakpoints, eliminating the need for media queries and ensuring smooth transitions at all viewport sizes.

```css
/* Extra Small - Captions, fine print */
--font-size-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);      /* 12-14px */

/* Small - Secondary text, labels */
--font-size-sm: clamp(0.875rem, 0.825rem + 0.25vw, 1rem);       /* 14-16px */

/* Base - Primary body text */
--font-size-base: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);      /* 16-18px */

/* Large - Emphasized text, intros */
--font-size-lg: clamp(1.125rem, 1.05rem + 0.375vw, 1.25rem);    /* 18-20px */

/* Extra Large - Small headings */
--font-size-xl: clamp(1.25rem, 1.15rem + 0.5vw, 1.563rem);      /* 20-25px */

/* 2X Large - H4, subsection headers */
--font-size-2xl: clamp(1.563rem, 1.4rem + 0.815vw, 1.953rem);   /* 25-31px */

/* 3X Large - H3, product names */
--font-size-3xl: clamp(1.75rem, 1.5rem + 1.25vw, 2.441rem);     /* 28-39px */

/* 4X Large - H2, section headers */
--font-size-4xl: clamp(2rem, 1.7rem + 1.5vw, 3.052rem);         /* 32-49px */

/* 5X Large - H1, hero headlines */
--font-size-5xl: clamp(2.5rem, 2rem + 2.5vw, 3.815rem);         /* 40-61px */
```

---

## Typography Usage Guidelines

**Headlines (Gazzetta):**
```css
/* Hero Headlines */
.text-hero {
  font-family: var(--font-headline);
  font-size: var(--font-size-5xl);
  line-height: 1.1;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
}

/* H1 - Page Titles */
.text-h1 {
  font-family: var(--font-headline);
  font-size: var(--font-size-4xl);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

/* H2 - Section Headers */
.text-h2 {
  font-family: var(--font-headline);
  font-size: var(--font-size-3xl);
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
}

/* H3 - Product Names */
.text-h3 {
  font-family: var(--font-headline);
  font-size: var(--font-size-2xl);
  line-height: 1.3;
  font-weight: 700;
  text-transform: uppercase;
}
```

**Body Text (Barlow):**
```css
/* Body Large - Introductions, emphasis */
.text-body-lg {
  font-family: var(--font-body);
  font-size: var(--font-size-lg);
  line-height: 1.6;
  font-weight: 400;
}

/* Body Regular - Primary content */
.text-body {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  line-height: 1.6;
  font-weight: 400;
}

/* Body Small - Secondary content */
.text-body-sm {
  font-family: var(--font-body);
  font-size: var(--font-size-sm);
  line-height: 1.5;
  font-weight: 400;
}

/* Specifications - Semi Condensed for tables */
.text-specs {
  font-family: var(--font-body-semi);
  font-size: var(--font-size-sm);
  line-height: 1.5;
  font-weight: 400;
}

/* Caption - Fine print, metadata */
.text-caption {
  font-family: var(--font-body-semi);
  font-size: var(--font-size-xs);
  line-height: 1.4;
  font-weight: 400;
}
```

---

## Font Weight Scale

Barlow family supports multiple weights:
- **300 (Light):** Rarely used, only for very large decorative text
- **400 (Regular):** Primary body text
- **500 (Medium):** Subtle emphasis within body text
- **600 (Semi Bold):** Strong emphasis, subheadings
- **700 (Bold):** Very strong emphasis, buttons, labels

---

## Best Practices

**Headlines:**
- Always use Gazzetta for impact and brand consistency
- Use all caps for major headings (rugged, confident)
- Maintain tight line-height (1.1-1.2) for visual unity
- Negative letter-spacing for very large sizes
- Keep headlines short and punchy (3-7 words)
- Think "billboard on the ice" - readable from distance

**Body Text:**
- Use Barlow Regular for maximum readability
- Generous line-height (1.6) for comfortable reading (especially on mobile)
- Keep line length between 60-80 characters
- Use Semi Condensed variant when space is limited (spec tables)
- Use Condensed variant sparingly (tables, tight mobile layouts)
- Minimum 16px for body text (readable on phone)

**Hierarchy:**
- Create clear visual hierarchy using size and weight
- Don't skip heading levels (H1 → H2 → H3, not H1 → H3)
- Maintain consistent spacing between heading and body
- Use color (Pine Green, Steel Ice) to distinguish heading types

**Mobile Considerations (Critical for Ice Fishermen):**
- Larger touch targets for buttons (min 44px height)
- Readable text without zooming (min 16px base)
- High contrast for readability in bright snow
- Bold weights for visibility with sunglasses
- Test on actual mobile devices

**Accessibility:**
- Minimum body text size: 16px (var(--font-size-base))
- Maintain 4.5:1 contrast ratio for body text
- 3:1 contrast for large text (18px+ or 14px+ bold)
- Adequate line-height for readability (1.5 minimum)
- Test in bright outdoor conditions (ice fishermen use phones outside)

---

## Implementation in Tailwind CSS v4

All typography is defined in `frontend/entrypoints/theme.css` using Tailwind v4's `@theme` directive and custom properties.

**Usage Examples:**
```html
<!-- Hero headline (Gazzetta, uppercase, bold) -->
<h1 class="text-5xl font-headline font-bold uppercase tracking-tight text-white">
  PREMIUM ICE FISHING PROTECTION
</h1>

<!-- Section header -->
<h2 class="text-3xl font-headline uppercase text-steel-ice">
  Why FishArmor
</h2>

<!-- Subheading (Barlow Semi Bold) -->
<h3 class="text-2xl font-body font-semibold text-pine-green">
  Made in USA
</h3>

<!-- Body copy (Barlow Regular) -->
<p class="text-base font-body leading-relaxed text-steel-ice">
  Every FishArmor shuttle is roto-molded in Minnesota, ensuring the durability you need for extreme ice fishing conditions.
</p>

<!-- Product specifications -->
<p class="text-sm font-body-semi text-ice-floe">
  Dimensions: 18" x 14" x 10" | Weight: 8 lbs | Capacity: Helix 12
</p>

<!-- Small caption -->
<p class="text-xs font-body-semi text-ice-floe">
  *Lifetime warranty on all shuttles
</p>
```

---

## FishArmor-Specific Typography Patterns

**Product Hero:**
```html
<div class="product-hero">
  <h1 class="text-5xl font-headline uppercase text-steel-ice">
    PRO SHUTTLE
  </h1>
  <p class="text-xl font-body text-ice-floe">
    Roto-Molded Protection for Helix 12 Units
  </p>
  <p class="text-3xl font-body font-bold text-pine-green">
    $249.00
  </p>
</div>
```

**Feature Grid:**
```html
<div class="feature">
  <h3 class="text-2xl font-headline uppercase text-pine-green">
    MADE IN USA
  </h3>
  <p class="text-base font-body leading-relaxed text-steel-ice">
    Minnesota craftsmanship and quality control
  </p>
</div>
```

**Specification Table:**
```html
<table class="specs">
  <thead>
    <tr>
      <th class="text-sm font-body-semi uppercase text-white bg-steel-ice">
        Specification
      </th>
      <th class="text-sm font-body-semi uppercase text-white bg-steel-ice">
        Value
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="text-sm font-body-semi font-semibold text-steel-ice">
        Dimensions
      </td>
      <td class="text-sm font-body text-ice-floe">
        18" × 14" × 10"
      </td>
    </tr>
  </tbody>
</table>
```

---

**Related Documentation:**
- See [`COLORS.md`](COLORS.md) for text color usage
- See [`COMPONENTS.md`](COMPONENTS.md) for component typography
- See [`../pages/`](../pages/) for typography in layouts
- See `CLAUDE.md` for Tailwind CSS v4 implementation

---

*Part of FishArmor Brand Guidelines*
*Same system as Retay USA (Gazzetta + Barlow), adapted for ice fishing context*
*Last Updated: 2025-10-25*
