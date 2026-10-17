export const profile = {
  name: "Damandeep Singh",
  role: "Software Engineer",
  subrole: "M.S. Computer Science · Texas A&M",
  tagline:
    "Three years of production systems experience — backend infrastructure, LLM agent tooling, and applied machine learning.",
  location: "College Station, TX",
  email: "dmnsingh007@gmail.com",
  phone: "+1 979-412-6875",
  github: "https://github.com/Damandeep02",
  linkedin: "https://www.linkedin.com/in/damandeep02",
  resumeFile: "/Damandeep_Singh.pdf",
};

export const about = `Software engineer and M.S. Computer Science student at Texas A&M, with three years of
production systems experience — backend infrastructure, LLM agent tooling, and applied machine
learning. Work has spanned LLM agents, transformers, computer vision, and federated learning,
alongside end-to-end ownership of high-scale backend services.

Before the M.S., two years as a software engineer at MediBuddy, owning a revenue-critical service
end to end. Before that, research internships at IIT Delhi and IIT Hyderabad. B.Tech in Information
Technology from NIT Srinagar, top 10% of the cohort.`;

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer",
    org: "MediBuddy",
    location: "Bengaluru, India",
    period: "Jul 2024 — Jun 2026",
    points: [
      "Built a natural-language-to-SQL system with LLM agents over the Model Context Protocol (MCP) that introspect schemas and share context — operations teams report metrics and catch order mismatches without engineers.",
      "Trained custom document ML models (Amazon Textract adapters) on historical prescriptions, replacing a 10-minute manual review with automated, real-time decisions.",
      "Owned the Meds service end to end — TypeScript, NestJS, PostgreSQL, AWS — one of MediBuddy's three core revenue streams, handling 15K+ orders a day (450K+ a month), including on-call support.",
      "Built billing reconciliation with FIFO queue-based idempotency and state machines, cutting monthly financial leakage by 89%.",
      "Designed vendor assignment with weighted scoring and a greedy heuristic over sub-100ms Redis-cached lookups, cutting delivery time from 48 hours to under 6.",
    ],
  },
  {
    role: "Software Engineer",
    org: "ShipThis",
    location: "Bengaluru, India",
    period: "Sep 2023 — Jul 2024",
    points: [
      "Built a document-parsing pipeline with Azure Document Intelligence and custom OCR models, extracting structured data from emails at 1,000+ documents a day.",
    ],
  },
];

