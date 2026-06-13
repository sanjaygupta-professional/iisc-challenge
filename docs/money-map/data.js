// AI Money Map — data snapshot
// Generated 2026-06-12 via Gemini CLI research (Google Search) + Claude synthesis.
// FACT-CHECK 2026-06-12 (two passes, 46 claims): pass 1 (v1) 21/23 confirmed; pass 2 (v2) 22/23 confirmed.
// Corrections applied: VAST Data lead, NVIDIA deadline, Stanford HAI leadership, Skild round, EU EIC equity, AIIMS-IITD year.
// Only unverified item left flagged: Oxford "Stateful Robotics" spinout. See research/raw-verify.md + raw-verify2.md.
// Signal rubric: strong = repeated theme (3+ deals) / paid pilot-contract / published RFS naming gap
//               moderate = single recent deal / semi-marketing challenge / thesis without deals
//               weak = one-off event / stale pre-2024 / PR without follow-through

const DATA = {
  generated: "2026-06-12",
  categories: [
    { id: "ventures", name: "Corporate Venture Arms", tagline: "Where corporations invest — strategic gaps they cannot fill internally. Money lags strategy 12–18 months, so read repeated themes, not single deals." },
    { id: "challenges", name: "Challenges & RFPs", tagline: "Explicit asks to the market. The strongest signal of unmet need — organizations describing, in writing, problems they will pay to solve." },
    { id: "accelerators", name: "Accelerators & Ecosystems", tagline: "What gets funded at the frontier. Published requests-for-startups and batch themes show where practitioner opportunity is forming." },
    { id: "vc", kind: "money", name: "Independent VC Firms", tagline: "Published investment theses from the firms placing the largest private AI bets — their own words on what the next decade pays for." },
    { id: "public", kind: "money", name: "Public & Sovereign Funds", tagline: "Government and sovereign programs offering compute, grants, and contracts. Access models differ sharply by nationality — read the reach badge." },
    { id: "academia", kind: "academia", name: "Academic AI Labs", tagline: "Where talent and IP are produced — research agendas, real-world industry collaborations, and the spinouts that carry ideas to market." }
  ],
  gaps: [
    { id: "agents", name: "The Action Gap", desc: "Every sponsor shifted from chatbots to agents that execute work autonomously. Salesforce, SAP, Accenture, Google, AWS all asking for autonomous execution — and for the missing infrastructure (durable execution, monitoring, multi-agent security).", evidence: "Triangulated: ventures + challenges + accelerators all converge." },
    { id: "physical", name: "The Physical AI Bridge", desc: "AI that touches atoms: robotics, surgery, factories, sim-to-real. NVIDIA pays for cable-handling robots, J&J for connected operating rooms, Accenture for supply-chain agents, a16z names the hardware-software founder chasm.", evidence: "Strong: paid challenges with deadlines + repeated CVC deals." },
    { id: "compute", name: "The Compute Wall", desc: "Photonics, quantum, efficient inference. NVIDIA, AMD, Intel, TSMC ecosystem all funding optical I/O and post-silicon bets. Corporations believe GPUs alone cannot sustain growth.", evidence: "Strong: 4+ semiconductor CVCs investing in same theme." },
    { id: "trust", name: "The Trust Gap", desc: "Confidential AI, code verification, red-teaming, agent governance. Intel bets on confidential compute, Salesforce on code trust, OpenAI pays $500K for red-teaming, DARPA solicits trustworthy AI. Security is the #1 enterprise adoption blocker.", evidence: "Strong: paid programs + repeated investment." },
    { id: "reasoning", name: "The Reasoning Gap", desc: "Rigorous mathematical and novel-problem reasoning remains unsolved — and prized: AIMO $2.2M, ARC Prize $850K, Sequoia names 'mathematical superintelligence' as open gap.", evidence: "Strong: largest open prize money in the field." },
    { id: "india", name: "India: Vernacular + Edge", desc: "₹10,372 crore IndiaAI mission, Bhashini voice-first offline AI, Qualcomm's $150M India fund, Peak XV 'vertical & vernacular' thesis. The asks: 22-language models, energy-efficient inference for mobile-first users, sovereign data.", evidence: "Strong for India-based researchers: government money + CVC money aligned." }
  ],
  orgs: [
    // ───────────────────────── VENTURES ─────────────────────────
    {
      id: "m12", category: "ventures", industry: "Tech", parent: "Microsoft", name: "M12", url: "https://m12.vc",
      thesis: "“Operational adoption” of enterprise-ready AI. Four Ds framework: Data (moats), Dividends (ROI), Distribution (GTM alignment), Delight (UX). Priority: agentic AI that executes business processes, not just answers queries.",
      themes: ["agents", "ai-infra", "security", "vertical-ai"],
      initiatives: [
        { title: "Neurophos — photonic AI chips", ask: "100x efficiency photonic compute for data centers", amount: "$110M Series A (2026)", status: "invested", signal: "Microsoft hedging against the power wall — compute efficiency is a named gap.", signalStrength: "strong", opportunity: "Research on photonic/efficient inference benchmarks; energy-aware model serving.", links: ["https://m12.vc"] },
        { title: "Didero — agentic procurement", ask: "Autonomous procurement for manufacturing supply chains", amount: "$30M (2026)", status: "invested", signal: "Copilot → autonomous worker shift; supply chain is the chosen battleground.", signalStrength: "strong", opportunity: "Agent reliability evaluation in procurement workflows — unsolved, measurable.", links: ["https://m12.vc"] },
        { title: "etalytics — data-center energy intelligence", ask: "Optimize power use of AI data centers", amount: "€16M Series A (2025)", status: "invested", signal: "Sustainable compute is an investable gap, not CSR.", signalStrength: "moderate", opportunity: "Energy-efficiency metrics for LLM inference; carbon-aware scheduling research.", links: ["https://m12.vc"] }
      ]
    },
    {
      id: "alphabet-vc", category: "ventures", industry: "Tech", parent: "Alphabet", name: "GV / CapitalG / Gradient", url: "https://gv.com",
      thesis: "GV: “age of participatory software” — recursive self-improving AI and agents. CapitalG: late-stage structural AI (cybersecurity, networking, physical intelligence). Gradient spun out independent in 2026 — agent-native, full-stack systems.",
      themes: ["agents", "self-improving-code", "physical-ai", "networking"],
      initiatives: [
        { title: "Physical Intelligence", ask: "Foundation models for robotics and physical-world interaction", amount: "2025 round", status: "invested", signal: "Alphabet betting embodiment is the next platform.", signalStrength: "strong", opportunity: "Sim-to-real evaluation, robot data curation — academic-friendly entry points.", links: ["https://gv.com"] },
        { title: "Sierra — enterprise conversational agents", ask: "Agents for complex conversational workflows", amount: "$950M Series E (May 2026, GV co-led, $15.8B valuation)", status: "invested", signal: "Conversational AI matured into agent infrastructure play.", signalStrength: "moderate", opportunity: "Multi-turn agent evaluation; failure taxonomy in production conversations.", links: ["https://gv.com"] },
        { title: "Recursive — self-improving codebases", ask: "Open-ended architecture for AI improving its own code", amount: "$650M (May 2026, GV + Greycroft)", status: "invested", signal: "Self-improvement is moving from research to venture-backed product.", signalStrength: "weak", opportunity: "Safety + verification of self-modifying systems — wide-open research area.", links: ["https://gv.com"] }
      ]
    },
    {
      id: "nventures", category: "ventures", industry: "Semiconductor", parent: "NVIDIA", name: "NVentures", url: "https://www.nvidia.com/en-us/nventures/",
      thesis: "Technology visionaries solving complex problems. Focus: Physical AI (embodied), AI for science/biotech, sustainable infrastructure. NVentures = financial arm; Corp Dev handles giant strategic stakes.",
      themes: ["physical-ai", "quantum", "biotech", "photonics"],
      initiatives: [
        { title: "Quantinuum — quantum computing", ask: "Strategic stake in fault-tolerant quantum", amount: "$600M (2025)", status: "invested", signal: "NVIDIA hedging end of classical silicon.", signalStrength: "strong", opportunity: "Quantum-classical hybrid algorithms; quantum ML benchmarking.", links: ["https://www.nvidia.com/en-us/nventures/"] },
        { title: "Skild AI — general robot software", ask: "AI software spanning diverse robotic forms", amount: "$135M (2025)", status: "invested", signal: "Embodied AI = next massive CUDA market.", signalStrength: "strong", opportunity: "Cross-embodiment transfer learning; robot foundation model evaluation.", links: ["https://www.nvidia.com/en-us/nventures/"] },
        { title: "Alice & Bob — cat-qubit quantum", ask: "Fault-tolerant quantum systems", amount: "Series B extension (May 2026)", status: "invested", signal: "Repeated quantum bets = pattern, not one-off.", signalStrength: "moderate", opportunity: "Error-correction-aware algorithm design.", links: ["https://alice-bob.com"] }
      ]
    },
    {
      id: "intel-capital", category: "ventures", industry: "Semiconductor", parent: "Intel", name: "Intel Capital", url: "https://www.intelcapital.com",
      thesis: "“Future of compute”: CPU as orchestration layer for agentic AI, confidential computing for privacy, hybrid/edge AI.",
      themes: ["confidential-ai", "edge-ai", "quantum", "optical-io"],
      initiatives: [
        { title: "OPAQUE — confidential AI trust layer", ask: "Run AI on sensitive data inside trusted enclaves", amount: "$24M Series B (2026)", status: "invested", signal: "Intel positioning hardware enclaves as the only safe home for enterprise agents.", signalStrength: "strong", opportunity: "Privacy-preserving ML on real workloads; TEE benchmarking for inference.", links: ["https://opaque.co"] },
        { title: "RunPod — distributed GPU cloud", ask: "Decentralized GPU compute marketplace", amount: "2024 round", status: "invested", signal: "Compute access democratization is investable.", signalStrength: "moderate", opportunity: "Cost-efficient training/eval pipelines for low-resource researchers.", links: ["https://runpod.io"] }
      ]
    },
    {
      id: "amd-ventures", category: "ventures", industry: "Semiconductor", parent: "AMD", name: "AMD Ventures", url: "https://www.amd.com/en/corporate/ventures.html",
      thesis: "Open AI ecosystem to challenge proprietary (CUDA) dominance: alternative architectures, open software (ROCm), optical interconnects.",
      themes: ["open-ecosystem", "photonics", "efficient-models", "spatial-ai"],
      initiatives: [
        { title: "Ayar Labs — optical I/O", ask: "Break the memory wall with optical interconnects", amount: "$500M Series E (2026)", status: "invested", signal: "Data movement, not compute, is now the bottleneck.", signalStrength: "strong", opportunity: "Communication-efficient training algorithms; interconnect-aware model design.", links: ["https://ayarlabs.com"] },
        { title: "Liquid AI — efficient architectures", ask: "Neural nets needing less power than transformers", amount: "$250M (2024)", status: "invested", signal: "Post-transformer efficiency is venture-grade, not just academic.", signalStrength: "strong", opportunity: "Liquid/state-space model research directly fundable; efficiency benchmarks.", links: ["https://liquid.ai"] },
        { title: "Moreh — non-NVIDIA LLM software", ask: "Run LLMs on non-NVIDIA hardware", amount: "2024 round", status: "invested", signal: "AMD funding CUDA-killers explicitly.", signalStrength: "moderate", opportunity: "Portable kernel research; hardware-agnostic inference optimization.", links: ["https://moreh.io"] }
      ]
    },
    {
      id: "qualcomm-ventures", category: "ventures", industry: "Semiconductor", parent: "Qualcomm", name: "Qualcomm Ventures", url: "https://www.qualcommventures.com",
      thesis: "Edge AI and hybrid AI. AI is the new user interface. Fund startups that make intelligence run locally on power-constrained devices — phones, cars, PCs.",
      themes: ["edge-ai", "on-device", "robotics", "india"],
      initiatives: [
        { title: "India AI Fund", ask: "$150M dedicated to Indian startups in robotics + edge AI", amount: "$150M (2026)", status: "active", signal: "Qualcomm sees India as proving ground for low-power, on-device AI at scale.", signalStrength: "strong", opportunity: "Direct fit for India-based researchers: edge inference, Indic on-device models.", links: ["https://www.qualcommventures.com"] },
        { title: "Anthropic stake", ask: "Efficiency-optimized safe foundation models", amount: "2024", status: "invested", signal: "Edge player wants models that compress to device scale.", signalStrength: "moderate", opportunity: "Distillation and quantization research with safety preservation.", links: ["https://www.qualcommventures.com"] }
      ]
    },
    {
      id: "samsung-vc", category: "ventures", industry: "Tech", parent: "Samsung", name: "Samsung Next / Ventures", url: "https://www.samsungnext.com",
      thesis: "Next: agentic experiences for Galaxy/Home ecosystem. Ventures: inference hardware and AI-driven factories. Goal — agent-first devices.",
      themes: ["on-device", "inference-silicon", "robotics", "manufacturing"],
      initiatives: [
        { title: "d-Matrix — inference chips", ask: "Specialized generative-AI inference silicon", amount: "$275M Series C (2025)", status: "invested", signal: "Inference (not training) is where device makers see the cost battle.", signalStrength: "strong", opportunity: "Inference-efficiency research; KV-cache and attention optimization for new silicon.", links: ["https://d-matrix.ai"] },
        { title: "Nota AI — model compression", ask: "Compress models for on-device inference", amount: "ongoing", status: "invested", signal: "Compression is a strategic dependency for agent-first hardware.", signalStrength: "moderate", opportunity: "Pruning/quantization papers have direct industrial buyers.", links: ["https://nota.ai"] }
      ]
    },
    {
      id: "salesforce-ventures", category: "ventures", industry: "Tech", parent: "Salesforce", name: "Salesforce Ventures", url: "https://www.salesforceventures.com",
      thesis: "From copilots to the “agentic enterprise.” Autonomous action-oriented systems; trust and security as non-negotiable pillars.",
      themes: ["agents", "code-trust", "enterprise"],
      initiatives: [
        { title: "Code Metal — AI code verification", ask: "Trust and verification for AI-generated code", amount: "$125M (2026)", status: "invested", signal: "Verification of AI output = the moat enterprises will pay for.", signalStrength: "strong", opportunity: "Formal verification meets LLM codegen — high-value research seam.", links: ["https://www.salesforceventures.com"] },
        { title: "Writer — enterprise LLM platform", ask: "Business-critical enterprise-grade LLM apps", amount: "2025 round", status: "invested", signal: "Fortune 500 fear of public models = private-LLM market.", signalStrength: "moderate", opportunity: "Domain adaptation and governance research for regulated deployment.", links: ["https://writer.com"] }
      ]
    },
    {
      id: "accenture-ventures", category: "ventures", industry: "Consulting", parent: "Accenture", name: "Accenture Ventures", url: "https://www.accenture.com/us-en/about/ventures-index",
      thesis: "“Advanced AI” for large-scale enterprise reinvention. Priorities: agentic AI for supply chains, Physical AI to address labor shortages.",
      themes: ["agents", "physical-ai", "supply-chain", "vertical-ai"],
      initiatives: [
        { title: "Aera Technology — decision intelligence", ask: "Agentic decision-making for global supply chains", amount: "2026 round", status: "invested", signal: "Consulting giant automating the decisions it used to sell as services.", signalStrength: "strong", opportunity: "Decision-agent evaluation in supply chains; human-AI handoff research.", links: ["https://aeratechnology.com"] },
        { title: "General Robotics — GRID fleet layer", ask: "Unified intelligence layer for factory robot fleets", amount: "2026", status: "invested", signal: "Physical AI as labor replacement is Accenture's stated bet.", signalStrength: "moderate", opportunity: "Multi-robot coordination; fleet-level learning.", links: ["https://www.accenture.com/us-en/about/ventures-index"] },
        { title: "Lyzr — low-code agent framework", ask: "Low-code framework for autonomous agents", amount: "$14.5M Series A+ (Mar 2026, Accenture-led)", status: "invested", signal: "Accenture wants agent-building capacity it can deploy at client scale.", signalStrength: "moderate", opportunity: "Agent framework benchmarking; reliability under non-expert configuration.", links: ["https://lyzr.ai"] }
      ]
    },
    {
      id: "sapphire", category: "ventures", industry: "Tech", parent: "SAP (independent)", name: "Sapphire Ventures", url: "https://sapphireventures.com",
      thesis: "“AI is software” — not a feature but the new foundation of the enterprise stack. Durable execution for agents; vertical AI dominance.",
      themes: ["agent-infra", "vertical-ai", "enterprise"],
      initiatives: [
        { title: "Temporal — durable execution", ask: "Production-grade execution layer so agents don't crash mid-task", amount: "$300M Series D (Feb 2026, a16z-led, Sapphire participated)", status: "invested", signal: "Biggest agent hurdle isn't the brain (model) — it's the nervous system (infra).", signalStrength: "strong", opportunity: "Agent reliability/recovery semantics — systems research with immediate buyers.", links: ["https://temporal.io"] },
        { title: "Blue J — tax cognition OS", ask: "AI operating system for tax", amount: "$122M (2025)", status: "invested", signal: "Deep vertical AI (tax!) commands nine figures.", signalStrength: "moderate", opportunity: "Vertical-domain reasoning evaluation; legal/tax LLM accuracy research.", links: ["https://bluej.com"] }
      ]
    },
    {
      id: "next47", category: "ventures", industry: "Tech", parent: "Siemens", name: "Next47", url: "https://next47.com",
      thesis: "“Physical AI” — bits meet atoms. Autonomous agents and infrastructure that interact with the physical industrial world; aligned with Siemens Xcelerator.",
      themes: ["industrial-ai", "physical-ai", "simulation", "energy"],
      initiatives: [
        { title: "PhysicsX — AI-native engineering", ask: "Accelerated manufacturing simulation via AI", amount: "2025 round", status: "invested", signal: "Simulation-first engineering replacing CAD-first.", signalStrength: "strong", opportunity: "Physics-informed ML; surrogate models for engineering simulation.", links: ["https://physicsx.ai"] },
        { title: "Encord — multimodal data platform", ask: "Training-data infrastructure for Physical AI", amount: "2024/26 rounds", status: "invested", signal: "Industrial AI bottleneck = labeled physical-world data.", signalStrength: "moderate", opportunity: "Data-centric AI for sensor/video; active learning for annotation efficiency.", links: ["https://encord.com"] }
      ]
    },
    {
      id: "jjdc", category: "ventures", industry: "Healthcare", parent: "Johnson & Johnson", name: "JJDC", url: "https://jnjinnovation.com",
      thesis: "MedTech-first + accelerated drug discovery. Goal: halve drug lead-generation time; move surgical robotics from smart to intelligent.",
      themes: ["techbio", "drug-discovery", "surgical-robotics"],
      initiatives: [
        { title: "Xaira Therapeutics", ask: "End-to-end AI drug discovery", amount: "$1B debut (2024)", status: "invested", signal: "J&J no longer believes lab-first R&D is competitive — simulation-first pipeline.", signalStrength: "strong", opportunity: "Protein/molecule generative models; wet-lab validation loops.", links: ["https://xaira.com"] },
        { title: "Abdera Therapeutics", ask: "AI-optimized radiopharmaceuticals", amount: "$172M (2025)", status: "invested", signal: "Repeated TechBio bets = thesis, not experiment.", signalStrength: "strong", opportunity: "AI for targeted therapy design; imaging + treatment-planning models.", links: ["https://abderatx.com"] },
        { title: "ThinkMD — clinical triage", ask: "AI clinical triage for global health", amount: "2025", status: "invested", signal: "Frontier-health triage = scalable, low-resource-setting AI.", signalStrength: "moderate", opportunity: "Strong fit with low-resource clinical screening research (cf. your IISc work).", links: ["https://thinkmd.org"] }
      ]
    },
    {
      id: "wallstreet", category: "ventures", industry: "Banking & Finance", parent: "JPMC / Goldman / Citi", name: "Wall Street Strategic Arms", url: "https://www.citi.com/ventures",
      thesis: "“AI-first banking”: no-joy automation of back-office drudgery, agentic security, compliance-grade AI, hyper-personalization.",
      themes: ["compliance-ai", "agent-security", "voice-ai", "automation"],
      initiatives: [
        { title: "JPMC — OpenAI + OQC + Island", ask: "Frontier model access, quantum-AI, enterprise browser security", amount: "multiple 2025-26", status: "invested", signal: "Banks securing model supply + securing the agent runtime.", signalStrength: "strong", opportunity: "Compliance-aware agents; auditable LLM pipelines for regulated finance.", links: ["https://www.jpmorgan.com"] },
        { title: "Goldman — VAST Data", ask: "AI-scale data storage", amount: "$500M Series F (Apr 2026, Drive Capital-led; Goldman recurring investor)", status: "invested", signal: "Banks buying their own AI infrastructure layer — note: Goldman participant, not lead.", signalStrength: "moderate", opportunity: "Data-infrastructure research for financial-scale retrieval.", links: ["https://vastdata.com"] },
        { title: "Citi Ventures — Deepgram, Wealth.com, Jump", ask: "Voice AI, AI estate planning, AI productivity", amount: "2024-26", status: "invested", signal: "Citi betting on voice as a banking interface + vertical wealth AI.", signalStrength: "moderate", opportunity: "Voice AI evaluation in high-stakes domains; trust calibration research.", links: ["https://www.citi.com/ventures"] }
      ]
    },
    {
      id: "tsmc-eco", category: "ventures", industry: "Semiconductor", parent: "TSMC / ASE / Amkor", name: "Semiconductor Ecosystem Funds", url: "https://www.tsmc.com",
      thesis: "“Picks and shovels”: break the I/O bottleneck via silicon photonics, chiplets, advanced packaging. By 2026 the bottleneck is data movement, not compute.",
      themes: ["photonics", "chiplets", "networking"],
      initiatives: [
        { title: "Celestial AI — Photonic Fabric", ask: "High-bandwidth optical data movement", amount: "2025 round", status: "invested", signal: "Light replacing electricity for chip interconnect.", signalStrength: "strong", opportunity: "Photonic-aware distributed training; bandwidth-optimal parallelism research.", links: ["https://celestial.ai"] },
        { title: "Eliyan — chiplet interconnect", ask: "Die-to-die interconnect for next-gen AI chips", amount: "2024 round", status: "invested", signal: "Chiplet architecture = consensus future of AI silicon.", signalStrength: "moderate", opportunity: "Hardware-software co-design; chiplet-aware compiler research.", links: ["https://eliyan.com"] }
      ]
    },

    // ───────────────────────── CHALLENGES ─────────────────────────
    {
      id: "ms-challenges", category: "challenges", industry: "Tech", parent: "Microsoft", name: "Microsoft Challenges", url: "https://imaginecup.microsoft.com",
      thesis: "Pivoting ecosystem from builders to business owners: AI-first startups in security, education, financial services, healthcare; AI for planetary-scale problems.",
      themes: ["agents", "security", "ai-for-good", "education"],
      initiatives: [
        { title: "Imagine Cup 2026", ask: "AI-first startups in security, education, finserv, healthcare", amount: "$100K + Nadella mentorship", status: "deadline Jan 9 2026 (check next cycle)", signal: "Microsoft's named verticals = where Azure wants AI workloads.", signalStrength: "moderate", opportunity: "Student/early-researcher friendly entry; healthcare AI track fits your profile.", links: ["https://imaginecup.microsoft.com"] },
        { title: "AI for Good Open Call", ask: "AI for sustainability, public health, human rights", amount: "Up to $5M Azure credits + lab collaboration", status: "rolling through 2026", signal: "Unmet need: AI modeling climate systems and planetary health data.", signalStrength: "strong", opportunity: "Public-health AI researchers can get compute + collaboration without equity cost.", links: ["https://www.microsoft.com/en-us/ai/ai-for-good"] }
      ]
    },
    {
      id: "google-challenges", category: "challenges", industry: "Tech", parent: "Google / Google.org", name: "Google Challenges", url: "https://www.google.org",
      thesis: "Agentic AI for public services; seeding Gemini as the default agent engine.",
      themes: ["agents", "govtech", "public-service"],
      initiatives: [
        { title: "AI for Government Innovation Fund", ask: "Generative + agentic AI transforming public service delivery", amount: "$30M fund; $1–3M per project + pro bono support", status: "Apr 3 2026 deadline passed — watch next cycle", signal: "Governments = next frontier for agentic AI; high-volume admin tasks.", signalStrength: "strong", opportunity: "GovTech AI research with real deployment partners; India public-service angle.", links: ["https://www.google.org"] },
        { title: "Build with Gemini XPRIZE", ask: "Agent businesses built on Gemini", amount: "$2M pool, 90-day sprint", status: "launched May 2026 — active", signal: "Reasoning-as-a-service demand; platform war for agent developers.", signalStrength: "moderate", opportunity: "Fast credibility builder; agent-product portfolio piece.", links: ["https://www.xprize.org"] }
      ]
    },
    {
      id: "aws-challenges", category: "challenges", industry: "Tech", parent: "Amazon / AWS", name: "AWS Challenges", url: "https://aws.amazon.com/startups/accelerators/generative-ai",
      thesis: "Moving down the stack: fund startups that fix AI infrastructure (GenAIOps, optimization) and trusted autonomous code agents.",
      themes: ["agents", "ai-infra", "code-trust"],
      initiatives: [
        { title: "Generative AI Accelerator (GAIA)", ask: "Foundational AI tech, GenAIOps, agentic workflows", amount: "$1M AWS credits + re:Invent showcase", status: "recurring annual (Jun–Jul intake)", signal: "Infra layer, not apps, is what AWS lacks.", signalStrength: "strong", opportunity: "Compute-heavy research projects get $1M credits — material for independent researchers.", links: ["https://aws.amazon.com/startups/accelerators/generative-ai"] },
        { title: "Amazon Nova AI Challenge", ask: "Trusted software agents safely handling enterprise code", amount: "$700K grand prize pool + early Nova access", status: "active 2026", signal: "AI must maintain code securely, not just write it.", signalStrength: "moderate", opportunity: "Code-agent safety benchmarks; long-horizon maintenance evaluation.", links: ["https://www.amazon.science"] }
      ]
    },
    {
      id: "nvidia-challenges", category: "challenges", industry: "Semiconductor", parent: "NVIDIA", name: "NVIDIA Challenges", url: "https://www.nvidia.com",
      thesis: "Pay the market to close the sim-to-real gap and to benchmark agentic performance.",
      themes: ["physical-ai", "simulation", "agent-benchmarks"],
      initiatives: [
        { title: "AI for Industry Challenge", ask: "Electronics assembly + cable handling solved in Isaac Sim", amount: "$180K pool", status: "closed (launched Mar 2, reg deadline Apr 17 2026) — watch next edition", signal: "Sim-to-real for deformable objects = named unsolved problem.", signalStrength: "strong", opportunity: "Concrete, scoped robotics research problem with prize + visibility.", links: ["https://intrinsic.ai"] },
        { title: "Live Agent Gauntlet (GTC 2026)", ask: "Real-time benchmarking of autonomous agents on complex tasks", amount: "high-end GPUs + hardware", status: "held Mar 18 2026 at GTC (used MCP) — watch 2027 edition", signal: "Industry lacks standardized agentic-performance benchmarks.", signalStrength: "strong", opportunity: "Agent benchmark design is an open, publishable, industry-funded gap.", links: ["https://www.nvidia.com/gtc/"] }
      ]
    },
    {
      id: "accenture-challenges", category: "challenges", industry: "Consulting", parent: "Accenture", name: "Accenture Tech Next Challenge", url: "https://technextchallenge.in",
      thesis: "Source autonomous-agent and Physical AI solutions deployable to Global 2000 clients — India-run program.",
      themes: ["agents", "physical-ai", "india", "enterprise"],
      initiatives: [
        { title: "Tech Next Challenge (Edition 7)", ask: "Autonomous AI agents; Physical AI (IoT + robotics convergence)", amount: "Pilots with Global 2000 clients + equity investment options", status: "active 2025–2026", signal: "Enterprise demand shifted from 'chat with my PDF' to 'run my supply chain with an agent.' Winners get distribution, not just money — strongest kind of prize.", signalStrength: "strong", opportunity: "India-based; pilot-with-enterprise prize is exactly the practitioner-researcher bridge you want.", links: ["https://technextchallenge.in"] }
      ]
    },
    {
      id: "finance-challenges", category: "challenges", industry: "Banking & Finance", parent: "Visa / JPMC", name: "Finance Sector Challenges", url: "https://visa.com",
      thesis: "Redesign financial rails for a world where non-human agents are primary transactors; digitize the remaining paper.",
      themes: ["agentic-commerce", "fraud", "document-ai"],
      initiatives: [
        { title: "Visa — Agent Pay / scam disruption", ask: "Secure authorized payments executed by autonomous AI agents", amount: "strategic RFP/program", status: "2025–2026", signal: "Payment networks rebuilding authorization for agent transactors — foundational shift.", signalStrength: "strong", opportunity: "Agent identity, delegation, and authorization protocols — barely-touched research area.", links: ["https://visa.com"] },
        { title: "JPMC — AI Lockbox Challenge", ask: "Digitize paper checks/documents at 99.9% accuracy with LLMs + robotics", amount: "program", status: "active", signal: "Massive physical-to-digital gap persists in legacy banking.", signalStrength: "moderate", opportunity: "High-accuracy document AI under strict error budgets.", links: ["https://www.jpmorgan.com"] }
      ]
    },
    {
      id: "darpa", category: "challenges", industry: "Government", parent: "US DoD", name: "DARPA Solicitations", url: "https://sam.gov",
      thesis: "Trustworthy, explainable, resilient AI — security is the bottleneck for government adoption.",
      themes: ["trust", "security", "explainability"],
      initiatives: [
        { title: "I2O Broad Agency Announcement (HR001126S0001)", ask: "Transformative trustworthy/explainable AI; AI-driven resilient software", amount: "multi-million R&D contracts", status: "released Nov 2025, active through 2026", signal: "Government explicitly paying for 'un-hackable' AI architectures.", signalStrength: "strong", opportunity: "US-affiliation usually required — note constraint — but problem statements are a free research agenda.", links: ["https://sam.gov"] }
      ]
    },
    {
      id: "eu-horizon", category: "challenges", industry: "Government", parent: "European Commission", name: "EU Horizon — GenAI4EU", url: "https://ec.europa.eu",
      thesis: "Strategic autonomy: reduce dependence on non-EU tech; AI that complies with the EU AI Act natively.",
      themes: ["sovereignty", "compliance", "trustworthy-ai"],
      initiatives: [
        { title: "GenAI4EU Flagship calls", ask: "Generative AI for European strategic autonomy", amount: "€700M fund; €2–15M per project", status: "major calls Apr 2026", signal: "Sovereignty is Europe's organizing driver; compliance-native AI is the ask.", signalStrength: "strong", opportunity: "Open to international consortia in many calls — partner with EU institutions.", links: ["https://ec.europa.eu"] }
      ]
    },
    {
      id: "indiaai", category: "challenges", industry: "Government", parent: "Govt of India", name: "IndiaAI Mission / Bhashini", url: "https://bhashini.gov.in",
      thesis: "Sovereign AI for 22 languages; voice-first, offline-capable, edge-deployed. ₹10,372 crore mission budget; ₹65/hr subsidized GPU access.",
      themes: ["india", "vernacular", "edge-ai", "voice"],
      initiatives: [
        { title: "VYOMA Innovation Challenge", ask: "Voice-first AI for offline/low-connectivity environments", amount: "grants + government implementation contracts", status: "deadline Jun 2026 — ACTIVE NOW", signal: "'Small AI' — models that run at the edge without cloud dependency. Winners get deployment, the strongest prize type.", signalStrength: "strong", opportunity: "Directly adjacent to your SANSCOG/Bhashini context. Deadline this month — investigate immediately.", links: ["https://bhashini.gov.in"] },
        { title: "IndiaAI compute + model program", ask: "Sovereign foundation models; subsidized GPU access for researchers", amount: "₹10,372 crore mission", status: "ongoing", signal: "Government underwriting the full AI stack — researcher-accessible compute.", signalStrength: "strong", opportunity: "Cheapest legitimate GPU access for India-based research; Indic-model gaps wide open.", links: ["https://indiaai.gov.in"] }
      ]
    },
    {
      id: "health-challenges", category: "challenges", industry: "Healthcare", parent: "J&J / XPRIZE", name: "Healthcare Prizes", url: "https://www.xprize.org/challenge/healthspan",
      thesis: "Surgery as the next multimodal AI vertical; longevity as the holy-grail market.",
      themes: ["surgical-ai", "longevity", "multimodal"],
      initiatives: [
        { title: "J&J Polyphonic AI Fund for Surgery", ask: "AI for the connected operating room — perioperative decision support", amount: "$100K + pilots in J&J digital ecosystem", status: "quarterly cycles 2026, rolling reviews (Q1 closed Jan 30)", signal: "Surgical video + sensor multimodal AI = named vertical.", signalStrength: "strong", opportunity: "Clinical-AI researchers: pilot access to surgical data ecosystems is rare — this opens it.", links: ["https://www.jnj.com/innovation"] },
        { title: "XPRIZE Healthspan", ask: "Therapeutics/AI restoring 10–20 years of muscle/cognitive function", amount: "$101M total", status: "finalists 2026", signal: "Cognitive-function restoration = direct overlap with brain-aging research.", signalStrength: "strong", opportunity: "Your healthy-brain-aging work sits inside this prize's scope. Study finalist approaches.", links: ["https://www.xprize.org/challenge/healthspan"] }
      ]
    },
    {
      id: "kaggle", category: "challenges", industry: "Cross-industry", parent: "Various sponsors", name: "Kaggle High-Stakes Competitions", url: "https://www.kaggle.com",
      thesis: "Prize money maps unsolved technical problems: reasoning, fluid intelligence, safety, efficiency.",
      themes: ["reasoning", "safety", "efficiency", "benchmarks"],
      initiatives: [
        { title: "AIMO Progress Prize 3 (XTX Markets)", ask: "Rigorous mathematical reasoning in open models", amount: "$2.2M", status: "active", signal: "LLMs still fail rigorous math — biggest open technical prize.", signalStrength: "strong", opportunity: "Reasoning research with immediate, measurable, funded benchmark.", links: ["https://www.kaggle.com/competitions"] },
        { title: "ARC Prize 2026", ask: "Fluid intelligence — solve novel problems absent from training data", amount: "$850K", status: "active", signal: "Generalization beyond memorization remains unsolved.", signalStrength: "strong", opportunity: "Program-synthesis and abstraction research; small-team friendly.", links: ["https://arcprize.org"] },
        { title: "OpenAI Red-Teaming", ask: "Find frontier-model vulnerabilities", amount: "$500K", status: "recent", signal: "Safety-as-a-service is a paid market.", signalStrength: "moderate", opportunity: "Adversarial evaluation research monetizes directly.", links: ["https://www.kaggle.com/competitions"] }
      ]
    },

    // ───────────────────────── ACCELERATORS ─────────────────────────
    {
      id: "yc", category: "accelerators", industry: "Cross-industry", parent: "Y Combinator", name: "Y Combinator", url: "https://www.ycombinator.com/rfs",
      thesis: "“AI as the foundation.” RFS: AI-native service companies selling outcomes not seats; rebuild legacy SaaS with agents; dynamic real-time interfaces; AI agriculture robotics.",
      themes: ["service-as-software", "vertical-agents", "vibe-coding", "physical-ai"],
      initiatives: [
        { title: "RFS: AI-Native Service Companies", ask: "Sell completed outcomes (e.g. a finished audit), not software seats", amount: "standard YC deal", status: "active RFS", signal: "The SaaS moat has evaporated; labor-margin businesses are the new target.", signalStrength: "strong", opportunity: "Any domain where you can define + verify a 'completed outcome' is a startup-shaped research problem.", links: ["https://www.ycombinator.com/rfs"] },
        { title: "Batch signal: vertical agents + vibe coding", ask: "~25% of W25 products 95% AI-generated; 'AI employees' for dental, real estate, CPG", amount: "—", status: "observed W25–W26", signal: "Claude overtook OpenAI as #1 model among YC founders in W26. Agents are colonizing unglamorous verticals.", signalStrength: "strong", opportunity: "Named gaps: multi-agent monitoring/security infra; government back-office automation.", links: ["https://www.ycombinator.com/companies"] }
      ]
    },
    {
      id: "a16z", category: "accelerators", industry: "Cross-industry", parent: "Andreessen Horowitz", name: "a16z / speedrun", url: "https://a16z.com",
      thesis: "American Dynamism: the electro-industrial stack (AI for manufacturing, mining, energy). External AI brain (persistent memory). Regulation-as-code agents.",
      themes: ["industrial-ai", "defense", "memory", "compliance"],
      initiatives: [
        { title: "Electro-Industrial Stack thesis", ask: "AI to reshore manufacturing, mining, energy", amount: "speedrun: $1M standard", status: "active (SR007)", signal: "AI moving from bits to atoms; national-interest sectors get the capital.", signalStrength: "strong", opportunity: "Named gap: founders combining AI with mechanical/electrical engineering — rare profile, high value.", links: ["https://a16z.com/speedrun"] },
        { title: "External AI Brain / Regulation-as-Code", ask: "Persistent memory layers; agents replacing compliance teams", amount: "—", status: "published thesis", signal: "Memory and compliance are the two named software gaps.", signalStrength: "moderate", opportunity: "Long-term memory architectures; auditable compliance agents — both publishable + fundable.", links: ["https://a16z.com"] }
      ]
    },
    {
      id: "aigrant", category: "accelerators", industry: "Tech", parent: "Nat Friedman & Daniel Gross", name: "AI Grant", url: "https://aigrant.com",
      thesis: "AI-native products that couldn't exist before LLMs. Offer includes Andromeda H100 cluster access. Product-obsessed founders; GPUs as commodity.",
      themes: ["ai-native", "interpretability", "voice", "evaluation"],
      initiatives: [
        { title: "Focus: interpretability + reliability tooling", ask: "Make model internals legible; stress-test models (Goodfire, Haize Labs funded)", amount: "grant + compute", status: "recurring batches", signal: "Interpretability commercializing — no longer lab-only.", signalStrength: "strong", opportunity: "Named gaps: high-fidelity voice-AI evaluation; long-context application design.", links: ["https://aigrant.com"] }
      ]
    },
    {
      id: "techstars", category: "accelerators", industry: "Cross-industry", parent: "Techstars", name: "Techstars (corporate-partnered)", url: "https://www.techstars.com",
      thesis: "Deeply verticalized via corporate partnerships: Johns Hopkins healthcare AI, ABN AMRO AI-native finance.",
      themes: ["healthcare-ai", "fintech", "distribution"],
      initiatives: [
        { title: "Healthcare AI (Johns Hopkins, Baltimore)", ask: "Smart health economics; predictive diagnostics in clinical environments", amount: "standard Techstars deal", status: "recurring", signal: "Named gap: interoperability between legacy healthcare data and agentic systems.", signalStrength: "moderate", opportunity: "Clinical-data interoperability research has a funded commercialization path.", links: ["https://www.techstars.com"] }
      ]
    },
    {
      id: "sequoia-arc", category: "accelerators", industry: "Cross-industry", parent: "Sequoia", name: "Sequoia Arc", url: "https://www.sequoiacap.com/arc",
      thesis: "“Services: the new software.” Autopilots pursuing goals autonomously; wrap tightly around workflows to survive model updates. Selling labor at software margins.",
      themes: ["autopilots", "vertical-agents", "reasoning"],
      initiatives: [
        { title: "Autopilot thesis (AI SREs, AI paralegals, XBOW)", ask: "Systems that pursue goals autonomously in defined domains", amount: "Arc program", status: "active", signal: "Named gaps: mathematical superintelligence; reliable multi-step reasoning.", signalStrength: "strong", opportunity: "Multi-step reasoning reliability = the research gap the best VC names explicitly.", links: ["https://www.sequoiacap.com/arc"] }
      ]
    },
    {
      id: "ef", category: "accelerators", industry: "Cross-industry", parent: "Entrepreneur First", name: "Entrepreneur First", url: "https://www.joinef.com",
      thesis: "Invest in talent before ideas. Agentic infrastructure for messy industries (construction, food safety). Bridge research and commerce.",
      themes: ["talent-first", "industrial-ai", "research-to-startup"],
      initiatives: [
        { title: "Individual-first AI investing", ask: "Technical researchers pre-idea; co-founder matching", amount: "pre-seed", status: "recurring cohorts (incl. Bangalore)", signal: "Named gap: sovereign compute capacity. Researchers are the asset they buy.", signalStrength: "moderate", opportunity: "Direct path for a researcher (you) to test commercial legs of an idea — EF has a Bangalore office.", links: ["https://www.joinef.com"] }
      ]
    },
    {
      id: "ai2", category: "accelerators", industry: "Tech", parent: "Allen Institute", name: "AI2 Incubator", url: "https://www.ai2incubator.com",
      thesis: "Applied AI + vertical foundation models. Defensibility = deep domain data + fine-tuning, not generic dev tools.",
      themes: ["vertical-models", "applied-ai", "governance"],
      initiatives: [
        { title: "Vertical foundation model focus", ask: "Domain-specific precision: biotech, climate, audio, immigration", amount: "incubation + compute", status: "active", signal: "Named gap: verifiable receipts for AI actions (governance); just-in-time secure access.", signalStrength: "moderate", opportunity: "Action-provenance and AI-audit-trail research — governance gap nobody owns yet.", links: ["https://www.ai2incubator.com"] }
      ]
    },
    {
      id: "spc", category: "accelerators", industry: "Tech", parent: "South Park Commons", name: "South Park Commons", url: "https://www.southparkcommons.com",
      thesis: "“Builder gravity” — fund where the best engineers explore. Requests for Curiosity: world models, interpretability. The -1 to 0 stage.",
      themes: ["world-models", "interpretability", "agent-swarms"],
      initiatives: [
        { title: "Requests for Curiosity", ask: "Frontier exploration: world models, interpretability, agent swarms, AI for science", amount: "fellowship", status: "active", signal: "Named gaps: persistent memory for agents; reducing human-in-the-loop friction.", signalStrength: "moderate", opportunity: "Fellowship model fits a practicing researcher exploring before committing.", links: ["https://www.southparkcommons.com"] }
      ]
    },
    {
      id: "india-eco", category: "accelerators", industry: "Cross-industry", parent: "Peak XV / IndiaAI / T-Hub", name: "India Startup Ecosystem", url: "https://www.surgeahead.com",
      thesis: "“Vertical & vernacular.” Indic-language models (Sarvam), AI-native workspaces for the global south, capability-based hiring.",
      themes: ["india", "vernacular", "edge-ai", "global-south"],
      initiatives: [
        { title: "Peak XV Surge — AI cohorts", ask: "Vertical AI + vernacular models for India-scale users", amount: "Surge program ($2-3M typical)", status: "recurring", signal: "Named gaps: energy-efficient inference for mobile-first users; sovereign data privacy.", signalStrength: "strong", opportunity: "India transitioning 'back office of the world' → 'AI factory of the world.' Your home market advantage.", links: ["https://www.surgeahead.com"] },
        { title: "Sarvam AI ecosystem effect", ask: "Indic foundation models pulling vernacular AI ecosystem", amount: "—", status: "observed", signal: "Sovereign Indic models create downstream application + evaluation gaps.", signalStrength: "strong", opportunity: "Indic evaluation benchmarks, domain adaptation (health!), voice-first applications — underserved and aligned with your IISc work.", links: ["https://www.sarvam.ai"] }
      ]
    },
    {
      id: "corp-accel", category: "accelerators", industry: "Tech", parent: "NVIDIA / Microsoft / Google / Intel", name: "Corporate Accelerators", url: "https://www.nvidia.com/en-us/startups/",
      thesis: "Platform war fought with compute credits and distribution. Startups choose platforms on inference latency and compliance moats.",
      themes: ["compute-credits", "physical-ai", "multimodal", "edge-ai"],
      initiatives: [
        { title: "NVIDIA Inception", ask: "Physical AI (robotics/humanoids); 'Adopt 100' enterprise pipeline with Deloitte", amount: "credits + hardware + GTM", status: "rolling", signal: "Physical AI is the named priority track.", signalStrength: "strong", opportunity: "Free tier open to research-stage teams; hardware access for embodied-AI work.", links: ["https://www.nvidia.com/en-us/startups/"] },
        { title: "Microsoft for Startups / Google for Startups / Intel Liftoff", ask: "Azure AI Foundry agents; multimodal Gemini/Veo (45% of 2026 cohort agentic); NPU-driven local inference", amount: "credits ($150K+ typical)", status: "rolling", signal: "Every platform subsidizing its agent stack — compute is the customer-acquisition cost.", signalStrength: "moderate", opportunity: "Stack credits across programs; researchers routinely qualify via early-stage entities.", links: ["https://www.microsoft.com/en-us/startups", "https://startup.google.com", "https://www.intel.com/liftoff"] }
      ]
    },
    // ───────────────────────── INDEPENDENT VCs ─────────────────────────
    { id: "lightspeed", category: "vc", industry: "Venture Capital", parent: "Lightspeed", name: "Lightspeed", url: "https://lsvp.com",
      thesis: "‘The engine that builds the engine.’ Code is becoming a commodity; value migrates to the agentic systems that generate it (‘compound engineering’). Also bets on Sovereign AI and World Models.",
      themes: ["agents", "sovereign-ai", "world-models", "devtools"],
      reach: { score: 2, label: "partner", why: "US firm but unusually active in India — backed Sarvam AI; warm intros preferred, GenSF builder meetups." },
      leaders: [{ name: "Nnamdi Iregbulem", role: "DevTools/Infra" }, { name: "Arif Janmohamed", role: "Enterprise" }, { name: "Antoine Moyroud", role: "Europe" }],
      initiatives: [{ title: "Mistral, Sarvam, Skild — sovereign + physical AI", ask: "Regional foundation models and robot foundation models", amount: "portfolio", status: "active", signal: "One of the few top-tier US funds materially backing Indian sovereign AI (Sarvam).", signalStrength: "strong", opportunity: "If you build vernacular or sovereign-AI research, Lightspeed is a reachable Western validator.", links: ["https://lsvp.com"] }],
      edges: [{ to: "ai4bharat", type: "funded-by", note: "backed Sarvam AI, spun from AI4Bharat lineage" }] },
    { id: "greylock", category: "vc", industry: "Venture Capital", parent: "Greylock", name: "Greylock", url: "https://greylock.com",
      thesis: "From ‘AI-enabled’ to ‘AI-native.’ 2026 focus: AI production engineers (autonomous incident response) and agents as long-running systems needing observability.",
      themes: ["agents", "ai-native", "security", "observability"],
      reach: { score: 2, label: "partner", why: "Greylock Edge — 3-month program + AI researchers-in-residence for seed founders; US-based, warm intro favored." },
      leaders: [{ name: "Saam Motamedi", role: "Enterprise AI" }, { name: "Asheem Chandna", role: "Security/IT" }, { name: "Christine Kim", role: "Vertical Agents" }],
      initiatives: [{ title: "Resolve AI, Abnormal Security, Modular", ask: "Autonomous production engineering and AI-native security", amount: "portfolio", status: "active", signal: "Reliability/observability of long-running agents is the named gap.", signalStrength: "strong", opportunity: "Agent monitoring + failure-recovery research has a clear commercialization path here.", links: ["https://greylock.com/edge"] }] },
    { id: "index-ventures", category: "vc", industry: "Venture Capital", parent: "Index Ventures", name: "Index Ventures", url: "https://www.indexventures.com",
      thesis: "Value lies in the workflow layer, not the model. Target high-admin-burden industries (healthcare, logistics) for Vertical AI.",
      themes: ["vertical-ai", "workflow", "healthcare"],
      reach: { score: 2, label: "partner", why: "Index Origin seed fund; relies on ‘Index family’ referrals; US/Europe." },
      leaders: [{ name: "Mike Volpi", role: "Infra" }, { name: "Nina Achadjian", role: "Vertical AI" }, { name: "Shardul Shah", role: "Security/AI" }],
      initiatives: [{ title: "Scale AI, Heidi Health, Cradle Bio", ask: "Own the workflow in specialized industries", amount: "portfolio", status: "active", signal: "Grounding model intelligence in messy real processes is where they see durable value.", signalStrength: "moderate", opportunity: "Clinical-workflow AI (scribes, admin agents) — adjacent to your health context.", links: ["https://www.indexventures.com"] }] },
    { id: "khosla", category: "vc", industry: "Venture Capital", parent: "Khosla Ventures", name: "Khosla Ventures", url: "https://www.khoslaventures.com",
      thesis: "IT services/BPO will ‘almost completely disappear’ by 2030. Bets on AI tutors, doctors, agronomists for the global ‘bottom half’; ‘black swan’ technical risk.",
      themes: ["ai-doctor", "ai-tutor", "services-replacement", "global-south"],
      reach: { score: 2, label: "partner", why: "Reads inbound at kv@khoslaventures.com; prioritizes ‘instigator’ technical founders; US." },
      leaders: [{ name: "Vinod Khosla", role: "Founder" }, { name: "Ethan Choi", role: "AI-first Enterprise" }, { name: "Kanu Gulati", role: "Infra/Robotics" }],
      initiatives: [{ title: "OpenAI (first VC), Cognition (Devin)", ask: "Drive cost of human expertise toward zero", amount: "portfolio", status: "active", signal: "AI doctor/tutor thesis directly targets global health and education scarcity.", signalStrength: "strong", opportunity: "‘AI doctor for the bottom half’ overlaps low-resource clinical screening — your terrain.", links: ["https://www.khoslaventures.com"] }] },
    { id: "general-catalyst", category: "vc", industry: "Venture Capital", parent: "General Catalyst", name: "General Catalyst", url: "https://www.generalcatalyst.com",
      thesis: "‘AI-enabled roll-ups’: build an AI-native stack, then acquire legacy service firms and re-rate margins. $5B commitment to India for population-scale AI.",
      themes: ["roll-ups", "india", "health", "services"],
      reach: { score: 3, label: "open", why: "$5B India commitment + ‘Hatch’ build-with-us program; among the most India-engaged global funds." },
      leaders: [{ name: "Hemant Taneja", role: "CEO" }, { name: "Marc Bhargava", role: "Creation Strategy" }],
      initiatives: [{ title: "Hippocratic AI, Titan MSP, $5B India bet", ask: "Re-rate $100B+ service industries via 70% automation", amount: "$5B India commitment", status: "active", signal: "Population-scale AI deployment in India is an explicit, funded priority.", signalStrength: "strong", opportunity: "GC’s India health bets (Hippocratic-style safety) are a reachable commercial partner for applied health-AI research.", links: ["https://www.generalcatalyst.com"] }],
      edges: [{ to: "indiaai", type: "partner", note: "$5B India population-scale AI commitment aligns with IndiaAI mission" }] },
    { id: "bessemer", category: "vc", industry: "Venture Capital", parent: "Bessemer", name: "Bessemer Venture Partners", url: "https://www.bvp.com/atlas",
      thesis: "‘State of the AI Cloud.’ AI data-center stack (power, cooling, orchestration) + ‘organizational amnesia’ memory infra; agents as Systems of Action unseating Systems of Record.",
      themes: ["ai-infra", "memory", "data-center"],
      reach: { score: 1, label: "distant", why: "Favors warm intros; ‘Founders Garage’ by nomination; US." },
      leaders: [{ name: "Sameer Dholakia", role: "Growth" }, { name: "Talia Goldberg", role: "Enterprise" }, { name: "Lindsey Li", role: "Data Center Stack" }],
      initiatives: [{ title: "Anthropic, Fal.ai, VAPI", ask: "Own the physical + memory layer of AI scaling", amount: "portfolio", status: "active", signal: "Power/cooling/permitting limits + persistent memory are the named infra gaps.", signalStrength: "moderate", opportunity: "Memory architectures and efficient serving research map to their roadmap.", links: ["https://www.bvp.com/atlas"] }] },
    { id: "menlo", category: "vc", industry: "Venture Capital", parent: "Menlo Ventures", name: "Menlo Ventures", url: "https://menlovc.com",
      thesis: "‘Full-stack AI.’ Closed frontier models (Anthropic) win enterprise; the application layer explodes into ‘departmental AI’ where enterprises buy not build.",
      themes: ["enterprise", "departmental-ai", "foundation-models"],
      reach: { score: 2, label: "partner", why: "Anthology Fund ($100M with Anthropic) for seed startups building on Claude — a concrete open entry." },
      leaders: [{ name: "Tim Tully", role: "Infra/AI" }, { name: "Deedy Das", role: "High-conviction bets" }, { name: "Amy Wu Martin", role: "Consumer/Media" }],
      initiatives: [{ title: "Anthropic ($750M Series C lead); Anthology Fund", ask: "Back the buy-not-build enterprise AI wave", amount: "$100M Anthology Fund", status: "active", signal: "Departmental AI (coding, CS, health) is where they expect the app explosion.", signalStrength: "strong", opportunity: "Anthology Fund is a reachable grant+investment path for Claude-built tools.", links: ["https://menlovc.com/anthology-fund"] }] },
    { id: "conviction", category: "vc", industry: "Venture Capital", parent: "Conviction", name: "Conviction (Sarah Guo)", url: "https://www.conviction.com",
      thesis: "‘Software 3.0’ — intelligence is the engine of software. Predicts ‘lean billion-dollar teams’ and reasoning over unstructured data in resistant fields (medicine, law).",
      themes: ["software-3", "reasoning", "medicine", "lean-teams"],
      reach: { score: 3, label: "open", why: "‘Embed’ program: $150K–$250K grants + large compute credits to early AI builders; among the most accessible top funds." },
      leaders: [{ name: "Sarah Guo", role: "Founder" }, { name: "Mike Vernal", role: "GP (ex-Sequoia)" }],
      problem: "Translate frontier-model power into specific, autonomous professional workflows — the ‘last mile’ in medicine and law.",
      initiatives: [{ title: "Embed program; Mistral, Harvey, Sierra", ask: "Reasoning-driven autonomous professional workflows", amount: "$150K–$250K Embed grants + compute", status: "active", signal: "Reasoning over unstructured data in medicine/law is the named ‘last mile.’", signalStrength: "strong", opportunity: "Embed is a genuinely reachable on-ramp for a researcher prototyping applied reasoning tools.", links: ["https://www.conviction.com/embed"] }],
      brief: "**The bet:** Sarah Guo’s Conviction is the most accessible top-tier AI fund for an individual builder — the Embed program writes $150K–$250K checks plus serious compute to people who are still early.\n\n**What they’re really chasing:** reasoning over unstructured data in fields that have resisted software — medicine and law. Not chatbots; autonomous professional workflows that do the last mile.\n\n**Your opening:** if you prototype an applied-reasoning tool in clinical screening or brain-aging triage, Embed is a realistic, remote-friendly on-ramp to Western capital and compute without relocating." },
    { id: "thrive", category: "vc", industry: "Venture Capital", parent: "Thrive Capital", name: "Thrive Capital", url: "https://www.thrivecap.com",
      thesis: "Contrarian: AI makes human trust/expertise MORE valuable. Uses Thrive Holdings to acquire rules-driven businesses and rewire them with OpenAI research.",
      themes: ["openai", "human-trust", "holdings"],
      reach: { score: 1, label: "distant", why: "Notoriously hard to access; warm intros only via an elite network; US." },
      leaders: [{ name: "Joshua Kushner", role: "CEO" }, { name: "Vince Hankes", role: "OpenAI lead" }, { name: "Miles Grimshaw", role: "Early-stage" }],
      initiatives: [{ title: "OpenAI (largest VC investor), Isomorphic, Physical Intelligence", ask: "Inject frontier models directly into legacy labor markets", amount: "portfolio", status: "active", signal: "A tightly coupled capital-and-operations loop with OpenAI.", signalStrength: "moderate", opportunity: "Mostly a signal-reading node — hard to engage directly.", links: ["https://www.thrivecap.com"] }] },
    { id: "insight", category: "vc", industry: "Venture Capital", parent: "Insight Partners", name: "Insight Partners", url: "https://www.insightpartners.com",
      thesis: "From ‘random acts of AI’ to ‘AI as connective tissue.’ Vertical AI in unsexy categories with strong data moats; fix data architecture before scaling the ‘million-agent problem.’",
      themes: ["vertical-ai", "data-moats", "enterprise-scale"],
      reach: { score: 2, label: "partner", why: "ScaleUp:AI conference (NYC) is the main founder-partner venue; growth-stage focus." },
      leaders: [{ name: "George Mathew", role: "Managing Director" }, { name: "Lonne Jaffe", role: "Technical AI" }, { name: "Thomas Krane", role: "Cyber/Infra" }],
      initiatives: [{ title: "Databricks, Wiz, Writer, Relevance AI", ask: "Industrialize AI from demos to repeatable enterprise ops", amount: "portfolio", status: "active", signal: "Data architecture is the named prerequisite to agent scale.", signalStrength: "moderate", opportunity: "Data-centric AI and eval infrastructure research fit their thesis.", links: ["https://www.insightpartners.com"] }] },

    // ───────────────────────── PUBLIC / SOVEREIGN FUNDS ─────────────────────────
    { id: "aria", category: "public", industry: "UK", parent: "UK DSIT", name: "ARIA", url: "https://www.aria.org.uk",
      thesis: "High-risk ‘opportunity spaces’ bypassing grant bureaucracy. Safeguarded AI (formal methods for AI safety) and Scaling Inference hardware testbeds.",
      themes: ["ai-safety", "formal-methods", "hardware", "moonshot"],
      reach: { score: 2, label: "partner", why: "Open to international teams as leads/partners, but must show clear UK benefit (>50% spend in UK or local ops)." },
      leaders: [{ name: "Ilan Gur", role: "CEO" }, { name: "Ant Rowstron", role: "Chief AI Scientist" }],
      initiatives: [{ title: "Safeguarded AI; Scaling Inference Lab", ask: "AI-enabled formal methods for cyber defence; inference hardware testbeds", amount: "£2M–£3.5M/team; £20M lab", status: "open calls 2026 (verify)", signal: "Government paying for provable AI safety — formal methods is the bet.", signalStrength: "strong", opportunity: "Formal-verification-of-AI researchers can lead or partner; rolling Opportunity Seeds open to Jan 2028.", links: ["https://www.aria.org.uk"] }] },
    { id: "arpa-h", category: "public", industry: "US", parent: "US HHS", name: "ARPA-H", url: "https://arpa-h.gov",
      thesis: "AI for biomedical discovery and reproducibility (IGoR); affordable, proactive health. SBIR topics like neurosurgical robotics.",
      themes: ["health-ai", "biomedical", "neurotech"],
      reach: { score: 1, label: "distant", why: "US-based applicants; India researchers need a US partner or a unique irreplaceable benefit." },
      leaders: [{ name: "Renee Wegrzyn", role: "Director" }],
      initiatives: [{ title: "IGoR; SBIR/STTR 2026 (incl. neuro)", ask: "AI for biomedical discovery, neurosurgical robotics", amount: "$500K–$50M+", status: "SBIR deadline ~Jul 10 2026 (verify)", signal: "US health agency funding AI neuro applications at scale.", signalStrength: "moderate", opportunity: "Reachable only via a US collaborator — but the solicitations are a free research agenda for brain/neuro AI.", links: ["https://arpa-h.gov"] }] },
    { id: "nairr", category: "public", industry: "US", parent: "US NSF", name: "NSF NAIRR", url: "https://nairrpilot.org",
      thesis: "Level the compute playing field: credits (NVIDIA/Microsoft/AWS), datasets, and pretrained models for researchers.",
      themes: ["compute-access", "datasets", "research-infra"],
      reach: { score: 1, label: "distant", why: "US academics for PI status; India researchers access only as collaborators via US-India TRUST/iCET or joint NSF-India calls." },
      leaders: [{ name: "Katie Antypas", role: "Director, NAIRR Pilot" }],
      problem: "Researchers without Big-Tech compute can’t compete; NAIRR is the access model — but only US PIs qualify directly.",
      initiatives: [{ title: "NAIRR Pilot allocations; US-India TRUST", ask: "Compute + data access for AI researchers", amount: "in-kind compute", status: "monthly allocations (verify)", signal: "The template for democratized research compute; India hook via TRUST initiative.", signalStrength: "moderate", opportunity: "Partner on a US-led proposal, or watch joint NSF-India AI-ENGAGE calls for direct India access.", links: ["https://nairrpilot.org"] }],
      brief: "**The asset:** NAIRR is how US researchers get free frontier compute and datasets. As an India-based researcher you can’t be a PI — but that’s not the end of the story.\n\n**The India hook:** the US-India TRUST initiative (formerly iCET) and joint NSF-India calls (AI-ENGAGE) let you join as a collaborator on a US-led proposal. That’s a real, underused channel to compute you otherwise can’t afford.\n\n**Your move:** find a US co-PI in brain-aging or clinical AI and watch the joint NSF-India calls; the compute asymmetry is the single biggest constraint on Indian AI research, and this is a legitimate way around it." },
    { id: "ai-singapore", category: "public", industry: "Singapore", parent: "NRF Singapore", name: "AI Singapore", url: "https://aisingapore.org",
      thesis: "AI-first nation: 100 Experiments (100E) co-funding, apprenticeships, and training 100k workers.",
      themes: ["applied-ai", "talent", "apprenticeship"],
      reach: { score: 2, label: "partner", why: "Company programs need SG registration, but the AISG PhD Fellowship is open to all nationalities if enrolled at a SG university." },
      leaders: [{ name: "Ho Teck Hua", role: "Executive Chairman" }],
      initiatives: [{ title: "100E; AISG PhD Fellowship; AIAP", ask: "Company-led applied AI projects; AI talent pipeline", amount: "up to S$250K (100E)", status: "2026 intakes (verify)", signal: "A structured applied-AI apprenticeship model worth studying.", signalStrength: "moderate", opportunity: "The PhD Fellowship is a reachable funded route into the SG AI ecosystem.", links: ["https://aisingapore.org"] }] },
    { id: "eu-eic", category: "public", industry: "Europe", parent: "European Commission", name: "EU EIC — GenAI4EU", url: "https://eic.ec.europa.eu",
      thesis: "Sovereign EU AI: GenAI4EU grants+equity and Physical AI pilots; reduce dependence on US/Chinese models.",
      themes: ["sovereignty", "genai", "physical-ai"],
      reach: { score: 1, label: "distant", why: "EU/associated-country entities only; India entities need an EU subsidiary." },
      leaders: [{ name: "Michiel Scheffer", role: "EIC Board President" }],
      initiatives: [{ title: "GenAI4EU; Physical AI Pilot", ask: "Generative + physical AI for European autonomy", amount: "up to €2.5M grant + €10M equity", status: "2026 cut-offs (verify)", signal: "Sovereignty-driven funding; EU AI Act-native compliance is the ask.", signalStrength: "moderate", opportunity: "Reachable mainly via an EU partner/consortium.", links: ["https://eic.ec.europa.eu"] }] },
    { id: "cifar", category: "public", industry: "Canada", parent: "CIFAR", name: "CIFAR — Pan-Canadian AI", url: "https://www.cifar.ca",
      thesis: "Pan-Canadian AI Strategy: AI Chairs and AI-safety catalyst grants anchored at Mila/Amii/Vector.",
      themes: ["ai-chairs", "ai-safety", "talent-retention"],
      reach: { score: 1, label: "distant", why: "Requires cross-appointment at a Canadian university + Mila/Amii/Vector; restricted to the Canadian ecosystem." },
      leaders: [{ name: "Elissa Strome", role: "Executive Director" }],
      initiatives: [{ title: "Canada CIFAR AI Chairs; Safety Catalyst", ask: "Long-term AI research funding; safety research", amount: "$24M (2026 chairs)", status: "2026 intakes (verify)", signal: "A national strategy to retain deep-learning talent amid US brain drain.", signalStrength: "moderate", opportunity: "A relocation/partnership play via Mila or Vector, not a remote one.", links: ["https://www.cifar.ca"] }] },

    // ───────────────────────── ACADEMIC AI LABS (GLOBAL) ─────────────────────────
    { id: "stanford-hai", kind: "academia", category: "academia", industry: "US", parent: "Stanford University", name: "Stanford HAI", url: "https://hai.stanford.edu",
      thesis: "Human-centered AI: human impact, augmenting capabilities, and intelligence. Virtual cell models, large world models, and responsible robotics.",
      problem: "Make frontier AI augment rather than replace human capability, and translate it into medicine and science.",
      themes: ["human-centered", "world-models", "ai-for-science", "robotics"],
      reach: { score: 2, label: "partner", why: "Visiting Scholar programs (1–9 months) and postdoc fellowships; competitive but open to external/industry researchers." },
      leaders: [{ name: "James Landay", role: "Denning Director (post-2026 merger)" }, { name: "Fei-Fei Li", role: "Special Advisor" }, { name: "John Etchemendy", role: "Senior Fellow" }],
      initiatives: [{ title: "Hoffman–Yee grants; Accenture / NVIDIA / Infosys affiliates", ask: "Fund cross-disciplinary human-centered AI", amount: "$27.6M+ distributed", status: "annual", signal: "The Corporate Affiliate Program is the formal industry bridge.", signalStrength: "strong", opportunity: "Visiting Scholar route; Infosys/Accenture affiliations are India-adjacent doorways.", links: ["https://hai.stanford.edu"] }],
      edges: [{ to: "World Labs", type: "spinout", note: "Fei-Fei Li — spatial intelligence / large world models" }, { to: "accenture-ventures", type: "partner", note: "Corporate Affiliate Program member" }],
      brief: "**Why it matters:** HAI is the template for ‘human-centered AI’ and a spinout machine — World Labs (Fei-Fei Li) came straight out of this orbit.\n\n**The bridge:** the Corporate Affiliate Program (Accenture, Infosys, NVIDIA) is the formal industry door, and the Infosys/Accenture ties make it more India-adjacent than most US labs.\n\n**Your opening:** the Visiting Scholar route (1–9 months) is realistic for an established researcher; HAI’s health and world-model work is citable and collaboration-friendly." },
    { id: "mit-csail", kind: "academia", category: "academia", industry: "US", parent: "MIT", name: "MIT CSAIL + Schwarzman", url: "https://csail.mit.edu",
      thesis: "Agentic AI, quantum-AI integration, and social/ethical responsibilities (SERC). ‘Programmer’s apprentices’ for AI-led coding; CardioCopilot wellness.",
      problem: "Make agents reliable and accountable enough for coding and health, and integrate quantum.",
      themes: ["agents", "quantum-ai", "ethics", "health"],
      reach: { score: 2, label: "partner", why: "Visitor Industry Researcher Program (6–12 months) for member-company employees." },
      leaders: [{ name: "Daniela Rus", role: "Director, CSAIL" }, { name: "Daniel Huttenlocher", role: "Dean, Schwarzman" }, { name: "Aude Oliva", role: "Industry Engagement" }],
      initiatives: [{ title: "MIT-IBM lab; MIT-Amazon Science Hub", ask: "Agentic AI, robotics, quantum-AI", amount: "$1B Schwarzman gift", status: "ongoing", signal: "Deep corporate labs (IBM, Amazon) are the deployment edges.", signalStrength: "strong", opportunity: "Reachable via member-company residency; strong for agent-reliability research.", links: ["https://csail.mit.edu"] }] },
    { id: "berkeley-bair", kind: "academia", category: "academia", industry: "US", parent: "UC Berkeley", name: "Berkeley AI Research (BAIR)", url: "https://bair.berkeley.edu",
      thesis: "Compound AI systems, humanoid intelligence, and AI for climate.",
      problem: "Move from monolithic models to reliable compound systems and embodied action.",
      themes: ["compound-ai", "humanoid", "climate", "systems"],
      reach: { score: 2, label: "partner", why: "BAIR Open Research Commons (Apple/Google/Meta/Bosch); corporate research scholars embed at Berkeley Way West." },
      leaders: [{ name: "Trevor Darrell", role: "Founding Co-Director" }, { name: "Pieter Abbeel", role: "Robotics" }, { name: "Ion Stoica", role: "Systems" }],
      initiatives: [{ title: "Open Research Commons; Humanoid Intelligence Center", ask: "Compound + embodied AI", amount: "$300K/yr HIC tier", status: "ongoing", signal: "Spun out Databricks, Anyscale, and Perplexity — a spinout machine.", signalStrength: "strong", opportunity: "Systems/agent research with the most prolific commercialization lineage.", links: ["https://bair.berkeley.edu"] }],
      edges: [{ to: "Perplexity", type: "spinout", note: "Aravind Srinivas (BAIR alum)" }, { to: "Databricks / Anyscale", type: "spinout", note: "Ion Stoica (faculty)" }] },
    { id: "cmu-scs", kind: "academia", category: "academia", industry: "US", parent: "Carnegie Mellon", name: "CMU SCS / Robotics", url: "https://www.cs.cmu.edu",
      thesis: "‘Intelligence at scale’: AI for science (OpenScholar), physical AI (robot brains), and AI for societal decision-making.",
      problem: "Give robots general-purpose brains and apply AI to scientific and societal decisions.",
      themes: ["physical-ai", "ai-for-science", "robotics", "decision-making"],
      reach: { score: 2, label: "partner", why: "Robotics Institute Summer Scholars (RISS) for global students; visiting faculty programs." },
      leaders: [{ name: "Martial Hebert", role: "Dean, SCS" }, { name: "Zico Kolter", role: "Head, ML Dept" }, { name: "Mona Diab", role: "Director, LTI" }],
      initiatives: [{ title: "Fujitsu Physical AI center; Skild AI spinout", ask: "Robot foundation models; AI for science", amount: "$20M NSF AI-SDM", status: "ongoing", signal: "Skild AI (robot brains) raised a $1.4B Series C (Jan 2026, SoftBank + NVIDIA/NVentures) — a clean research→capital edge.", signalStrength: "strong", opportunity: "Physical-AI / sim-to-real research with a hot commercialization path.", links: ["https://www.cs.cmu.edu"] }],
      edges: [{ to: "Skild AI", type: "spinout", note: "general-purpose robot brains; later NVentures-backed" }, { to: "nventures", type: "talent", note: "Skild AI (CMU lineage) is an NVentures bet" }] },
    { id: "princeton-pli", kind: "academia", category: "academia", industry: "US", parent: "Princeton", name: "Princeton Language + Intelligence", url: "https://pli.princeton.edu",
      thesis: "‘Unpacking the black box’: efficient models (Sheared LLaMA), autonomous agents (SWE-agent), and low-resource languages.",
      problem: "Make models efficient, interpretable, and capable of real software tasks.",
      themes: ["efficiency", "agents", "interpretability", "low-resource-languages"],
      reach: { score: 2, label: "partner", why: "AI postdoc fellows and visiting research professionals; a 300-GPU H100 cluster." },
      leaders: [{ name: "Sanjeev Arora", role: "Director, PLI" }, { name: "Danqi Chen", role: "Associate Director" }, { name: "Tom Griffiths", role: "Director, AI Lab" }],
      initiatives: [{ title: "SWE-agent; NJ AI Hub (Microsoft)", ask: "Efficient + agentic AI; regional R&D", amount: "Schmidt Sciences", status: "ongoing", signal: "SWE-agent is a widely used open agent benchmark/tool.", signalStrength: "moderate", opportunity: "Low-resource-language efficiency research overlaps Indic AI needs.", links: ["https://pli.princeton.edu"] }] },
    { id: "oxford-ori", kind: "academia", category: "academia", industry: "UK", parent: "University of Oxford", name: "Oxford Robotics Institute", url: "https://ori.ox.ac.uk",
      thesis: "Physical AI + AI safety: robots for extreme environments and certifying autonomous agents.",
      problem: "Make autonomous robots and agents trustworthy enough for high-stakes physical/financial tasks.",
      themes: ["physical-ai", "ai-safety", "robotics", "certification"],
      reach: { score: 1, label: "distant", why: "Visiting research/policy fellows (1–12 months) but competitive; UK-based." },
      leaders: [{ name: "Nick Hawes", role: "Director, ORI" }, { name: "Paul Newman", role: "Founder" }, { name: "Maurice Fallon", role: "Dynamic Systems" }],
      initiatives: [{ title: "AtkinsRéalis nuclear robotics; Stateful Robotics spinout", ask: "Autonomous robots for extreme environments", amount: "£850M OSE fund", status: "2026", signal: "Long-horizon autonomy for hazardous sites.", signalStrength: "moderate", opportunity: "Niche but well-funded physical-AI safety work.", links: ["https://ori.ox.ac.uk"], verify: true }] },
    { id: "cambridge-ai", kind: "academia", category: "academia", industry: "UK", parent: "University of Cambridge", name: "ai@cam", url: "https://ai.cam.ac.uk",
      thesis: "AI for science + sovereign infrastructure: the Zenith supercomputer; AI for mental health/fertility; AI in medicine.",
      problem: "Apply AI to science and health while building sovereign UK compute.",
      themes: ["ai-for-science", "health", "sovereign-compute"],
      reach: { score: 2, label: "partner", why: "Meridian Visiting Researcher Programme (3–12 months)." },
      leaders: [{ name: "Neil Lawrence", role: "Chair, ai@cam" }, { name: "Mihaela van der Schaar", role: "AI in Medicine" }, { name: "Jessica Montgomery", role: "Director" }],
      initiatives: [{ title: "ai@cam; SAIL (AMD/Dell); Google CHIA", ask: "AI for science + sovereign infra", amount: "CIC £100M", status: "ongoing", signal: "The van der Schaar lab is a leading AI-in-medicine group.", signalStrength: "strong", opportunity: "Health-AI methods (van der Schaar) are highly citable and collaboration-friendly.", links: ["https://ai.cam.ac.uk"] }] },
    { id: "eth-zurich", kind: "academia", category: "academia", industry: "Europe", parent: "ETH Zurich", name: "ETH AI Center", url: "https://ai.ethz.ch",
      thesis: "Responsible digital transformation: the Swiss National AI Institute building sovereign models (Apertus) on the ‘Alps’ supercomputer.",
      problem: "Build trustworthy national foundation models and the compute beneath them.",
      themes: ["sovereign-models", "responsible-ai", "compute"],
      reach: { score: 1, label: "distant", why: "ETH AI Center Fellowships ~2% acceptance; very competitive." },
      leaders: [{ name: "Andreas Krause", role: "Chair" }, { name: "Alexander Ilic", role: "Executive Director" }],
      initiatives: [{ title: "SNAI / Apertus; IBM Quantum-AI", ask: "Sovereign European foundation models", amount: "CHF 20M", status: "2025–2028", signal: "Apertus is an openly-built sovereign model effort.", signalStrength: "moderate", opportunity: "A reference point for India’s own sovereign-model ambitions.", links: ["https://ai.ethz.ch"] }] },
    { id: "mila", kind: "academia", category: "academia", industry: "Canada", parent: "Université de Montréal / McGill", name: "Mila", url: "https://mila.quebec",
      thesis: "‘Strategic Horizon 2026’: AI for science, environment, and responsible / ‘safe-by-design’ AI.",
      problem: "Make AI safe-by-design and useful for science and climate.",
      themes: ["ai-for-science", "ai-safety", "responsible-ai", "climate"],
      reach: { score: 3, label: "open", why: "Annual Mila Visit Day (March) + 12-month research internships open to global graduate students — one of the most accessible elite labs." },
      leaders: [{ name: "Yoshua Bengio", role: "Scientific Director" }, { name: "Valérie Pisano", role: "CEO" }, { name: "Hugo Larochelle", role: "Scientific Director" }],
      initiatives: [{ title: "LawZero (Bengio); Recursion / Amgen drug discovery", ask: "Safe-by-design oversight; AI for biology", amount: "$250M Sovereign AI hub", status: "ongoing", signal: "Bengio’s LawZero makes AI-safety a fundable, named direction.", signalStrength: "strong", opportunity: "Genuinely reachable: internships and visits open to international students — a real door for you.", links: ["https://mila.quebec"] }],
      edges: [{ to: "LawZero", type: "spinout", note: "Yoshua Bengio — safe-by-design AI" }],
      brief: "**Why it’s reachable:** Mila is one of the few elite labs that genuinely opens its doors — an annual Visit Day in March and 12-month internships open to international graduate students.\n\n**The direction:** Bengio’s pivot to ‘safe-by-design’ AI (LawZero) has made AI safety a fundable, named research program, alongside deep AI-for-science and health work.\n\n**Your opening:** a concrete, low-barrier path into a top lab — and the responsible-AI framing travels well into clinical deployment, where trust is the blocker." },
    { id: "vector", kind: "academia", category: "academia", industry: "Canada", parent: "University of Toronto", name: "Vector Institute", url: "https://vectorinstitute.ai",
      thesis: "‘What AI can do’: agentic AI, clinical decision support (Alzheimer’s detection), and privacy-preserving federated learning (FL4Health).",
      problem: "Deploy AI in health safely, including federated and privacy-preserving methods.",
      themes: ["agents", "clinical-ai", "federated-learning", "alzheimers"],
      reach: { score: 2, label: "partner", why: "Visiting Researcher Program (up to 1 year) for scholars on sabbatical/transition." },
      leaders: [{ name: "Geoffrey Hinton", role: "Chief Scientific Advisor" }, { name: "Glenda Crisp", role: "CEO" }, { name: "Deval Pandya", role: "VP, AI Engineering" }],
      initiatives: [{ title: "FL4Health; Roche partnership to 2030", ask: "Federated clinical AI incl. Alzheimer’s detection", amount: "30+ sponsors", status: "ongoing", signal: "Alzheimer’s detection + federated health AI directly overlap your domain.", signalStrength: "strong", opportunity: "FL4Health is an open framework you could build on for brain-aging screening.", links: ["https://vectorinstitute.ai"] }],
      edges: [{ to: "Cohere", type: "spinout", note: "Nick Frosst (Hinton student)" }] },
    { id: "tsinghua-air", kind: "academia", category: "academia", industry: "China", parent: "Tsinghua University", name: "Tsinghua AIR", url: "https://air.tsinghua.edu.cn",
      thesis: "AI for science, embodied AI, and the world’s first ‘Agent Hospital’ simulation.",
      problem: "Scale AI into science and healthcare via simulation and embodiment.",
      themes: ["ai-for-science", "embodied-ai", "agent-hospital", "health"],
      reach: { score: 2, label: "partner", why: "Global Research Program 2026 (6-week immersion) + Amgen Scholars summer internship." },
      leaders: [{ name: "Ya-Qin Zhang", role: "Dean" }, { name: "Ma Weiying", role: "Chief Scientist" }],
      initiatives: [{ title: "Agent Hospital; ByteDance SIA Lab", ask: "Simulated clinical agents; scalable intelligent models", amount: "NSFC + CCF-Ant", status: "ongoing", signal: "‘Agent Hospital’ is a notable simulated-clinician research line.", signalStrength: "moderate", opportunity: "Simulated-patient/agent methods are portable to low-resource clinical training.", links: ["https://air.tsinghua.edu.cn"] }],
      edges: [{ to: "Zhipu AI", type: "spinout", note: "KEG Lab; 2026 HK IPO" }] },
    { id: "shanghai-ai-lab", kind: "academia", category: "academia", industry: "China", parent: "Shanghai Government (state-backed)", name: "Shanghai AI Laboratory", url: "https://shlab.org.cn",
      thesis: "‘AI for Science 2.0’: trillion-parameter Intern models and a national roadmap for safe embodied intelligence.",
      problem: "Build frontier open models and safe embodied AI at national scale.",
      themes: ["foundation-models", "ai-for-science", "embodied-ai", "open-models"],
      reach: { score: 2, label: "partner", why: "Aggressive Visiting Scholar Program (5 days–6 months) for global PhDs/professors, travel covered." },
      leaders: [{ name: "Zhou Bowen", role: "Director" }, { name: "Yu Qiao", role: "Lead Scientist" }],
      initiatives: [{ title: "Intern-S1-Pro; InternLM series", ask: "Open trillion-param models; embodied AI safety", amount: "$10B Shanghai commitment", status: "ongoing", signal: "InternLM is a widely used open model family.", signalStrength: "moderate", opportunity: "Open weights + a funded visiting program make it surprisingly accessible.", links: ["https://shlab.org.cn"] }] },
    { id: "nus-ai", kind: "academia", category: "academia", industry: "Singapore", parent: "NUS", name: "NUS AI Institute", url: "https://naii.nus.edu.sg",
      thesis: "‘AI + X’: AI for public health, legal LLMs, and materials discovery for semiconductors.",
      problem: "Apply AI across public health, law, and materials at city-state scale.",
      themes: ["ai-for-public-health", "legal-ai", "materials"],
      reach: { score: 2, label: "partner", why: "Singapore Global AI Visiting Professorship; BLOCK71/Microsoft accelerator." },
      leaders: [{ name: "Mohan Kankanhalli", role: "Director" }],
      initiatives: [{ title: "AI4PH; Applied Materials chip-AI", ask: "AI for public health + materials", amount: "S$50M GRIP", status: "ongoing", signal: "Public-health AI is an explicit pillar.", signalStrength: "moderate", opportunity: "AI4PH overlaps population-health screening; regionally reachable.", links: ["https://naii.nus.edu.sg"] }] },
    { id: "ntu-astar", kind: "academia", category: "academia", industry: "Singapore", parent: "NTU / A*STAR", name: "NTU / A*STAR CFAR", url: "https://www.ntu.edu.sg",
      thesis: "AI for science + sustainable AI; the Aspire 2B supercomputer for climate and health.",
      problem: "Sustainable, science-grade AI on national compute.",
      themes: ["ai-for-science", "sustainable-ai", "health"],
      reach: { score: 2, label: "partner", why: "Turing AI Scholars Programme; GenAI bootcamps." },
      leaders: [{ name: "Ho Teck Hua", role: "NTU President" }, { name: "Ong Yew Soon", role: "Chief AI Scientist, A*STAR" }],
      initiatives: [{ title: "Aspire 2B; Alibaba Green AI", ask: "Sustainable + science AI", amount: "S$1B RIE2030", status: "2025–2030", signal: "The green-AI/efficiency angle is distinctive.", signalStrength: "moderate", opportunity: "Energy-efficient inference research aligns with their green-AI lab.", links: ["https://www.ntu.edu.sg"] }] },
    { id: "mbzuai", kind: "academia", category: "academia", industry: "UAE", parent: "MBZUAI (Abu Dhabi)", name: "MBZUAI", url: "https://mbzuai.ac.ae",
      thesis: "‘AI for Good’: foundation models (K2 Think), agriculture (Gates Foundation), and digital public health.",
      problem: "Build foundation models and apply AI to agriculture and public health for the global south.",
      themes: ["foundation-models", "agriculture", "public-health", "ai-for-good"],
      reach: { score: 3, label: "open", why: "Fully funded MSc/PhD + UGRIP internship; highly accessible to Indian researchers; AI-talent Golden Visas." },
      leaders: [{ name: "Eric Xing", role: "President" }, { name: "Timothy Baldwin", role: "Provost" }, { name: "Sami Haddadin", role: "VP Research" }],
      initiatives: [{ title: "K2 Think; Gates agriculture AI; Jais Arabic LLM", ask: "Foundation models + AI for global-south health/agri", amount: "fully UAE-funded", status: "ongoing", signal: "Gates-backed agriculture AI for 43M smallholder farmers; a global-south health focus.", signalStrength: "strong", opportunity: "The most financially accessible elite lab for an Indian researcher — full funding, no fees.", links: ["https://mbzuai.ac.ae"] }],
      brief: "**The unlock:** MBZUAI is, financially, the most accessible elite AI institution for an Indian researcher — a fully UAE-funded MSc/PhD with stipend and housing, plus the 4-week UGRIP internship and AI-talent Golden Visas.\n\n**The focus:** foundation models (K2 Think), Gates-Foundation agriculture AI for 43M smallholder farmers, and digital public health — a global-south agenda that rhymes with India’s.\n\n**Your opening:** if relocation is on the table, this removes the funding barrier entirely; if not, the public-health and agriculture programs are natural collaboration surfaces." },

    // ───────────────────────── ACADEMIC AI LABS (INDIA) ─────────────────────────
    { id: "iisc", kind: "academia", category: "academia", industry: "India", parent: "IISc Bangalore", name: "IISc — CBR / ARTPARK", url: "https://www.iisc.ac.in",
      thesis: "Healthy brain aging (Centre for Brain Research), AI/ML foundations (CDS/CSA), and healthcare robotics (ARTPARK). A longitudinal study of the aging Indian brain for early dementia biomarkers.",
      problem: "Indian-population brain-aging data and models barely exist; global models underperform on Indian brains.",
      themes: ["healthy-brain-aging", "dementia", "clinical-ai", "robotics", "india"],
      reach: { score: 3, label: "open", why: "Your home ecosystem: ARTPARK incubation (up to ₹2cr), FSID internships, and CBR longitudinal datasets — directly reachable." },
      leaders: [{ name: "Centre for Brain Research (CBR)", role: "brain-aging" }, { name: "ARTPARK", role: "healthcare robotics" }, { name: "CDS / CSA", role: "AI/ML foundations" }],
      initiatives: [
        { title: "AI Challenge for Healthy Brain Aging (2026)", ask: "Predictive models for cognitive decline from multimodal Indian cohort data", amount: "₹2 crore prize pool (Microsoft Research + ADDI)", status: "active 2026", signal: "Money + a written challenge + a rare longitudinal Indian dataset converge here — the strongest applied-gap signal in this whole map for you.", signalStrength: "strong", opportunity: "This is literally your challenge. The CBR longitudinal dataset (MRI, gait, proteomics) is the moat.", links: ["https://cbr-iisc.ac.in"] },
        { title: "Brain Co-Processors Moonshot; Siemens Healthineers–CDS imaging", ask: "AI neurofeedback for rehab; MRI reconstruction", amount: "Pratiksha Trust funded (led by Prof. Rajesh Rao)", status: "2026", signal: "A deep, funded neuro-AI bench at IISc.", signalStrength: "moderate", opportunity: "Imaging + neuro-AI collaborations on home turf.", links: ["https://www.iisc.ac.in"] }],
      edges: [{ to: "Google", type: "partner", note: "ARTPARK Project Vaani — 5,000+ hrs Indian speech" }, { to: "NPCI", type: "partner", note: "CoE for AI in national payments" }],
      brief: "**This is your home turf — and the single strongest applied-gap signal in the whole map.** The IISc Centre for Brain Research runs a longitudinal study of the aging Indian brain (MRI, gait, proteomics) — a dataset that essentially doesn’t exist elsewhere.\n\n**The convergence:** the 2026 AI Challenge for Healthy Brain Aging (₹2 crore, with Microsoft Research and ADDI) means money, a written ask, and a rare data moat all sit in the same place. Global dementia models underperform on Indian brains; that mismatch is the opportunity.\n\n**Your opening:** you’re already inside this. The defensible research is Indian-population-specific early detection — owning the data-to-model bridge that outsiders can’t replicate." },
    { id: "ai4bharat", kind: "academia", category: "academia", industry: "India", parent: "IIT Madras (Wadhwani School of AI)", name: "AI4Bharat", url: "https://ai4bharat.org",
      thesis: "Indic AI sovereignty: large-scale language and speech models for the 22 scheduled languages; multimodal health-document understanding.",
      problem: "90% of Indians don’t use English; vernacular health/clinical AI barely exists.",
      themes: ["indic-languages", "speech", "vernacular-health", "sovereign-ai", "india"],
      reach: { score: 3, label: "open", why: "Open datasets (IndicVoices, IndicLLMSuite, IndicHealth), the Shoonya annotation platform, and BhashaDaan — directly usable now." },
      leaders: [{ name: "Mitesh Khapra", role: "Co-lead, WSAI" }, { name: "Balaraman Ravindran", role: "Head, WSAI" }],
      initiatives: [
        { title: "IndicHealth + IndicVoices + Bhashini backbone", ask: "Indic-language health intent/entity extraction; real-time voice for govt services", amount: "datasets + Bhashini mission", status: "active", signal: "IndicHealth covers 7 Indic languages — the only serious vernacular clinical-NLP asset.", signalStrength: "strong", opportunity: "Plug your brain-aging/clinical work into Indic-language patient interfaces using their open data.", links: ["https://ai4bharat.org"] },
        { title: "Sarvam AI spinout (IndiaAI sovereign LLM)", ask: "Sovereign Indic LLM; TTS/STT (Bulbul, Saaras)", amount: "₹10,372cr IndiaAI mission + Lightspeed/HCLTech", status: "2026", signal: "AI4Bharat → Sarvam is the cleanest India research→capital edge.", signalStrength: "strong", opportunity: "Sarvam’s models are a deployable base for vernacular health agents.", links: ["https://sarvam.ai"] }],
      edges: [{ to: "Sarvam AI", type: "spinout", note: "founders from AI4Bharat; IndiaAI sovereign-LLM selectee" }, { to: "indiaai", type: "partner", note: "Bhashini / IndiaAI mission backbone" }, { to: "lightspeed", type: "funded-by", note: "Lightspeed backed Sarvam" }],
      brief: "**The asset:** AI4Bharat has built the only serious open Indic-language stack — IndicVoices (7,348 hrs across 145 districts), IndicLLMSuite (251B tokens), and IndicHealth (clinical NLP for 7 languages) — and is the technical backbone of Bhashini.\n\n**The flow:** it spun out Sarvam AI, now an IndiaAI sovereign-LLM selectee backed by Lightspeed and HCLTech/NVIDIA — the cleanest research-to-capital edge in Indian AI.\n\n**Your opening:** vernacular health interfaces are wide open. Pair IndicHealth + Sarvam’s speech models with brain-aging/clinical screening to reach the 90% of Indians who don’t use English — demand is proven, the clinical depth is thin." },
    { id: "iitb-cminds", kind: "academia", category: "academia", industry: "India", parent: "IIT Bombay", name: "IIT Bombay C-MInDS / KCDH", url: "https://minds.iitb.ac.in",
      thesis: "C-MInDS + Koita Centre for Digital Health: the BharatGen generative-model initiative; AI for remote vitals and early cardiac screening.",
      problem: "Population-scale digital health needs Indian-context models and remote monitoring.",
      themes: ["digital-health", "bharatgen", "cardiac-screening", "india"],
      reach: { score: 3, label: "open", why: "SINE incubator; NDMC public-health models; active industry ties (Samsung/Honda)." },
      leaders: [{ name: "Ganesh Ramakrishnan", role: "Head, C-MInDS" }],
      initiatives: [{ title: "BharatGen; KCDH digital health; NDMC", ask: "Indian generative models + disease modelling", amount: "national programs", status: "active", signal: "BharatGen is a sovereign generative-model effort with IBM WatsonX integration.", signalStrength: "moderate", opportunity: "Remote-vitals + cardiac screening overlaps low-resource clinical AI.", links: ["https://minds.iitb.ac.in"] }],
      edges: [{ to: "BharatGen / IBM WatsonX", type: "partner", note: "sovereign Indian generative models" }] },
    { id: "iitd-scai", kind: "academia", category: "academia", industry: "India", parent: "IIT Delhi (Yardi ScAI)", name: "IIT Delhi — Yardi ScAI", url: "https://scai.iitd.ac.in",
      thesis: "AI for sciences (digital twins for biopharma), neuro-symbolic AI, and a ₹330cr AIIMS–IITD healthcare CoE.",
      problem: "Bridge clinical institutions (AIIMS) and AI for surgery, genomics, and last-mile care.",
      themes: ["neuro-symbolic", "healthcare-coe", "genomics", "india"],
      reach: { score: 3, label: "open", why: "Executive Programme for AI in Healthcare (24-week); FITT incubation; the AIIMS CoE." },
      leaders: [{ name: "Mausam", role: "Founding Head, LLMs" }, { name: "Parag Singla", role: "Head of School" }],
      initiatives: [{ title: "AIIMS–IITD CoE (₹330cr); Tribal last-mile AI", ask: "AI for surgery, genomics, marginalized-community care", amount: "₹330 crore (Ministry of Education, 2024)", status: "active", signal: "One of India’s largest clinical-AI CoEs, anchored to AIIMS.", signalStrength: "strong", opportunity: "A direct AIIMS bridge for clinical-AI validation — rare and reachable.", links: ["https://scai.iitd.ac.in"] }],
      edges: [{ to: "AIIMS", type: "partner", note: "₹330cr healthcare AI CoE" }],
      brief: "**The bridge:** the ₹330-crore AIIMS–IIT Delhi Centre of Excellence is one of India’s largest clinical-AI efforts, anchored directly to AIIMS — surgery, genomics, and last-mile care.\n\n**Why it’s rare:** access to a top clinical institution for validation is the hardest thing to arrange in health AI; this CoE institutionalizes it.\n\n**Your opening:** the 24-week Executive Programme for AI in Healthcare and FITT incubation are concrete entry points to an AIIMS-linked validation pathway." },
    { id: "iith-ai", kind: "academia", category: "academia", industry: "India", parent: "IIT Hyderabad", name: "IIT Hyderabad — Dept of AI", url: "https://ai.iith.ac.in",
      thesis: "Clinical-efficiency AI (Indo-US), algorithmic fairness, and National Health Claims Exchange microservices.",
      problem: "Health systems need fair, efficient AI integrated with national health infrastructure.",
      themes: ["clinical-efficiency", "fair-ai", "health-claims", "india"],
      reach: { score: 3, label: "open", why: "Solvathon 2026 (with Apollo); active PhD/MTech intake." },
      leaders: [{ name: "Ganesh Ghalme", role: "Game Theory / Fair AI" }],
      initiatives: [{ title: "NHCX hackathon (NHA); MedSafe; MayaMD", ask: "AI for health claims, medication safety, triage", amount: "national health infra", status: "2026", signal: "A direct National Health Authority partnership.", signalStrength: "moderate", opportunity: "Fair-AI + clinical-efficiency methods with a national-infra deployment route.", links: ["https://ai.iith.ac.in"] }] },
    { id: "iiit-h", kind: "academia", category: "academia", industry: "India", parent: "IIIT Hyderabad (CVIT / IHub-Data)", name: "IIIT Hyderabad — CVIT", url: "https://cvit.iiit.ac.in",
      thesis: "The first structural brain atlas for the Indian population; speech LLMs; road-safety AI (iRASTE); a NIMHANS brain repository.",
      problem: "No Indian-population brain atlas existed — global norms misfit Indian aging/neuro studies.",
      themes: ["indian-brain-atlas", "neuro-ai", "speech-llm", "dementia", "india"],
      reach: { score: 3, label: "open", why: "AI for Medical Professionals certificate; Avishkar MedTech accelerator; open datasets." },
      leaders: [{ name: "C.V. Jawahar", role: "Vision/AI Lead" }, { name: "P. Anandan", role: "Global Health AI" }],
      initiatives: [{ title: "Indian Brain Atlas; CALM-Brain (NIMHANS)", ask: "Structural normative brain data; neuropsychiatric progression repository", amount: "research + NIMHANS partnership", status: "2026", signal: "The Indian Brain Atlas + NIMHANS repository are exactly the missing assets for Indian brain-aging AI.", signalStrength: "strong", opportunity: "Pair this normative atlas with IISc CBR longitudinal data — that combination is your differentiated bench.", links: ["https://www.iiit.ac.in"] }],
      edges: [{ to: "NIMHANS", type: "partner", note: "CALM-Brain digital neuropsychiatric repository" }, { to: "iisc", type: "partner", note: "complementary Indian brain-aging data assets" }],
      brief: "**The missing asset, built:** IIIT-Hyderabad created the first structural brain atlas for the Indian population, and through CALM-Brain (with NIMHANS) a digital repository of neuropsychiatric progression.\n\n**Why it matters to you:** Indian-population normative brain data is exactly what global aging/dementia models lack. The atlas is the normative backbone; NIMHANS adds longitudinal clinical depth.\n\n**Your opening:** combine the IIIT-H Indian Brain Atlas with IISc’s CBR longitudinal cohort and you have a differentiated, hard-to-replicate bench for Indian brain-aging AI — arguably the highest-leverage move on this whole map for you." },
    { id: "wadhwani-ai", kind: "academia", category: "academia", industry: "India", parent: "Wadhwani Institute for AI", name: "Wadhwani AI", url: "https://wadhwaniai.org",
      thesis: "Deployment-first health AI at population scale: TB screening, maternal health, retinopathy; agricultural resilience.",
      problem: "It is proven that low-resource AI screening works at scale — but academic novelty is thin; it is an execution and deployment game.",
      themes: ["tb-screening", "maternal-health", "retinopathy", "deployment", "india"],
      reach: { score: 3, label: "open", why: "Wadhwani Ignite/Accelerate programs; open TB datasets; a collaboration-friendly nonprofit." },
      leaders: [{ name: "Shekar Sivasubramanian", role: "CEO" }, { name: "Alpan Raval", role: "Chief Scientist" }],
      initiatives: [{ title: "Cough Against TB; eSanjeevani CDSS; Krishi 24/7", ask: "Offline smartphone TB screening; national telemedicine decision support", amount: "govt-deployed (1.6 lakh+ screened)", status: "active", signal: "Demand + deployment proven at national scale; the research frontier is robustness, not novelty.", signalStrength: "strong", opportunity: "The clearest applied-gap exemplar: population health AI where deployment, not model novelty, wins.", links: ["https://wadhwaniai.org"] }],
      edges: [{ to: "eSanjeevani", type: "partner", note: "national telemedicine CDSS integration" }],
      brief: "**The proof point:** Wadhwani AI screened 1.6 lakh+ patients for TB via an offline, cough-sound smartphone app, and integrates clinical decision support into the national eSanjeevani telemedicine system.\n\n**The lesson:** at population scale the frontier isn’t model novelty — it’s robustness, offline operation, and deployment. This is the cleanest example of the ‘applied gap’ where money and demand are real and academic glamour is low.\n\n**Your opening:** if your brain-aging screening is designed deployment-first (offline, low-cost, robust on Indian data) rather than benchmark-first, Wadhwani is the model — and a potential collaborator." },
    { id: "iit-kanpur", kind: "academia", category: "academia", industry: "India", parent: "IIT Kanpur (Gangwal School)", name: "IIT Kanpur — BODH", url: "https://www.iitk.ac.in",
      thesis: "BODH — a national benchmarking platform for Health AI with the National Health Authority; privacy-preserving federated validation.",
      problem: "India lacks shared, privacy-preserving benchmarks to validate health-AI models.",
      themes: ["health-ai-benchmark", "federated", "privacy", "india"],
      reach: { score: 3, label: "open", why: "BODH is a national open platform; NHA partnership; collaboration-oriented." },
      leaders: [{ name: "Gangwal School of Data Science & AI", role: "host" }],
      initiatives: [{ title: "BODH benchmarking platform (2026)", ask: "Open, federated benchmarking for health-AI models", amount: "NHA partnership", status: "2026", signal: "Shared benchmark infrastructure is the missing layer for trustworthy Indian health AI.", signalStrength: "moderate", opportunity: "Validate brain-aging/screening models on a national federated benchmark.", links: ["https://www.iitk.ac.in"] }] }
  ],
  synthesis: [
    { id: "s-agents", zone: "crowded", theme: "Agentic AI & agent-reliability infrastructure", where: "VCs + CVCs + challenges + labs", readout: "Greylock, Sapphire, M12, Salesforce, AWS and NVIDIA challenges, MIT and Berkeley labs are all here. Durable execution, monitoring, and multi-agent security are the named sub-gaps.", forSanjay: " — crowded; only enter with a sharp vertical (e.g. clinical agents) and a data edge.", nodes: ["greylock", "sapphire", "m12", "salesforce-ventures", "mit-csail", "berkeley-bair"] },
    { id: "s-coding", zone: "crowded", theme: "Coding & software agents", readout: "Khosla (Cognition), Conviction (Harvey-style), Salesforce (Code Metal), Princeton SWE-agent. Verification of AI-generated code is the moat everyone now chases.", forSanjay: " — far from your domain; watch, don’t build.", nodes: ["khosla", "conviction", "salesforce-ventures", "princeton-pli"] },
    { id: "s-enterprise", zone: "crowded", theme: "Enterprise vertical AI", readout: "Index, Insight, Menlo, SAP/Sapphire all selling ‘own the workflow’ vertical agents. Strong data moats win.", forSanjay: " — relevant only if you commercialise a health vertical.", nodes: ["index-ventures", "insight", "menlo", "sapphire"] },
    { id: "s-physical", zone: "emerging", theme: "Physical / embodied AI & sim-to-real", where: "CVC + challenges + labs", readout: "NVentures, Next47, NVIDIA challenges, CMU and Berkeley robot-brain spinouts (Skild, Field AI). Sim-to-real for deformable/cluttered tasks is unsolved.", forSanjay: " — adjacent if your screening uses robotics/sensing; otherwise watch.", nodes: ["nventures", "next47", "cmu-scs", "berkeley-bair"] },
    { id: "s-world", zone: "emerging", theme: "World models / spatial intelligence", readout: "Stanford spinout World Labs, AMD and Salesforce bets, Lightspeed thesis. Early, capital-rich, thin on applications.", forSanjay: " — not your lane, but a fast-moving frontier to track.", nodes: ["stanford-hai", "amd-ventures", "lightspeed"] },
    { id: "s-safety", zone: "emerging", theme: "Mechanistic interpretability & AI safety", readout: "Mila (Bengio LawZero), AI Grant (Goodfire, Haize), South Park Commons, ARIA Safeguarded AI. Academia + frontier money active; few open paid challenges yet.", forSanjay: " — the responsible-AI framing transfers to clinical trust; a credible secondary interest.", nodes: ["mila", "aigrant", "spc", "aria"] },
    { id: "s-sovereign", zone: "emerging", theme: "Sovereign & vernacular foundation models", where: "govt money + labs + a few VCs", readout: "AI4Bharat→Sarvam, IndiaAI, ETH Apertus, Shanghai InternLM, Lightspeed. National compute + data sovereignty are aligning.", forSanjay: " — strong India tailwind; vernacular health sits right on top of this.", nodes: ["ai4bharat", "indiaai", "eth-zurich", "shanghai-ai-lab", "lightspeed"] },
    { id: "s-brainaging", zone: "applied-gap", theme: "Healthy brain aging & dementia early-detection in Indian populations", where: "money + challenge present; Indian-population research bench globally thin", readout: "IISc CBR runs the ₹2cr challenge on a rare longitudinal Indian cohort; IIIT-H built the Indian Brain Atlas; NIMHANS adds clinical depth; Vector/Cambridge work on Alzheimer’s detection but on non-Indian data.", forSanjay: " — THIS IS YOUR LANE. The Indian data assets exist and global models misfit Indian brains. Own the data-to-model bridge.", nodes: ["iisc", "iiit-h", "iith-ai", "vector"] },
    { id: "s-screening", zone: "applied-gap", theme: "Low-resource clinical screening (TB, retina, cardiac, cough)", where: "deployment + demand proven; academic novelty thin", readout: "Wadhwani AI screens at population scale via eSanjeevani; IIT-B cardiac screening; Khosla’s ‘AI doctor’ thesis funds it. The frontier is robustness and offline operation, not model novelty.", forSanjay: " — design brain-aging screening deployment-first and this is a direct, fundable path.", nodes: ["wadhwani-ai", "iitb-cminds", "khosla"] },
    { id: "s-indichealth", zone: "applied-gap", theme: "Indic-language clinical / health AI", where: "language infra + demand; clinical depth thin", readout: "AI4Bharat IndicHealth (7 languages) + Bhashini demand exist, but clinical-grade vernacular health AI barely does.", forSanjay: " — pair Indic-language models with your clinical work to reach the 90% who don’t use English.", nodes: ["ai4bharat", "indiaai"] },
    { id: "s-voice", zone: "applied-gap", theme: "Voice-first offline health AI for low-connectivity", where: "paid challenge + deployment; research bench thin", readout: "Bhashini VYOMA (₹80L, Jul 2026) asks for offline voice-first AI; Wadhwani’s cough-TB proves the model. Edge inference for health is asked-for but under-researched.", forSanjay: " — a concrete, deadline-bearing entry that fits Indian field realities.", nodes: ["ai4bharat", "wadhwani-ai", "indiaai"] }
  ]
};
