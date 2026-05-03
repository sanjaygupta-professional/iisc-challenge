# BhāratBrain Team Rally Video — Generation Prompt

**Purpose:** ~55-second cinematic-infographic team rally video. Audience: our own team (Bangalore + non-Bangalore subteams + recruits). Goal: communicate goal, vision, what we've done, where we're heading, and create excitement to engage.

**Target model:** Veo 3 (preferred — generates synced audio/score). Works on Sora, Kling 1.6, Runway Gen-4 with audio added in post.

**Format:** 8 shots × ~7s each = ~55s. Each shot = one model generation. Stitch in CapCut / DaVinci / Premiere.

---

## A. GLOBAL STYLE BLOCK — prepend or reference for every shot

```
Style: cinematic documentary meets motion-graphic infographic. Hybrid of
BBC Earth aerial cinematography, Apple-keynote data visualization, and
Christopher Nolan-style emotional gravitas. Filmic 2.39:1 anamorphic
aspect ratio, shallow depth of field on human shots, crisp 4K clarity
on data shots.

Color palette: warm saffron-gold (sunrise, India identity) anchored
against deep indigo-navy (clinical, scientific) with accents of soft
ASHA-pink (community-health-worker uniform) and millet-green
(agriculture / rural). High contrast, rich blacks, warm midtones.

Typography on screen: bilingual Devanagari + Latin, clean modern
sans-serif (think Inter or IBM Plex), large, kerned wide. White text on
darkened lower thirds.

Camera language: confident slow movement — long push-ins on faces,
parallax dollies across landscapes, smooth crane drops onto subjects,
macro pulls from data into reality. No shaky-cam. No quick cuts inside
shots.

Pacing: each shot holds for ~6–7 seconds. Internal motion within shot,
not between. The overall edit breathes.

Audio bed: contemplative-to-triumphant cinematic score — sitar +
tabla + strings + subtle electronic pulse. Hans Zimmer meets A.R.
Rahman. Builds across the 55 seconds from solo instrument to full
ensemble.

Tone: serious, hopeful, urgent. Not corporate. Not flashy. Earned.
```

---

## B. SHOT LIST (paste each block into the model, one at a time)

### SHOT 1 — Hook: the invisible burden (0:00–0:07)

```
Aerial drone shot at golden hour, 200 metres altitude, slowly
descending and pushing forward over a vast Indian landscape — patchwork
of farmland, dirt roads, scattered villages with terracotta and
tin-roofed houses. As we descend, faint glowing dots appear over
homes, hundreds of thousands of them, like fireflies. Most dots fade
to dim grey one by one — the undiagnosed — while a few stay bright.

Centred lower-third text fades in, large, bilingual:
"8.8 million Indians live with dementia."
Beat. Then below it:
"~80% never diagnosed."

Light: golden-hour, low warm sun raking from frame left, deep blue
shadows in the valleys.
Camera: slow forward dolly + gentle descent, no rotation.
Audio: solo bansuri flute, breath-y, single sustained note that holds
through the shot. Sub-bass swell underneath at 5s.
```

### SHOT 2 — Why India: the unique convergence (0:07–0:14)

```
Animated infographic in motion-graphic style, set against a deep
indigo-navy background with soft saffron particles drifting upward.
Four glowing nodes rise into frame in sequence (1.2s apart) and connect
with luminous saffron lines into a tetrahedron:

1. "101 million" — diabetes (icon: blood-glucose drop)
2. "SANSCOG / TLSA" — longitudinal cohort (icon: pulse line)
3. "1 million ASHA workers" — community health (icon: stylised
   pink-saree silhouette)
4. "22 languages" — multilingual (icon: Devanagari + Tamil + Bengali
   glyphs morphing)

When all four connect, the tetrahedron rotates once and locks. Centre
text resolves:
"Only India has all four."

Camera: locked-off centre frame with subtle parallax breathing.
Light: rim light on each icon as it appears, glow trails between nodes.
Audio: tabla enters at shot start, layering rhythmic pulse; soft string
pad joins on the lock at 6s. One bell-tone on the final text resolve.
```

