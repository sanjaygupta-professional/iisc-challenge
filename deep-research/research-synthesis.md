# Research Synthesis: Ideas 1, 3, 7 — IISc AI Challenge for Healthy Brain Aging

> **Purpose:** Cross-idea synthesis of the three research foundation documents. Identifies shared assets, sequencing recommendation, cross-cutting gaps, and next steps toward solution prototypes.
>
> **Inputs:** foundation-idea1-mci-progression.md | foundation-idea3-lowcost-screening.md | foundation-idea7-environment-lifestyle.md
>
> **Date:** 2026-05-08

---

## 1. The Three Ideas at a Glance

| Idea | Core Contribution | Primary Dataset | Key Output |
|------|------------------|-----------------|------------|
| **1** — MCI Progression Model | First India-trained MCI-to-dementia conversion model, outperforming ADNI transfer | SANSCOG (train) + TLSA + LASI-DAD (validate) | C-index ≥ 0.75 on SANSCOG holdout; head-to-head vs. ADNI-transferred baseline |
| **3** — Low-Cost Screening | ASHA-deployable AI screen with no imaging/biomarkers; validated on SANSCOG | SANSCOG (primary) + LASI-DAD (national benchmark) | AUC 0.78–0.86 on rural Karnataka; sensitivity at 90% specificity |
| **7** — Environmental Risk Model | First model of PM2.5 × B12 × OPA interaction in Indian aging population | LASI-DAD (geospatial PM2.5) + SANSCOG (biomarkers) | SHAP feature ranking vs. Lancet 2024 global; India-specific PAF estimate |

---

## 2. Shared Data Assets

All three ideas draw on the same core datasets. This is a strength — the research infrastructure overlaps, meaning investment in data access benefits all three simultaneously.

### CBR-SANSCOG
**Central to all three ideas.** ~2,797–3,500+ enrolled (target 10,000), rural Karnataka, ages 45+.

| Idea | How SANSCOG is Used | What You Need from SANSCOG |
|------|--------------------|-----------------------------|
| 1 | Primary training set for survival model | Cognitive longitudinal waves + conversion labels (MCI→dementia) |
| 3 | Primary validation set for screening model | Baseline cognitive + vascular + sociodemographic features + ground-truth labels |
| 7 | B12/homocysteine biomarkers — not in LASI-DAD | B12, homocysteine, dietary recall, occupational history |

**Single most important action for all three ideas:** Contact CBR directly to confirm (a) number of observed conversion events in SANSCOG follow-up waves, (b) full variable list / data dictionary, (c) B12 and homocysteine availability.

### LASI-DAD
**National benchmark for Ideas 1, 3; primary dataset for Idea 7's environmental arm.**

- 3,224 community-dwelling participants, nationally representative, 14 states, ages 60+
- Geospatially linked PM2.5 data via NASA MAIAC (confirmed in PMC8570776) — unique for Idea 7
- Access via NIAGADS (dss.niagads.org/studies/sa000019/) with data-use agreement
- COGNITO-to-MMSE crosswalk not yet published — limits Idea 1 use of LASI-DAD without additional bridging work

### CBR-TLSA
**Secondary validation for Idea 1 only.** n=1,000 urban Bangalore, same battery as SANSCOG, enables rural→urban generalizability test.

---

## 3. Shared Predictive Features

Hypertension and vascular comorbidities appear as load-bearing features across all three ideas:

| Feature | Idea 1 | Idea 3 | Idea 7 |
|---------|--------|--------|--------|
| Systolic BP / hypertension | Tier 1 | Tier 1 (ASHA-measured) | Confounder/covariate |
| HbA1c / fasting glucose | Tier 1 | Tier 1 | Confounder |
| Age | Core | Core | Core |
| Years of education / literacy | Critical covariate | Feature + fairness audit | Confounder for OPA |
| BMI / waist-hip | Tier 1 | Tier 1 | Confounder |
| Cognitive battery (COGNITO/PHC-CS) | Outcome history | Primary feature | Outcome |

**Implication:** A shared feature extraction pipeline across SANSCOG could serve all three models. Building a clean, well-documented feature set once (demographic + vascular + cognitive scores) and then adding idea-specific features (longitudinal deltas for Idea 1; environmental variables for Idea 7) reduces total engineering work.

---

## 4. Cross-Cutting Research Gaps

These gaps apply to all three ideas and must be addressed in any IISc challenge submission.

