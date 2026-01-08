# FishArmor - Brand Photography

## 6. Photography & Imagery Guidelines

### Photography Style

**Lifestyle Photography:**
- Authentic ice fishing environments (frozen lakes, ice houses, winter landscapes)
- Real ice fishermen in action using FishArmor products
- Sunrise/golden hour lighting over frozen lakes
- Natural, unstaged moments
- Show product in actual use context on the ice
- Include fishing gear, ice augers, and winter outdoor elements
- Emphasize Minnesota winter conditions and USA manufacturing

**Product Photography:**
- Clean, professional product shots on dark steel-ice backgrounds
- Multiple angles showing key features and protection
- Close-up detail shots of waterproofing and durability features
- Show all color/finish variations side by side
- Include scale reference when helpful (phones, tablets)
- Well-lit with even, professional lighting

**Ice Fishing Scene Photography:**
- High-quality images of ice fishing equipment in use
- Natural winter settings and authentic fishing behavior
- Close-up shots showing product protecting electronics
- Complement product categories (shuttles protecting GPS, phones, tablets)
- Show extreme cold conditions and product performance

### Image Treatment

**Full-Bleed Images:**
- Use for hero sections and category introductions
- Maintain minimum 1920px width for desktop
- Ensure mobile-optimized versions
- Dark overlay (30-50% opacity) when text overlays image

**Ice Crack Edge Effect:**
```css
.ice-crack-edge {
  position: relative;
}

.ice-crack-edge::after {
  content: '';
  position: absolute;
  right: -10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url('ice-crack-edge.svg') repeat-y;
}
```
Use this effect to separate image and content sections, replicating catalog style with ice-themed texture.

**Subtle Texture Pattern:**
```css
.pattern-texture {
  background-image:
    repeating-linear-gradient(0deg, transparent, transparent 19px, var(--color-slush) 19px, var(--color-slush) 21px),
    repeating-linear-gradient(90deg, transparent, transparent 19px, var(--color-slush) 19px, var(--color-slush) 21px);
  background-size: 20px 20px;
}
```
Subtle background pattern for specification sections and content areas.

### Image Specifications

**Hero Images:**
- Minimum: 1920 x 1080px
- Aspect Ratio: 16:9
- Format: JPG (optimized for web)
- File Size: <300KB

**Product Images:**
- Minimum: 1200 x 1200px
- Aspect Ratio: 1:1 or 4:3
- Format: PNG with transparent background or JPG on dark background
- File Size: <200KB

**Lifestyle Images:**
- Minimum: 1200 x 800px
- Aspect Ratio: 3:2 or 16:9
- Format: JPG
- File Size: <250KB

**Thumbnail Images:**
- Size: 400 x 400px
- Aspect Ratio: 1:1
- Format: JPG
- File Size: <50KB

---


---

**Related Documentation:**
- See [`BRAND-VOICE.md`](BRAND-VOICE.md) for brand personality
- See [`BRAND-COLORS.md`](BRAND-COLORS.md) for color treatments

---

*Part of FishArmor Brand Guidelines*
*Adapted from Retay USA Design System*
*Last Updated: 2025-10-25*
