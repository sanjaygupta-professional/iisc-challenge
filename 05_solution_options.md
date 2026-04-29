# IISc AI Challenge — Solution Space Exploration
## Design Thinking: Diverge Phase — 5 Distinct Options

**Purpose:** Before converging on a proposal, explore meaningfully different approaches.  
Each option is a coherent, self-contained solution strategy — different users, different tech, different theory of change.  
**Date:** April 26, 2026  

---

## How to Read This Document

Each option is scored on 5 dimensions (1–5 stars):

| Dimension | What it measures |
|-----------|-----------------|
| **Novelty** | How original is this? Has it been done before? |
| **India-fit** | How specifically does this leverage India's unique context? |
| **Team Fit** | How well does this play to the team's LLM/GenAI/architecture strengths? |
| **Impact Potential** | How many lives could this reach? How much change? |
| **Proposal Strength** | Will judges (Innovation, Usability, Impact, Relevance) be impressed? |

---

---

# OPTION 1: The ASHA Companion
### *"A clinical co-pilot for India's frontline health workers"*

---

## The Core Idea

Give every ASHA worker an AI co-pilot that listens, observes, and quietly computes cognitive risk while the ASHA does what she already does — visit homes, collect health updates, talk to families. The AI never takes over; it supports. At the end of the visit, the ASHA sees a simple risk flag: green (monitor), orange (follow up), red (refer now).

**The theory of change:** India's diagnostic gap exists not because the knowledge doesn't exist, but because it can't travel to 600,000 villages. The ASHA Companion puts clinical intelligence in the hands of the person who is already there.

---

## How It Works — The User Journey

```
ASHA visits a 62-year-old woman in rural Karnataka
    ↓
Opens BhāratBrain app (offline-capable, Kannada interface)
    ↓
Enters what she has:
  • Last PHC visit blood report (HbA1c: 7.8, uploaded photo → OCR)
  • Answers 5 spoken questions in Kannada (family history, sleep, mood)
  • Conducts 3-minute spoken cognitive mini-test (word recall, date orientation)
  • Voice recording processed on-device by multilingual LLM
    ↓
AI synthesises all inputs (missing ones = ok, model degrades gracefully)
    ↓
Output on screen:
  🟡 MODERATE RISK
  "Memory recall score below expected for age and education.
   HbA1c elevated — diabetes is a risk factor.
   Recommend follow-up cognitive test at PHC within 30 days."
    ↓
ASHA records visit. Data encrypted, stored locally.
Federated model update occurs silently in background (WiFi sync).
```

---

## Technical Approach

- **Input layer:** OCR for blood reports, on-device ASR for Indian languages, brief structured cognitive test
- **Core model:** Missing-modality robust fusion model (blood + cognitive + speech + demographics)
- **LLM layer:** Multilingual scoring of spontaneous speech; plain-language output generation
- **T2D pathway:** HbA1c/glucose triggers elevated weighting of metabolic risk features
- **Training data:** SANSCOG (rural) + LASI-DAD for Indian population benchmarks
- **Deployment:** Offline-first Android app; federated learning for continuous improvement
- **Privacy:** DPDP Act 2023 compliant; no raw data leaves the device

---

## Scores

| Novelty | India-Fit | Team Fit | Impact Potential | Proposal Strength |
|---------|-----------|----------|-----------------|-------------------|
| ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ |

**Why it scores 5/5 on impact:** 1 million+ ASHA workers × ~100 households each = potential reach of 100 million people. No other Alzheimer's AI system in the world is designed for this channel.

---

## The Risk

Browser automation breaks; federated learning at scale is complex engineering. For a proposal, the architecture must be compelling even if the implementation details are hand-waved.

---

---

# OPTION 2: The Cognitive Digital Twin
### *"Model the brain's expected aging curve, detect when someone deviates from it"*

---

## The Core Idea

