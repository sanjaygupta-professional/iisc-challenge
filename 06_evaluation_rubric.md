# IISc AI Challenge — Solution Evaluation Rubric
## Independent Assessment Framework for Comparing 5 Solution Options

**Purpose:** Score each of the 5 solution options against a rigorous, multi-dimensional rubric before converging on a proposal. This ensures the final choice is evidence-based, not intuition-based.  
**Date:** April 26, 2026  
**To be used for:** Scoring Options 1–5 in document `07_solution_scores.md`

---

## Rubric Design Principles

1. **Challenge-aligned but not limited to it** — The IISc judges score on Innovation, Usability, Impact, Relevance. This rubric includes those but adds dimensions judges don't score explicitly (feasibility, cost, team fit) that determine whether the proposal is credible and executable.

2. **Weighted** — Not all criteria are equal. Research novelty and challenge alignment carry more weight than, say, regulatory readiness for a proposal-stage evaluation.

3. **Anchored scoring** — Every criterion has explicit descriptions for scores 1, 3, and 5 so scoring is consistent and not subjective.

4. **Applicable to proposal, not just product** — Since this is a proposal submission, feasibility of the proposal narrative matters alongside the underlying idea quality.

---

## Scoring Scale

| Score | Label | Meaning |
|-------|-------|---------|
| **5** | Exceptional | Clearly exceeds the bar; best-in-class for this criterion |
| **4** | Strong | Well above average; minor gaps |
| **3** | Adequate | Meets the requirement; nothing stands out positively or negatively |
| **2** | Weak | Below average; identifiable gaps that could be addressed |
| **1** | Poor | Fails to meet the criterion; fundamental problem |

---

## Category Structure and Weights

| # | Category | Weight | What It Captures |
|---|----------|--------|-----------------|
| A | Research Quality & Novelty | **22%** | Is this grounded in real evidence? Is the gap genuine? |
| B | Challenge Alignment | **20%** | Will the IISc judges score this highly on their 4 criteria? |
| C | Technical Feasibility | **15%** | Can this team actually write a credible proposal for this? |
| D | Scalability & Population Impact | **18%** | How many people can this ultimately reach? At what cost? |
| E | User Experience & Adoption | **13%** | Will ASHA workers and patients actually use this? |
| F | India-First Design | **12%** | Is this genuinely India-native, or a Western model adapted? |

**Total: 100%**

---

---

# CATEGORY A: Research Quality & Novelty (22%)

*Weight rationale: A research proposal without strong research grounding will not survive expert review. The judges are IISc scientists.*

---

## A1 — Literature Grounding (5%)
*Is the solution anchored in real, peer-reviewed, recent research? Does it cite and build on the correct body of literature?*

| Score | Description |
|-------|-------------|
| **5** | Directly builds on 5+ peer-reviewed papers published in high-impact journals (Nature, Lancet, JMIR, npj). Cites the exact studies that demonstrate the gap this solution fills. No key papers missing. |
| **3** | References relevant literature but has some gaps. May cite older papers when newer, more relevant ones exist. Adequate but not impressive. |
| **1** | Sparse or generic citations. "Studies show…" without specifics. Judges would question whether the team knows the field. |

---

## A2 — Research Gap Validity (6%)
*Is the gap this solution addresses real, specific, and undeniably unaddressed? Is there documented evidence that no one has done this before?*

| Score | Description |
|-------|-------------|
| **5** | Cites a specific survey or systematic review that explicitly confirms "no published work exists" for this exact combination. The gap is narrow enough to be credible, and wide enough to matter. |
| **3** | A genuine gap, but it can be argued that partial solutions exist. The novelty claim needs qualifying language ("to our knowledge…"). |
| **1** | The "gap" is well-covered by existing systems. Would require the team to argue around obvious prior work. High risk of reviewer rejection. |

---

## A3 — Methodological Rigor (5%)
*Is the proposed AI/ML approach scientifically sound? Does it use appropriate methods for the problem type? Would a domain expert consider it credible?*

