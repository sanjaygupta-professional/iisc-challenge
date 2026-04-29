# IISc AI Challenge — Solution Scoring
## All 5 Options Evaluated Against the Evaluation Rubric

**Rubric:** See `06_evaluation_rubric.md` for full scoring anchors  
**Scale:** 1–5 per criterion. Weighted score = Σ(score × weight%). Final /100.  
**Date:** April 26, 2026  

---

## Scoring Key

| Score | Label |
|-------|-------|
| 5 | Exceptional |
| 4 | Strong |
| 3 | Adequate |
| 2 | Weak |
| 1 | Poor |

---

## Full Score Table

| Criterion | Wt | Opt 1 ASHA | Opt 2 Twin | Opt 3 Sentinel | Opt 4 Foundation | Opt 5 Mirror |
|-----------|:--:|:----------:|:----------:|:--------------:|:----------------:|:------------:|
| **A — Research Quality** | **22%** | | | | | |
| A1 Literature Grounding | 5% | **5** | **5** | **5** | **5** | **5** |
| A2 Research Gap Validity | 6% | **5** | **4** | **4** | **5** | **5** |
| A3 Methodological Rigor | 5% | **4** | **5** | **4** | **4** | **5** |
| A4 India-Specific Foundation | 6% | **5** | **5** | **5** | **5** | **5** |
| **B — Challenge Alignment** | **20%** | | | | | |
| B1 Innovation | 6% | **5** | **5** | **4** | **5** | **5** |
| B2 Usability | 5% | **5** | **3** | **4** | **2** | **5** |
| B3 Population Impact | 5% | **5** | **4** | **5** | **4** | **4** |
| B4 Relevance to Brain Aging | 4% | **4** | **5** | **4** | **5** | **4** |
| **C — Technical Feasibility** | **15%** | | | | | |
| C1 Team Skill Alignment | 5% | **5** | **3** | **4** | **4** | **5** |
| C2 Proposal Credibility | 4% | **5** | **4** | **4** | **3** | **5** |
| C3 Data Access | 3% | **5** | **5** | **5** | **5** | **5** |
| C4 Scope Realism | 3% | **4** | **4** | **4** | **3** | **4** |
| **D — Scalability & Impact** | **18%** | | | | | |
| D1 Population Reach | 6% | **5** | **3** | **5** | **4** | **4** |
| D2 Cost Per Beneficiary | 4% | **5** | **4** | **5** | **4** | **5** |
| D3 Geographic Scalability | 4% | **5** | **4** | **4** | **5** | **5** |
| D4 Sustainability Flywheel | 4% | **5** | **4** | **4** | **5** | **4** |
| **E — UX & Adoption** | **13%** | | | | | |
| E1 ASHA Worker Experience | 5% | **5** | **2** | **3** | **1** | **5** |
| E2 Patient Accessibility | 4% | **5** | **3** | **4** | **1** | **5** |
| E3 Workflow Integration | 4% | **5** | **3** | **5** | **1** | **4** |
| **F — India-First Design** | **12%** | | | | | |
| F1 India-Native vs Adapted | 5% | **5** | **4** | **5** | **5** | **5** |
| F2 Language & Cultural Auth | 4% | **4** | **3** | **3** | **5** | **5** |
| F3 Regulatory Readiness | 3% | **4** | **3** | **3** | **3** | **4** |

---

## Category Subtotals (out of 5.0)

| Category | Weight | Opt 1 | Opt 2 | Opt 3 | Opt 4 | Opt 5 |
|----------|--------|-------|-------|-------|-------|-------|
| A — Research Quality | 22% | **4.77** | **4.73** | **4.50** | **4.77** | **5.00** |
| B — Challenge Alignment | 20% | **4.80** | **4.25** | **4.25** | **4.00** | **4.55** |
| C — Technical Feasibility | 15% | **4.80** | **3.90** | **4.20** | **3.70** | **4.80** |
| D — Scalability & Impact | 18% | **5.00** | **3.67** | **4.56** | **4.50** | **4.44** |
| E — UX & Adoption | 13% | **5.00** | **2.62** | **4.00** | **1.00** | **4.69** |
| F — India-First Design | 12% | **4.42** | **3.42** | **3.83** | **4.42** | **4.75** |

---

## Final Weighted Scores

| Option | Raw Score (×20) | Final /100 | Band |
|--------|:--------------:|:---------:|------|
| **Option 1 — ASHA Companion** | 4.81 | **96.2** | ✅ Outstanding |
| **Option 5 — Multilingual Mirror** | 4.71 | **94.2** | ✅ Outstanding |
| **Option 3 — Metabolic Sentinel** | 4.26 | **85.2** | ✅ Outstanding |
| **Option 2 — Cognitive Digital Twin** | 3.88 | **77.6** | 🟡 Strong |
| **Option 4 — Foundation Model** | 3.88 | **77.6** | 🟡 Strong |