Instead of asking "does this person have Alzheimer's today?" ask "is this person's brain aging faster than it should be?" Build a **digital twin** of each patient's cognitive trajectory using longitudinal data — what a healthy 60-year-old from rural Karnataka *should* score on memory tests, given their education, gender, lifestyle, and metabolic profile. Then detect when someone's actual scores diverge from their predicted trajectory. Early deviation = early risk signal.

**The theory of change:** Early Alzheimer's is invisible because we compare patients to population averages. A digital twin compares each person to their own expected self — a fundamentally more sensitive signal.

---

## How It Works — The User Journey

```
Patient visits PHC every 6 months for routine checkup
    ↓
Cognitive mini-assessment takes 8 minutes (administered by nurse/MBBS)
Results added to longitudinal profile
    ↓
Digital Twin Model computes:
  "Expected score for this person at this age" (based on SANSCOG cohort data)
  "Actual score today"
  "Rate of change vs. previous visit"
    ↓
Trajectory analysis:
  📈 On track — no action
  📉 Declining faster than expected — flag for detailed assessment
  📊 Accelerating decline — urgent referral
    ↓
Over time: personalized trajectory + intervention response tracking
```

---

## Technical Approach

- **Core model:** Longitudinal mixed-effects model + deep learning on SANSCOG time-series data
- **Digital twin construction:** Train on healthy aging trajectories from SANSCOG to establish expected curves by age/sex/education/metabolic profile
- **Deviation detection:** Anomaly detection on individual trajectory vs. cohort-matched expected curve
- **Inputs:** Cognitive test scores (serial), blood markers (HbA1c, basic metabolic panel), lifestyle factors
- **No MRI required** for the screening layer; MRI used only for confirmation at Level A
- **Training data:** SANSCOG 10-year longitudinal dataset is exactly what's needed — this is the unique dataset

---

## Scores

| Novelty | India-Fit | Team Fit | Impact Potential | Proposal Strength |
|---------|-----------|----------|-----------------|-------------------|
| ★★★★★ | ★★★★ | ★★★ | ★★★★ | ★★★★★ |

**Why it's novel:** Digital twins for brain aging have been proposed in high-resource settings (full MRI, biomarker panels). Building one that works on *serial cognitive tests + basic blood work* for an Indian rural cohort is genuinely new. The SANSCOG longitudinal design was built for exactly this kind of analysis.

**Why team fit is 3/5:** This approach requires strong time-series modeling skills and deep familiarity with mixed-effects statistical models — more statistics-heavy than LLM-heavy. The team would need to lean on the clinical collaborator.

---

## The Risk

Requires truly longitudinal data — a patient must be seen multiple times before the model becomes useful. First-visit patients get no benefit. This is a fundamental limitation for a screening-first deployment.

---

---

# OPTION 3: The Metabolic Risk Sentinel
### *"Use India's diabetes crisis as the entry point to Alzheimer's detection"*

---

## The Core Idea

Don't build a new Alzheimer's screening system. Instead, **embed Alzheimer's early warning into India's existing diabetes management infrastructure.** Every diabetic patient in India already gets periodic HbA1c, glucose, and metabolic panel tests. Add cognitive screening to those visits. The AI flags which diabetics are on a T2D-to-Alzheimer's trajectory before symptoms appear.

**The theory of change:** The hardest problem in Alzheimer's detection is getting people to come in for brain-related assessments — there's stigma, low awareness, and no clear symptom trigger. But diabetics *already come in regularly for metabolic monitoring.* Piggyback on that system.

---

## How It Works — The User Journey