| Score | Description |
|-------|-------------|
| **5** | Methodology is clearly specified (model family, training approach, evaluation metrics, validation strategy on Indian cohort). Choices are justified with literature. Acknowledges limitations explicitly. |
| **3** | Methodology is plausible but vague in places ("we will use deep learning"). Key details (how missing modalities are handled, which evaluation metrics) are hand-waved. |
| **1** | Methodology is generic, borrowed from unrelated domains, or technically unsound. A domain expert would raise red flags. |

---

## A4 — India-Specific Research Foundation (6%)
*Does the solution specifically leverage India's unique datasets (SANSCOG, TLSA, LASI-DAD)? Does it generate knowledge that only India can generate?*

| Score | Description |
|-------|-------------|
| **5** | Explicitly proposes using SANSCOG/TLSA as the primary training and validation dataset. Identifies specific features of these datasets (rural/urban pairing, 10-year longitudinal, biochemical panel) that make the research uniquely possible in India. |
| **3** | Mentions Indian data sources but doesn't articulate why Indian data is irreplaceable. Could theoretically be done with any LMIC dataset. |
| **1** | Primarily relies on ADNI or other Western data. India's datasets are an afterthought. |

---

---

# CATEGORY B: Challenge Alignment (20%)

*Weight rationale: These are the IISc judges' explicit scoring criteria. Knowing what judges score for and designing directly to it is not gaming — it is alignment.*

---

## B1 — Innovation (6%)
*IISc criterion: How novel is the AI model or approach? Does it advance the state of the art?*

| Score | Description |
|-------|-------------|
| **5** | First-of-its-kind combination of approaches not previously published. A reviewer would say "I haven't seen this before." The novelty is specific and defensible, not just "we applied AI to a problem." |
| **3** | Applies known methods to a new context (e.g., federated learning for Indian health data). Incremental novelty — an advance, but not a breakthrough. |
| **1** | Applies well-established methods to a problem already addressed by existing tools. Hard to argue this is innovative to a panel of researchers. |

---

## B2 — Usability (5%)
*IISc criterion: Can the proposed solution actually be used by target populations? Is the design realistic for the deployment context?*

| Score | Description |
|-------|-------------|
| **5** | Explicitly designed for the lowest-literacy, lowest-bandwidth, lowest-tech deployment context in rural India. Audio-first, local-language, offline-capable. User journey is described concretely and credibly. |
| **3** | Described as "easy to use" but without specifics. Assumes literacy or reliable connectivity in ways that may not hold in rural India. |
| **1** | Requires hospital infrastructure, specialist training, or internet connectivity. Not realistic for ASHA/PHC level deployment. |

---

## B3 — Impact (5%)
*IISc criterion: What is the potential scale of benefit? How many people could this help and how significantly?*

| Score | Description |
|-------|-------------|
| **5** | Quantified impact: reaches a specific, large population (e.g., 100M+ through ASHA network, 101M diabetics). Articulates the mechanism of impact (earlier detection → earlier intervention → reduced caregiver burden). Cites India-specific prevalence data. |
| **3** | Impact is described qualitatively ("will help millions of Indians"). No specific numbers or mechanisms. |
| **1** | Impact is vague, limited, or only applicable to hospital settings (small reach). |

---

## B4 — Relevance to Healthy Brain Aging Research (4%)
*IISc criterion: Does the proposed solution advance Alzheimer's / dementia research, not just clinical deployment?*

| Score | Description |
|-------|-------------|
| **5** | Directly advances the science of brain aging in India — generates novel datasets, discovers new biomarkers, or validates hypotheses about Indian population-specific risk factors. Research value is separable from clinical deployment value. |
| **3** | Is a clinical tool first. Research contribution is secondary or emergent (e.g., "the data we collect will be useful for future research"). |
| **1** | Is purely a clinical/operational tool. Contributes nothing to the research literature on healthy brain aging. |

---

---

# CATEGORY C: Technical Feasibility (15%)

*Weight rationale: A technically brilliant proposal that the team cannot credibly execute will not win. Judges are experienced researchers who will spot overreach.*

---

## C1 — Team Skill Alignment (5%)
*How well does this solution play to the team's actual strengths (LLMs, GenAI, architecture, system design)?*

