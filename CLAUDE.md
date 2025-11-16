# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Shopify theme** codebase named "BODE 2024" (version 1.0.0) by BODE. It follows Shopify's standard theme structure and uses Liquid templating engine for dynamic content rendering.

**Theme Information:**
- **Name:** BODE 2024
- **Author:** BODE
- **Version:** 1.0.0
- **Documentation:** https://BODE.design
- **Support:** https://BODE.design

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
- GoBoat custom sections (appears to be a specific brand/product line)

### Metafield Configuration

The theme uses Shopify metafields. Product metafields are defined in `.shopify/product.json`:
- `custom.card_description` - Single line text field for product card descriptions

### Theme Settings

Major configurable areas (via `config/settings_schema.json`):
- Logo and branding (desktop/mobile variants, white logo for dark backgrounds)
- Color scheme (text, background, buttons, sale prices, error states)
- Typography (header/body fonts, sizes, line heights, letter spacing)
- Layout dimensions (page width, section spacing)

## Development Workflow

When making changes:
1. Test locally with `shopify theme dev` before deploying
2. Section changes require updating the section schema (JSON at bottom of `.liquid` files)
3. CSS/JS changes in `assets/` are referenced in sections or layout files
4. Settings changes need both schema definition and default values
5. Translation keys use format `t:settings_schema.path.to.key.label`

## Important Notes

- **DO NOT** manually edit `config/settings_data.json` - it's auto-generated by Shopify admin
- Section schemas define both rendering logic and admin UI controls
- Liquid syntax: `{%- liquid -%}` for logic, `{{ }}` for output
- Asset URLs: `{{ 'file.css' | asset_url }}`
- Translation: `{{ 'key.path' | t }}`
- Check Shopify theme documentation for Liquid objects and filters specific to e-commerce