```
55-year-old male diabetic in Bengaluru urban PHC
Routine quarterly HbA1c checkup
    ↓
Nurse runs standard metabolic panel (HbA1c, fasting glucose, BP, BMI)
AI flags: "This patient's metabolic profile + age matches T2D-to-dementia risk pattern"
    ↓
Nurse adds: 3-minute spoken cognitive screen (word recall + orientation)
    ↓
Risk Sentinel Model:
  Input: HbA1c trend (3 visits), fasting glucose, BMI, cognitive scores
  Output: "Metabolic-Cognitive Risk Index" (MCRI score)
    ↓
  MCRI < 30: Continue standard diabetes monitoring
  MCRI 30–70: Schedule dedicated cognitive evaluation
  MCRI > 70: Neurology referral + family counseling
    ↓
Patient enrolled in Cognitive-Metabolic Monitoring Programme
Serial tracking of both metabolic AND cognitive markers together
```

---

## Technical Approach

- **Core model:** Multi-task learning — predicts both metabolic progression AND cognitive decline jointly; correlation between them is the signal
- **Key feature:** HbA1c trajectory (not just current value) as the primary risk driver
- **Supporting features:** Insulin resistance proxies (HOMA-IR), age, sex, education, family history
- **Novel contribution:** The "Metabolic-Cognitive Risk Index" (MCRI) — a composite score India could adopt nationally
- **Training data:** SANSCOG/TLSA biochemical panels + cognitive longitudinal data; LASI-DAD for population calibration
- **Deployment:** Integrates with existing PHC EHR systems; minimal workflow change for healthcare workers

---

## Scores

| Novelty | India-Fit | Team Fit | Impact Potential | Proposal Strength |
|---------|-----------|----------|-----------------|-------------------|
| ★★★★ | ★★★★★ | ★★★★ | ★★★★★ | ★★★★ |

**Why impact is 5/5:** 101 million diabetics in India, mostly under active monitoring. Embedding cognitive risk assessment into diabetes care pathways is the highest-leverage intervention possible — it requires no behaviour change, no new awareness campaigns, no new visit types.

**Why novelty is 4/5:** The T2D-Alzheimer's connection is well-documented in biochemistry. The novelty is the *integrated care pathway model* and the India-specific MCRI score — the mechanism is known but the clinical tool doesn't exist.

---

## The Risk

Success depends on buy-in from India's diabetes care system (NHM, AYUSH, district hospitals). A research proposal can propose this architecture, but real-world deployment requires health system partnerships that are outside a team's control.

---

---

# OPTION 4: The India Alzheimer's Foundation Model
### *"Build the open-source AI layer that every Indian researcher and clinician can build on"*

---

## The Core Idea

Don't build one clinical tool. Build the **foundational AI model** that makes all Indian Alzheimer's clinical tools possible. A large pre-trained model, trained on SANSCOG/TLSA + LASI-DAD + Indian language cognitive data, fine-tuned for Indian population characteristics — and released open-source for the entire Indian research community.

**The theory of change:** The reason Indian Alzheimer's AI is 10 years behind global research is not lack of intelligence or effort — it's lack of a shared foundation. Every Indian researcher starts from scratch, importing ADNI-trained Western models and hoping they generalise. A shared Indian foundation model changes this permanently.

---

## How It Works — The Ecosystem

```
Foundation Model: "BrainBharat-1B"
    ↓
Trained on:
  • SANSCOG/TLSA (IISc CBR) — blood + cognitive + MRI
  • LASI-DAD — 4,096 Indian patients, 12 languages
  • AI4Bharat speech corpora — 40 Indian languages
  • Indic clinical NLP corpora
    ↓
Fine-tunable for:
  ┌──────────────────────────────────────────────────────┐
  │ Hospital tool → MRI + full biomarker panel           │
  │ PHC tool → Blood + cognitive, no MRI                 │
  │ ASHA tool → Voice + basic observations only          │
  │ Research tool → Biomarker discovery, longitudinal    │
  │ Policy tool → Population-level risk mapping          │
  └──────────────────────────────────────────────────────┘
    ↓
Released as:
  • Open weights on HuggingFace (Indian Alzheimer's AI Hub)
  • API for Indian hospitals and health tech companies
  • Benchmark suite for measuring India-specific model performance
```

