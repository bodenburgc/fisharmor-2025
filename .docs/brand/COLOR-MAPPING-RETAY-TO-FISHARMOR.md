# Color Mapping: Retay USA → FishArmor
## Style Guide Conversion Reference

**Purpose:** Map hunting/firearms colors (Retay) to ice fishing colors (FishArmor) for style guide conversion.

---

## Quick Reference Table

| Retay Color Name | Retay OKLCH | FishArmor Color Name | FishArmor OKLCH | Retay CSS Class | FishArmor CSS Class |
|---|---|---|---|---|---|
| Gun Metal | `oklch(21% 0.01 260)` | Steel Ice | `oklch(20% 0.015 240)` | `.bg-gun-metal`, `.text-gun-metal` | `.bg-steel-ice`, `.text-steel-ice` |
| Spent Shells | (hunting red) | Safety Red | `oklch(50% 0.18 15)` | `.bg-spent-shells`, `.text-spent-shells` | `.bg-safety-red`, `.text-safety-red` |
| Marsh | (hunting green) | Pine Green | `oklch(45% 0.05 155)` | `.bg-marsh`, `.text-marsh` | `.bg-pine-green`, `.text-pine-green` |
| Dried Mud | (brown/tan) | Ice Floe | `oklch(48% 0.03 235)` | `.bg-dried-mud`, `.text-dried-mud` | `.bg-ice-floe`, `.text-ice-floe` |
| Gunsmoke | (light gray) | Frost | `oklch(85% 0.01 235)` | `.bg-gunsmoke`, `.text-gunsmoke` | `.bg-frost`, `.text-frost` |
| Dust | (very light gray) | Slush | `oklch(87% 0.003 240)` | `.bg-dust`, `.text-dust` | `.bg-slush`, `.text-slush` |
| - | - | Frozen Lake | `oklch(30% 0.04 230)` | - | `.bg-frozen-lake`, `.text-frozen-lake` |
| - | - | Arctic Mist | `oklch(60% 0.04 245)` | - | `.bg-arctic-mist`, `.text-arctic-mist` |
| - | - | Sunrise Orange | `oklch(75% 0.15 60)` | - | `.bg-sunrise-orange`, `.text-sunrise-orange` |
| - | - | Warning Flag | `oklch(68% 0.18 40)` | - | `.bg-warning-flag`, `.text-warning-flag` |
| White | `oklch(100% 0 0)` | White | `oklch(100% 0 0)` | `.bg-white`, `.text-white` | `.bg-white`, `.text-white` |

---

## Search & Replace Patterns

When converting Bricks JSON files, use these search & replace patterns:

### CSS Class Names
```
"bg-gun-metal"     → "bg-steel-ice"
"text-gun-metal"   → "text-steel-ice"
"bg-spent-shells"  → "bg-safety-red"
"text-spent-shells" → "text-safety-red"
"bg-marsh"         → "bg-pine-green"
"text-marsh"       → "text-pine-green"
"bg-dried-mud"     → "bg-ice-floe"
"text-dried-mud"   → "text-ice-floe"
"bg-gunsmoke"      → "bg-frost"
"text-gunsmoke"    → "text-frost"
"bg-dust"          → "bg-slush"
"text-dust"        → "text-slush"
```

### Color Names in Text
```
"Gun Metal"        → "Steel Ice"
"Spent Shells"     → "Safety Red"
"Marsh"            → "Pine Green"
"Dried Mud"        → "Ice Floe"
"Gunsmoke"         → "Frost"
"Dust"             → "Slush"
```

---

## Usage Categories

### Primary Colors (High Contrast)
- **Steel Ice** (was Gun Metal) - Primary dark, headers, main text
- **Safety Red** (was Spent Shells) - Primary CTAs, alerts, urgent actions
- **Pine Green** (was Marsh) - Headlines, secondary actions, accents

### Ice & Winter Tones (Backgrounds & Neutrals)
- **Frozen Lake** - Deep backgrounds (new, no Retay equivalent)
- **Ice Floe** (was Dried Mud) - Secondary text, muted content
- **Arctic Mist** - Cool accents (new, no Retay equivalent)
- **Frost** (was Gunsmoke) - Light backgrounds, cards
- **Slush** (was Dust) - Subtle backgrounds, dividers

### Accents (Visibility & Safety)
- **Sunrise Orange** - Highlights, badges (new, no Retay equivalent)
- **Warning Flag** - Secondary CTAs, warnings (new, no Retay equivalent)

---

## 10 FishArmor Colors (Complete Palette)

### Category: Primary
1. **Steel Ice**
   - OKLCH: `oklch(20% 0.015 240)`
   - Hex: `#1A2E3C`
   - Usage: Primary dark, headers, main text
   - Classes: `.bg-steel-ice`, `.text-steel-ice`