---

## Score Rationale — Per Option

---

### Option 1: ASHA Companion — 96.2 / 100

**Strongest across the board.** This option scores 5/5 on every dimension of scalability, usability, and India-first design. It is the only option that was purpose-built for every deployment constraint simultaneously — no MRI, offline-first, audio-first, ASHA-native, federated flywheel.

**Where it scores 4 (not 5):**
- A3 Methodological Rigor (4): Missing-modality fusion + federated learning is complex; the proposal will need to be specific about the model family and evaluation protocol rather than hand-waving.
- B4 Relevance to Brain Aging Research (4): This is primarily a clinical tool. Research contribution is real (data generated through ASHA interactions will be valuable) but secondary to the deployment mission.
- C4 Scope Realism (4): Federated learning at scale is a genuine engineering challenge. Phase 1 scope must be clearly bounded.
- F2 Language/Cultural Auth (4): Multilingual support is designed in, but the cultural grounding of cognitive assessment questions needs a language/culture expert to execute authentically.
- F3 Regulatory Readiness (4): Federated architecture naturally addresses DPDP; but the proposal should explicitly name the regulatory framework.

**Verdict:** The proposal's anchoring option. Everything else should be layered onto this.

---

### Option 5: Multilingual Mirror — 94.2 / 100

**Strongest research novelty and team fit.** This is the purest expression of what the team does best — LLMs applied to Indian languages — and the research gap it addresses is completely unambiguous. Scores 5/5 on every research and language criterion.

**Where it scores 4 (not 5):**
- B3 Population Impact (4): The reach is limited to those who can engage in an active assessment — not as passive as the metabolic pathway. Still large (all 22 language communities) but not 100M+.
- B4 Relevance to Brain Aging (4): Strong contribution to cognitive assessment science; slightly less direct to the biological aging research agenda.
- C4 Scope Realism (4): Building a validated native cognitive assessment in one language as Phase 1 is achievable; but 22 languages is a long-term vision — the proposal must be explicit about this.
- D1 Population Reach (4): Active assessment interaction required; not as large as ASHA home visit reach.
- D4 Flywheel (4): Good flywheel but slightly slower than Option 1's federated architecture.
- E3 Workflow Integration (4): Adds an assessment step to any health visit; modest friction.
- F3 Regulatory Readiness (4): Voice/audio data requires explicit privacy design; needs attention.

**Verdict:** The ideal cognitive assessment engine *inside* Option 1. As a standalone, it is excellent. As a layer of the ASHA Companion, it makes Option 1 better.

---

### Option 3: Metabolic Sentinel — 85.2 / 100

**Highest population reach and the most frictionless entry point.** 101 million diabetics already in monitoring. Zero new visits required. The MCRI score is a novel, concrete deliverable. However, the UX for ASHA workers is lower (this is a PHC/diabetes clinic tool), and the novelty is partly constrained by the extensive existing T2D-AD literature.

**Where it scores 3 or lower:**
- B1 Innovation (4): The T2D → Alzheimer's mechanism is well-documented in the literature. The novelty is the India-specific MCRI score and the integrated care pathway — an advance, but not first-of-its-kind globally.
- E1 ASHA Experience (3): This is primarily a PHC/diabetes clinic tool; ASHA workers are secondary users.
- F2 Language/Cultural Auth (3): The cognitive screening questions can be in any language but there's no specific cultural innovation — this is a weakness vs. Options 1 and 5.
- F3 Regulatory Readiness (3): Standard data privacy; no specific DPDP innovation.

**Verdict:** The best deployment strategy for reaching diabetics. Not a standalone proposal, but powerfully complements Option 1 (adds a metabolic entry point to the ASHA platform).

---

### Option 2: Cognitive Digital Twin — 77.6 / 100

**Scientifically most rigorous; deployment-limited.** The 10-year SANSCOG longitudinal dataset makes this uniquely possible. The methodology (trajectory deviation from expected aging curve) is the most scientifically elegant of all five options. However, it requires repeat visits — which excludes first-time patients — and the UX for ASHA workers is poor (2/5).

**Key weaknesses:**
- E1 ASHA Experience (2): Not designed for ASHA at all; this is a PHC-level tool.
- E2 Patient Accessibility (3): Requires patients to return repeatedly, which excludes the hardest-to-reach populations.
- D1 Population Reach (3): Estimated 5–10M regularly attending PHC patients; lowest reach of all options.
- C1 Team Skill Alignment (3): Time-series ML and longitudinal mixed-effects models are more statistics-heavy than LLM-heavy; requires additional expertise.

