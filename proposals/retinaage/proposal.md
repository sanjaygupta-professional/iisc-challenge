# RetinaAge India: Retinal Age Gap as Scalable Dementia Biomarker for Indian Populations
**IISc AI Challenge for Healthy Brain Aging 2026 · Proposal 2 of 2 · Retinal Biomarker Track**

**Team:** Sanjay (Lead) · Abhishek (ML Architect) · Taruna (Research/Clinical Bridge) · Apsara (Research/ML)
**Deadline:** May 20, 2026
**Estimated Rubric Score:** ~80/100

---

## Abstract

Retinal fundus photography offers a non-invasive, sub-5-minute window into brain aging. Zhu et al. (2021, UK Biobank, n≈33,000) demonstrated that elevated **Retinal Age Gap** (RAG = AI-predicted retinal age minus chronological age) is prospectively associated with incident all-cause dementia (HR ≈1.25–1.31 per year). However, **no RAG-dementia study has been conducted in Indian populations**. Existing deep learning models, trained on predominantly white European retinas, face systematic calibration bias for Indian eyes due to higher retinal pigment epithelium (RPE) melanin — potentially miscalculating RAG by 3–7 years.

We propose **RetinaAge India**: using SANSCOG retinal imaging and CBR cohort data, we will (1) adapt a pre-trained retinal age model to Indian retinal characteristics via transfer learning, (2) compute calibrated RAG for SANSCOG participants with CDR-staged cognitive status, (3) quantify the RAG–MCI/dementia association with rigorous confounder adjustment for T2D, hypertension, and diabetic retinopathy, and (4) propose a scalable screening pathway leveraging India's existing 10,000+ deployed DR screening cameras (Remidio, Forus, Aravind).

**Primary novelty:** First RAG-dementia association study in Indian subjects. Publishable regardless of effect direction. First Indian-population retinal age calibration model. Proposes dual-use of India's DR screening infrastructure for dementia risk at zero additional hardware cost.

---

## Problem Statement

### Three Converging Crises Motivate RetinaAge India

**Crisis 1 — Dementia detection gap:** 8.8 million Indians with dementia, 80% undiagnosed. PET/CSF workup costs ₹50,000–1,50,000 and is inaccessible outside 6–8 cities. A scalable community-level biomarker for dementia risk does not exist.

**Crisis 2 — Fundus camera infrastructure underutilised:** India has deployed 10,000+ non-mydriatic fundus cameras through NPCB, Aravind Eye Care, Sankara Nethralaya, and Remidio/Forus, primarily for diabetic retinopathy (DR) screening. These cameras are idle between DR screening cycles and could screen for dementia risk with zero additional hardware investment.

**Crisis 3 — Evidence gap for Indian populations:** Published RAG-dementia evidence (Zhu et al. 2021; NUS Singapore 2023) cannot be applied to Indian populations without recalibration. Indian RPE melanin is higher than in European populations, systematically reducing fundus image contrast and shifting age predictions. A UK Biobank model applied to Indian retinas may over- or under-estimate RAG by 3–7 years, rendering risk stratification unreliable.

### Why the Retina Reflects Brain Health

Five mechanistic pathways establish the retinal-brain aging link:

1. **Embryological:** Retina derives from the diencephalon; retinal ganglion cells are true CNS neurons.
2. **Amyloid-beta deposition:** Post-mortem studies identify amyloid plaques in retinal tissue via the same APP/BACE1 cleavage pathway as cortical AD plaques.
3. **Trans-synaptic neurodegeneration:** Visual cortex → lateral geniculate → optic nerve → retinal ganglion cell chain propagates cortical AD neurodegeneration retrogradely.
4. **Shared vascular pathology:** Cerebral small vessel disease in AD mirrored in retinal microvasculature; retinal arteriolar narrowing correlates with brain white matter hyperintensities.
5. **Neuroinflammation:** Microglial activation, complement deposition, and tau pathology documented in retinal tissue post-mortem.

### The Specific Research Gap

No published study has: (1) validated a retinal age model on Indian retinal images; (2) measured RAG-dementia association in any Indian cohort; (3) proposed dual-use of India's DR screening infrastructure for dementia risk. This study would be the **first published RAG-dementia evidence for Indian populations** — novel regardless of whether the UK Biobank effect size replicates.

---

## AI Approach & Architecture

### Five-Stage Pipeline

```
📷 Fundus Photograph
  → Stage 1: Pre-trained Retinal Age Model (ResNet-50/EfficientNet-B3, SEED base)
      ↑ Stage 2: Domain Adaptation (SANSCOG fine-tune → Indian pigmentation correction)
  → Predicted Retinal Age (years)
  → RAG = Predicted Age − Chronological Age
  → Stage 3: Confounder Adjustment (T2D · HTN · DR severity)
  → Adjusted RAG Score
  → Stage 4: Dementia Association Analysis (Logistic / Cox)
  → Stage 5: Risk Tier (Low / Medium / High)
      → 🟢 Low: Routine follow-up
      → 🟡 Medium: RUDAS cognitive screen administered
      → 🔴 High: PHC referral for physician assessment
```

