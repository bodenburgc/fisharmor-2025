# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Shopify theme for FishArmor** - ice fishing equipment brand specializing in protective shuttles for expensive sonar electronics.

| Key Info | Value |
|----------|-------|
| Theme Framework | BODE 2024 v1.0.0 |
| Store URL | fisharmorusa-com.myshopify.com |
| Shopify API | 2024-01 |
| Target Market | Serious ice fishermen, USA-made premium |

## Shopify CLI Commands

```bash
shopify theme dev          # Local development with hot reload
shopify theme push         # Deploy to store
shopify theme pull         # Pull live theme changes
shopify theme check        # Lint/validate theme (only validation available)
shopify theme share        # Generate preview link
shopify auth login         # Authenticate (required first)
```

**No build step required** - No npm, webpack, or compilation. CSS/JS are served as-is from `/assets/`.

## Framework Relationship (BODE Upstream)

```
/Users/cbodenburg/Sites/BODE-shopify/    ← Master framework (upstream)
    ↓
/Users/cbodenburg/Sites/fisharmor-2025/  ← FishArmor-specific customizations (this repo)
```

**BODE is a separate local project.** Framework changes (sections, snippets, core JS/CSS) should be made in BODE-shopify first, then pulled here.

### Git Remotes

```
origin   → https://github.com/bodenburgc/fisharmor-2025.git   (FishArmor changes)
upstream → https://github.com/bodenburgc/BODE-shopify.git     (Framework updates)
```

### Development Workflow

| Change Type | Where to Make Change |
|-------------|---------------------|
| Bug fix in section/snippet | BODE-shopify → push → pull upstream here |
| New reusable section | BODE-shopify → push → pull upstream here |
| Improve JS/CSS framework | BODE-shopify → push → pull upstream here |
| FishArmor colors/fonts/logos | HERE (fisharmor-2025) |
| FishArmor homepage layout | HERE (fisharmor-2025) |
| Brand guidelines | HERE (`.docs/brand/`) |

### Pulling Framework Updates

```bash
git fetch upstream
git merge upstream/main
# Resolve any conflicts in brand-specific files (.gitattributes protects key files)
git push origin main
```

**Protected files (merge=ours via .gitattributes):** `config/settings_data.json`, `templates/index.json`, `sections/*-group.json`, `.docs/brand/*`

## Theme Architecture

### Component Hierarchy

```
layout/theme.liquid
├── sections 'header-group'     → sections/header-group.json
├── sections 'overlay-group'    → sections/overlay-group.json (cart-drawer, search, popups)
├── content_for_layout          → templates/*.json → sections/*.liquid
└── sections 'footer-group'     → sections/footer-group.json
```

### Settings → CSS → Components Flow

```
config/settings_schema.json (definitions)
        ↓
config/settings_data.json (current values, auto-generated)
        ↓
snippets/css-variables.liquid ({{ settings.* }} → :root CSS variables)
        ↓
snippets/js-variables.liquid ({{ settings.* }} → window.theme object)
        ↓
theme.css + theme.js (consume variables)
```

### Section Groups (Global Components)

Section groups render across all pages. Defined in JSON files:
- `header-group.json` - Header, announcement bar
- `footer-group.json` - Footer, mobile dock, cookie banner
- `overlay-group.json` - Cart drawer, search drawer, age verification, newsletter popup

Context variants override defaults per market:
- `.context.us.json` - US market (primary)
- `.context.eu.json` - EU market (GDPR considerations)
- `.context.b2b.json` - Wholesale/dealer features

### Key Files

| File | Purpose |
|------|---------|
| `snippets/css-variables.liquid` | Theme settings → CSS custom properties (`:root`) |
| `snippets/js-variables.liquid` | Routes, feature flags → `window.theme` object |
| `config/settings_schema.json` | Theme settings definitions (from BODE) |
| `config/settings_data.json` | Current values (DO NOT edit manually) |
| `.shopify/metafields.json` | Metafield definitions |
| `locales/en.default.json` | Translation strings (English only) |

### Asset Loading

**Always loaded:** `fonts.css` → `css-variables` → `theme.css` → `vendor.js` → `theme.js`

**Template-specific assets** (loaded in individual sections):
- `cart.js/css`, `collection.js/css`, `dealer-locator.js/css`, etc.

## Third-Party Integrations

| Prefix/Files | Integration |
|--------------|-------------|
| `wcp_*` snippets | Wholesale/Volume Discount app (cart, discount, variant) |
| `wlm-*` snippets | Password Lock / Member Access |
| `freegifts-*` | Free Gifts program |
| Judge.me | Product reviews (stored in `reviews.*` metafields) |
| Google Maps | Dealer locator (`sections/dealer-locator.liquid`, `assets/dealer-locator.js`) |
| PhotoSwipe | Image galleries |

