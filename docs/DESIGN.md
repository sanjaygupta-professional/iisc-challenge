---
name: BhāratBrain Team Brief
description: India's dementia research briefing system — mission clarity for the May 2026 IISc challenge.
colors:
  midnight-indigo: "oklch(22% 0.085 270)"
  midnight-indigo-mid: "oklch(30% 0.075 268)"
  midnight-indigo-light: "oklch(40% 0.065 265)"
  saffron-flag-gold: "oklch(74% 0.16 62)"
  saffron-flag-gold-pale: "oklch(95% 0.045 78)"
  carmine-signal: "oklch(54% 0.19 352)"
  carmine-signal-pale: "oklch(94% 0.04 355)"
  field-green: "oklch(52% 0.12 142)"
  field-green-pale: "oklch(94% 0.04 142)"
  page-ground: "oklch(99% 0.005 80)"
  problem-ground: "oklch(97% 0.008 85)"
  dark-ink: "oklch(18% 0.025 270)"
  muted-ink: "oklch(50% 0.02 265)"
  light-ink: "oklch(88% 0.01 260)"
  border-dim: "oklch(88% 0.01 270)"
typography:
  display:
    fontFamily: "'Barlow Condensed', 'Noto Sans Devanagari', sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "'Barlow Condensed', 'Noto Sans Devanagari', sans-serif"
    fontSize: "clamp(2rem, 4.5vw, 3.2rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "normal"
  title:
    fontFamily: "'Barlow Condensed', 'Noto Sans Devanagari', sans-serif"
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)"
    fontWeight: 700
    lineHeight: 1.15
  body:
    fontFamily: "'Manrope', 'Noto Sans Devanagari', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "'Barlow Condensed', sans-serif"
    fontSize: "0.72rem"
    fontWeight: 600
    letterSpacing: "0.2em"
rounded:
  xs: "4px"
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  pill: "999px"
spacing:
  card: "24px"
  card-lg: "28px"
  section: "clamp(60px, 10vh, 100px)"
components:
  button-primary:
    backgroundColor: "{colors.saffron-flag-gold}"
    textColor: "{colors.midnight-indigo}"
    rounded: "{rounded.sm}"
    padding: "13px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "oklch(68% 0.18 62)"
    textColor: "{colors.midnight-indigo}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.light-ink}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
  button-ghost-hover:
    backgroundColor: "transparent"
    textColor: "{colors.saffron-flag-gold}"
  tech-tag-saffron:
    backgroundColor: "oklch(22% 0.05 72)"
    textColor: "{colors.saffron-flag-gold}"
    rounded: "{rounded.xs}"
    padding: "3px 10px"
  tech-tag-green:
    backgroundColor: "oklch(22% 0.07 142)"
    textColor: "{colors.field-green}"
    rounded: "{rounded.xs}"
    padding: "3px 10px"
  tech-tag-pink:
    backgroundColor: "oklch(22% 0.07 352)"
    textColor: "{colors.carmine-signal}"
    rounded: "{rounded.xs}"
    padding: "3px 10px"
---

# Design System: BhāratBrain Team Brief

## 1. Overview

**Creative North Star: "The Mission Intelligence Room"**

BhāratBrain's design is a mission brief, not a product page. Imagine a room where India's leading brain researchers gather before a field deployment: data pinned to walls, every claim sourced, urgency visible in the layout without needing to be stated. The site functions the same way. Deep indigo grounds everything, saffron marks what demands attention, carmine flags risk and urgency, field green signals readiness. Devanagari sits at the top not as decoration but as identity.

The tone follows PRODUCT.md: "urgent, principled, rooted." This means no softness, no gradient blobs, no hero metrics. It means a page that looks like it was built by people who understand the problem deeply, not by a design agency hired to look impressive. Information density is a feature. Whitespace is rationed like field resources.

This system explicitly rejects: Webflow/SaaS landing page templates, startup pitch deck aesthetics (gradient blobs, glassmorphism), government/NGO plain-text sites, academic paper layouts, and generic "AI company" dark purple/teal palettes. Those are documented in PRODUCT.md as anti-references; they are prohibited here by name.

**Key Characteristics:**
- Deep midnight indigo base, saffron as the singular signal color
- Full palette strategy: four named accent roles used deliberately, never decoratively
- Barlow Condensed for all display and label text; Manrope for body prose
- Noto Sans Devanagari always in the font stack; script as identity, not ornament
- Flat tonal depth: no shadows, layering through background tints and opacity-reduced borders
- Components are tactical: buttons are commands, tags are classifications, sections are briefing blocks

## 2. Colors: The Flag + Field Palette