### Stage 1 — Base Retinal Age Model

Pre-trained ResNet-50 or EfficientNet-B3 for retinal age regression using open-source weights from SEED dataset (NUS Singapore; multi-ethnic Asian including Indian participants, age-labeled fundus images). Input: colour fundus photograph (RGB). Output: predicted age in years (continuous). Architecture validated by Poplin et al. 2018 (Nature Biomedical Engineering): MAE ~3.26 years on UK Biobank.

### Stage 2 — Indian Domain Adaptation

Fine-tune Stage 1 model on SANSCOG retinal images via **transfer learning**: freeze early feature extraction layers; retrain final 2–3 layers on SANSCOG age-labeled fundus images. Measure calibration shift: compare age prediction MAE before and after domain adaptation. Target: MAE <4 years post-adaptation on SANSCOG hold-out. This corrects for Indian RPE melanin bias — a novel technical contribution.

Fallback if SANSCOG retinal N <500: feature-based calibration (bias correction regression) rather than full transfer learning fine-tuning.

### Stage 3 — Confounder Adjustment

Collect T2D status, hypertension, smoking, and DR severity (ETDRS grade 0–4) from SANSCOG blood biochemistry and clinical records. Regress these from RAG score to compute **Adjusted RAG**. Exclude subjects with severe DR (ETDRS ≥3) from primary analysis; include in sensitivity analysis to assess confounding magnitude. Critical because T2D → DR → elevated RAG and T2D → dementia could explain the entire RAG-dementia association without a direct neurodegenerative signal.

### Stage 4 — Dementia Association Analysis

- **Cross-sectional (primary):** Logistic regression, Adjusted RAG vs. CDR-staged MCI/dementia status. OR per year of RAG; 95% CI.
- **Longitudinal (if multi-wave retinal data available):** Cox proportional hazard model for incident dementia across SANSCOG waves — analogous to Zhu et al. 2021.
- **Incremental value:** Compare C-statistic of Age + T2D + HTN base model vs. base model + Adjusted RAG. ΔC-statistic >0.03 = clinically meaningful.

### Stage 5 — Risk Output & Screening Pathway

Community eye camp: Fundus photo (<5 min, technician-level) → RAG score → Low/Medium/High tier → if Medium/High → RUDAS cognitive screen → if elevated → PHC referral.

**Integration with ScreenBrain (Proposal 1):** RetinaAge provides the community-level triage layer; ScreenBrain provides the confirmatory cognitive assessment layer. A two-stage India-native dementia risk pathway deployable at existing DR screening camps with zero additional infrastructure.

---

## Data Strategy

| Dataset | Role | What We Use | Access |
|---------|------|-------------|--------|
| SANSCOG Retinal Imaging | Primary: domain adaptation + dementia association | Fundus images (age-labeled) + CDR-staged cognitive status + blood biochemistry | CBR-controlled · Access assumed pending confirmation |
| SEED (NUS Singapore) | Transfer learning base (multi-ethnic Asian, age-labeled) | Fundus images + chronological age labels | Accessible via research agreement |
| SANSCOG Longitudinal | Cox hazard model (if multi-wave retinal data exists) | Retinal images + cognitive status at 2+ time points | Contingent on retinal wave coverage |
| LASI-DAD | External cognitive anchor | Cognitive outcomes + demographics | Publicly accessible |

⚠️ **Important caveat:** SANSCOG retinal imaging data scope must be confirmed with CBR before methodology finalisation. If retinal N <500 quality images, Stage 2 pivots from full transfer learning to feature-based bias correction.

### Confounder Data

From SANSCOG blood biochemistry (already collected): HbA1c, systolic BP, BMI, smoking status. From clinical records: DR severity (ETDRS grade). If ETDRS grading unavailable, use open-source DR grading AI (EyePACS/Kaggle DR model) on existing fundus images.

### Data Security

All SANSCOG retinal image processing on IISc-controlled infrastructure. No external cloud transfer. DPDPA 2023 compliance. No patient-identifiable data in model outputs. ABHA patient ID for longitudinal linkage.

---

## Evaluation & Hypotheses

**H1 (Calibration):** Indian domain-adapted retinal age model achieves MAE <4 years on SANSCOG hold-out, compared to UK Biobank model MAE >6 years applied directly to Indian retinas.

**H2 (Association):** Adjusted RAG >5 years associated with significantly higher MCI/dementia prevalence in SANSCOG (OR >1.5, p <0.05, adjusted for T2D, HTN, age, and DR severity).

**H3 (Incremental value):** Indian-calibrated RAG adds ΔC-statistic >0.03 over age + T2D + HTN base model alone.

| Metric | Target | Interpretation |
|--------|--------|----------------|
| Retinal age MAE (post-adaptation) | <4 years | Model calibration on Indian retinas |
| MAE improvement vs. UK Biobank baseline | ≥2 years reduction | Domain adaptation efficacy; novel contribution |
| OR per year RAG (adjusted) | >1.2 (p <0.05) | Dementia association analogous to Zhu HR 1.25–1.31 |
| ΔC-statistic | >0.03 | Clinical utility threshold |
| T2D mediation | T2D mediates <50% | RAG has independent neurodegenerative signal |
| Sensitivity (DR-excluded) | OR direction preserved | Association beyond diabetic retinopathy confounding |

