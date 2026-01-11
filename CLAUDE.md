# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**BODE** - A modern Shopify theme framework designed for deployment across multiple client projects.

| Key Info | Value |
|----------|-------|
| Theme Framework | BODE 1.0.0 |
| Shopify API | 2024-01 |
| Architecture | Liquid + Web Components |
| CSS System | CSS Variables + Utility Classes |

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
| `locales/en.default.json` | Translation strings (English only) |

### Asset Loading

CSS loads in `<head>` (blocking), JS loads with `defer`:
```liquid
{{ 'theme.css' | asset_url | stylesheet_tag: preload: true }}
<script src="{{ 'theme.js' | asset_url }}" defer="defer"></script>
```

Feature-specific assets load conditionally in sections (e.g., `cart.css`, `cart.js`).

## Core Sections

### Essential (Always Needed)
- `main-product.liquid` - Product page
- `main-collection.liquid` - Collection listing
- `main-cart.liquid` - Cart page
- `cart-drawer.liquid` - Cart sidebar
- `header.liquid` - Navigation header
- `footer.liquid` - Site footer
- `mobile-dock.liquid` - Mobile bottom nav
- `search-drawer.liquid` - Search interface
- `announcement-bar.liquid` - Top banner
- `cookie-banner.liquid` - Cookie consent

### Specialized
- `dealer-locator.liquid` - Google Maps store finder
- `product-bundle.liquid` - Bundle builder
- `product-comparison.liquid` - Feature comparison tables
- `pro-staff.liquid` - Team/ambassador showcase

## JavaScript Architecture

**Pattern:** Vanilla JavaScript with Web Components (Custom Elements API)

**Core Components:**
- `cart-drawer`, `drawer-element`, `modal-element` - Overlays
- `quantity-input`, `product-recommendations` - Product features
- `sticky-header`, `custom-navigation` - Navigation
- `accordion-details`, `dropdown-element` - UI elements
- `loading-bar`, `animate-element` - Feedback/animation

**Global Config:** `window.theme` object initialized via `js-variables.liquid`

## CSS Architecture

**System:** CSS Custom Properties generated from theme settings

**Variables Categories:**
- Colors: `--color-base-*`, `--color-button-*`, `--color-drawer-*`
- Typography: `--font-heading-family`, `--font-body-family`
- Spacing: `--sp-1` through `--sp-100` (0.25rem to 32rem)
- Layout: `--page-width`, `--page-padding`
- Rounding: `--rounded-button`, `--rounded-card`

**Breakpoints:**
- Mobile: < 768px
- Tablet: 768px+
- Desktop: 1024px+
- Large: 1280px+

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

## Multi-Project Architecture

BODE is the **master framework** used across multiple Shopify store projects. Each project inherits from BODE and can pull framework updates while maintaining brand-specific customizations.

### Local Project Structure

```
/Users/cbodenburg/Sites/
├── BODE-shopify/                 ← Master framework (this repo)
├── keybar-2026/                  ← KeyBar project
├── fisharmor-2025/               ← FishArmor project
└── future-project/               ← Future projects
```

### Active Projects Using BODE

| Project | Local Path | Store | Status |
|---------|------------|-------|--------|
| KeyBar | `/Users/cbodenburg/Sites/keybar-2026/` | TBD | In Development |
| FishArmor | `/Users/cbodenburg/Sites/fisharmor-2025/` | fisharmorusa-com.myshopify.com | Configured |

### Creating a New Project

```bash
# 1. Create repo from BODE template
gh repo create project-name --template bodenburgc/BODE-shopify
cd project-name

# 2. Add upstream remote for framework updates
git remote add upstream https://github.com/bodenburgc/BODE-shopify.git

# 3. Verify remotes
git remote -v
# origin   → your project (push changes here)
# upstream → BODE framework (pull updates from here)
```

### Pushing Framework Updates to Projects

When you improve BODE, projects can pull updates:

```bash
# In project repo (e.g., keybar-2026)
git fetch upstream
git merge upstream/main
# Resolve conflicts in brand-specific files
git push origin main
```

### Development Workflow

**ALWAYS make framework improvements in BODE first**, then push and pull into projects.

```
BODE-shopify (this folder)          Project folder (e.g., keybar-2026/)
──────────────────────────          ─────────────────────────────────
1. Fix bug in product-card    →
2. Remove duplicate sections  →     cd ../keybar-2026
3. Add new feature            →     git fetch upstream
4. git push origin main       →     git merge upstream/main
                                    (inherits improvements)

                                    5. Customize brand colors
                                    6. Build homepage layout
                                    7. Add brand assets
```

| Change Type | Where to Make It |
|-------------|------------------|
| Bug fix in section/snippet | BODE (here) → push → pull in project |
| New reusable section | BODE (here) → push → pull in project |
| Remove cruft/duplicates | BODE (here) → push → pull in project |
| Improve JS/CSS architecture | BODE (here) → push → pull in project |
| Brand colors/fonts | Project repo only |
| Homepage layout | Project repo only |
| Brand logos/assets | Project repo only |
| Store-specific content | Project repo only |

### What Lives Where

**BODE (this repo) - Framework code:**
- Core sections (product, collection, cart, header, footer)
- Snippets (product-card, css-variables, js-variables)
- JavaScript architecture (theme.js, vendor.js)
- CSS system (theme.css, feature CSS)
- Base settings schema

**Project repos - Brand-specific:**
- `config/settings_data.json` - Theme settings values
- `sections/*-group.json` - Header/footer configuration
- `templates/index.json` - Homepage layout
- `.docs/brand/` - Brand guidelines (colors, voice, typography)
- Brand logos and assets
- Store-specific metafields

### Avoiding Merge Conflicts

Add to `.gitattributes` in project repos:
```
config/settings_data.json merge=ours
.shopify/* merge=ours
templates/index.json merge=ours
sections/*-group.json merge=ours
```

This keeps brand-specific files from being overwritten during upstream merges.

## Third-Party Integrations

| Integration | Files |
|-------------|-------|
| Google Maps | `sections/dealer-locator.liquid`, `assets/dealer-locator.js` |
| PhotoSwipe | `assets/photoswipe.min.js` - Image galleries |

## Important Constraints

1. **Never edit `config/settings_data.json` manually** - Auto-generated by Shopify admin
2. **Test locally first** - `shopify theme dev` before any `theme push`
3. **English only** - Non-English locale files have been removed
4. **Mobile-first** - Design for mobile, enhance for desktop