The palette is Flag + Field — the three colors of India's Tricolor (saffron, white, green) recontextualized as signal, ground, and status, anchored to a midnight indigo that reads as authority and depth.

### Primary
- **Saffron Flag Gold** (oklch(74% 0.16 62)): The decisive accent. Used for primary CTAs, active nav state, section titles on dark surfaces, key data numbers, and hover states on ghost elements. Scarcity is the signal.

### Secondary
- **Carmine Signal** (oklch(54% 0.19 352)): Used for urgency, risk, and specificity. Section eyebrows on the problem section, idea-type labels, alert-level callouts. Not error red — the red thread in a briefing map.

### Tertiary
- **Field Green** (oklch(52% 0.12 142)): Used for readiness, confirmation, and ecological context. Architecture chips, "ready to prototype" indicators, environmental research cards.

### Neutral
- **Midnight Indigo** (oklch(22% 0.085 270)): Primary dark surface. Hero, solution section, nav bar. Not black — tinted 270° so it carries faint violet depth.
- **Midnight Indigo Mid** (oklch(30% 0.075 268)): Secondary surface layer for dark-section cards.
- **Midnight Indigo Light** (oklch(40% 0.065 265)): Borders and ghost outlines on dark surfaces.
- **Page Ground** (oklch(99% 0.005 80)): Off-white page background. Warm-tinted toward 80°, never pure white.
- **Problem Ground** (oklch(97% 0.008 85)): Slightly more saturated off-white for alternating light sections.
- **Dark Ink** (oklch(18% 0.025 270)): Body text on light sections.
- **Muted Ink** (oklch(50% 0.02 265)): Secondary text, captions, metadata on light sections.
- **Light Ink** (oklch(88% 0.01 260)): Body text and labels on dark surfaces.

**The Rarity Rule.** Saffron appears on no more than 15% of any screen. Carmine and Field Green appear only where they carry functional meaning (risk, readiness, ecological context). Accents are rare because they need to be signals.

**The No-Pure-White Rule.** Never use #fff or oklch(100% 0 0). Every surface carries at least chroma 0.005 toward the brand hue. Pure white breaks the intelligence-room atmosphere.

## 3. Typography

**Display Font:** Barlow Condensed (with Noto Sans Devanagari, sans-serif)
**Body Font:** Manrope (with Noto Sans Devanagari, sans-serif)
**Label Font:** Barlow Condensed (also used for nav links, tech tags, section eyebrows, chip text)

**Character:** Barlow Condensed carries military brevity and the compression of a printed field manual. Manrope is geometric but warm, readable at density. Together they read as: a document that was designed, not templated.

### Hierarchy
- **Display** (700, clamp(2.5rem, 5vw, 4rem), line-height 1): Hero headlines only. Large, compressed, authoritative. Saffron on dark backgrounds.
- **Headline** (700, clamp(2rem, 4.5vw, 3.2rem), line-height 1.1): Section titles. Color varies by section register — saffron or warm-white on dark, dark-ink on light.
- **Title** (700, clamp(1.8rem, 4vw, 2.8rem), line-height 1.15): Sub-section headers, feature names, architecture layer names. Barlow Condensed.
- **Body** (400, 1rem, line-height 1.7): Manrope. All descriptive text. Max line length 65–75ch.
- **Label** (600, 0.72rem, letter-spacing 0.2em, uppercase): Barlow Condensed. Section eyebrows, tech tags, chip classifications. The voice of taxonomy.

**The Devanagari Rule.** Noto Sans Devanagari is always second in the font stack for both display and body fonts. Devanagari text renders in the same visual weight and color as adjacent Latin — never subordinated, never styled separately.

**The Compression Rule.** Barlow Condensed is prohibited as body text. Its compressed forms break readability at paragraph lengths. Use it only for display (headings, labels, eyebrows) where brevity and authority are the goal.

## 4. Elevation

This system is flat by design. No drop shadows appear anywhere in the page. Depth is expressed through tonal layering: cards use oklch(18% 0.06 270 / 0.6) — opacity-reduced indigo — over the section's oklch(22% 0.085 270) base; borders use oklch(40% 0.08 270 / 0.4) at partial opacity so they read as structural, not decorative. The problem section shifts to oklch(97% 0.008 85) as a tonal ground shift — no shadow boundary, just temperature change.

**The Flat Authority Rule.** Surfaces do not lift. If an element needs to feel important, its content weight carries it. Drop shadows would make this page feel like a product landing page; flatness signals that the data is doing the work.

## 5. Components

