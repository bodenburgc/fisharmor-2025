---
description: Post-build verification audit — expert panel verifies execution against the plan after implementation
---

# BODE v2 Post-Build Verification Audit — Expert Panel Review

The plan has been executed. Your job is to verify that what was built matches what was planned, find what broke during implementation, and surface issues that only appear in running code.

## Your identity: the same three expert auditors, now in QA mode

**Kara (Shopify Platform Architect)** — Loading the theme in the Shopify editor, clicking every block, every section, every setting. Testing what merchants will actually experience. She knows every Theme Check rule and editor quirk.

**Marcus (Frontend Performance Engineer)** — Running Lighthouse, measuring bundle sizes, profiling Web Components, checking every network request. Hard numbers only. He doesn't care what the plan said — he cares what it actually is.

**Sana (Software Architect & Systems Thinker)** — Reading every file, checking naming conventions, evaluating the git strategy in practice, stress-testing the developer experience.

---

## Step 1: Map the actual build

Run these commands and document the results. Compare every number to the plan.

```bash
# File inventory
find . -type f \( -name "*.liquid" -o -name "*.js" -o -name "*.css" -o -name "*.json" \) \
  | grep -v node_modules | grep -v .git | wc -l

# File breakdown
echo "=== Sections ===" && ls sections/ | wc -l
echo "=== Blocks ===" && ls blocks/ | wc -l
echo "=== Snippets ===" && ls snippets/ | wc -l
echo "=== Templates ===" && ls templates/ | wc -l
echo "=== JS entrypoints ===" && ls frontend/entrypoints/*.js 2>/dev/null | wc -l

# Build output
echo "=== Built assets ===" && ls -la assets/*.js assets/*.css 2>/dev/null
echo "=== Asset sizes ===" && du -sh assets/

# Theme Check
npx shopify theme check --fail-level suggestion 2>&1 | tail -30

# Git status
git log --oneline -10
git remote -v
```

---

## Step 2: Conduct the verification

Every finding must include the specific file, line number, or command output as evidence. No theoretical concerns — only verified issues.

### Kara verifies: Shopify platform compliance and editor experience

#### Theme Check (automated)
```bash
npx shopify theme check
```
- [ ] Zero errors at `error` severity
- [ ] Document all warnings and their files
- [ ] Check for: parser-blocking JS, missing `content_for_header`, unused snippets, deprecated Liquid tags, missing translation keys, invalid JSON schemas

#### Theme Block verification
For each core block, verify in the Shopify theme editor:
- [ ] **group**: Can nest child blocks. Background media works. Layout options (row/column/wrap) function.
- [ ] **heading**: All h1-h6 render with correct semantic tags (not styled divs). Size, alignment, animation work.
- [ ] **text**: Rich text renders. Check for XSS — does rich text sanitize properly?
- [ ] **image**: Responsive `srcset` generated. Aspect ratio works. Lazy loading on non-hero. Width/height attributes present (CLS prevention).
- [ ] **button**: All style variants render. Link works. Hover/focus states visible.
- [ ] **video**: Uploaded video plays. YouTube/Vimeo embeds work. No autoplay with sound.
- [ ] **accordion**: Opens/closes. Keyboard accessible (Enter/Space to toggle). ARIA correct (`aria-expanded`, `aria-controls`).
- [ ] **spacer**: Responsive spacing values work across breakpoints.
- [ ] **divider**: Renders separator. Color/width settings work.
- [ ] **icon**: SVGs render at correct size. Complete for common use cases.
- [ ] **custom-liquid**: Raw Liquid/HTML renders. Doesn't break editor when empty.

#### Section verification
For each section, verify:
- [ ] Renders without errors in theme editor
- [ ] Settings schema is valid JSON
- [ ] Accepts blocks correctly (theme blocks OR section blocks — never both)
- [ ] Renders correctly when empty (no blocks added)
- [ ] Proper `{% schema %}` with `name`, `tag`, `class`, and `presets` where appropriate
- [ ] `content-blocks` compositor: any @theme block can be added, nesting works to 3+ levels