## Custom FishArmor Sections

Notable custom sections beyond the standard BODE theme:
- `dealer-locator.liquid` - Google Maps-based store finder with dealer list
- `pro-staff.liquid` - Pro staff/ambassador showcase
- `product-comparison.liquid` / `comparison-table.liquid` - Product feature comparison
- `floating-product-collection.liquid` - Floating product display for collections

## Brand Guidelines

**Full documentation:** `/.docs/brand/` (READ THIS for any content/design work)

| File | Contents |
|------|----------|
| `VOICE.md` | Personality, tone, messaging hierarchy, vocabulary |
| `COLORS.md` | OKLCH palette (Safety Red, Steel Ice, Frozen Lake, etc.) |
| `TYPOGRAPHY.md` | Gazzetta + Barlow fluid type system |
| `COMPONENTS.md` | Buttons, forms, cards with Tailwind classes |
| `LAYOUT.md` | 12-column grid, containers, spacing scale |
| `ASSETS.md` | Logo specs, file naming, badge system |
| `ICONS.md` | Icon system with mobile-friendly touch targets |
| `PHOTOGRAPHY.md` | Ice fishing imagery, Minnesota winters, real anglers |

**Quick Reference:**
- **Voice:** Confident, rugged, technical. "Protect Your Investment" messaging
- **Vocabulary:** "Shuttle" (not case), "roto-molded" (not plastic), "USA-made"
- **Primary CTA:** Safety Red (#D32F2F) background, white text, uppercase
- **Typography:** Gazzetta (headlines, uppercase) + Barlow (body)
- **Mobile-first:** 48x48px touch targets, high contrast for snow conditions

## Shopify Admin API

**Endpoint:** `https://fisharmorusa-com.myshopify.com/admin/api/2024-01/graphql.json`

```bash
TOKEN="shpat_..."
URL="https://fisharmorusa-com.myshopify.com/admin/api/2024-01/graphql.json"

curl -s -X POST "$URL" \
    -H "X-Shopify-Access-Token: $TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"query":"mutation { productUpdate(...) }"}' \
    | python3 -m json.tool
```

**Notes:**
- Use `sleep` delays between requests (rate limiting)
- Product IDs: `gid://shopify/Product/[ID]` format
- Common mutations: `productUpdate`, `productPublish`, `collectionDelete`

## Development Notes

**Section Schema Pattern:**
```liquid
{% schema %}
{
  "name": "Section Name",
  "settings": [...],
  "blocks": [...],
  "presets": [...]
}
{% endschema %}
```

**Liquid Syntax:**
- Logic: `{%- liquid ... -%}` (whitespace-trimmed)
- Output: `{{ variable }}`
- Include: `{% render 'snippet-name', param: value %}`
- Asset: `{{ 'file.css' | asset_url }}`
- Translation: `{{ 'key.path' | t }}`

**Block Naming:**
- `_` prefix = internal/helper blocks (`_counter.liquid`, `_accordion-row.liquid`)
- Regular blocks are user-facing in theme editor

## Metafields

**Product:**
- `custom.card_description` - Short card text
- `custom.description_short` - Condensed description
- `shopify.item-material` - Material (aluminum, roto-molded)
- `shopify.durability-features` - Rustproof, waterproof, etc.
- `shopify.color-pattern` - Color/pattern reference
- `shopify.battery-type`, `battery-size`, `battery-technology` - Battery specs
- `reviews.rating`, `reviews.rating_count` - Judge.me review data
- `shopify--discovery--product_recommendation.related_products` - Manual related products
- `shopify--discovery--product_recommendation.complementary_products` - Accessories/add-ons
- `mm-google-shopping.custom_product` - UPI availability flag (boolean)

**Page:**
- `custom.header_image` - Banner image for page headers

**Collection:**
- `ecomposer.collections` - Sub-collection definitions

**Variant (Google Shopping):**
- `mm-google-shopping.custom_label_0` through `custom_label_4`
- `mm-google-shopping.mpn`, `condition`, `gender`, `age_group`
- `mm-google-shopping.size_type`, `size_system`

## Important Constraints

1. **Never edit `config/settings_data.json`** - Auto-generated by Shopify admin
2. **Test locally first** - `shopify theme dev` before any `theme push`
3. **Follow brand guidelines** - Reference `/.docs/brand/` for all content/design
4. **English only** - Non-English locale files have been removed
5. **Mobile-first** - Ice fishermen use phones on the ice
