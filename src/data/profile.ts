export const profile = {
  name: "Damandeep Singh",
  role: "Software Engineer · MS CS @ Texas A&M",
  tagline: "I build backend systems, ML pipelines, and LLM agent tooling, and now I'm doing it as research.",
  location: "College Station, TX",
  email: "dmnsingh007@gmail.com",
  github: "https://github.com/Damandeep02",
  linkedin: "https://www.linkedin.com/in/damandeep02",
  resumeFile: "/Damandeep_Resume.pdf",
};

export const about = `Software engineer and MS CS student at Texas A&M with 3 years shipping
production backend systems. Work spans distributed systems, LLM agent tooling,
and applied machine learning research, now digging into multimodal deep
learning for clinical risk prediction at STMI Lab. Previously researched
few-shot learning at IIT Delhi and real-time facial recognition at IIT
Hyderabad. B.Tech in Information Technology from NIT Srinagar (Top 10%,
CGPA 8.31/10).`;

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Graduate Student Researcher",
    org: "STMI Lab, Texas A&M University",
    location: "College Station, TX",
    period: "Aug 2026 - Present",
    points: [
      "Researching multimodal deep learning and LLM methods for clinical risk prediction, fusing EHR time-series with wearable biosignal (ECG/PPG) data into unified patient representations.",
      "Building retrieval-augmented LLM pipelines and benchmarking model reasoning against clinician-validated outcomes.",
    ],
  },
  {
    role: "Software Development Engineer",
    org: "MediBuddy",
    location: "Bengaluru, India",
    period: "July 2024 - June 2026",
    points: [
      "Built a natural-language-to-SQL system on the Model Context Protocol (MCP) with agent-to-agent context management and LLM-driven schema introspection, letting non-technical teams self-serve analytics, shipped behind a Next.js frontend.",
      "Built a billing reconciliation system using FIFO idempotency and transactional state machines, eliminating duplicate refunds and cutting monthly financial leakage by 89% (₹6L → ₹65K), with Apache Superset monitoring.",
      "Designed a multi-criteria vendor assignment system with weighted scoring and greedy selection over real-time inventory queries; added Redis caching for sub-100ms latency, cutting medicine delivery time from 48h to under 6h (60% SLA improvement).",
      "Developed an automated prescription-validation pipeline (Amazon Textract + transfer learning), turning a 10-minute manual review into real-time processing.",
    ],
  },
  {
    role: "Software Developer",
    org: "ShipThis",
    location: "Bengaluru, India",
    period: "Sept 2023 - July 2024",
    points: [
      "Built a document-parsing pipeline on Azure Document Intelligence with custom OCR to auto-populate structured data from unstructured emails.",
      "Designed GitHub Actions CI/CD pipelines with Jest/Jasmine and ESLint for automated build, test, and deployment.",
    ],
  },
  {
    role: "Research Intern",
    org: "IIT Hyderabad",
    location: "Hyderabad, India",
    period: "Dec 2021 - Mar 2022",
    points: [
      "Built a real-time facial recognition system using MediaPipe FaceMesh (468-point landmarks) with Euclidean-distance geometric feature extraction.",
      "Cut inference latency by 20% through feature-vector and memory optimizations, without sacrificing accuracy.",
    ],
  },
  {
    role: "Research Intern",
    org: "IIT Delhi",
    location: "New Delhi, India",
    period: "Aug 2021 - Oct 2021",
    points: [
      "Implemented First-Order MAML for few-shot N-way K-shot classification with nested gradient-descent loops for meta-optimization.",
      "Benchmarked convergence and generalization against the Reptile algorithm.",
    ],
  },
];

export const education = [
  {
    school: "Texas A&M University",
    degree: "M.S. in Computer Science (Thesis-based)",
    period: "Aug 2026 - May 2028 (Expected)",
    detail: "Coursework: Machine Learning (CSCE 633), Analysis of Algorithms (CSCE 629), NLP (CSCE 689)",
  },
  {
    school: "National Institute of Technology, Srinagar",
    degree: "B.Tech in Information Technology",
    period: "July 2019 - June 2023",
    detail: "CGPA 8.31/10 (Top 10%)",
  },
];

