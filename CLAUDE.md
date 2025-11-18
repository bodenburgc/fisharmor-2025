# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Shopify theme** for **FishArmor**, an ice fishing equipment brand specializing in protective cases (shuttles) for expensive electronics. The theme is built using the BODE 2024 framework (version 1.0.0) and follows Shopify's standard theme structure with Liquid templating.

**Theme Information:**
- **Theme Name:** FishArmor 2024
- **Brand:** FishArmor
- **Framework:** BODE 2024
- **Version:** 1.0.0
- **Target Market:** Serious ice fishermen, USA-made premium protection
- **Store URL:** fisharmorusa-com.myshopify.com
- **Shopify API Version:** 2024-01

## Brand Guidelines

FishArmor's brand is built around **ice fishing protection** with emphasis on USA manufacturing and technical excellence. Comprehensive brand guidelines are located in `/.docs/brand/`:

### Brand Identity Quick Reference

**Brand Voice & Messaging:**
- **Personality:** Confident, rugged, authentic, technical (not marketing-heavy)
- **Primary Message:** "Protect Your Investment" (ice fishermen invest thousands in electronics)
- **Key Values:** USA-made (Minnesota), extreme durability, angler-led design
- **Tone:** Active, specific language; avoid hyperbole ("Revolutionary!", "Ultimate!")
- **Target Audience:** Serious ice fishermen who value technical specs and authentic experiences
- See `/.docs/brand/VOICE.md` for complete guidelines

**Color Palette (Ice Fishing Theme - OKLCH Format):**

**Brand Accents:**
- **Safety Red:** `oklch(50% 0.18 15)` / `#D32F2F` - Primary CTAs, "Add to Cart"
- **Sunrise Orange:** `oklch(75% 0.25 60)` / `#FFA31A` - Highlights, promotions
- **Warning Flag:** `oklch(68% 0.27 40)` / `#FF6600` - High visibility, secondary CTAs
- **Chartreuse Strike:** `oklch(85% 0.20 120)` / `#B8E600` - Pop color accents
- **Hot Pink Flash:** `oklch(60% 0.27 350)` / `#FF1B8D` - Special highlights

**Shades (Neutral Palette):**
- **Steel Ice (15%):** `oklch(15% 0.035 230)` / `#0A1824` - Darkest, main text
- **Frozen Lake (30%):** `oklch(30% 0.04 230)` / `#2C4554` - Dark backgrounds
- **Deep Water (50%):** `oklch(50% 0.03 230)` / `#6E8394` - Mid-tone text
- **Ice Shelf (70%):** `oklch(70% 0.015 230)` / `#A0B5C7` - Light text on dark
- **Polar White (90%):** `oklch(90% 0.001 230)` / `#E4E8EC` - Subtle backgrounds

**Tailwind Classes:** `bg-safety-red`, `text-steel-ice`, `bg-sunrise-orange`, etc.
- See `/.docs/brand/COLORS.md` for complete palette and usage

**Typography:**
- **Headlines:** Gazzetta (bold, condensed, uppercase) - rugged and impactful
- **Body:** Barlow family (Regular, Semi Condensed, Condensed) - technical readability
- **Fluid Type Scale:** Uses `clamp()` for responsive sizing (12px-61px range)
- **Mobile Priority:** Minimum 16px body text, large touch targets (48x48px)
- See `/.docs/brand/TYPOGRAPHY.md` for complete type system

**Component Patterns:**
- **Primary CTA:** Safety Red background, white text, uppercase
- **Product Cards:** White background, Pine Green product names, Safety Red "Add to Cart"
- **Badges:** Safety Red for "NEW", Pine Green for categories
- **Navigation:** Steel Ice text, Pine Green on hover/active
- See `/.docs/brand/COMPONENTS.md` for detailed patterns

**Photography Style:**
- Authentic ice fishing environments (frozen lakes, ice houses, Minnesota winters)
- Real anglers using products in extreme conditions
- Professional product shots on dark Steel Ice backgrounds
- Natural lighting, unstaged moments
- See `/.docs/brand/PHOTOGRAPHY.md` for specifications

**Key Vocabulary:**
- Use: "Shuttle" (not case), "Roto-molded" (not plastic), "USA-made", "Sonar protection"
- Avoid: "Cheap", "Revolutionary", "Military-grade", "Luxury"

### Brand Documentation Structure