---

## Technical Approach

- **Architecture:** Multimodal transformer pre-trained on tabular + text + audio Indian health data
- **Pre-training tasks:** Masked clinical record prediction, cognitive score regression, longitudinal trajectory forecasting
- **Fine-tuning:** Resource-efficient (LoRA/adapter layers) so hospitals and researchers can customise without retraining
- **Benchmark:** "IndiaBrain-Bench" — evaluation suite on held-out SANSCOG/TLSA data to measure how well any model performs on Indian population
- **Distribution:** Open-source, HuggingFace + IISc research portal

---

## Scores

| Novelty | India-Fit | Team Fit | Impact Potential | Proposal Strength |
|---------|-----------|----------|-----------------|-------------------|
| ★★★★★ | ★★★★★ | ★★★★ | ★★★★★ | ★★★★ |

**Why it's the "big swing":** This is not a tool — it's infrastructure. The research impact is multiplicative. Every future Indian Alzheimer's AI paper that builds on BrainBharat-1B cites this work. The foundation model becomes a citation engine.

**Why proposal strength is 4/5:** Judges may see this as too ambitious for a 24-day sprint to a proposal — "can a 5-person team really build a foundation model?" The proposal must clearly scope what Phase 1 delivers vs. what the long-term vision is.

---

## The Risk

Most ambitious, highest variance. The proposal must argue convincingly that the team can execute Phase 1 (initial model + benchmark) within the challenge timeline while keeping the long-term vision credible.

---

---

# OPTION 5: The Multilingual Cognitive Mirror
### *"Rebuild Alzheimer's cognitive testing from scratch, in India's own languages"*

---

## The Core Idea

The entire global edifice of Alzheimer's cognitive testing rests on the MMSE, the MoCA, and the CDR — all developed in English, in the 1970s-90s, for Western, educated, literate populations. Every Indian language version is a translation with patches, not a native instrument. Build something entirely new: **an AI-administered, natively multilingual, culturally grounded cognitive assessment battery** for India.

**The theory of change:** A cognitive test that was built for an English-speaking, formally educated, Western patient is the wrong tool for a 65-year-old rural woman in Karnataka who speaks Kannada, never attended school, and has no reference point for "name these three objects." Build the right tool first. Everything else follows.

---

## How It Works — The Experience

```
Meenakshi, 67, rural Tamil Nadu, never attended school, speaks Tamil
Visits local ASHA worker
    ↓
ASHA opens app, selects Tamil, audio interface (no reading required)
    ↓
AI conducts culturally grounded assessment:
  • Memory: "Yesterday I told you about a coconut seller named Murugan.
              What was he selling? Where was he going?"
            (Not "banana, table, chair" — real Tamil cultural references)
  • Orientation: "Which festival is coming next month?"
                (Not "what day of the week is it")
  • Reasoning: Proverb interpretation in Tamil
               (Not abstract geometric patterns)
  • Language: Spontaneous speech sample — tell me about your morning
    ↓
Multilingual LLM scores all responses:
  • Semantic accuracy (did she recall the right details?)
  • Linguistic complexity (sentence structure, word finding)
  • Response latency (pause patterns)
    ↓
Output: Cognitive Profile across 4 dimensions
  (not a single score — a multidimensional portrait)
  Compared to Tamil-speaking women aged 65–70, education-matched norms
```

---

## Technical Approach

- **Instrument design:** Co-develop with clinical linguists and cognitive neurologists for each major Indian language
- **LLM backbone:** AI4Bharat IndicBERT / IndicWav2Vec as the language model layer
- **Scoring:** LLM-based semantic analysis + acoustic features (latency, fluency, coherence) + cultural norm calibration
- **Validation:** Validate against ICMR-NCTB standards and neurologist consensus diagnoses from SANSCOG
- **Output:** Multi-dimensional cognitive profile with education- and language-adjusted norms
- **Training data:** LASI-DAD 12-language batteries as the initial labelled dataset
- **Distribution:** Open-source; could become the national standard for Indian cognitive assessment