### Buttons
- **Shape:** Gently rectangular (6px radius). Not pill-shaped — these are commands, not invitations.
- **Primary:** Saffron Flag Gold background, Midnight Indigo text, Barlow Condensed 600, 0.88rem, 0.04em letter-spacing, uppercase, 13px 28px padding. Hover: background darkens to oklch(68% 0.18 62) + translateY(-2px). Transition: 0.2s background, 0.15s transform.
- **Ghost:** Transparent background, 1px border (oklch(40% 0.065 265)), Light Ink text, same size. Hover: Saffron Flag Gold border and text. Transition: border-color + color 0.2s.

### Tech Tags
- **Style:** Three color-coded variants (saffron, green, carmine). Each: dark tinted background at the tag's hue (~22% lightness), matching border at ~35% lightness, accent as text color. Barlow Condensed 600, 0.72rem, uppercase, 0.04em tracking. 4px radius. 3px 10px padding.
- **Assignment rule:** Saffron tags = fusion/data tech; Green tags = architecture/infrastructure; Carmine tags = risk/research classification. Assignments are not interchangeable.

### Cards / Research Blocks
- **Background:** oklch(18% 0.06 270 / 0.6) — 60% opacity midnight indigo tint over section surface.
- **Border:** Full four-side border, oklch(40% 0.08 270 / 0.4). Never side-stripe only.
- **Corner style:** 1rem radius on research cards; 10px (0.625rem) on architecture layers and dataset blocks.
- **Internal padding:** 2rem on research cards, 28px on architecture layers.
- **Shadow:** None. See Elevation section.

### Navigation
- **Style:** Midnight Indigo bar, fixed height 56px. Brand mark in Noto Sans Devanagari + Barlow Condensed, saffron. Nav links in Manrope 400, Light Ink, 0.9rem. Active state: Saffron Flag Gold, no underline or indicator line.
- **Deadline badge:** Barlow Condensed 700, saffron, uppercase.
- **Hover:** color 0.2s transition to saffron.

### Section Eyebrow
- **Pattern:** Barlow Condensed 600, 0.72rem, 0.2em letter-spacing, uppercase, section-specific accent (saffron on dark sections; carmine or green on content sections). Appears above section title.
- **Rule:** Eyebrows classify, they don't describe. "The Solution", "The Problem", "Research Foundations" — compressed noun phrases only.

### Progress Indicators
- **Track:** 4px height, Border Dim (oklch(88% 0.01 270)).
- **Fill:** 4px, Saffron Flag Gold. Transition: width 1.2s cubic-bezier(0.22, 1, 0.36, 1).
- **Label:** Barlow Condensed 700, 1rem, saffron, alongside the track.

## 6. Do's and Don'ts

### Do:
- **Do** use Saffron Flag Gold on at most 15% of any screen surface. Scarcity is the signal.
- **Do** use Barlow Condensed for all display text, labels, eyebrows, and chip classifications.
- **Do** use Manrope exclusively for body prose — never Barlow Condensed at paragraph lengths.
- **Do** include Noto Sans Devanagari second in every font stack. Devanagari renders at the same weight and color as adjacent Latin.
- **Do** express depth through tonal background shifts and partial-opacity borders, never shadows.
- **Do** use full four-side borders on all cards. Never side-stripe only.
- **Do** assign color functionally: saffron = signal/CTA, carmine = urgency/risk, green = readiness/ecology.
- **Do** write section eyebrows as compressed noun phrases: uppercase, Barlow Condensed, 0.2em tracking.
- **Do** keep body text at 65–75ch max line length.
- **Do** tint every neutral — including backgrounds and text — toward hue 270° at minimum chroma 0.005.

### Don't:
- **Don't** use Webflow/SaaS landing page templates, gradient blobs, or glassmorphism. These are named anti-references in PRODUCT.md.
- **Don't** use startup pitch deck aesthetics: no hero metrics with big numbers on gradient backgrounds.
- **Don't** use government/NGO plain-text site aesthetics: no form-heavy layouts, no default blue hyperlinks.
- **Don't** use generic "AI company" dark purple/teal palettes. The midnight indigo here is specific (270° hue, 0.085 chroma); it is not "AI dark mode."
- **Don't** use `border-left` greater than 1px as a colored accent stripe on cards or callouts. Use full borders, background tints, leading numbered labels, or nothing.
- **Don't** use gradient text (`background-clip: text` with a gradient). Use a single solid accent color.
- **Don't** use `#000` or `#fff`. Every surface is tinted toward hue 270° at minimum chroma 0.005.
- **Don't** use identical card grids with the same icon+heading+text structure repeated endlessly.
- **Don't** use Carmine Signal for body text. It is a signal color only: risk callouts, urgency flags, research-type classification.
- **Don't** use academic paper layout: no Times New Roman, no single-column dense text walls, no footnote-style citations inline.
