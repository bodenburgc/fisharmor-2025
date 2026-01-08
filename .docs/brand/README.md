# FishArmor Brand Guidelines

**Quick reference guide for FishArmor brand identity and design system.**

This design system provides comprehensive guidance for maintaining brand consistency across the FishArmor Shopify store built with BODE blocks.

---

## Quick Navigation

### Brand Foundations
- **[Brand Voice](VOICE.md)** - Personality, tone, messaging guidelines
- **[Colors](COLORS.md)** - Ice fishing themed OKLCH palette + usage
- **[Typography](TYPOGRAPHY.md)** - Gazzetta + Barlow, fluid type system

### Layout & Structure
- **[Layout & Spacing](LAYOUT.md)** - Grid, containers, spacing, responsive (mobile-first for ice fishermen)

### UI Elements
- **[Components](COMPONENTS.md)** - Buttons, cards, forms, navigation patterns
- **[Icons](ICONS.md)** - Icon system + usage (mobile-friendly touch targets)
- **[Photography](PHOTOGRAPHY.md)** - Ice fishing image style + specifications

---

## Quick Reference by Task

**"What colors can I use?"**
→ [COLORS.md](COLORS.md) - Ice fishing themed palette (Steel Ice, Frozen Lake, Safety Red)

**"What fonts and sizes?"**
→ [TYPOGRAPHY.md](TYPOGRAPHY.md) - Same as Retay (Gazzetta + Barlow)

