# IISc AI Challenge — Research Direction Overview
## Six Directions Evaluated, One Combination Recommended

**Evaluation criteria:** Novelty · Feasibility for this team · India-fit · Proposal strength · Swingability  
**Challenge scoring:** Innovation · Usability · Impact · Relevance  

---

## The Six Directions

### Direction 1: Multilingual Cognitive Biomarker Model

**The idea:** All existing Alzheimer's cognitive tests (MMSE, MoCA, CDR) were developed in English and carry Western cultural and educational bias. Build natively Indian-language cognitive assessments and use LLMs to score spontaneous speech and text responses in Hindi, Kannada, Tamil, Telugu, and other languages.

**Why it swings:** LLMs + Indian languages is this team's strongest technical card. The SANSCOG/TLSA cognitive test data becomes training data. The gap (no native Indian-language LLM cognitive scoring system) is completely open territory.

**Research needed:** MMSE/MoCA validation in Indian languages; ASHA cognitive test protocols; LLM-based scoring of spontaneous speech.

---

### Direction 2: No-MRI Multimodal Early Detection (Frugal AI)

**The idea:** Deliberately exclude MRI. Build a model that achieves clinically useful early detection using only blood biochemistry + cognitive tests + sensory data + demographics — and that gracefully degrades when some inputs are missing.

**Why it swings:** Publishable as "Frugal Alzheimer's AI." Directly deployable at PHC/ASHA level. The specific gap — missing-modality robustness on an Indian cohort — has never been addressed.

**Research needed:** Blood biomarkers without MRI; missing modality ML; India-specific non-imaging cohort benchmarks.

---

### Direction 3: Federated Learning ASHA Flywheel

**The idea:** A federated learning architecture where each ASHA worker's phone is a local node. Patient data never leaves the device. The central model improves as more ASHA workers interact with patients, creating a continuous improvement loop.

**Why it swings:** Privacy-by-design for India's DPDP Act 2023; creates the flywheel the team described; technically novel for community health deployment.

**Research needed:** Federated learning in healthcare; ASHA mHealth deployment patterns; India health data privacy.

---

### Direction 4: India Population Bias Quantification + Transfer Learning

**The idea:** Take pre-trained Alzheimer's models from ADNI (Western data), apply them to SANSCOG/TLSA Indian cohort data, measure how much they underperform, then fine-tune. Quantify the "India gap."

**Why it swings:** The performance gap itself is publishable. Positions India as the corrective dataset the world needs. Strong academic framing with clear experimental design.

**Research needed:** ADNI baseline models; population genetics differences (South Asian vs. European); transfer learning for medical AI.

---

### Direction 5: LLM-Powered Clinical Decision Support (GenAI-Native)

**The idea:** An LLM that ingests whatever inputs ASHA has — voice recordings, family-reported symptoms, existing blood reports, brief cognitive responses — and outputs a structured, explainable Alzheimer's risk score with a referral recommendation in plain language.

**Why it swings:** Fully plays to the team's LLM strength. Works with variable and incomplete data (the real clinical situation in rural India). Integrates with ABHA (Ayushman Bharat Health Account). Addresses India's largest white space in clinical AI.

**Research needed:** Clinical LLMs for Alzheimer's; multilingual cognitive scoring; structured risk output from unstructured inputs.

---

### Direction 6: Diabetes-Alzheimer's Intersection — India's Unique Biomarker

**The idea:** India has 101 million diabetics — the world's largest T2D population. T2D is one of the strongest modifiable risk factors for Alzheimer's through established mechanisms. Build a risk model that specifically targets this massive high-risk Indian demographic using metabolic + cognitive biomarkers.

**Why it swings:** India-specific insight that no Western dataset can replicate. Strong public health impact. Blood sugar data (HbA1c, fasting glucose) is widely available even at ASHA level. The overlap between T2D biomarkers and early Alzheimer's markers is exploitable with the SANSCOG biochemical panel.

**Research needed:** Type 3 diabetes hypothesis evidence; Indian T2D-dementia epidemiology; metabolic biomarkers for Alzheimer's prediction.