#### Template verification
- [ ] Every template JSON is valid
- [ ] Product template renders with test product data
- [ ] Collection template renders with test collection
- [ ] Cart template functions (add/remove/update quantities)
- [ ] 404, search, account templates render

#### Section Rendering API
- [ ] Product section re-renders via AJAX on variant change
- [ ] Cart drawer updates without full page reload
- [ ] `section.id` accessible in re-rendered context

### Marcus verifies: Build tooling, performance, and asset delivery

#### Build tooling
```bash
rm -rf assets/*.js assets/*.css && npm run build && echo "Exit: $?"
ls -la assets/theme*.css assets/theme*.js 2>/dev/null
cat snippets/vite-tag.liquid 2>/dev/null | head -20
```
- [ ] `npm run build` exits with code 0
- [ ] Built CSS and JS exist in `assets/`
- [ ] `vite-tag.liquid` references correct asset filenames
- [ ] No source maps in production build

#### Tailwind v4 verification
```bash
grep -r "source(none)" frontend/ || echo "WARNING: No source(none) directive"
grep -r "server.watch" vite.config.* || echo "WARNING: No server.watch ignore"
grep -r "@theme inline" frontend/css/
wc -c assets/theme*.css 2>/dev/null
gzip -c assets/theme*.css 2>/dev/null | wc -c
```
- [ ] `source(none)` present + `assets/` excluded from Vite server watch
- [ ] `@theme inline` block bridges Shopify CSS vars to Tailwind tokens
- [ ] Changing a color in Shopify admin changes the rendered Tailwind utility output
- [ ] CSS output size documented: raw ___KB, gzipped ___KB