| Score | Description |
|-------|-------------|
| **5** | The core technical contribution is directly in the team's wheelhouse (LLM development, multimodal AI architecture, NLP). The team can speak about the methodology with genuine authority. |
| **3** | The core requires some skills the team has and some it doesn't. A clinical collaborator or additional expertise is clearly needed for one component. |
| **1** | The core technical contribution requires deep domain knowledge (neuroscience, clinical biostatistics, MRI image analysis) that the team does not have and cannot credibly acquire by May 20. |

---

## C2 — Proposal Narrative Credibility (4%)
*Can a compelling, detailed, 3-page proposal actually be written for this approach in 24 days? Is there enough known to fill the required sections?*

| Score | Description |
|-------|-------------|
| **5** | All required sections (Abstract, Project Overview, AI Approach, Computing Plan, Team Expertise) can be filled with specific, credible content. The team can write this proposal with confidence and depth. |
| **3** | Most sections can be filled but one (likely AI Approach or Computing Plan) would require significant assumptions or placeholders. Some hand-waving needed. |
| **1** | The proposal cannot be written in good faith — key methodological details are unknown, or the team would need to claim capabilities it doesn't have. |

---

## C3 — Data Access & Availability (3%)
*Does the team have, or can it credibly propose to access, the data needed to execute this approach?*

| Score | Description |
|-------|-------------|
| **5** | Explicitly uses CBR SANSCOG/TLSA data (which the challenge provides). No additional data dependencies. |
| **3** | Primarily uses CBR data but also proposes external data (LASI-DAD, AI4Bharat) with a clear and realistic access plan. |
| **1** | Requires proprietary, restricted, or unavailable data (e.g., FDA biomarker panels, US VHA EHR records). |

---

## C4 — Scope Realism (3%)
*Is the scope of what's proposed achievable within a reasonable post-award timeline? Does the proposal avoid promising the world?*

| Score | Description |
|-------|-------------|
| **5** | Clearly scoped Phase 1 deliverables that are achievable in 12–18 months with the CBR computing infrastructure. Long-term vision is ambitious but Phase 1 is concrete and bounded. |
| **3** | Scope is somewhat vague — "develop an AI model" without specififying which model, what training data subset, what evaluation benchmark. |
| **1** | Promises a fully deployed, clinically validated system with national reach. Judges will not believe this is achievable. |

---

---

# CATEGORY D: Scalability & Population Impact (18%)

*Weight rationale: The IISc challenge is explicitly motivated by India's population-scale brain aging problem. A solution that can only reach 10,000 patients is less compelling than one that can reach 100 million.*

---

## D1 — Population Reach Potential (6%)
*At full scale, how many people could this solution serve?*

| Score | Description |
|-------|-------------|
| **5** | Designed for deployment through a channel that reaches 50M+ people (ASHA network, diabetes monitoring system, national health scheme). The scaling mechanism is clear and leverages existing infrastructure. |
| **4** | Reaches 10–50M people through a realistic scaling path. |
| **3** | Reaches 1–10M people with significant effort. |
| **2** | Reaches under 1M, or requires building new infrastructure from scratch. |
| **1** | Primarily hospital/specialist level. Estimated reach under 100,000. |

---

## D2 — Cost Per Beneficiary (4%)
*How affordable is this at scale? What are the marginal costs of serving each additional user?*

| Score | Description |
|-------|-------------|
| **5** | Near-zero marginal cost at scale (software-only, runs on existing devices, no consumables). The solution actually gets cheaper per user as it scales (federated learning improves the model). |
| **3** | Moderate cost — requires a per-test consumable (blood draw, specialist visit) or dedicated device. Cost is manageable for PHC-level deployment but not trivially cheap. |
| **1** | High per-patient cost — requires MRI, specialist interpretation, or expensive biomarker tests that are not covered by NHM or Ayushman Bharat. |

---

## D3 — Geographic Scalability (4%)
*Can this solution work across India's diverse geographies — not just urban Karnataka but Rajasthan villages, Northeast states, Tribal belt?*

| Score | Description |
|-------|-------------|
| **5** | Explicitly designed for geographic heterogeneity — works offline, in low-bandwidth settings, in multiple Indian languages and dialects, with variable infrastructure. |
| **3** | Works in most of urban and peri-urban India. Adaptable to rural settings with some modification. |
| **1** | Requires internet connectivity, urban healthcare infrastructure, or English literacy. Non-starter for 600M rural Indians. |

