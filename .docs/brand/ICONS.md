# FishArmor - Brand Icons

## 7. Icon System

### Icon Style

**Characteristics:**
- Simple, minimal line icons
- Consistent 2px stroke weight
- 24x24px base size (scale as needed)
- Monochromatic (single color)
- Clean, geometric shapes
- No rounded corners (prefer sharp angles for technical feel)

### Recommended Icon Sets

**Primary:** Feather Icons or Heroicons
- Modern, minimal design
- Consistent stroke weight
- Wide variety of symbols
- Free and open-source

**Icon Colors:**
- Steel Ice (--color-steel-ice) on light backgrounds
- White (--color-white) on dark backgrounds
- Pine Green (--color-pine-green) for accents
- Safety Red (--color-safety-red) for important actions

### Common Icons Needed

**Navigation:**
- Menu (hamburger)
- Search
- Shopping cart
- User account
- Close (X)

**Product Features:**
- Check mark (specifications met)
- Shield (waterproof protection)
- Thermometer (temperature rating)
- Ruler (measurements)
- Weight/scale
- Warranty shield
- Snowflake (cold weather rating)

**Actions:**
- Download
- Share
- Compare
- Add to cart
- Filter
- Sort

**Social:**
- Facebook
- Instagram
- YouTube
- Twitter/X

### Icon Usage Guidelines

```css
.icon {
  width: 24px;
  height: 24px;
  stroke-width: 2px;
  stroke: currentColor;
  fill: none;
}

.icon-sm {
  width: 16px;
  height: 16px;
}

.icon-lg {
  width: 32px;
  height: 32px;
}

.icon-xl {
  width: 48px;
  height: 48px;
}
```

**Large Touch Targets for Mobile:**
```css
.icon-touchable {
  width: 48px;
  height: 48px;
  padding: 12px; /* Increases tap target while keeping icon at 24px */
}

@media (max-width: 768px) {
  .icon-touchable {
    width: 56px;
    height: 56px;
    padding: 16px; /* Extra large for mobile use */
  }
}
```

**No Emojis:** As specified, avoid using emojis anywhere on the site. Use proper icons instead.

---


---

**Related Documentation:**
- See [`BRAND-COLORS.md`](BRAND-COLORS.md) for icon colors
- See [`BRAND-COMPONENTS.md`](BRAND-COMPONENTS.md) for icon usage in components

---

*Part of FishArmor Brand Guidelines*
*Adapted from Retay USA Design System*
*Last Updated: 2025-10-25*