### Gap A: Conversion Event Count (Critical for Idea 1; relevant for Idea 3)
The number of observed MCI→dementia conversion events in SANSCOG is not publicly disclosed. SANSCOG has ~2,797 enrolled; if ~20% have MCI (~560) and annual conversion is ~12%, a 6-7 year follow-up yields ~70–100 events — marginal for survival analysis. **If event count is below 50, Idea 1's survival model is not feasible; fall back to binary 3-year conversion classifier.**

### Gap B: ASHA Inter-Rater Reliability (Critical for Idea 3; relevant to deployment framing of Ideas 1 and 7)
No published study reports Cohen's kappa for RUDAS or PHC-CS when administered by ASHA workers (vs. trained research staff). Without this, the deployment case for Idea 3 rests on an unvalidated assumption. **The proposal should either cite an existing study we have not found, or propose a small reliability study as part of the research plan.**

### Gap C: COGNITO-to-Global-Battery Crosswalk (Critical for Idea 1 external validation; relevant for Idea 3)
SANSCOG uses COGNITO, which is not directly comparable to MMSE, ADAS-cog, or CDR-SB used in global models and LASI-DAD. No published crosswalk exists. **Without this crosswalk, external validation on LASI-DAD requires harmonization work that is itself a research contribution.**

### Gap D: Literacy Floor Effects (Affects all three)
Standard cognitive tools (MMSE, and to a lesser extent RUDAS) have severe floor effects in rural India's heterogeneously literate population. PHC-CS is the strongest candidate for Idea 3; COGNITO handles this for SANSCOG internally. **Any global AUC benchmark from Western tools must be discounted by 10–15 percentage points when applied to our target population.**

### Gap E: DPDP Act 2023 Compliance (Operational; affects deployment framing)
India's new Digital Personal Data Protection Act affects data collection, storage, and cross-site sharing for health data. This is unaddressed in all three foundation documents. **The proposal's architecture section must address data governance — especially if Idea 3 proposes a mobile app or Idea 7 proposes satellite data linkage to individual-level records.**

---

## 5. Recommended Sequencing

### Sequence: Idea 3 → Idea 1 → Idea 7

**Rationale:**

**Idea 3 first.** Cross-sectional classification (screen for current MCI/dementia) does not require longitudinal conversion events. SANSCOG baseline wave is sufficient. PHC-CS and RUDAS are already validated in Karnataka. The deployment story (ASHA workers, offline Android app) is concrete and compelling for a challenge submission. This is the fastest path to a working prototype and a submission that directly addresses rural India's clinical access gap.

**Idea 1 second.** Longitudinal model requires conversion events — gated on CBR confirmation. If SANSCOG has ≥50 events, Idea 1 is tractable and provides a scientifically deeper contribution (time-to-conversion is richer than binary screening). This is the highest-prestige submission if feasible, because it directly answers the challenge's stated concern about Western model transfer.

**Idea 7 third (or parallel track, contingent on data).** Most novel, most uncertain. Contingent on: (a) LASI-DAD codebook confirming PM2.5 linkage and useful nutritional proxies, (b) CBR providing SANSCOG B12/homocysteine data. If both come through, Idea 7 has a unique "first-in-India" claim that no Western research group can replicate. If B12 biomarkers are not accessible, the nutritional arm weakens to proxy variables and the claim softens.

**Can all three be submitted together?** Yes — as a unified proposal framing them as complementary layers of the same problem: Idea 3 is the **screening tool**, Idea 1 is the **prognostication model**, and Idea 7 is the **risk factor understanding** layer. This is the BharatBrain architecture — a coherent system, not three disconnected submissions.

---

## 6. Confidence Assessment Per Idea

| Dimension | Idea 1 | Idea 3 | Idea 7 |
|-----------|--------|--------|--------|
| Global research foundation | **Strong** — 47-model meta-analysis, survival literature well established | **Strong** — screening tools well validated in India (CSI-D, PHC-CS, RUDAS) | **Medium** — PM2.5 and B12 evidence strong; causal evidence weak |
| India-specific evidence | **Medium** — UCL hypertension finding, APOE transfer confirmed; no published Indian conversion model | **Medium-High** — PHC-CS and CSI-D validated in Karnataka; ML benchmarks from Western data | **Medium** — B12 SANSCOG data exists; PM2.5 confounding unresolved |
| Data feasibility | **Medium** — gated on conversion event count in SANSCOG | **High** — cross-sectional baseline sufficient; features available | **Medium** — LASI-DAD PM2.5 linkage confirmed; B12 NOT in LASI-DAD harmonized data |
| Novelty of contribution | **High** — no published Indian MCI conversion model | **Medium-High** — no Indian rural ML screening model externally validated on SANSCOG | **Very High** — no Indian environmental interaction model exists anywhere |
| Deployment relevance | **Medium** — risk stratification tool for specialist clinics | **Very High** — ASHA-deployable, mass scale, direct PHC integration | **Medium** — policy relevance (PAF for air pollution) rather than direct clinical tool |
| **Overall readiness** | **Conditional** (need event counts) | **Ready to prototype** | **Conditional** (need LASI-DAD codebook + SANSCOG biomarkers) |