export const honors = [
  { title: "2nd Place, MediBuddy AI/ML Hackathon", detail: "Doctor Copilot: LLM-based clinical decision support proof-of-concept." },
  { title: "Winner, Devfolio Base Hackathon", detail: "October 2024, one of 16 winning teams across 4 countries for a decentralized gaming platform." },
];

export type Project = {
  name: string;
  description: string;
  url: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Sentinel: MCP Security Gateway",
    description: "A protocol-aware gateway in Go that intercepts MCP JSON-RPC traffic between AI agent clients and tool servers, enforcing per-agent authorization through a pluggable policy engine (in-memory rules or OpenFGA). Adds fail-closed intent validation and a JSON redactor that strips emails, cards, tokens, and secrets from requests and responses.",
    url: "https://github.com/Damandeep02/sentinel-mcp-gateway",
    tags: ["Go", "MCP", "OpenFGA", "Security"],
    featured: true,
  },
  {
    name: "Credit Card Fraud Detection with Federated Learning",
    description: "Privacy-preserving fraud detection using Federated Averaging (FedAvg), where raw transaction data never leaves any client. Evaluated on imbalanced, non-IID transaction data distributed across multiple clients.",
    url: "https://github.com/Damandeep02/credit-card-fraud-detection-using-federated-learning",
    tags: ["Python", "PyTorch", "Federated Learning"],
    featured: true,
  },
  {
    name: "Face Emotion Detection",
    description: "Facial emotion classification using OpenCV, Keras, and a CNN.",
    url: "https://github.com/Damandeep02/Face-emotion-detection",
    tags: ["Python", "Keras", "CNN"],
  },
  {
    name: "Network Simulator",
    description: "A simulator for network protocol behavior, built for coursework in computer networks.",
    url: "https://github.com/Damandeep02/Network-Simulator",
    tags: ["Python"],
  },
  {
    name: "Fletnix",
    description: "A Netflix-style full-stack streaming UI clone with separate frontend and backend services.",
    url: "https://github.com/Damandeep02/fletnix-frontend",
    tags: ["JavaScript", "Full-stack"],
  },
  {
    name: "LineEncoder",
    description: "Line coding encoder and scrambler with a digital data generator.",
    url: "https://github.com/Damandeep02/LineEncoder",
    tags: ["Java"],
  },
];

export const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "Go", "Java", "C++", "SQL"],
  "ML / AI": ["PyTorch", "TensorFlow", "scikit-learn", "LangChain", "RAG", "MCP", "LLMs", "OpenCV", "NumPy", "Pandas"],
  "Backend & Infra": ["Node.js", "NestJS", "Express.js", "Next.js", "React.js", "PostgreSQL", "MongoDB", "Redis", "Kafka", "Docker", "AWS", "Azure"],
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
    blurb: "Afrobeats and hip-hop on repeat while the code compiles.",
  },
];

export type ImpactRow = {
  label: string;
  value: string;
  detail: string;
};

export const impact: ImpactRow[] = [
  { label: "Billing leakage, MediBuddy", value: "₹6L → ₹65K", detail: "FIFO idempotency + transactional state machines" },
  { label: "Medicine delivery SLA", value: "48h → 6h", detail: "weighted vendor assignment + Redis caching" },
  { label: "Prescription review", value: "10 min → real-time", detail: "Textract OCR + transfer learning" },
  { label: "Face-recognition latency", value: "−20%", detail: "468-point landmark optimization, IIT Hyderabad" },
  { label: "Devfolio Base Hackathon", value: "1 of 16", detail: "winning teams, 4 countries, Oct 2024" },
  { label: "MediBuddy AI/ML Hackathon", value: "2nd place", detail: "Doctor Copilot clinical decision-support POC" },
  { label: "B.Tech, NIT Srinagar", value: "8.31 / 10", detail: "CGPA, top 10% of cohort" },
];

export const impactTotal = {
  value: "89%",
  caption: "cut in monthly financial leakage — the largest line in the ledger, MediBuddy billing reconciliation.",
};

export const journey = [
  { place: "College Station, TX", tz: "America/Chicago", note: "filing from, now" },
  { place: "Bengaluru · New Delhi · Hyderabad · Srinagar", tz: "Asia/Kolkata", note: "where the record started" },
];