**"How do I build a button?"**
→ [COMPONENTS.md](COMPONENTS.md#buttons) - Safety Red CTAs, outline variants

**"What's the tone of voice?"**
→ [VOICE.md](VOICE.md) - Rugged, confident, technical (ice fishing context)

**"How wide should containers be?"**
→ [LAYOUT.md](LAYOUT.md#container-widths) - Same system as Retay (1228/1366/1920px)

**"What about mobile responsive?"**
→ [LAYOUT.md](LAYOUT.md#responsive-design-guidelines) - Critical for ice fishermen (bright snow, mobile use)

---

## For Developers

**Implementation Files:**
- **Tailwind CSS v4**: `/frontend/entrypoints/theme.css` (FishArmor brand colors)
- **BODE Blocks**: `/snippets/bode-*.liquid` (synced from bode-shopify)
- **Sections**: `/sections/` (FishArmor custom sections + BODE section)
- **Templates**: `/templates/*.json` (page compositions)

**Quick Start:**
1. Read [COLORS.md](COLORS.md) + [TYPOGRAPHY.md](TYPOGRAPHY.md)
2. Review [COMPONENTS.md](COMPONENTS.md) for common patterns
3. Understand BODE block system (see `CLAUDE.md` in repo root)
4. Build using Shopify theme editor + BODE blocks

---

## For Designers

**Start Here:**
1. [VOICE.md](VOICE.md) - Understand the brand personality (ice fishing, USA-made)
2. [COLORS.md](COLORS.md) - Ice fishing color palette (OKLCH format)
3. [TYPOGRAPHY.md](TYPOGRAPHY.md) - Gazzetta + Barlow system (same as Retay)
4. [PHOTOGRAPHY.md](PHOTOGRAPHY.md) - Frozen lakes, ice fishing, USA manufacturing

**Key Concepts:**
- **Colors**: Ice fishing themed (steel, frozen lake, pine, safety red)
- **Typography**: Gazzetta (headlines) + Barlow (body) with fluid scales
- **Photography**: Authentic ice fishing lifestyle, Minnesota winters, real anglers
- **Tone**: Confident, rugged, technical (not marketing-heavy)

**Mobile-First Priority:**
- Ice fishermen use phones on the ice
- Large touch targets (48x48px minimum)
- High contrast for bright snow conditions
- Fast loading on slow connections

---

## For Content Writers

**Brand Voice:**
- Read [VOICE.md](VOICE.md) first (most important!)
- See [COMPONENTS.md](COMPONENTS.md) for UI copy patterns

**Writing Guidelines:**
- ✅ Active, confident language ("Protect your investment" not "Can protect...")
- ✅ Specific and technical (roto-molded, waterproof ratings, dimensions)
- ✅ USA manufacturing emphasis (Minnesota craftsmanship)
- ✅ Real ice fishing context ("Built by fishermen for fishermen")
- ❌ Avoid marketing hyperbole ("Ultimate!", "Revolutionary!")
- ❌ Don't oversimplify technical details (anglers read specs)

**Value Propositions:**
- Primary: "Protect Your $2,000 Investment" (sonar/electronics)
- Secondary: Made in USA (Minnesota), Extreme Durability, Angler-Led Design
- Supporting: Lifetime warranty, Technical specifications, Complete system approach

---

## File Structure

```
brand/
├── README.md                     # ← You are here
├── VOICE.md                      # Personality, tone, messaging
├── COLORS.md                     # Ice fishing OKLCH palette (adapted from Retay)
├── TYPOGRAPHY.md                 # Gazzetta + Barlow (same as Retay)
├── LAYOUT.md                     # Grid, containers, responsive
├── COMPONENTS.md                 # Buttons, cards, badges (ice fishing themed)
├── PHOTOGRAPHY.md                # Frozen lakes, ice fishing imagery
└── ICONS.md                      # Icon system (mobile-friendly)
```

---

## Why This Structure?

**FishArmor-Specific Adaptation:**
- Same proven design system as Retay USA
- Ice fishing themed colors (vs. hunting theme)
- Mobile-first for field use (ice fishermen use phones on ice)
- Shopify/BODE implementation (vs. WordPress/Bricks)
- USA manufacturing emphasis (Minnesota vs. Turkey)

**Benefits:**
- ✅ Find information in < 2 minutes
- ✅ Scannable in a single sitting
- ✅ Clear topic separation
- ✅ Easy to reference specific guidelines
- ✅ Better for team collaboration
- ✅ AI-friendly (Claude can understand each file quickly)

---

## Related Documentation

**FishArmor Project:**
- [../00-START-HERE.md](../00-START-HERE.md) - Project overview
- [../LAUNCH-CHECKLIST.md](../LAUNCH-CHECKLIST.md) - Launch requirements
- [../pages/](../pages/) - Page layout guides (homepage, product, collection)
- [../workflows/](../workflows/) - BODE sync, deployment, development

**BODE System:**
- `~/Sites/bode-shopify/docs/` - BODE block technical documentation
- `/CLAUDE.md` (repo root) - Complete project context
- `/BODE-VERSION.md` (repo root) - Block sync tracking

---

## Design System Principles

**1. Consistency**
- Use BODE blocks (don't create custom sections unless approved)
- Follow established patterns from Retay USA system
- Maintain visual hierarchy

**2. Accessibility**
- WCAG 2.1 AA minimum
- 4.5:1 contrast for body text (critical in bright snow)
- Large touch targets for mobile use (48x48px)
- Screen reader friendly

**3. Performance**
- Mobile-first responsive design (ice fishermen use phones)
- Optimized images (WebP format)
- Minimal custom CSS (use Tailwind utilities via BODE blocks)
- Fast page loads (critical on slow ice-house connections)

**4. Brand Authenticity**
- Real ice fishing photography (not stock outdoor photos)
- Natural frozen lake environments
- Technical accuracy (specifications matter to anglers)
- Confident, rugged tone (not aggressive or promotional)

**5. Mobile-First (Critical for FishArmor)**
- Ice fishermen use phones in the field
- Large buttons and touch targets
- High contrast for bright snow
- Fast loading on potentially slow connections
- Test on actual devices outdoors

---

## FishArmor vs. Retay USA

**Same Foundation:**
- Typography system (Gazzetta + Barlow)
- Layout system (containers, grids, spacing)
- Component patterns (buttons, cards, navigation)
- Design principles (consistency, accessibility, performance)

**FishArmor Adaptations:**
- **Colors**: Ice fishing theme (Steel Ice, Frozen Lake, Pine Green, Safety Red)
- **Context**: Ice fishing vs. hunting
- **Products**: Shuttles (protective cases) vs. shotguns
- **Manufacturing**: Minnesota USA vs. Turkish
- **Platform**: Shopify + BODE blocks vs. WordPress + Bricks Builder
- **Mobile Priority**: Enhanced for field use on ice

---

## Questions?

**Can't find what you need?**
- Check the appropriate brand file above
- See [../00-START-HERE.md](../00-START-HERE.md) for complete project navigation
- Reference `/CLAUDE.md` for technical implementation
- Review [../pages/](../pages/) for layout composition guides

**Need to update the design system?**
1. Edit the appropriate brand file
2. Test changes in Shopify theme editor
3. Update `frontend/entrypoints/theme.css` if CSS changes
4. Commit with descriptive message
5. Preview changes before deploying

---

**Design System Version**: 1.0 (Adapted from Retay USA v1.0)
**Last Updated**: 2025-10-25
**Platform**: Shopify + BODE Blocks
**Target Launch**: November 7, 2025

---

*Adapted from Retay USA Design System for FishArmor ice fishing equipment*
*Same proven structure, ice fishing themed implementation*