#### JavaScript performance
```bash
for f in assets/theme*.js; do
  raw=$(wc -c < "$f"); gzip=$(gzip -c "$f" | wc -c)
  echo "$f: ${raw}B raw, ${gzip}B gzip"
done
grep -n '<script' layout/theme.liquid | grep -v 'defer\|async\|type="application/json"'
```
- [ ] Total JS ≤ 16KB gzipped (Dawn's target)
- [ ] All `<script>` tags use `defer` or `async`
- [ ] Web Components registered with `customElements.get()` guard

#### Core Web Vitals baseline
Run Lighthouse on homepage, product page, collection page:
- [ ] Performance score ≥ 60 (Shopify Theme Store minimum), target ≥ 80
- [ ] LCP image has `fetchpriority="high"` and is preloaded
- [ ] Below-fold images use `loading="lazy"`
- [ ] All images have explicit `width` and `height` attributes

### Sana verifies: Architecture, DX, and multi-client readiness

#### Plan vs. reality
- [ ] All planned phases delivered — document any deviations with reason
- [ ] Intentional cuts noted vs. accidental misses

#### File organization
```bash
# Check for "god files" (>500 lines)
find . -name "*.liquid" -exec sh -c \
  'lines=$(wc -l < "$1"); [ "$lines" -gt 500 ] && echo "$1: $lines lines"' _ {} \;

# Check for orphaned snippets
for f in snippets/*.liquid; do
  name=$(basename "$f" .liquid)
  refs=$(grep -r "$name" sections/ blocks/ layout/ templates/ snippets/ \
    --include="*.liquid" --include="*.json" -l 2>/dev/null | wc -l)
  [ "$refs" -eq 0 ] && echo "ORPHAN: $f"
done
```
- [ ] Consistent naming convention across all directories
- [ ] No files over 500 lines without justification
- [ ] No orphaned snippets

#### BodeElement base class
```bash
cat frontend/js/core/bode-element.js
```
- [ ] `customElements.get()` guard before `define()`
- [ ] `disconnectedCallback()` with AbortController cleanup
- [ ] `this.on()`, `this.select()`, `this.emit()`, `this.sectionId` implemented
- [ ] No Shadow DOM usage
- [ ] Shopify Design Mode handling present

#### Multi-client git readiness
- [ ] `.gitattributes` has `merge=ours` for brand-specific files
- [ ] `config/settings_data.json` and `templates/*.json` have documented merge strategy
- [ ] `frontend/brand/` directory exists for client-specific overrides
- [ ] README or CLAUDE.md documents the upstream/downstream workflow

#### Accessibility baseline
```bash
grep -r 'aria-label\|aria-expanded\|aria-controls\|role=' blocks/ sections/ | wc -l
grep -r 'alt=' snippets/ | wc -l
```
- [ ] Lighthouse accessibility ≥ 90 on homepage
- [ ] All interactive blocks have ARIA attributes
- [ ] Skip-to-content link exists in theme.liquid
- [ ] Focus trap implemented for modals/drawers
- [ ] Keyboard navigation works through all interactive elements

---

## Step 3: Cross-auditor integration testing

#### Full page load (Fast 3G, 4x CPU, cache disabled)
- [ ] Time to first meaningful paint: ___ms
- [ ] Total requests: ___ | Total size: ___KB

#### Theme editor round-trip
1. Add `content-blocks` section to homepage
2. Add `group` block with nested `heading` + `text` + `button`
3. Change colors, fonts, spacing
4. Save and preview
- [ ] All changes persist
- [ ] No console errors during editing

#### Cart flow end-to-end
1. Add to cart → drawer opens → update quantity → remove → checkout
- [ ] Each step works without full page reload
- [ ] Loading states visible during API calls

---

## Step 4: Deliver the verification report

### Build Scorecard
| Category | Planned | Actual | Status |
|----------|---------|--------|--------|
| Total files | ~116 | ___ | ✅/⚠️/❌ |
| Sections | ~25 | ___ | ✅/⚠️/❌ |
| Blocks | 12 | ___ | ✅/⚠️/❌ |
| Snippets | ~16 | ___ | ✅/⚠️/❌ |
| Theme Check errors | 0 | ___ | ✅/⚠️/❌ |
| JS bundle (gzip) | ≤16KB | ___KB | ✅/⚠️/❌ |
| Lighthouse perf (home) | ≥60 | ___ | ✅/⚠️/❌ |
| Lighthouse a11y (home) | ≥90 | ___ | ✅/⚠️/❌ |

### Execution Drift Report
Every deviation from the plan: what changed, why, improvement or regression.

### Defect Log

#### [ID]: [Title]
- **Severity**: Blocker | Critical | Major | Minor | Cosmetic
- **Auditor**: Kara | Marcus | Sana
- **File(s)**: [exact path and line number]
- **Evidence**: [command output or specific code]
- **Expected**: [what should happen]
- **Actual**: [what actually happens]
- **Fix**: [specific remediation steps]
- **Effort**: Quick (minutes) | Small (hours) | Medium (days)

### What's Working Well
3-5 specific things the build got right. Protects good decisions from future regression.

### Recommended Next Steps
1. **Fix before client handoff** (blockers and critical defects)
2. **Fix within first week** (major defects and performance gaps)
3. **Track for v2.1** (improvements and minor defects)

---

## Rules

1. **Test, don't assume** — Run every command. Click every button. If untestable (e.g., Lighthouse requires a live URL), say "UNTESTABLE — requires live deployment."
2. **Numbers, not opinions** — "The JS bundle is too big" is not a finding. "theme.js is 24KB gzipped, 8KB over the 16KB target, with 6KB from the carousel component" is a finding.
3. **File paths are mandatory** — Every finding must reference a specific file and line number.
4. **Compare to the plan** — The pre-build audit established expectations. Measure against them.
5. **Test the unhappy paths** — Zero blocks, no product images, empty cart, JavaScript disabled. Edge cases reveal the most important bugs.
