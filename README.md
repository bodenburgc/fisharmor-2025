# FishArmor 2025

Shopify theme for **FishArmor** - premium ice fishing equipment brand specializing in protective shuttles for sonar electronics.

## Store

- **URL:** fisharmorusa-com.myshopify.com
- **Framework:** [BODE](https://github.com/bodenburgc/BODE-shopify)

## Quick Start

```bash
# Install Shopify CLI (if needed)
npm install -g @shopify/cli

# Authenticate
shopify auth login --store fisharmorusa-com.myshopify.com

# Start local development
shopify theme dev
```

## Commands

| Command | Description |
|---------|-------------|
| `shopify theme dev` | Local development server with hot reload |
| `shopify theme push` | Deploy to store |
| `shopify theme pull` | Pull live theme changes |
| `shopify theme check` | Lint and validate theme |
| `shopify theme share` | Generate preview link |

## Framework Updates

This project uses BODE as its upstream framework. To pull framework improvements:

```bash
git fetch upstream
git merge upstream/main
# Resolve any conflicts in brand-specific files
git push origin main
```

## Project Structure

```
fisharmor-2025/
├── assets/          # CSS, JS, images
├── blocks/          # Reusable block components
├── config/          # Theme settings
├── layout/          # Theme layouts
├── locales/         # Translations (English only)
├── sections/        # Page sections
├── snippets/        # Reusable Liquid snippets
├── templates/       # Page templates (JSON)
└── .docs/           # Brand documentation
```

## Git Remotes

| Remote | URL | Purpose |
|--------|-----|---------|
| origin | `bodenburgc/fisharmor-2025` | Push project changes |
| upstream | `bodenburgc/BODE-shopify` | Pull framework updates |

## Documentation

- `CLAUDE.md` - AI assistant guidance
- `.docs/brand/` - Brand guidelines (colors, voice, typography)
