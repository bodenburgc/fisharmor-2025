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
shopify theme dev          # Local development server
shopify theme push         # Deploy to store
shopify theme pull         # Pull live theme changes
shopify theme check        # Lint/validate theme
shopify theme share        # Generate preview link
shopify auth login         # Authenticate (required first)
```

## Theme Architecture

### Component Hierarchy

```
layout/theme.liquid
├── sections 'header-group'     → sections/header-group.json
├── sections 'overlay-group'    → sections/overlay-group.json (cart-drawer, search, popups)
├── content_for_layout          → templates/*.json → sections/*.liquid
└── sections 'footer-group'     → sections/footer-group.json
```

### Section Groups (Global Components)

Section groups render across all pages. Defined in JSON files:
- `header-group.json` - Header, announcement bar
- `footer-group.json` - Footer, mobile dock, cookie banner
- `overlay-group.json` - Cart drawer, search drawer, age verification, newsletter popup

Context variants (`.context.eu.json`, `.context.us.json`, `.context.b2b.json`) override defaults per market.

### Template → Section Flow

Templates are JSON files referencing sections:
```
templates/product.json → sections/main-product.liquid
                       → sections/product-recommendations.liquid
                       → sections/recently-viewed.liquid
```

### Key Files

| File | Purpose |
|------|---------|
| `snippets/css-variables.liquid` | Global CSS custom properties from theme settings |
| `snippets/js-variables.liquid` | JavaScript config (routes, feature flags) |
| `config/settings_schema.json` | Theme settings definitions |
| `config/settings_data.json` | Current setting values (auto-generated, DO NOT edit) |
| `.shopify/metafields.json` | Metafield definitions |

### Asset Loading

CSS loads in `<head>` (blocking), JS loads with `defer`:
```liquid
{{ 'theme.css' | asset_url | stylesheet_tag: preload: true }}
<script src="{{ 'theme.js' | asset_url }}" defer="defer"></script>
```

Feature-specific assets load conditionally in sections (e.g., `cart.css`, `cart.js`).

## Third-Party Integrations

Snippets prefixed with `wcp_*` = Wholesale/Volume Discount app (WCP)
- `wcp_cart.liquid`, `wcp_discount.liquid`, `wcp_variant.liquid`, etc.

Other integrations visible in code:
- Judge.me (product reviews)
- Google Maps (contact/store locator)
- PhotoSwipe (image galleries)

## Brand Guidelines

**Full documentation:** `/.docs/brand/` (READ THIS for any content/design work)

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

**Variant (Google Shopping):**
- `mm-google-shopping.custom_label_0` through `custom_label_4`
- `mm-google-shopping.mpn`, `condition`

## Important Constraints

1. **Never edit `config/settings_data.json`** - Auto-generated by Shopify admin
2. **Test locally first** - `shopify theme dev` before any `theme push`
3. **Follow brand guidelines** - Reference `/.docs/brand/` for all content/design
4. **English only** - Non-English locale files have been removed
5. **Mobile-first** - Ice fishermen use phones on the ice