export const research: ExperienceItem[] = [
  {
    role: "Graduate Student Researcher",
    org: "Texas A&M University",
    location: "College Station, TX",
    period: "Aug 2026 — Present",
    points: [
      "Working on long event-sequence modeling with a causal temporal transformer, forecasting daily value trajectories that feed a downstream 30-day risk-prediction model.",
      "Set up training on NVIDIA A100 GPUs via TAMU's High Performance Research Computing cluster.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "IIT Hyderabad",
    location: "Hyderabad, India",
    period: "Dec 2021 — Mar 2022",
    points: [
      "Built real-time facial recognition with MediaPipe FaceMesh (468 landmarks) and Euclidean-distance geometric feature extraction.",
      "Cut inference latency by 20% through feature-vector and memory optimizations, without sacrificing accuracy.",
    ],
  },
  {
    role: "Machine Learning Intern",
    org: "IIT Delhi",
    location: "New Delhi, India",
    period: "Aug 2021 — Oct 2021",
    points: [
      "Implemented First-Order MAML for few-shot N-way K-shot classification, with nested gradient-descent loops for meta-optimization.",
      "Benchmarked convergence and generalization against the Reptile algorithm.",
    ],
  },
];

export const education = [
  {
    school: "Texas A&M University",
    degree: "M.S. in Computer Science",
    period: "Aug 2026 — Dec 2027 (Expected)",
    detail: "Artificial Intelligence · Natural Language Processing (LLMs) · Analysis of Algorithms",
  },
  {
    school: "National Institute of Technology, Srinagar",
    degree: "B.Tech in Information Technology",
    period: "Jul 2019 — Jun 2023",
    detail: "CGPA 8.30 / 10 (Top 10%)",
  },
];

export const honors = [
  { title: "2nd Place, MediBuddy AI/ML Hackathon", detail: "Doctor Copilot — an LLM-based decision-support proof of concept." },
  { title: "Winner, Devfolio Base Hackathon", detail: "Oct 2024 — 1 of 16 winning teams across 4 countries." },
];

export type Project = {
  name: string;
  description: string;
  url?: string;
  status?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    name: "Sentinel",
    description:
      "A Go gateway that intercepts MCP JSON-RPC traffic (stdio, HTTP/SSE) between AI agent clients and tool servers, enforcing per-agent authorization through rules or OpenFGA. Fail-closed intent validation on high-risk tool calls, plus PII redaction on every request and response.",
    url: "https://github.com/Damandeep02/sentinel-mcp-gateway",
    tags: ["Go", "MCP", "OpenFGA", "Security"],
  },
  {
    name: "Federated Fraud Detection",
    description:
      "FedAvg implemented in PyTorch across 12 to 32 simulated clients with partial participation per round — raw transaction data never leaves a client. Compared imbalanced vs. SMOTE-balanced training on minority-class precision, recall, and F1.",
    url: "https://github.com/Damandeep02/credit-card-fraud-detection-using-federated-learning",
    tags: ["Python", "PyTorch", "FedAvg"],
  },
  {
    name: "Trustworthy Image-Based Assessment",
    description:
      "An LLM agent that grounds its assessments of ultrasound images in verifiable evidence rather than confident guesswork. Co-authored the project proposal for a graduate NLP course.",
    status: "Oct 2026 — Present",
    tags: ["Python", "LLMs", "Multimodal"],
  },
];

export const skills = {
  "ML / AI": ["Machine Learning", "Deep Learning", "LLMs", "Transformers", "AI Agents", "RAG", "NLP", "Computer Vision", "Federated Learning"],
  "ML Libraries": ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "OpenCV", "MediaPipe", "NumPy", "Pandas"],
  Languages: ["Python", "C++", "Go", "TypeScript", "JavaScript", "Java", "SQL"],
  "Systems & Cloud": ["GPU Training (A100)", "AWS", "Azure", "Docker", "PostgreSQL", "Redis", "Kafka", "Git", "CI/CD"],
};

export type Interest = {
  label: string;
  blurb: string;
};

export const interests: Interest[] = [
  {
    label: "Tennis",
    blurb: "Chasing down every ball I have no business reaching.",
  },
  {
    label: "Cricket",
    blurb: "Backyard fast bowler, occasional top-order collapse.",
  },
  {
    label: "Afrobeats & Hip-Hop",
    blurb: "On repeat while the code compiles.",
  },
];

export type ImpactRow = {
  label: string;
  value: string;
  detail: string;
};

export const impact: ImpactRow[] = [
  { label: "Monthly financial leakage, MediBuddy", value: "−89%", detail: "FIFO idempotency + transactional state machines (₹6L → ₹65K)" },
  { label: "Medicine delivery time", value: "48h → 6h", detail: "weighted vendor assignment + sub-100ms Redis caching" },
  { label: "Meds service scale", value: "15K+/day", detail: "450K+ orders a month, owned end to end" },
  { label: "Prescription review", value: "10 min → real-time", detail: "Textract adapters, trained on historical prescriptions" },
  { label: "Document throughput, ShipThis", value: "1,000+/day", detail: "Azure Document Intelligence + custom OCR" },
  { label: "Face-recognition latency", value: "−20%", detail: "468-landmark optimization, IIT Hyderabad" },
  { label: "Devfolio Base Hackathon", value: "1 of 16", detail: "winning teams, 4 countries, Oct 2024" },
];

export const impactTotal = {
  value: "89%",
  caption: "cut in monthly financial leakage — the single largest system Damandeep has rebuilt from the inside out.",
};

export const journey = [
  { place: "College Station, TX", tz: "America/Chicago", note: "now" },
  { place: "Bengaluru, India", tz: "Asia/Kolkata", note: "where it started" },
];