```
.docs/brand/
├── README.md           # Brand guidelines overview & quick navigation
├── VOICE.md           # Personality, tone, messaging examples
├── COLORS.md          # Ice fishing themed OKLCH palette
├── TYPOGRAPHY.md      # Gazzetta + Barlow fluid type system
├── COMPONENTS.md      # Buttons, cards, badges, navigation patterns
├── PHOTOGRAPHY.md     # Image style, specifications, treatments
├── LAYOUT.md          # Grid, containers, spacing, responsive design
├── ICONS.md           # Icon system, mobile-friendly touch targets
└── ASSETS.md          # Asset management and organization
```

**Mobile-First Priority:** Ice fishermen use phones on the ice - large touch targets, high contrast for bright snow, fast loading on slow connections.

## Shopify CLI Commands

This theme is managed using Shopify CLI. Common commands:

```bash
# Development - Start local development server
shopify theme dev

# Deployment - Push theme to Shopify store
shopify theme push

# Pull changes from live theme
shopify theme pull

# Check theme for issues
shopify theme check

# Share preview of theme
shopify theme share
```

Note: You'll need to authenticate with `shopify auth login` before running theme commands.

## Theme Architecture

### Directory Structure

- **`layout/`** - Core theme templates
  - `theme.liquid` - Main layout wrapper for all pages
  - `password.liquid` - Password-protected store layout

- **`templates/`** - Page-level templates (JSON format)
  - Defines which sections appear on different page types
  - Includes templates for: product, collection, cart, blog, pages, customer account
  - Context variants (`.context.eu.json`, `.context.us.json`, `.context.b2b.json`) for market-specific layouts
  - Preset variants (`.preset-harmony.json`, `.preset-inova.json`) for different design styles

- **`sections/`** - Reusable, configurable content blocks
  - Major sections: `header.liquid`, `footer.liquid`, `main-product.liquid`, `main-collection.liquid`
  - Feature sections: product bundles, countdowns, testimonials, lookbooks, portfolios
  - Special sections: `cart-drawer.liquid`, `search-drawer.liquid`, `newsletter-popup.liquid`
  - Section groups: `header-group.json`, `footer-group.json`, `overlay-group.json`

- **`snippets/`** - Small, reusable Liquid components
  - Product components: `product-card.liquid`, `product-variant-picker.liquid`, `buy-buttons.liquid`
  - UI components: `icon.liquid`, `button.liquid`, `pagination.liquid`
  - Utility snippets: `css-variables.liquid`, `js-variables.liquid`, `section-spacing-style.liquid`

- **`blocks/`** - Individual content blocks used within sections
  - Simple elements: `heading.liquid`, `text.liquid`, `image.liquid`, `button.liquid`
  - Interactive: `accordion.liquid`, `video.liquid`, `contact-form.liquid`
  - Prefixed with `_` are internal/helper blocks (e.g., `_counter.liquid`, `_accordion-row.liquid`)

- **`assets/`** - Static files (CSS, JS, images)
  - Modular CSS/JS files per feature (e.g., `cart.css`, `cart.js`, `collection.css`, `collection.js`)
  - Core: `theme.css`, `apps.css`
  - Third-party: `photoswipe.min.js` for image galleries

- **`config/`** - Theme configuration
  - `settings_schema.json` - Defines theme settings in admin (logo, colors, typography)
  - `settings_data.json` - Current theme setting values (auto-generated, managed by Shopify)

- **`locales/`** - Translation files for internationalization
  - `en.default.json` - Default English translations
  - `en.default.schema.json` - English schema for translating settings interface
  - **Note:** This theme uses English only. Non-English locale files have been removed.

### Key Architectural Patterns

**Section-First Design**: Most page functionality lives in sections rather than hard-coded templates. Templates are JSON files that reference sections, making the theme highly customizable through the Shopify admin.

**Context-Aware Layouts**: Uses Shopify's context feature for market-specific variations (US, EU, B2B markets) with separate template/section configurations.

**Component Hierarchy**:
- Layout → Template → Section → Block/Snippet
- Snippets are included using `{% render 'snippet-name' %}`
- Blocks are defined in section schemas and rendered dynamically

**Custom Liquid Variables**:
- Global CSS variables defined in `snippets/css-variables.liquid`
- JavaScript config in `snippets/js-variables.liquid`
- Section-specific variables in section schemas

**Special Features**:
- Product bundles with variant pickers
- Gift wrapping functionality
- Age verification popup
- Newsletter popup with cookie tracking
- Mobile dock navigation
- Predictive search
- Recently viewed products

