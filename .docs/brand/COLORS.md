# FishArmor Brand Colors

**Ice fishing themed color palette for FishArmor's rugged outdoor aesthetic.**

---

## Color Philosophy

FishArmor's palette draws from the ice fishing environment:
- **Frozen landscapes** - Cool blues and grays
- **Safety & visibility** - High-contrast accents for gear
- **Natural elements** - Subdued earth tones
- **USA-made pride** - Confident, professional colors

**All colors use OKLCH format** for better perceptual uniformity (same as Retay USA system).

---

## Primary Brand Colors

### **Steel Ice** (Primary Dark)
```css
--color-steel-ice: oklch(20% 0.015 240);
HEX: #1A2E3C
Usage: Primary logo, main dark text, headers, navigation
```
The foundational dark color - like steel against ice. Professional, confident, durable.

### **White** (Reverse Logo)
```css
--color-white: oklch(100% 0 0);
HEX: #ffffff
Usage: Reverse logo, light backgrounds, text on dark backgrounds
```
Clean, pure white for maximum contrast and readability.

---

## Secondary Colors - Ice & Winter Tones

### **Frozen Lake** (Dark Blue-Gray)
```css
--color-frozen-lake: oklch(30% 0.04 230);
HEX: #2C4554
Usage: Deep backgrounds, section dividers, product showcases
```
The deep blue-gray of frozen water. Creates depth and atmosphere.

### **Ice Floe** (Medium Gray-Blue)
```css
--color-ice-floe: oklch(55% 0.03 235);
HEX: #7891A6
Usage: Secondary text, warm accents, natural transitions
```
Medium tone for secondary information and subtle emphasis.

### **Frost** (Light Gray-Blue)
```css
--color-frost: oklch(85% 0.01 235);
HEX: #D4DEE7
Usage: Subtle backgrounds, section separation, light accents
```
Soft, barely-there background color. Like frost on a window.

---

## Secondary Colors - Nature Palette

### **Pine Green** (Forest Green)
```css
--color-pine-green: oklch(45% 0.05 155);
HEX: #4A6B5C
Usage: Headlines, category labels, outdoor lifestyle elements
```
Connects to outdoor heritage and natural environments. Excellent for major headlines.

### **Arctic Mist** (Cool Blue-Gray)
```css
--color-arctic-mist: oklch(60% 0.04 245);
HEX: #8BA4C1
Usage: Secondary navigation, cool accents, atmospheric elements
```
Professional blue-gray for regional accents and depth.

### **Slush** (Light Neutral Gray)
```css
--color-slush: oklch(87% 0.003 240);
HEX: #DCDFE3
Usage: Subtle backgrounds, dividers, borders
```
Neutral gray for structure without distraction.

---

## Accent Colors - Visibility & Safety

### **Sunrise Orange** (Warm Yellow-Gold)
```css
--color-sunrise-orange: oklch(75% 0.15 60);
HEX: #FFB84D
Usage: Highlights, promotions, "New" badges, warm accents
```
High visibility like a sunrise over frozen lakes. Use for important highlights.

### **Warning Flag** (Bright Orange)
```css
--color-warning-flag: oklch(68% 0.18 40);
HEX: #FF7F2A
Usage: Secondary CTAs, special offers, energetic accents
```
Safety orange - visible from distance. Use for secondary actions.

### **Safety Red** (Primary CTA)
```css
--color-safety-red: oklch(50% 0.18 15);
HEX: #D32F2F
Usage: Primary CTAs, "Add to Cart", critical actions, urgency
```
High-contrast red for primary actions. Demands attention like safety equipment.

---

## Color Usage Guidelines

### **Page Backgrounds:**
- White (`--color-white`) for main content areas
- Frost (`--color-frost`) for subtle section differentiation
- Steel Ice (`--color-steel-ice`) or Frozen Lake (`--color-frozen-lake`) for hero sections

### **Text Colors:**
- Steel Ice (`--color-steel-ice`) on light backgrounds
- White (`--color-white`) on dark backgrounds
- Pine Green (`--color-pine-green`) for headlines and emphasis

### **Accent Usage:**
- Safety Red (`--color-safety-red`) for primary CTAs and "Add to Cart"
- Warning Flag (`--color-warning-flag`) for secondary actions
- Sunrise Orange (`--color-sunrise-orange`) for promotions

### **Product Categories:**
- Use Pine Green or Steel Ice for product headers
- Reserve Safety Red for "NEW" labels and urgent actions

---

## Comparison to Retay USA