**Verdict:** The strongest academic contribution but lowest deployment impact. Best used as a research methodology layer within a broader proposal, not as the primary approach.

---

### Option 4: Foundation Model — 77.6 / 100

**Highest long-term impact; worst short-term usability.** The only option that creates something permanent — an open-source AI infrastructure that enables every future Indian Alzheimer's AI researcher. Scores 5/5 on novelty, language comprehensiveness, and sustainability. But the UX scores are 1/5 because this is a research platform with no direct patient interface.

**Key weaknesses:**
- E1 ASHA Experience (1), E2 Patient Accessibility (1), E3 Workflow Integration (1): This is not a clinical tool. There is no patient interface, no ASHA workflow, no direct deployment.
- C2 Proposal Credibility (3): "Build India's Alzheimer's foundation model" is an ambitious claim for a 5-person team. Judges will scrutinize whether Phase 1 is credible.
- C4 Scope Realism (3): The scope boundary between "foundation model" and "everything" is hard to draw convincingly in 3 pages.
- B2 Usability (2): A research platform scores low on the challenge's usability criterion.

**Verdict:** The "big swing" option. Best pursued as the long-term vision framing of a proposal that leads with Option 1 or 5 as the near-term deliverable and BrainBharat Foundation Model as the 3-year roadmap.

---

## Synthesis Path Analysis

Three combinations score higher than any single option:

### Path A: Option 1 + Option 5 (ASHA Companion + Multilingual Mirror)
*Estimated combined score: ~97/100*

Option 5 becomes Option 1's cognitive assessment engine. The ASHA Companion uses the Multilingual Mirror for all voice/cognitive inputs. This eliminates Option 1's only real weakness (F2: Language/Cultural Auth goes from 4 to 5) and adds Option 5's methodological rigor to the LLM scoring layer. Every weakness in one option is covered by the other.

**This is the recommended primary synthesis.**

---

### Path B: Option 1 + Option 3 (ASHA Companion + Metabolic Sentinel)
*Estimated combined score: ~95/100*

The metabolic risk pathway (HbA1c, HOMA-IR) becomes a weighted input channel in Option 1's fusion model. ASHA workers entering blood reports automatically trigger the T2D risk amplifier. This adds the 101M diabetic population as a high-priority screening sub-cohort within the ASHA deployment.

**Best combination for maximising population reach.**

---

### Path C: Option 1 + 5 + 3 (Full Architecture)
*Estimated combined score: ~97/100*

All three layers together:
- **Input:** Multilingual cognitive assessment (Option 5) + record-assisted blood intake (Option 3 metabolic pathway)
- **Model:** Missing-modality fusion (Option 1) + T2D risk weighting (Option 3)
- **Deployment:** ASHA/CHW channel (Option 1) with federated flywheel
- **Long-term:** BrainBharat Foundation Model (Option 4) as 3-year vision

This is the complete proposal architecture. The 3-page proposal must describe this coherently — each layer serves a purpose, and together they form a system that no other country's team can replicate.

---

## Radar Profile — Strengths and Weaknesses at a Glance

| Dimension | Opt 1 | Opt 2 | Opt 3 | Opt 4 | Opt 5 |
|-----------|:-----:|:-----:|:-----:|:-----:|:-----:|
| Research strength | ████░ | ████░ | ████░ | ████░ | █████ |
| Challenge alignment | █████ | ████░ | ████░ | ███░░ | █████ |
| Team feasibility | █████ | ███░░ | ████░ | ███░░ | █████ |
| Scale & reach | █████ | ███░░ | █████ | ████░ | ████░ |
| UX & adoption | █████ | ███░░ | ████░ | █░░░░ | █████ |
| India-first design | ████░ | ███░░ | ████░ | ████░ | █████ |
| **TOTAL** | **96** | **78** | **85** | **78** | **94** |

---

## Recommendation

**Lead proposal with Path C (Options 1 + 5 + 3):**

> *"BhāratBrain: An India-First, Community-Deployed, Multilingual AI System for Early Alzheimer's Detection"*

- **Core innovation:** First missing-modality-robust, multilingual LLM cognitive assessment designed for ASHA workers — trained on India's only rural/urban paired longitudinal cohort (SANSCOG/TLSA)
- **Unique India contribution:** Native Indian-language cognitive scoring + T2D metabolic risk pathway + ASHA deployment channel — a combination no other country can replicate
- **Impact claim:** Designed to reach 100M+ through India's 1 million ASHA workers; embeds into 101M diabetics' existing monitoring pathway
- **Long-term vision:** All field data contributes to BrainBharat Foundation Model — India's open-source AI infrastructure for brain aging research

---

*Next: Draft the 3-page proposal — see [08_proposal_draft.md](08_proposal_draft.md)*