### Acknowledged Limitations

- RAG is not AD-specific: reflects all causes of retinal aging (T2D, HTN, smoking, genetics)
- CDR staging ≠ biomarker-confirmed AD pathology; findings are for all-cause dementia risk
- Cross-sectional primary analysis cannot establish RAG diverges before symptom onset
- T2D mediation may explain full RAG-dementia association — mediation analysis is critical
- Real-world image quality degradation (cataracts, pterygium, field alignment); ICMR 2025 evaluation found AI sensitivity 59.7–97.7% across algorithms and cameras

---

## Team & Roles

| Member | Role | Primary Contributions |
|--------|------|-----------------------|
| **Sanjay** | Lead | CBR coordination, SEED dataset partnership, stakeholder management, scoring strategy, Phase 2 roadmap |
| **Abhishek** | ML Architect | Deep learning architecture (ResNet-50/EfficientNet-B3), transfer learning, domain adaptation pipeline, GPU training on IISc HPC, calibration analysis |
| **Taruna** | Research / Clinical Bridge | DR screening infrastructure pathway, Aravind/Remidio/Forus partnership outreach, ASHA eye camp workflow, clinical referral pathway, NPCB/CDSCO regulatory alignment |
| **Apsara** | Research / ML | Literature synthesis (RAG evidence base, Indian population differences, retinal pigmentation), confounder analysis (T2D mediation, ETDRS grading), LASI-DAD cognitive anchor |

⚠️ **Clinical Expert Gap:** Actively recruiting ophthalmology + neurology expertise at NPCB, Aravind Eye Care, NIMHANS Bangalore. Collaboration letter(s) before interview stage. Disclosed transparently.

---

## Computing Resources

Phase 1 requires GPU for transfer learning fine-tuning.

| Task | Resource | Estimate |
|------|----------|----------|
| Base model inference (Stage 1 evaluation) | Single GPU (T4 or A100) | ~2 hours for full SANSCOG fundus dataset |
| Transfer learning fine-tuning (Stage 2) | IISc HPC 2× A100 GPU | 4–8 GPU-hours per run; 3–5 runs for ablation |
| Statistical analysis (Stages 3–4) | CPU · 16GB RAM | Logistic regression / Cox model: <30 min |
| Storage | IISc storage | Fundus images: 0.5–3 GB; SEED: ~20 GB |

**IISc HPC request:** 2× A100 GPU nodes × 2 days. 25–30 GB storage for fundus image datasets. All processing on IISc infrastructure; no cloud transfer.

---

## India-First Design

- **Indian RPE melanin calibration is uniquely India-specific:** Higher melanin causes calibration bias in European-trained models — a technical problem only resolvable with Indian retinal data. No other country's team could conduct this research.
- **NPCB DR cameras dual-use:** 10,000+ fundus cameras deployed across India; idle between DR cycles. Zero new hardware. Zero new deployment. Policy-level change only.
- **SANSCOG retinal + cognitive + metabolic:** Irreplaceable combination for this research question. Rural Karnataka, CDR-staged, paired blood biochemistry.
- **High T2D prevalence confounding:** India's ~11% adult T2D prevalence means DR co-occurs in the same 50+ dementia-risk age group. India-specific analysis design (ETDRS exclusion, mediation analysis) not required in Western RAG studies.
- **Aravind/Remidio/Forus partnership pathway:** India-headquartered DR AI ecosystem with existing NPCB relationships. Unmatched deployment potential.
- **Regulatory:** DPDPA 2023 compliance; ABHA patient ID for longitudinal linkage; CDSCO SaMD pathway considered for Phase 2.
- **Complementarity with ScreenBrain:** Community-level retinal triage → confirmatory cognitive assessment. Two-stage India-native dementia risk pathway.

---

## Rubric Self-Assessment

| Category | Predicted | Max | Notes |
|----------|-----------|-----|-------|
| A — Research Quality & Novelty | 20 | 22 | A2 max: specific undeniable gap with zero published Indian studies |
| B — Challenge Alignment | 17 | 20 | B1 max: first-of-kind; B2 docked: camp not home-visit |
| C — Technical Feasibility | 12 | 15 | SANSCOG retinal scope uncertainty; GPU dependency |
| D — Scalability & Impact | 13 | 18 | DR camp reach < ASHA network reach |
| E — UX & Adoption | 8 | 13 | E1 docked: technician + camp required, not ASHA home visit |
| F — India-First Design | 9 | 12 | F1 max; F2 docked: no language component in fundus photography |
| **Total** | **~79** | **100** | |

**Key risks:** Clinical expert gap (ophthalmology + neurology); SANSCOG retinal data scope unconfirmed. Adding ophthalmology collaborator before submission recovers 3–4 pts.
