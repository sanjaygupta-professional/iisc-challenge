# ScreenBrain: Low-Cost AI Dementia Screening for Rural India via ASHA Networks
**IISc AI Challenge for Healthy Brain Aging 2026 · Proposal 1 of 2 · Idea 3: Low-Cost Screening**

**Team:** Jaya (Lead/Research) · Abhishek (ML Architect) · Sanjay (Strategy/ML) · Harsh (Research/ML) · Ashish (Research SME)
**Deadline:** May 20, 2026
**Estimated Rubric Score:** ~82/100

---

## Abstract

India has **8.8 million people living with dementia** and **101 million with Type 2 diabetes** — a metabolic-neurological risk population largely invisible to primary care. Current gold-standard diagnosis (PET/CSF workup) costs ₹50,000–1,50,000 per patient and is available only in 6–8 metropolitan centres. Meanwhile, India's **1.1 million ASHA workers** conduct 450 million home visits annually across 600,000 villages, already collecting blood pressure, blood glucose, and health history — the exact inputs a dementia risk model needs.

We propose **ScreenBrain**: a low-cost AI screening system deployable within an existing ASHA home visit. No imaging required. An XGBoost classifier trained on **SANSCOG** (10,013 rural Karnataka participants, CDR-staged neurologist ground truth) outputs a Green/Orange/Red risk flag for the ASHA worker and top-3 SHAP-explained risk factors for the PHC physician.

**H1:** AUC >0.80 for MCI detection on SANSCOG test set vs. ACE-III-alone baseline.
**H2:** AUC >0.70 on LASI-DAD external test (4,096 participants, 12 Indian language groups) — pan-Indian generalisation without retraining.

ScreenBrain is scoped as a **population-level risk stratification tool** enabling prioritised referral, not a diagnostic replacement. It generates the first AI model for MCI detection trained and validated on an Indian community dementia cohort using inputs accessible to every ASHA worker in the country.

---

## Problem Statement

### India's Dementia Crisis is a Rural Detection Desert

Of India's 8.8 million people living with dementia, **80% are undiagnosed**. The bottleneck is detection. MRI, PET, and CSF biomarker workups cost ₹50,000–1,50,000 and are unavailable outside 6–8 metropolitan centres. For 900 million Indians in rural and semi-urban settings, these diagnostics are inaccessible within a lifetime.

### The ASHA Infrastructure is Structurally Underutilised

India's 1.1 million ASHA workers conduct 450 million home visits annually across 600,000 villages, already recording blood pressure, blood glucose, BMI, and health history for NHM programs. No validated AI tool has been built to use this existing workflow for cognitive risk assessment.

### Western Cognitive Tools Fail Indian Populations

The **MMSE** — the most widely used cognitive screen globally — has a catastrophic failure mode for rural India: **100% of illiterate subjects score below the dementia cutoff**, producing false positives for the entire unschooled rural elderly population. RUDAS and PHC-CS correct for literacy bias but have never been integrated into an ML pipeline validated against Indian dementia cohort ground truth.

The **14 modifiable risk factors** accounting for ~45% of global dementia cases (Lancet Commission 2020) — diabetes, hypertension, physical inactivity, low education, depression — are all assessable at near-zero marginal cost during an existing ASHA home visit.

### India's Metabolic Risk Profile is Uncharacterised

India's T2D onset occurs **~10 years earlier** than in Western populations, creating a large cohort of young-onset diabetics accumulating metabolic-neurological risk over decades. SANSCOG (Ravindranath et al. 2023) is the only published Indian study pairing metabolic blood panels with longitudinal cognitive assessments and CDR-staged neurologist labels — and no ML model has been trained on it for this task.

### The Specific Research Gap

No published study has: (1) trained an ML model on SANSCOG or LASI-DAD for MCI detection using ASHA-collectable inputs; (2) validated literacy-fair cognitive tools in an ML pipeline against Indian CDR ground truth; or (3) proposed a deployable AI system integrated with India's existing ASHA home-visit infrastructure.

---

## AI Approach & Architecture

### Model Choice: XGBoost + SHAP

XGBoost consistently outperforms deep learning on tabular clinical data at ~10,000 records, natively handles missing values, and produces SHAP feature importance scores for clinical audit. Deep learning is reserved for Phase 2 speech data.

