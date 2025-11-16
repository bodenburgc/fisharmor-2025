# FishArmor - Brand Layout & Spacing

## 4. Layout & Spacing System

### Grid System & Container Widths

FishArmor uses three container widths to accommodate different content types:

```css
/* Container Width Variables */
--container-narrow: 1228px;   /* Articles, forms, focused content */
--container-default: 1366px;  /* Standard page content, most layouts */
--container-wide: 1920px;     /* Full-featured sections, galleries */

/* Container Implementation */
.container-narrow {
  max-width: var(--container-narrow);
  margin: 0 auto;
  padding: 0 40px;
}

.container-default {
  max-width: var(--container-default);
  margin: 0 auto;
  padding: 0 40px;
}

.container-wide {
  max-width: var(--container-wide);
  margin: 0 auto;
  padding: 0 40px;
}

.container-full {
  max-width: 100%;
  padding: 0;
}
```

**Container Usage Guidelines:**
- **Narrow (1228px):** Blog posts, articles, long-form content, checkout flows
- **Default (1366px):** Standard pages, product listings, most content
- **Wide (1920px):** Homepage hero sections, full-width galleries, immersive features
- **Full:** Edge-to-edge images, background sections, navigation

**12-Column Grid Within Containers:**
```css
.grid-12 {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}

/* Responsive columns */
.col-span-6 { grid-column: span 6; }  /* 50% width */
.col-span-4 { grid-column: span 4; }  /* 33% width */
.col-span-3 { grid-column: span 3; }  /* 25% width */
```

### Spacing Scale

The spacing system is based on a proportional scale using rem units:

```css
/* Spacing Variables (from windpress.css) */
--space-xs: 0.5rem;      /* 8px - Smallest gaps, icon spacing */
--space-sm: 0.75rem;     /* 12px - Tight spacing, compact layouts */
--space-md: 1rem;        /* 16px - Default spacing, base unit */
--space-lg: 1.5rem;      /* 24px - Comfortable spacing, sections */
--space-xl: 2rem;        /* 32px - Large spacing, major sections */
--space-2xl: 3rem;       /* 48px - Extra large spacing, section breaks */
--space-3xl: 4rem;       /* 64px - Hero sections, dramatic spacing */
```

**Component Spacing:**
- Smallest gaps (buttons, icons): 8px (--space-xs)
- Tight spacing (compact layouts): 12px (--space-sm)
- Default spacing (cards, forms): 16-24px (--space-md to --space-lg)
- Section spacing: 32-48px (--space-xl to --space-2xl)
- Hero/major sections: 48-64px (--space-2xl to --space-3xl)

**Horizontal Padding for Sections:**
```css
.brxe-section {
  padding-inline: clamp(var(--space-md), 3.5vw, var(--space-3xl));
  /* Fluid: 16px → 64px responsive to viewport */
}
```

### Layout Patterns from Catalog

**Split Layout (Hero/Feature)**
```
[Full-bleed Image 60%] | [Content 40%]
```
- Perfect for product introductions
- Image on left, content on right (or vice versa)
- Use ice crack edge effect for visual interest
- Dark overlay on text side for contrast

**Product Showcase Layout**
```
[Specs & Details 40%] | [Product Images 60%]
```
- Specs on light background (frost/white)
- Product photography on dark steel-ice background
- Multiple product variants shown side-by-side
- Specifications table below images

**List/Pricing Layout**
```
[Table 50%] | [Lifestyle Image 50%]
```
- Clean tables with pricing information
- Supporting lifestyle or ice fishing photography
- Ice crack edge separation
- Subtle texture pattern in background

---


---

## Responsive Design Guidelines

## 9. Responsive Design Guidelines

### Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet portrait */
--breakpoint-lg: 1024px;  /* Tablet landscape / Small desktop */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Large desktop */
```

### Mobile Optimizations (< 768px)

**Critical for Ice Fishermen:**
- Large touch targets (minimum 48x48px for mobile use)
- High contrast for bright snow conditions
- Fast loading on slow networks
- Clear product images

**Typography:**
- Scale down all font sizes by 25-30%
- Maintain readability (minimum 14px body text)
- Reduce letter-spacing slightly

**Layout:**
- Stack all split layouts vertically
- Full-width images
- Remove ice crack edge effects (not performant on mobile)
- Simplify backgrounds (solid colors instead of patterns)

**Navigation:**
- Hamburger menu
- Full-screen overlay menu
- Large, thumb-friendly tap targets (minimum 48x48px for mobile)

**Product Cards:**
- Single column layout
- Larger images
- Simplified hover effects (focus on tap states)

**Hero Sections:**
- Reduce height to 50-60vh
- Ensure text remains readable on all screen sizes
- Test on actual devices in bright outdoor conditions

### Tablet Optimizations (768px - 1024px)

**Layout:**
- 2-column product grids
- Maintain split layouts where possible
- Adjust padding and spacing proportionally

**Navigation:**
- Consider showing simplified horizontal nav on tablet landscape
- Hamburger menu on tablet portrait

**Images:**
- Optimize for mid-size screens
- Consider serving different image sizes

### Performance Considerations

**Image Optimization:**
- Use WebP format with JPG fallback
- Implement lazy loading
- Serve responsive images using srcset
- Optimize for Core Web Vitals

**Mobile-First CSS:**
- Write base styles for mobile
- Use min-width media queries to enhance for larger screens
- Minimize CSS specificity

---


---

**Related Documentation:**
- See [`BRAND-COLORS.md`](BRAND-COLORS.md) for background colors
- See [`BRAND-TYPOGRAPHY.md`](BRAND-TYPOGRAPHY.md) for text spacing
- See [`../CLAUDE.md`](../CLAUDE.md) for container system details

---

*Part of FishArmor Brand Guidelines*
*Adapted from Retay USA Design System*
*Last Updated: 2025-10-25*