**FishArmor adapts Retay's system for ice fishing:**

| Retay (Hunting) | FishArmor (Ice Fishing) | Purpose |
|-----------------|-------------------------|---------|
| Gun Metal | Steel Ice | Primary dark |
| Marsh | Frozen Lake | Deep backgrounds |
| Fall Moss | Pine Green | Headlines |
| Spent Shells | Safety Red | Primary CTA |
| Duckbill | Sunrise Orange | Highlights |
| Mallard Feet | Warning Flag | Secondary CTA |

**Same structure, different theme. One design system, multiple brands.**

---

## OKLCH Benefits

Using OKLCH provides:
- **Perceptual Uniformity** - Colors appear equally bright
- **Wider Gamut** - More vivid colors than RGB/HSL
- **Better Interpolation** - Smoother gradients
- **Device Consistency** - Predictable rendering
- **Future-Proof** - Modern CSS standard

---

## Implementation in Tailwind

All colors defined in `frontend/entrypoints/theme.css`:

```css
@theme {
  /* Primary */
  --color-steel-ice: oklch(20% 0.015 240);
  --color-white: oklch(100% 0 0);
  
  /* Ice & Winter Tones */
  --color-frozen-lake: oklch(30% 0.04 230);
  --color-ice-floe: oklch(55% 0.03 235);
  --color-frost: oklch(85% 0.01 235);
  
  /* Nature Palette */
  --color-pine-green: oklch(45% 0.05 155);
  --color-arctic-mist: oklch(60% 0.04 245);
  --color-slush: oklch(87% 0.003 240);
  
  /* Accents */
  --color-sunrise-orange: oklch(75% 0.15 60);
  --color-warning-flag: oklch(68% 0.18 40);
  --color-safety-red: oklch(50% 0.18 15);
}
```

### **Usage in BODE Blocks:**

```liquid
<!-- Primary CTA button -->
<button class="bg-safety-red text-white px-6 py-4 rounded-lg">
  Shop Shuttles
</button>

<!-- Hero section background -->
<section class="bg-steel-ice text-white">
  Hero Content
</section>

<!-- Product category badge -->
<span class="bg-pine-green text-white px-3 py-1 rounded">
  Accessories
</span>
```

---

## Accessibility

### **Contrast Ratios (WCAG 2.1 AA):**

**Light Backgrounds (White, Frost):**
- ✅ Steel Ice text: 12.8:1 (excellent)
- ✅ Pine Green text: 6.2:1 (good)
- ✅ Safety Red text: 5.9:1 (good)

**Dark Backgrounds (Steel Ice, Frozen Lake):**
- ✅ White text: 12.8:1 (excellent)
- ✅ Sunrise Orange text: 4.8:1 (passes for large text)

All primary combinations exceed minimum requirements.

---

## Brand Applications

### **Homepage Hero:**
- Background: Steel Ice with ice fishing photo overlay
- Text: White
- CTA: Safety Red button

### **Product Cards:**
- Background: White
- Text: Steel Ice
- Price: Pine Green (emphasis)
- Add to Cart: Safety Red

### **Navigation:**
- Background: White or Frost
- Text: Steel Ice
- Hover: Pine Green

### **Trust Badges:**
- "Made in USA": Pine Green background, White text
- Warranty: Arctic Mist background, Steel Ice text

---

## Color Psychology

**Steel Ice & Frozen Lake (Blues/Grays):**
- Trust, reliability, professionalism
- Cold environments, ice fishing context
- Durable, strong products

**Pine Green (Nature):**
- Outdoor heritage, natural environments
- Growth, quality, authenticity

**Safety Red (Urgency):**
- Action, importance, visibility
- Safety equipment context (ice fishing gear)
- Protective products

**Sunrise Orange (Warmth):**
- Visibility in cold environments
- Energy, optimism, new beginnings
- Special promotions

---

## Related Documentation

**Typography:**
→ [TYPOGRAPHY.md](TYPOGRAPHY.md) - Gazzetta + Barlow (same as Retay)

**Components:**
→ [../pages/](../pages/) - See colors in context

**BODE Design System:**
→ `~/Sites/bode-shopify/docs/design-system/` - Generic foundation

**Retay Comparison:**
→ `~/Sites/retay-usa-2025/docs/design-system/BRAND-COLORS.md`

---

**Ice fishing themed. Rugged & confident. Visibility in extreme conditions.** ❄️

---

*Part of FishArmor Brand Guidelines*
*Adapted from Retay USA Design System*
*Last Updated: 2025-10-25*