---

## D4 — Sustainability & Flywheel (4%)
*Does the solution get better over time as more people use it? Is there a self-reinforcing improvement loop?*

| Score | Description |
|-------|-------------|
| **5** | Has an explicit flywheel: more usage → more Indian data → better model → more adoption. The federated learning architecture or data collection mechanism is designed for this. The solution becomes India's de facto Alzheimer's AI platform over time. |
| **3** | Improves with additional data but requires a centralised retraining pipeline and active effort. No automatic flywheel. |
| **1** | Static model. Once trained, does not improve without significant reinvestment. |

---

---

# CATEGORY E: User Experience & Adoption (13%)

*Weight rationale: India has a graveyard of well-intentioned health tech solutions that ASHA workers never adopted because the UX was designed by engineers, not for the actual user.*

---

## E1 — ASHA / Community Health Worker Experience (5%)
*How well is the solution designed for a community health worker with limited technical literacy, working in resource-constrained settings?*

| Score | Description |
|-------|-------------|
| **5** | Audio-first interface, no reading required, works offline, takes under 5 minutes, output is a single clear action (refer / monitor / follow up) in the worker's local language. Zero training required to understand the output. |
| **3** | Requires some training to use. Output requires interpretation. Works on a smartphone but assumes basic smartphone literacy. |
| **1** | Designed for trained healthcare professionals. Requires a tablet, reliable internet, and clinical knowledge to interpret output. ASHA workers would need weeks of training. |

---

## E2 — Patient Accessibility (4%)
*How appropriate is the solution for patients who may be elderly, illiterate, from a linguistic minority, or unfamiliar with technology?*

| Score | Description |
|-------|-------------|
| **5** | Works for illiterate patients. Uses culturally familiar references (not Western cognitive test constructs). Works in the patient's mother tongue, not a translated version of an English test. Suitable for the rural Karnataka population in SANSCOG. |
| **3** | Works for most patients with some adaptations. May use cognitive tasks that require familiarity with formal schooling concepts. Language support is present but via translation, not native instrument. |
| **1** | Assumes literacy, formal education, or familiarity with standardised test formats. Would systematically underperform for the elderly rural population this challenge is designed for. |

---

## E3 — Clinical Workflow Integration (4%)
*Does this solution fit into existing workflows of ASHA/MBBS/neurologist, or does it require an entirely new workflow to be created?*

| Score | Description |
|-------|-------------|
| **5** | Designed as a piggyback on an existing visit type (routine diabetes checkup, ASHA home visit). Adds <5 minutes to an existing workflow. No new visit type required. Integrates with ABHA health IDs. |
| **3** | Requires a dedicated cognitive screening visit. Adds 10–20 minutes. May integrate with existing EHR but requires workflow change and some retraining. |
| **1** | Requires building an entirely new referral pathway, training programme, and clinical protocol from scratch. High institutional friction. |

---

---

# CATEGORY F: India-First Design (12%)

*Weight rationale: The IISc judges will give credit for solutions that can only be built in India, not solutions that could be built anywhere and happen to be deployed here.*

---

## F1 — India-Native vs. India-Adapted (5%)
*Is this solution fundamentally designed for India's context, or is it a global solution adapted for India?*

| Score | Description |
|-------|-------------|
| **5** | Could not be built without India's specific context — requires Indian language diversity, India's ASHA infrastructure, India's T2D epidemiology, or India's SANSCOG/TLSA datasets. No other country could replicate this. |
| **3** | Designed with India in mind but could, with moderate adaptation, be deployed in Bangladesh, Nigeria, or rural Indonesia. India is a strong use case but not the only one. |
| **1** | A Western solution (ADNI-trained model, English-language cognitive test, hospital MRI workflow) deployed in India. The "India" element is geographic, not architectural. |

---

## F2 — Language & Cultural Authenticity (4%)
*Does the solution work authentically in Indian languages and cultural contexts, not just as a translation of an English tool?*