### Metafield Configuration

The theme uses Shopify metafields extensively. Product metafields are defined in `.shopify/metafields.json`:

**Custom Metafields:**
- `custom.card_description` - Single line text field for product card short descriptions
- `custom.description_short` - Multi-line text field for condensed product descriptions

**Standard Shopify Metafields:**
- `shopify.color-pattern` - List of color/pattern references
- `shopify.battery-type`, `shopify.battery-size`, `shopify.battery-technology` - Battery specifications
- `shopify.item-material` - Primary material (e.g., aluminum, roto-molded plastic)
- `shopify.durability-features` - Product durability highlights (e.g., rustproof, waterproof)
- `shopify.item-condition` - Condition status (new, refurbished, etc.)

### Theme Settings

Major configurable areas (via `config/settings_schema.json`):
- Logo and branding (desktop/mobile variants, white logo for dark backgrounds)
- Color scheme (text, background, buttons, sale prices, error states)
- Typography (header/body fonts, sizes, line heights, letter spacing)
- Layout dimensions (page width, section spacing)

## Shopify API Automation Scripts

The repository includes bash scripts for bulk product updates via Shopify Admin API GraphQL. These scripts are in the root directory.

### Script Patterns

**Authentication:**
- Uses Admin API access tokens (stored in scripts, should be rotated regularly)
- GraphQL endpoint: `https://fisharmorusa-com.myshopify.com/admin/api/2024-01/graphql.json`
- Headers: `X-Shopify-Access-Token` and `Content-Type: application/json`

**Common Scripts:**
- `update_shuttle_order.sh` - Unpublish/republish shuttles to control collection sort order
- `batch_*.sh` - Bulk update products by category (live imaging, batteries, accessories, etc.)
- `find_*.sh` - Query scripts to find products by specific criteria
- `check_published_dates.py` - Python script to verify product publish dates

**Script Structure:**
```bash
TOKEN="shpat_..."
URL="https://fisharmorusa-com.myshopify.com/admin/api/2024-01/graphql.json"

curl -s -X POST "$URL" \
    -H "X-Shopify-Access-Token: $TOKEN" \
    -H "Content-Type: application/json" \
    -d '{"query":"mutation { productUpdate(...) }"}' \
    | python3 -m json.tool
```

**GraphQL Mutations Used:**
- `productUpdate` - Update product metadata, tags, descriptions, metafields
- `productPublish` / `productUnpublish` - Control product visibility and sort order
- `collectionDelete` - Remove collections

**Important Notes:**
- Scripts use `sleep` delays to avoid rate limiting
- JSON responses are formatted with `python3 -m json.tool`
- Product IDs use Shopify's GID format: `gid://shopify/Product/[ID]`
- Scripts often update both `descriptionHtml` and metafields simultaneously

## Development Workflow

When making changes:
1. Test locally with `shopify theme dev` before deploying
2. Section changes require updating the section schema (JSON at bottom of `.liquid` files)
3. CSS/JS changes in `assets/` are referenced in sections or layout files
4. Settings changes need both schema definition and default values
5. Translation keys use format `t:settings_schema.path.to.key.label`
6. For bulk product updates, use or modify existing bash scripts in root directory

## Important Notes

**Theme Development:**
- **DO NOT** manually edit `config/settings_data.json` - it's auto-generated by Shopify admin
- Section schemas define both rendering logic and admin UI controls
- Liquid syntax: `{%- liquid -%}` for logic, `{{ }}` for output
- Asset URLs: `{{ 'file.css' | asset_url }}`
- Translation: `{{ 'key.path' | t }}`
- Check Shopify theme documentation for Liquid objects and filters specific to e-commerce

**Brand Guidelines:**
- **ALWAYS** follow FishArmor brand guidelines in `/.docs/brand/` when creating content, choosing colors, or writing copy
- **Brand-specific vocabulary:** Use "shuttle" not "case", "roto-molded" not "plastic", "USA-made" not "American-made"
- **Color usage:** Safety Red for primary CTAs, Sunrise Orange/Warning Flag for highlights, Steel Ice/Frozen Lake for text and backgrounds
- **Typography:** Gazzetta (uppercase, bold, condensed) for headlines, Barlow for body text
- **Mobile-first:** Large touch targets (48x48px), high contrast, fast loading for ice fishing conditions

**Security:**
- API access tokens are currently stored in bash scripts - these should be rotated regularly
- Never commit new API tokens to version control
- Consider using environment variables for sensitive credentials