---

## Scoring Matrix

| Direction | Novelty | Team Feasibility | India-Fit | Proposal Strength | Swingability | **Total /20** |
|-----------|:-------:|:----------------:|:---------:|:-----------------:|:------------:|:-------------:|
| D1: Multilingual Cognitive | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★ | ★★★★★ | **19** |
| D2: Frugal AI No-MRI | ★★★★★ | ★★★★ | ★★★★★ | ★★★★★ | ★★★★ | **19** |
| D3: Federated ASHA Flywheel | ★★★★ | ★★★ | ★★★★★ | ★★★ | ★★★ | **15** |
| D4: India Gap / Transfer Learning | ★★★ | ★★★★ | ★★★★★ | ★★★★ | ★★★ | **16** |
| D5: LLM Decision Support | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ | ★★★★★ | **20** |
| D6: Diabetes-Alzheimer's India | ★★★★★ | ★★★ | ★★★★★ | ★★★★★ | ★★★★★ | **18** |

---

## Why These Three Are Actually One System

Directions 2, 5, and 6 are not competing — they are architectural layers of the same proposal:

```
┌─────────────────────────────────────────────────────────┐
│                     BHARATBRAIN                         │
│   India-First Frugal AI for Alzheimer's Early Detection │
└─────────────────────────────────────────────────────────┘

INPUT LAYER (Direction 2 — Frugal, No MRI)
┌──────────────────────────────────────────────────────────┐
│  Whatever ASHA has:                                      │
│  • Blood report (HbA1c, glucose, p-tau217 if available) │
│  • Voice in local language (Hindi/Kannada/Tamil/Telugu)  │
│  • 5-min cognitive test (literacy-independent)           │
│  • Family-reported symptoms                              │
│  MISSING DATA IS OK — model degrades gracefully          │
└──────────────────────────────────────────────────────────┘
                           ↓
MODEL LAYER (Direction 5 — LLM Decision Support)
┌──────────────────────────────────────────────────────────┐
│  1. Multilingual LLM scores voice/text cognitive inputs  │
│  2. Missing-modality fusion model integrates all data    │
│  3. T2D biomarker pathway gets elevated weight if        │
│     HbA1c/glucose is elevated (Direction 6 integration)  │
└──────────────────────────────────────────────────────────┘
                           ↓
OUTPUT LAYER
┌──────────────────────────────────────────────────────────┐
│  • Structured risk score: Low / Medium / High            │
│  • Plain-language reasoning for ASHA                     │
│  • Referral recommendation → MBBS / Neurologist          │
│  • Explanation in local language                         │
└──────────────────────────────────────────────────────────┘
                           ↓
FLYWHEEL LAYER (Direction 3 — Federated)
┌──────────────────────────────────────────────────────────┐
│  • Each interaction adds to Indian training corpus       │
│  • Federated — data never leaves the device (DPDP-safe)  │
│  • Model improves continuously with scale                │
│  • More ASHA → more data → better model → more ASHA      │
└──────────────────────────────────────────────────────────┘
```

---

## The Proposal's Single Winning Sentence

> *"We are building the first missing-modality-robust, multilingual AI system for Alzheimer's early detection, designed for India's ASHA workers — trained on India's only rural/urban longitudinal cohort (SANSCOG/TLSA) — addressing a research gap that no global team can fill."*

---

## Directions NOT Pursued (and Why)

| Direction | Reason Deprioritised |
|-----------|---------------------|
| D3 (Federated as primary) | Technically complex for a 3-week proposal; best included as deployment architecture layer |
| D4 (India bias quantification) | Strong academic framing but lower "swing" factor; best cited as motivation, not primary contribution |

---

*Next documents: Research deep-dives with full citations — [02_research_frugal_ai.md](02_research_frugal_ai.md), [03_research_llm_decision_support.md](03_research_llm_decision_support.md), [04_research_india_diabetes_alzheimers.md](04_research_india_diabetes_alzheimers.md)*