### SHOT 3 — Western AI fails Indian brains (0:14–0:21)

```
Split-screen 50/50. Left: clean clinical Western lab — a high-field
3-Tesla MRI scanner, sterile fluorescent light, English text "ADNI"
glowing on a monitor. Right: a small Karnataka primary health centre,
warm afternoon light through a window, an elderly woman in a cotton
sari sitting opposite an ASHA worker in pink, who is holding a
smartphone. The two halves are colour-graded oppositely — left cool
blue-cyan, right warm saffron-amber.

A vertical seam of fine red text scrolls down the centre dividing line:
"trained on 0.1% of Indians" (small, barely-readable, then fades).

Lower-third text resolves crisply:
"Western AI fails Indian brains."

Camera: locked-off, both halves have subtle in-frame motion (scanner
hum on left; ASHA gently smiling on right). Slow push-in on right half
across the 7s, so by the end the right side dominates.
Audio: the cool-side music hollows out (eq notch); warm-side sitar
drone fades up.
```

### SHOT 4 — Our journey so far (0:21–0:28)

```
Motion-graphic montage. Camera flies through a 3D space of floating
documents, charts, and SVG-style architecture diagrams arranged like a
constellation — research papers, scoring rubrics, the BhāratBrain
architecture diagram (layered: Multilingual Mirror → Fusion Model →
Federated Learning), option-comparison bar charts. As the camera
weaves between them, key phrases briefly highlight in saffron:
"4 research threads", "5 solutions", "rubric: 22 criteria",
"BhāratBrain — score 96.2".

Documents are flat papers in 3D space, slightly translucent, lit from
behind. Camera passes through without touching them. Final beat: all
documents converge into a single luminous diagram in centre frame —
the BhāratBrain three-layer architecture — and the name resolves:

"भारत-Brain"  (Devanagari + Latin, large, centred)

Camera: continuous flying dolly with gentle bank, ending in a
pull-back-and-centre on the final architecture.
Light: each document self-lit from behind, ambient indigo void.
Audio: percussive layer enters — tabla + light electronic pulse,
quickening across the shot. Piano arpeggio joins at 5s. Resolves on a
single sustained chord at the title card.
```

### SHOT 5 — BhāratBrain in the field (0:28–0:36)

```
Cinematic ground-level shot. A young ASHA worker in a clean pink saree
sits on a low wooden bench in the courtyard of a rural Karnataka
home, beside an elderly woman in her late 60s wearing a soft cotton
sari. Late afternoon, golden warm light, palm trees in soft focus
behind. The ASHA worker holds a mid-range Android smartphone showing a
clean app interface with a microphone icon pulsing softly. The elderly
woman is speaking — we see her lips moving — and the phone screen
shows a real-time waveform plus on-screen Kannada text being
transcribed.

Subtle UI overlay (semi-transparent, not dominating):
- waveform top-right
- "Kannada · verbal fluency · 00:42" small label
- HbA1c glucose-meter value glowing in lower corner

Camera: slow push-in from over the ASHA's shoulder, ending on a
close-up of the elderly woman's face — calm, dignified, present. Eyes
in sharp focus.
Light: golden-hour rim from frame-right, soft fill from sky.
Audio: ambient village (distant birds, soft wind in palms), score
gentles to pad-only. The elderly woman's voice is faintly audible in
Kannada (no subtitle needed — the sound itself carries).
```

### SHOT 6 — Federated, multilingual, scaled (0:36–0:44)

```
Aerial pull-back from the ASHA-elder scene of Shot 5, rapidly rising
to satellite-eye view of India. As we ascend, dozens then hundreds
then thousands of small saffron points light up across the country —
each is an ASHA worker. Faint connecting lines pulse between regional
hub-points (PHC clusters), signalling federated-learning model
updates flowing without raw data leaving each site. The lines avoid
direct point-to-point — they always go through hubs.

Lower-third text resolves in three beats (1.8s each):
1. "1 million ASHA workers."
2. "22 languages, native, not translated."
3. "Federated. Privacy-first."

Camera: continuous vertical pull-back with very slight rotation, never
disorienting.
Light: India glows warm at ground, deepening to indigo space at the
top of the shot. Saffron points retain warm hue against the dark.
Audio: full ensemble enters — strings + sitar + tabla + low brass
swell. Builds toward triumphant but does not yet resolve.
```