---

## 7. Immediate Next Steps

### This Week (before any modeling work)

1. **Contact CBR directly.** Ask specifically:
   - How many observed MCI→dementia conversion events exist in SANSCOG follow-up data? (gates Idea 1)
   - Is a full data dictionary / variable list available? (gates Idea 3 feature set)
   - Are B12 and homocysteine values available in SANSCOG? (gates Idea 7 nutritional arm)
   - What is the process for IISc challenge team data access?

2. **Apply for LASI-DAD access via NIAGADS** (dss.niagads.org/studies/sa000019/). This takes 2–4 weeks to process; apply immediately. Needed by all three ideas for external validation or as primary dataset (Idea 7).

3. **Run LASI-DAD codebook audit.** Once NIAGADS access granted, confirm: (a) PM2.5 linkage variable quality (`rWpm25`, `rWobsair`), (b) nutritional variables, (c) occupational history categorization. Critical for Idea 7 feasibility.

### Once CBR Confirms (2 weeks target)

4. **Prototype Idea 3 baseline.** Using SANSCOG cross-sectional data:
   - Extract Tier 1 + Tier 2 features
   - Train logistic regression baseline
   - Report AUC, sensitivity at 90% specificity
   - This is the anchor deliverable for the IISc submission

5. **Assess Idea 1 feasibility.** If conversion events ≥ 50: set up Random Survival Forest pipeline on SANSCOG longitudinal data. If < 50: build XGBoost binary 3-year classifier with calibrated probabilities.

6. **Scoping decision on Idea 7.** Based on LASI-DAD codebook audit + CBR biomarker confirmation: decide whether to pursue as full idea or as a supplementary environmental covariate analysis within Idea 3's SANSCOG model.

### Common Infrastructure (build once, use for all three)

- **SANSCOG feature pipeline:** Shared data loading, cleaning, and feature extraction script. Used by Ideas 1, 3, and 7.
- **LASI-DAD feature pipeline:** Shared loading + geospatial PM2.5 linkage. Used by Ideas 1 (external validation) and 7 (primary dataset).
- **Fairness audit module:** Stratified AUC by sex, education level, age decade, rural/urban. Required by all three for the IISc submission.
- **COGNITO feature extraction:** Normalize COGNITO subscores; produce education-adjusted composite. Used by Ideas 1 and 3.

---

## 8. Unified Proposal Frame (BharatBrain Architecture)

If the team submits all three as a unified system, the narrative is:

> **BharatBrain: A Three-Layer AI System for Dementia Risk in Rural India**
>
> - **Layer 1 — Screen:** Low-cost AI screening pipeline deployable by ASHA workers. No imaging, no biomarkers. AUC > 0.80 against SANSCOG ground truth. (Idea 3)
> - **Layer 2 — Prognosticate:** MCI-to-dementia conversion model, India-trained on SANSCOG/TLSA. Outperforms Western ADNI-transferred models. (Idea 1)
> - **Layer 3 — Understand:** Environmental and lifestyle risk factor model, India-specific. Quantifies the contribution of PM2.5, B12 deficiency, and agricultural occupational exposure to India's dementia burden. (Idea 7)
>
> Each layer is individually viable as a submission. Together, they form a complete pipeline from population-level screening to individual-level risk prediction to policy-level risk factor quantification.

---

*Synthesis produced from: foundation-idea1-mci-progression.md (315 lines, 25 verified sources) | foundation-idea3-lowcost-screening.md (361 lines, 12 sources + 9 confidence-rated) | foundation-idea7-environment-lifestyle.md (454 lines, 26 sources)*

*Research pipeline: Gemini CLI (gemini-2.5-pro) per idea | Claude + Claude Fallback critique | Claude synthesis | Meta-synthesis: Claude*

*Date: 2026-05-08*
