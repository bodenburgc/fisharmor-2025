# FishArmor - Brand Components

## 5. Component Patterns

### Buttons

**Primary Button (CTA)**
```css
.btn-primary {
  background: var(--color-safety-red); /* #D32F2F */
  color: var(--color-white);
  padding: 16px 32px;
  font-family: var(--font-body-semi);
  font-size: var(--font-size-base);
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: oklch(40% 0.16 15); /* Darker safety-red */
  transform: translateY(-2px);
  box-shadow: 0 4px 12px oklch(44% 0.16 15 / 0.3);
}

/* Tailwind classes equivalent */
/* class="bg-safety-red text-white px-8 py-4 font-body-semi text-base font-semibold rounded uppercase tracking-wide transition-all hover:translate-y-[-2px]" */
```

**Secondary Button**
```css
.btn-secondary {
  background: var(--color-steel-ice); /* #1A2E3C */
  color: var(--color-white);
  padding: 16px 32px;
  font-family: var(--font-body-semi);
  font-size: var(--font-size-base);
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: oklch(25% 0.01 260); /* Lighter steel-ice */
}

/* Tailwind equivalent */
/* class="bg-steel-ice text-white px-8 py-4 font-body-semi text-base font-semibold rounded uppercase tracking-wide" */
```

**Tertiary Button (Outline)**
```css
.btn-tertiary {
  background: transparent;
  color: var(--color-steel-ice);
  padding: 16px 32px;
  font-family: var(--font-body-semi);
  font-size: var(--font-size-base);
  font-weight: 600;
  border: 2px solid var(--color-steel-ice);
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-tertiary:hover {
  background: var(--color-steel-ice);
  color: var(--color-white);
}

/* Tailwind equivalent */
/* class="bg-transparent text-steel-ice border-2 border-steel-ice px-8 py-4 font-body-semi text-base font-semibold rounded uppercase tracking-wide hover:bg-steel-ice hover:text-white" */
```

**Accent Button (Orange - Secondary CTA)**
```css
.btn-accent {
  background: var(--color-warning-flag); /* #FF7F2A */
  color: var(--color-white);
  padding: 16px 32px;
  font-family: var(--font-body-semi);
  font-size: var(--font-size-base);
  font-weight: 600;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-accent:hover {
  background: oklch(64% 0.18 45); /* Darker warning-flag */
}
```

### Product Cards

**Standard Product Card**
```html
<div class="product-card">
  <div class="card-image">
    <img src="product.jpg" alt="Product Name">
    <span class="badge-new">NEW!</span>
  </div>
  <div class="card-content">
    <h3 class="product-name">SHUTTLE XL PROTECTIVE CASE</h3>
    <p class="product-spec">Fits 10" Tablets, Waterproof</p>
    <p class="product-price">$149.00</p>
    <button class="btn-primary">View Details</button>
  </div>
</div>
```

**Card Styling:**
```css
.product-card {
  background: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px oklch(21% 0.01 260 / 0.1);
  transition: all 0.3s ease;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px oklch(21% 0.01 260 / 0.15);
}

.card-image {
  position: relative;
  background: var(--color-steel-ice);
  padding: 32px;
  aspect-ratio: 4 / 3;
}

.badge-new {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--color-safety-red);
  color: var(--color-white);
  padding: 8px 16px;
  font-family: var(--font-body-semi);
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transform: rotate(5deg);
}

.card-content {
  padding: 24px;
}

.product-name {
  font-family: var(--font-headline);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-pine-green);
  margin-bottom: 8px;
  text-transform: uppercase;
}

.product-spec {
  font-family: var(--font-body-semi);
  font-size: var(--font-size-sm);
  color: var(--color-frozen-lake);
  margin-bottom: 16px;
}

.product-price {
  font-family: var(--font-body);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-steel-ice);
  margin-bottom: 16px;
}
```

### Specification Tables

```css
.spec-table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body-semi);
  font-size: var(--font-size-sm);
}

.spec-table th {
  background: var(--color-steel-ice);
  color: var(--color-white);
  padding: 12px 16px;
  text-align: left;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.spec-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--color-slush);
}

.spec-table tr:hover {
  background: var(--color-frost);
}

.spec-label {
  font-weight: 600;
  color: var(--color-steel-ice);
}

.spec-value {
  color: var(--color-frozen-lake);
}
```

### "NEW" Badge/Tag Component

```css
.badge-new {
  background: var(--color-safety-red);
  color: var(--color-white);
  padding: 8px 16px;
  font-family: var(--font-body-semi);
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: inline-block;
  transform: rotate(-2deg);
  box-shadow: 0 2px 8px oklch(44% 0.16 15 / 0.3);
}

/* Alternative diagonal banner style */
.badge-new-diagonal {
  position: absolute;
  top: 20px;
  right: -30px;
  background: var(--color-pine-green);
  color: var(--color-white);
  padding: 8px 40px;
  font-family: var(--font-body-semi);
  font-size: var(--font-size-sm);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transform: rotate(45deg);
  box-shadow: 0 2px 8px oklch(21% 0.01 260 / 0.2);
}

/* Tailwind equivalent for primary badge */
/* class="bg-safety-red text-white px-4 py-2 font-body-semi text-sm font-bold uppercase tracking-widest inline-block rotate-[-2deg] shadow-lg" */
```

### Navigation

**Primary Navigation (Header)**
```css
.main-nav {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-slush);
  padding: 16px 0;
}

.nav-link {
  color: var(--color-steel-ice);
  font-family: var(--font-body-semi);
  font-size: var(--font-size-base);
  font-weight: 600;
  padding: 12px 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--color-safety-red);
}

.nav-link.active {
  color: var(--color-pine-green);
  border-bottom: 3px solid var(--color-pine-green);
}
```

### Product Category Headers

Based on catalog "ICE FISHING EQUIPMENT" style:

```css
.category-header {
  font-family: var(--font-headline);
  font-size: var(--font-size-5xl);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
}

.category-header-outline {
  color: var(--color-pine-green);
  -webkit-text-stroke: 2px var(--color-pine-green);
  -webkit-text-fill-color: transparent;
}

.category-header-solid {
  color: var(--color-pine-green);
}
```

---


---

**Related Documentation:**
- See [`BRAND-COLORS.md`](BRAND-COLORS.md) for component colors
- See [`BRAND-TYPOGRAPHY.md`](BRAND-TYPOGRAPHY.md) for component typography
- See [`../CLAUDE.md`](../CLAUDE.md) for implementation examples

---

*Part of FishArmor Brand Guidelines*
*Adapted from Retay USA Design System*
*Last Updated: 2025-10-25*