### SHOT 7 — The team and the window (0:44–0:52)

```
Quick montage, 4 micro-shots within the 7 seconds (~1.7s each), all
shot in the same warm-documentary style:

(a) Hands typing on a laptop in a low-lit room, code on screen
    reflecting in glasses worn by an unseen team member.
(b) A whiteboard close-up, marker drawing arrows between three boxes
    labelled "Multilingual Mirror", "Metabolic Sentinel", "ASHA
    Companion", a hand finishing the last arrow.
(c) Two team members in a video call, one in Bangalore daylight, one
    in evening light elsewhere, both leaning forward, animated.
(d) A calendar grid macro shot, a saffron marker circling May 20,
    pulling away to reveal the date.

Lower-third text resolves on the last beat:
"20 days. One proposal. ₹2 crore."

Camera: each micro-shot is a locked-off close-up with shallow DoF and
internal motion — no big camera moves.
Light: each shot keeps warm tungsten / lamp-light feel.
Audio: percussion drops to half-time briefly, then snaps back at the
date reveal. Vocal "ah" choir layer enters quietly.
```

### SHOT 8 — Title and call (0:52–0:55)

```
Black background, slow particle drift in saffron and indigo. Title
resolves in two layers:

Top, large, centred, Devanagari:
   भारत-Brain

Below, smaller, all-caps Latin, kerned wide:
   BHĀRATBRAIN

Below that, tagline in lighter weight:
   "What we couldn't do alone, we're building together."

Below that, smallest, almost a whisper:
   IISc CBR · 2026 AI Challenge for Healthy Brain Aging

Camera: locked, particles drifting upward at parallax depths.
Light: title self-lit, soft saffron glow rim.
Audio: full ensemble lands a single resolved chord, sustains, then
decays into bansuri solo for the final 1.5s.
```

---

## C. AUDIO / MUSIC DIRECTION (if model doesn't generate audio)

If using Sora / Kling / Runway, generate visuals only and score in post.
Reference tracks for the composer / library search:

- A.R. Rahman — *Bombay Theme* (emotional anchor)
- Hans Zimmer — *Time* from Inception (build structure)
- Nitin Sawhney — *Nadia* (Indian-cinematic fusion)
- Ravi Shankar / Anoushka Shankar — sitar texture reference

Structure: solo bansuri (0–7s) → tabla layer (7–21s) → strings enter
(21–36s) → full ensemble (36–52s) → resolve + bansuri tail (52–55s).

No vocals with words. Optional wordless choir "ah" pad in shots 6–7.

---

## D. ASSEMBLY NOTES

- Generate each shot 2–3 times with same prompt; pick best take.
- Cohesion test: place shots 3, 5, 7 side-by-side first — these are
  the human shots. If their colour grade and skin tones don't match,
  re-grade in post (LUT) before adding the data/animation shots.
- For the bilingual text (Devanagari + Latin): generate text in post,
  not in the model. Current video-gen models still hallucinate
  Devanagari glyphs. Use After Effects or Premiere title tools.
- Total runtime target: 52–58 seconds. If a shot runs long, trim from
  Shot 4 (data montage) — it has the most internal flex.
- Export 1080p H.264 for WhatsApp/Slack share with team; 4K ProRes
  for any future external use.

---

## E. ITERATION HOOKS

If the first cut feels off, try these in order:

1. **Too corporate?** Slow Shot 1 down 10%, add longer breath before
   Shot 8 title resolve.
2. **Too somber?** Brighten Shot 5 grade, raise tabla mix in Shots
   4 + 6.
3. **Too info-dense?** Cut Shot 4 entirely (saves 7s), let the
   journey be implied. Tighter and more emotional.
4. **Too long?** Drop Shot 7 micro-shot (b) — the whiteboard. Saves
   ~1.7s and the calendar moment carries the urgency alone.