| Score | Description |
|-------|-------------|
| **5** | Builds cognitive assessments or language models natively in Indian languages. Uses culturally grounded references (Indian festivals, occupations, family structures). Validated against Indian norms, not Western norms translated. |
| **3** | Supports Indian languages but through translation of Western tools. MMSE or MoCA translated into Hindi. Better than English-only but carries residual cultural bias. |
| **1** | English-only, or relies on translated tools without cultural adaptation. The tool treats Indian patients as if they were Western patients who happen to speak a different language. |

---

## F3 — Regulatory & Infrastructure Readiness (3%)
*Does the solution acknowledge and design around India's specific regulatory environment (DPDP Act 2023, MoHFW guidelines, NHM protocols)?*

| Score | Description |
|-------|-------------|
| **5** | Explicitly addresses DPDP Act 2023 (data never leaves the device — federated; or explicit consent model). Proposes ABHA integration. Aligns with NHM's ASHA programme protocols. Mentions CE/CDSCO regulatory pathway for the AI tool. |
| **3** | Acknowledges data privacy concerns but does not specify compliance mechanism. References "national health infrastructure" without specifics. |
| **1** | No mention of data privacy, regulatory compliance, or integration with India's health system infrastructure. A significant proposal weakness. |

---

---

# Scoring Template

## How to Score Each Option

For each option, assign a score (1–5) to each sub-criterion. Multiply by the criterion weight to get a weighted score. Sum all weighted scores to get the total out of 100.

| Category | Sub-Criterion | Weight | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
|----------|--------------|--------|----------|----------|----------|----------|----------|
| **A: Research** | A1 Literature Grounding | 5% | | | | | |
| | A2 Research Gap Validity | 6% | | | | | |
| | A3 Methodological Rigor | 5% | | | | | |
| | A4 India-Specific Foundation | 6% | | | | | |
| **B: Challenge** | B1 Innovation | 6% | | | | | |
| | B2 Usability | 5% | | | | | |
| | B3 Impact | 5% | | | | | |
| | B4 Relevance to Brain Aging | 4% | | | | | |
| **C: Feasibility** | C1 Team Skill Alignment | 5% | | | | | |
| | C2 Proposal Credibility | 4% | | | | | |
| | C3 Data Access | 3% | | | | | |
| | C4 Scope Realism | 3% | | | | | |
| **D: Scalability** | D1 Population Reach | 6% | | | | | |
| | D2 Cost Per Beneficiary | 4% | | | | | |
| | D3 Geographic Scalability | 4% | | | | | |
| | D4 Sustainability/Flywheel | 4% | | | | | |
| **E: UX & Adoption** | E1 ASHA Experience | 5% | | | | | |
| | E2 Patient Accessibility | 4% | | | | | |
| | E3 Workflow Integration | 4% | | | | | |
| **F: India-First** | F1 India-Native Design | 5% | | | | | |
| | F2 Language/Cultural Auth. | 4% | | | | | |
| | F3 Regulatory Readiness | 3% | | | | | |
| **TOTAL** | | **100%** | **/100** | **/100** | **/100** | **/100** | **/100** |

---

## Score Interpretation

| Total Score | Interpretation |
|-------------|----------------|
| **85–100** | Outstanding — lead with this; high probability of winning |
| **70–84** | Strong — credible finalist; may need targeted strengthening |
| **55–69** | Moderate — viable but requires significant improvements to proposal |
| **40–54** | Weak — fundamental gaps; consider combining with a higher-scoring option |
| **Below 40** | Not recommended — should not be pursued as a standalone proposal |

---

## Bonus Dimension: Synthesis Potential

Beyond individual scores, assess each option for its ability to combine with others:

| Combination | Compatibility | What it achieves |
|-------------|--------------|-----------------|
| Option 1 + Option 5 | ★★★★★ | ASHA Companion with Multilingual Mirror as its input engine — best team fit |
| Option 1 + Option 3 | ★★★★★ | ASHA Companion with metabolic entry point — maximum reach |
| Option 4 + Option 1 | ★★★★ | Foundation Model with one clinical application — most ambitious |
| Option 2 + Option 3 | ★★★★ | Digital Twin fed by metabolic monitoring data — scientifically strongest |
| Option 3 + Option 5 | ★★★ | Metabolic entry point with multilingual assessment — strong but complex |

---

*Next: Use this rubric to score all 5 options — see [07_solution_scores.md](07_solution_scores.md)*