### Feature Architecture

| Tier | Features | Collection | Time |
|------|----------|------------|------|
| **Tier 1** (always) | Age, sex, education/literacy, systolic BP, diastolic BP, fasting glucose, BMI, RUDAS/PHC-CS score | Existing ASHA home visit | ~8 min |
| **Tier 2** (questionnaire) | PHQ-2 depression screen, Katz ADL score, physical activity (GPPAQ-style), family history, smoking, sleep disturbance | ASHA-administered | ~7 min |
| **Optional** (PHC blood draw) | HbA1c, lipid panel | Existing PHC lab result | 0 min (piggyback) |

### System Pipeline

```
ASHA Home Visit
  → [Tier 1 Inputs: BP · Glucose · BMI · RUDAS]
  → [Tier 2 Inputs: ADL · Depression · Activity · History]
  → Feature Preprocessing & Imputation
  → XGBoost Classifier
  → Risk Score (0.0 – 1.0)
      → 🟢 Green: Low Risk (ASHA view, Kannada)
      → 🟡 Orange: Monitor
      → 🔴 Red: Refer to PHC
  → SHAP Explainer → Top-3 Risk Factors for Physician
```

### Missing-Data Robustness

Model trained with **30–60% random missingness augmentation**. At inference: if HbA1c unavailable → runs on cognitive + demographics; if cognitive test incomplete → runs on blood + demographics. Confidence intervals widen accordingly; reported alongside risk flag. Never refuses inference due to missing features.

### Output Design

- **ASHA-facing:** Single Green/Orange/Red traffic light + one plain-language sentence in Kannada. No numbers. No clinical terminology.
- **PHC physician-facing:** Risk score (0–100) + top-3 SHAP-contributing features with direction (e.g., "High fasting glucose ↑ risk 23%"). SHAP summary plots for audit.

### Phase 2 Roadmap

Upon SANSCOG Wave 2/3 access: **Model M** (longitudinal conversion prediction) using engineered delta features (ΔACE-III, ΔHbA1c, Δword recall) to predict 2–4 year MCI-to-dementia conversion. Activates after 2+ ASHA visits.

---

## Data Strategy

| Dataset | N | Role | Access |
|---------|---|------|--------|
| SANSCOG (Ravindranath et al. 2023) | 10,013 | Primary training + internal test; rural Karnataka; CDR-staged ground truth | CBR-controlled · Request in progress |
| TLSA | 1,670 | Urban Bangalore validation; rural/urban balance check | CBR dataset |
| LASI-DAD | 4,096 | Fully held-out external test; 12 Indian language groups | Publicly accessible |
| SYN-1 (CTGAN/SDV) | 50,000 | Architecture validation + hyperparameter search before real data access | Team-generated |

**Train/Test Split:** 70/15/15 stratified by CDR stage and SANSCOG wave. LASI-DAD fully held-out — never used for model selection, tuning, or threshold calibration.

**Ground Truth:** CDR staging: 0 = cognitively normal, 0.5 = MCI, ≥1 = dementia. Binary classification: MCI + dementia vs. normal.

**TSTR Validation:** SYN-1 uses Train-on-Synthetic, Test-on-Real: once real SANSCOG access confirmed, retrain and compare. Gap >0.05 AUC triggers architecture re-evaluation.

**Data Security:** All SANSCOG processing on IISc-controlled infrastructure. No cloud transfer without CBR approval. DPDPA 2023 compliance via anonymisation + local storage. ABHA integration pathway for longitudinal tracking.

---

## Evaluation & Hypotheses

**H1 (Primary):** ScreenBrain achieves AUC >0.80 on SANSCOG internal test set vs. ACE-III-alone baseline (~0.72–0.75).

**H2 (Generalisation):** AUC >0.70 on LASI-DAD held-out external test (12 Indian language groups) without retraining.

| Metric | Target | Rationale |
|--------|--------|-----------|
| AUC-ROC | >0.80 internal; >0.70 external | Primary discrimination metric |
| Sensitivity at 90% specificity | >65% | Limit over-referral from ASHA |
| Brier Score | <0.15 | Calibration; overconfident predictions increase clinical risk |
| 95% CI (bootstrap 1,000×) | All metrics | Uncertainty quantification |
| SHAP top-3 stability | >80% across bootstrap folds | Consistency for clinical trust and audit |

