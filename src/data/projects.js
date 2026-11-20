module.exports = [

    {
        id: 1,

        title: "PaperLens AI",

        category: "Autonomous AI Research Orchestrator & Multi-Agent Platform",

        year: "2026",

        status: "Production • Live Demo",

        demo: "https://paperlens.arpanpramanik.tech/",

        github: "https://github.com/arpanpramanik2003/PaperLens-AI",

        description:
            "Autonomous full-stack AI research platform transforming unstructured academic literature into structured, actionable research outputs with a dual-pipeline RAG architecture (in-memory BM25 + FAISS hybrid search paired with remote Supabase pgvector persistence) and turn-compressed ReAct agents.",

        highlights: [
            "Dual-Pipeline RAG: In-memory BM25 + FAISS instant retrieval & Supabase pgvector cross-session persistence",
            "Autonomous ReAct Agent Loop: Deterministic fast-path router (1.5s latency saving) & Model Context Protocol (MCP) server support",
            "54.5% LLM Call Consolidation: Consolidated dual-pass synthesis and batched multi-chunk summarization",
            "Turn-Based Prompt Compression: Compresses tools to concise signatures after Turn 1 (~40% context savings)",
            "Memory-Safe Stream Parsing: Generator-based PyMuPDF extraction keeping heap at 0MB bloat (500MB cap compliant)",
            "4-Stage Resilient Citation Intelligence: DOI → Exact Match → Title → Loose Keyword with real-time SSE progress streaming"
        ],

        tech: [
            "FastAPI",
            "React 18 / Vite",
            "Supabase pgvector",
            "Groq Cloud API (Llama 3.3 / Llama 3.1)",
            "FAISS",
            "BM25",
            "Pydantic v2",
            "PyMuPDF",
            "Tailwind CSS"
        ]

    },

    {
        id: 2,

        title: "CampusSphere",

        category: "Enterprise Co-Curricular Governance & NAAC/NIRF Accreditation Platform",

        year: "2026",

        status: "Production-Grade Platform",

        description:
            "Multi-tier enterprise co-curricular activity verification, institutional credit banking, and NAAC/NIRF accreditation compliance system for higher education institutions, featuring a two-stage verification pipeline, dynamic Credit Policy Engine, and public cryptographic record verification.",

        highlights: [
            "Two-Stage Verification Pipeline: Stage 1 Faculty Advisor review queue followed by Stage 2 Institutional Admin authorization",
            "Dynamic Credit Policy Engine: Weight matrices (Activity Type × Achievement Level) mapped to NAAC Criteria 1–7",
            "Digital Credit Portfolio & Tamper-Proof Badging: Public /verify/[verificationId] endpoint backed by cryptographic tokens",
            "Institutional Admin & NAAC Reporting: Real-time analytics dashboards, grievance consoles, and one-click compliance CSV exports",
            "Enterprise Architecture & Observability: OpenTelemetry distributed tracing, Pino JSON logging, and Upstash Redis rate limiting"
        ],

        tech: [
            "Next.js 15 (App Router)",
            "React 19",
            "Node.js / Express",
            "PostgreSQL (Supabase)",
            "Upstash Redis",
            "Cloudinary",
            "OpenTelemetry / Pino",
            "Tailwind CSS"
        ]

    },

    {
        id: 3,

        title: "JalDrishti (जलदृष्टि)",

        category: "AI Precision Agronomy, FAO-56 Hydrology & Voice Assistant Platform",

        year: "2026",

        status: "Production • Audited Architecture",

        github: "https://github.com/arpanpramanik2003/JalDrishti-AI",

        description:
            "Climate-smart agronomy and precision irrigation advisory platform engineered for Indian smallholder agriculture. Operates without in-situ soil sensors using FAO-56 Penman-Monteith ET modeling, daily root-zone water balance tracking, ISRIC SoilGrids physics, satellite weather, and a 100% Groq-native multilingual RAG voice assistant.",

        highlights: [
            "FAO-56 Penman-Monteith Hydrology Engine: Stefan-Boltzmann radiation, 4-stage Kc(t) crop phenology, and persistent SoilDepletionState",
            "Smart Rain Hold Cost Protection: Automated irrigation suppression on forecasted precipitation saving ₹150–₹500 per skipped run",
            "Cumulative Financial & Eco ROI Telemetry: Audited tracking of water saved (kL), pump runtime avoided, ₹ saved, and CO2 emissions cut",
            "Microclimate Disease Early Warnings: Pathogen outbreak alerts (Late Blight, Blast, Rust) with IPM biological/chemical remedies",
            "JalSathi AI Multilingual Voice Assistant: ChromaDB vector RAG over ICAR packages, sub-150ms Groq translation, and STT/TTS in Bengali, Hindi & English"
        ],

        tech: [
            "Flutter / Dart",
            "FastAPI (Python 3.11)",
            "Supabase PostgreSQL",
            "ChromaDB",
            "Groq Cloud API",
            "Redis Cloud",
            "Open-Meteo API",
            "ISRIC SoilGrids v2.0",
            "Firebase Cloud Messaging"
        ]

    },

    {
        id: 4,

        title: "FlowForge",

        category: "Distributed Workflow Orchestration Engine & Real-Time Observability Platform",

        year: "2026",

        status: "Production-Grade Distributed System",

        description:
            "Observable, resilient background workflow orchestration engine replacing naive cron jobs and unmanaged shell scripts. Dispatches multi-step declarative pipelines asynchronously across priority queues with automatic exponential backoff retries, Dead-Letter Queue (DLQ) isolation, and a real-time monitoring dashboard.",

        highlights: [
            "Declarative Step Pipelines: Sequential workflows with modular handlers (log_message, sleep, http_call) and live state progression",
            "Priority-Tiered Task Scheduling: High, default, and low priority Celery queue routing over Redis message brokers",
            "Exponential Backoff & Dead-Letter Queue: Non-blocking transient error retries and full failure diagnostic captures with one-click requeuing",
            "Stateless Auth & RBAC: JWT access/refresh token rotation with admin, member, and viewer role-based permissions",
            "Real-Time Dashboard & Containerization: Next.js 16 live telemetry dashboard and pre-built multi-arch Docker Hub images"
        ],

        tech: [
            "FastAPI (Python)",
            "Next.js 16",
            "Celery",
            "Redis",
            "PostgreSQL",
            "Docker / Docker Hub",
            "JWT / RBAC",
            "Tailwind CSS"
        ]

    }

];