---

## Scores

| Novelty | India-Fit | Team Fit | Impact Potential | Proposal Strength |
|---------|-----------|----------|-----------------|-------------------|
| ★★★★★ | ★★★★★ | ★★★★★ | ★★★★ | ★★★★★ |

**Why team fit is 5/5:** This is the purest expression of the team's LLM + multilingual NLP strength. No MRI, no blood tests, no clinical domain knowledge required for the core technical work. The team can actually build and validate a prototype of this within the challenge timeline.

**Why impact is 4/5 (not 5):** Reaches everyone who gets assessed — but the assessment itself still requires an interaction. It doesn't have the passive, metabolic-route reach of Option 3.

---

## The Risk

Cultural and clinical validity is hard to establish rigorously in 24 days. The proposal must be clear that this is a research prototype, not a clinical-grade validated instrument — and the validation roadmap must be credible.

---

---

# Comparison at a Glance

| | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
|--|----------|----------|----------|----------|----------|
| **Name** | ASHA Companion | Cognitive Digital Twin | Metabolic Sentinel | Foundation Model | Multilingual Mirror |
| **Primary user** | ASHA worker | PHC nurse/MBBS | PHC/diabetes clinic | Researchers + builders | ASHA + MBBS |
| **Core tech** | LLM + fusion model + federated | Time-series ML + anomaly detection | Multi-task metabolic-cognitive model | Pre-trained multimodal transformer | LLM + multilingual ASR + cultural NLP |
| **India's unique edge used** | ASHA network + frugal AI | SANSCOG longitudinal data | 101M diabetics | SANSCOG + language diversity | 22 languages + LASI-DAD |
| **Entry point for patient** | ASHA home visit | Routine PHC checkup | Diabetes management visit | Not a patient tool directly | Any community health contact |
| **Novelty** | ★★★★★ | ★★★★★ | ★★★★ | ★★★★★ | ★★★★★ |
| **India-fit** | ★★★★★ | ★★★★ | ★★★★★ | ★★★★★ | ★★★★★ |
| **Team fit** | ★★★★★ | ★★★ | ★★★★ | ★★★★ | ★★★★★ |
| **Impact potential** | ★★★★★ | ★★★★ | ★★★★★ | ★★★★★ | ★★★★ |
| **Proposal strength** | ★★★★★ | ★★★★★ | ★★★★ | ★★★★ | ★★★★★ |
| **Biggest risk** | Federated complexity | Needs repeat visits | System buy-in | Scope ambition | Clinical validation timeline |

---

# Synthesis Paths Worth Considering

The team may not need to choose just one. Some natural combinations:

**Path A — Deployment-first + Language (1 + 5):**  
The ASHA Companion with the Multilingual Mirror as its cognitive assessment engine. Option 5 becomes Option 1's input layer. Extremely coherent. Best team fit.

**Path B — Metabolic gateway + ASHA (3 + 1):**  
Use the diabetes population as the entry point (Option 3) and ASHA as the delivery channel (Option 1). Maximum reach. Addresses both the T2D nexus and the community deployment challenge.

**Path C — Foundation model + one clinical tool (4 + 1 or 4 + 5):**  
Propose BrainBharat-1B as the research contribution, with the ASHA Companion or Multilingual Mirror as the clinical application layer. The "big swing" framing — but requires the team to scope Phase 1 tightly.

**Path D — All five as a layered ecosystem:**  
Each option addresses a different layer of the same problem. This could be framed as a phased roadmap — not one proposal but one vision with five implementation phases. Ambitious, but coherent.

---

*Next step: Team discussion → converge on one path → draft the 3-page proposal*  
*See: [06_proposal_draft.md](06_proposal_draft.md) when ready*