2. **Safety Red**
   - OKLCH: `oklch(50% 0.18 15)`
   - Hex: `#D32F2F`
   - Usage: Primary CTAs, alerts, badges
   - Classes: `.bg-safety-red`, `.text-safety-red`

3. **Pine Green**
   - OKLCH: `oklch(45% 0.05 155)`
   - Hex: `#4A6B5C`
   - Usage: Headlines, secondary actions
   - Classes: `.bg-pine-green`, `.text-pine-green`

### Category: Ice Tones
4. **Frozen Lake**
   - OKLCH: `oklch(30% 0.04 230)`
   - Hex: `#2C4554`
   - Usage: Deep backgrounds
   - Classes: `.bg-frozen-lake`, `.text-frozen-lake`

5. **Ice Floe**
   - OKLCH: `oklch(48% 0.03 235)`
   - Hex: `#6B7F92`
   - Usage: Secondary text (WCAG AA compliant)
   - Classes: `.bg-ice-floe`, `.text-ice-floe`

6. **Arctic Mist**
   - OKLCH: `oklch(60% 0.04 245)`
   - Hex: `#8BA4C1`
   - Usage: Cool accents, links
   - Classes: `.bg-arctic-mist`, `.text-arctic-mist`

7. **Frost**
   - OKLCH: `oklch(85% 0.01 235)`
   - Hex: `#D4DEE7`
   - Usage: Subtle backgrounds, cards
   - Classes: `.bg-frost`, `.text-frost`

8. **Slush**
   - OKLCH: `oklch(87% 0.003 240)`
   - Hex: `#DCDFE3`
   - Usage: Light neutral, dividers
   - Classes: `.bg-slush`, `.text-slush`

### Category: Accents
9. **Sunrise Orange**
   - OKLCH: `oklch(75% 0.15 60)`
   - Hex: `#FFB84D`
   - Usage: Highlights, "NEW" badges
   - Classes: `.bg-sunrise-orange`, `.text-sunrise-orange`

10. **Warning Flag**
    - OKLCH: `oklch(68% 0.18 40)`
    - Hex: `#FF7F2A`
    - Usage: Secondary CTAs, warnings
    - Classes: `.bg-warning-flag`, `.text-warning-flag`

---

## Color Card Structure (for Section 03)

Each color card in the style guide should show:

```
┌─────────────────────────┐
│ [CATEGORY BADGE]        │ ← "Primary", "Ice Tones", or "Accents"
│                         │
│ ████████████████████    │ ← Color swatch (h-32, rounded-lg)
│ ████████████████████    │
│                         │
│ Color Name              │ ← e.g., "Steel Ice"
│ oklch(20% 0.015 240)    │ ← OKLCH value
│ .bg-steel-ice           │ ← CSS class (bg)
│ .text-steel-ice         │ ← CSS class (text)
│ Primary dark, headers   │ ← Usage notes
└─────────────────────────┘
```

---

## Typography Changes

No changes needed! Retay already uses similar structure:
- Display font: Impact → Gazzetta (both bold, condensed)
- Body font: Open Sans → Barlow (both clean sans-serifs)
- Classes: `.header`, `.subhead`, `.body-text` (same)
- Fluid scale: `.fluid-xs` through `.fluid-5xl` (same)

---

## Copy/Messaging Changes

### Brand Names
```
"Retay USA"              → "FishArmor"
"Retay USA Design System" → "FishArmor Design System"
"Turkish manufacturing"  → "Minnesota craftsmanship"
"Made in Turkey"         → "Made in USA"
```

### Product Categories
```
"Waterfowl shotguns"     → "Ice fishing shuttles"
"Upland hunting"         → "Shelter accessories"
"Tactical firearms"      → "Ice fishing gear"
"Gordion, Masai, ACE"    → "Fish Trap, Pro Series"
```

### Tone Words
```
"hunt"                   → "ice"
"hunting"                → "ice fishing"
"shooter"                → "angler"
"range"                  → "lake"
"ammunition"             → "equipment"
"firearm"                → "shuttle/shelter"
```

---

## Testing Checklist

After color conversion, verify:

- [ ] All 10 colors appear in color palette section
- [ ] Color names updated (no "Gun Metal", "Spent Shells", etc.)
- [ ] CSS classes updated (`.bg-steel-ice` not `.bg-gun-metal`)
- [ ] OKLCH values are correct
- [ ] Category badges show correct grouping
- [ ] Retay product examples removed (Gordion → Fish Trap)
- [ ] All "hunting" language changed to "ice fishing"
- [ ] Brand name is "FishArmor" everywhere

---

**Last Updated:** November 6, 2025
**Source:** `docs/brand/COLORS.md` + Retay USA style guide
**Used For:** Style guide conversion (Bricks → Shopify + BODE)