**Acknowledged Limitations:**
- CDR staging ≠ biomarker-confirmed AD pathology; ScreenBrain is risk stratification, not diagnosis
- ASHA inter-rater reliability for RUDAS/PHC-CS unpublished — this study measures Cohen's kappa as secondary outcome
- Performance may degrade for extreme literacy profiles not in SANSCOG's rural Karnataka sample

---

## Team & Roles

| Member | Role | Primary Contributions |
|--------|------|-----------------------|
| **Jaya** | Lead / Research | Literature synthesis, CBR/SANSCOG citations, hypothesis specification, research gap validation, proposal narrative |
| **Abhishek** | ML Architect | XGBoost model design, SHAP pipeline, TSTR validation, Bayesian hyperparameter search (200–500 trials), MLflow experiment tracking |
| **Sanjay** | Strategy / ML | SANSCOG access coordination with CBR, stakeholder management, Phase 2 roadmap, scoring alignment |
| **Harsh** | Research / ML | Feature engineering, SYN-1 synthetic data (CTGAN/SDV), preprocessing pipeline, LASI-DAD integration |
| **Ashish** | Research SME | Domain expertise: clinical context for dementia risk factors, ASHA workflow validation, confounder identification, research quality review |

⚠️ **Clinical Expert Gap:** IISc rubric requires ≥1 domain expert. Actively recruiting at NIMHANS Bangalore, St. John's Medical College, and CBR-affiliated neurologists. Collaboration letter before interview stage. Disclosed transparently.

---

## Computing Resources

**Phase 1 is deliberately lightweight.** XGBoost on ~10,000 tabular records trains in <2 hours on a single CPU.

| Phase | Resource | Estimate |
|-------|----------|----------|
| Phase 1 — Core training | Single CPU · 16GB RAM | <2 hours full model; <4 hours hyperparameter search |
| Phase 1 — Large-scale search | IISc HPC CPU cluster | 500-trial parallel search; reduces wall time to ~30 min |
| Phase 2 — Speech (future) | 4–8 A100-equivalent GPU-hours | IndicWav2Vec fine-tuning for multilingual speech layer |

**Storage:** SANSCOG tabular data ~50MB. No specialist storage required for Phase 1.
**IISc HPC request:** CPU cluster access for parallel hyperparameter search. No GPU required for Phase 1.

---

## India-First Design

- **SANSCOG irreplaceable:** Only rural Karnataka longitudinal cohort pairing metabolic panels with cognitive assessments and CDR labels. Requires CBR access — no Western team can replicate this.
- **Literacy-fair cognitive tools:** RUDAS validated in Kerala (n=116); PHC-CS validated in Karnataka (Kannada). Designed for 0–5+ years of schooling.
- **ASHA integration:** Piggybacks on 450 million existing annual home visits. No new infrastructure. 2-hour RUDAS workshop is the only training increment.
- **Near-zero marginal cost:** Blood tests already at PHC. RUDAS/PHC-CS adds 8 minutes. Zero consumables. Zero specialised devices.
- **India's metabolic risk profile:** T2D onset 10 years earlier — young-onset dementia risk cohort unrepresented in Western training data.
- **Kannada-native output (Phase 1); 40+ languages (Phase 2):** IndicWav2Vec multilingual; MeitY Bhashini alignment.
- **Regulatory:** DPDPA 2023 compliance; no cloud transfer without CBR approval; ABHA patient ID for longitudinal tracking.

---

## Rubric Self-Assessment

| Category | Predicted | Max |
|----------|-----------|-----|
| A — Research Quality & Novelty | 18 | 22 |
| B — Challenge Alignment | 16 | 20 |
| C — Technical Feasibility | 13 | 15 |
| D — Scalability & Impact | 16 | 18 |
| E — UX & Adoption | 10 | 13 |
| F — India-First Design | 10 | 12 |
| **Total** | **~83** | **100** |

**Key gaps:** Clinical expert (costs ~5 pts across A3, C1). Adding named clinical collaborator before submission could reach 85–87/100.
