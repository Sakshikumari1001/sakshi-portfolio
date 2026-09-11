export const personalInfo = {
  name: "Sakshi Kumari",
  role: "Aspiring Full Stack Developer",
  tagline: "Building practical full-stack applications & solving problems through code.",
  subTagline: "B.Tech CSE student passionate about building practical full-stack applications and solving problems through code.",
  educationShort: "B.Tech CSE • Lovely Professional University (2024 – 2028)",
  cgpa: "7.40",
  email: "mishra0108sakshi@gmail.com",
  phone: "+91-7992470771",
  location: "Phagwara, Punjab, India",
  github: "https://github.com/sakshikumari01",
  linkedin: "https://linkedin.com/in/sakshi",
  openToWork: true,
  status: "Open to Full-Stack & Engineering Roles"
};

export const heroTechBadges = [
  { name: "Java", category: "Language" },
  { name: "DSA", category: "Core" },
  { name: "React.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Language" },
  { name: "MongoDB", category: "Database" }
];

export const terminalData = {
  command: "sakshi@portfolio:~$ whoami",
  lines: [
    { label: "Name", value: "Sakshi Kumari", color: "text-cyan-400" },
    { label: "Role", value: "Aspiring Full Stack Developer", color: "text-emerald-400" },
    { label: "Education", value: "B.Tech CSE", color: "text-slate-300" },
    { label: "Focus", value: "Full-Stack Development", color: "text-indigo-400" },
    { label: "Current Stack", value: "React + Node + Java", color: "text-amber-400" },
    { label: "Status", value: "Building & Learning", color: "text-emerald-400" }
  ],
  curlSnippet: "curl -s https://api.sakshi.dev/profile | jq .",
  statusCode: "HTTP 200 OK — Ready for Impact",
  latency: "14ms"
};

export const aboutNarrative = {
  paragraphs: [
    "I am a B.Tech Computer Science and Engineering student at Lovely Professional University with a strong interest in Full-Stack Development and problem solving. I enjoy building practical applications and understanding how frontend, backend, databases and APIs work together.",
    "I am currently strengthening my skills in Java, Data Structures and Algorithms, React.js, Node.js, Python and MongoDB while continuously working on real-world projects."
  ],
  highlights: [
    {
      title: "Full-Stack Engineering",
      desc: "Hands-on experience architecting full-stack systems with React.js, Node.js, Express, FastAPI, and MongoDB."
    },
    {
      title: "Algorithmic Problem Solving",
      desc: "Consistent Java DSA practitioner with 100+ problems solved on LeetCode and an active 50-day streak badge."
    },
    {
      title: "Open Source Collaboration",
      desc: "Contributor in Social Summer of Code (SSoC) Season 5, contributing through Git/GitHub workflows, pull requests, and peer reviews."
    }
  ],
  quickStats: [
    { label: "Academic CGPA", value: "7.40", note: "Lovely Professional University" },
    { label: "DSA Practice", value: "100+", note: "Problems Solved on LeetCode" },
    { label: "LeetCode Streak", value: "50-Day", note: "Consistency Badge" },
    { label: "Open Source", value: "SSoC 5", note: "Contributor Milestone" }
  ]
};

export const codingProfiles = [
  {
    name: "GitHub",
    handle: "sakshikumari01",
    metric: "Active Open-Source Projects",
    url: "https://github.com/sakshikumari01",
    icon: "github",
    accent: "from-purple-500/20 to-indigo-500/10",
    border: "group-hover:border-purple-500/50",
    badge: "Verified Profile"
  },
  {
    name: "LinkedIn",
    handle: "in/sakshi",
    metric: "Professional Network & Updates",
    url: "https://linkedin.com/in/sakshi",
    icon: "linkedin",
    accent: "from-blue-500/20 to-cyan-500/10",
    border: "group-hover:border-blue-500/50",
    badge: "Open to Connect"
  },
  {
    name: "LeetCode",
    handle: "Problem Solving Practice",
    metric: "50-Day Streak • 100+ DSA Solved",
    url: "https://leetcode.com/",
    icon: "code2",
    accent: "from-amber-500/20 to-orange-500/10",
    border: "group-hover:border-amber-500/50",
    badge: "50-Day Badge"
  },
  {
    name: "GeeksforGeeks",
    handle: "DSA Practice & CS Fundamentals",
    metric: "Java Problem Solving & Core Concepts",
    url: "https://www.geeksforgeeks.org/",
    icon: "terminal",
    accent: "from-emerald-500/20 to-teal-500/10",
    border: "group-hover:border-emerald-500/50",
    badge: "Active Practice"
  }
];

export const skillsData = {
  categories: [
    { id: "all", label: "All Skills" },
    { id: "languages", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "databases", label: "Databases" },
    { id: "ai", label: "AI / RAG" },
    { id: "tools", label: "Tools" },
    { id: "corecs", label: "Core CS" }
  ],
  skills: [
    // Languages
    { name: "Java", category: "languages", level: "DSA & Core", icon: "Coffee" },
    { name: "Python", category: "languages", level: "FastAPI & AI", icon: "Code" },
    { name: "C++", category: "languages", level: "Problem Solving", icon: "FileCode" },
    { name: "JavaScript", category: "languages", level: "ES6+ Async", icon: "FileJson" },
    { name: "SQL", category: "languages", level: "Queries & Joins", icon: "Database" },

    // Frontend
    { name: "React.js", category: "frontend", level: "Hooks & Context", icon: "Layers" },
    { name: "HTML", category: "frontend", level: "Semantic HTML5", icon: "Layout" },
    { name: "CSS", category: "frontend", level: "Responsive CSS3", icon: "Palette" },
    { name: "Tailwind CSS", category: "frontend", level: "Design Systems", icon: "Sparkles" },
    { name: "Vite", category: "frontend", level: "Build Tooling", icon: "Zap" },
    { name: "Next.js", category: "frontend", level: "Modern SSR / App Router", icon: "Globe" },

    // Backend
    { name: "Node.js", category: "backend", level: "Runtime & Streams", icon: "Server" },
    { name: "Express.js", category: "backend", level: "Middleware & Routing", icon: "Cpu" },
    { name: "FastAPI", category: "backend", level: "Python Async APIs", icon: "Zap" },
    { name: "REST API", category: "backend", level: "Endpoint Architecture", icon: "ArrowLeftRight" },
    { name: "JWT", category: "backend", level: "Auth & RBAC Tokens", icon: "ShieldCheck" },

    // Databases
    { name: "MongoDB", category: "databases", level: "Aggregation & Mongoose", icon: "Database" },
    { name: "MySQL", category: "databases", level: "Relational Schemas", icon: "HardDrive" },
    { name: "ChromaDB", category: "databases", level: "Vector Store & Indexing", icon: "Binary" },

    // AI / RAG
    { name: "RAG", category: "ai", level: "Retrieval Architecture", icon: "Bot" },
    { name: "Vector Embeddings", category: "ai", level: "Dense Code Vectors", icon: "Workflow" },
    { name: "Semantic Search", category: "ai", level: "Cosine Similarity", icon: "Search" },
    { name: "Groq LLM API", category: "ai", level: "Ultra-Fast Inference", icon: "Gauge" },

    // Tools
    { name: "Git", category: "tools", level: "Version Control", icon: "GitBranch" },
    { name: "GitHub", category: "tools", level: "PRs, Actions & Issues", icon: "Github" },
    { name: "VS Code", category: "tools", level: "Primary IDE", icon: "Terminal" },
    { name: "Postman", category: "tools", level: "API Testing & Docs", icon: "Send" },
    { name: "Vercel", category: "tools", level: "Frontend CI/CD", icon: "UploadCloud" },
    { name: "Render", category: "tools", level: "Backend Web Services", icon: "Cloud" },

    // Core CS
    { name: "Data Structures & Algorithms", category: "corecs", level: "Java Problem Solving", icon: "Binary" },
    { name: "OOP", category: "corecs", level: "Polymorphism, Inheritance", icon: "Box" },
    { name: "DBMS", category: "corecs", level: "ACID, Indexing, Normalization", icon: "Database" },
    { name: "Operating Systems", category: "corecs", level: "Concurrency & Processes", icon: "Cpu" },
    { name: "Computer Networks", category: "corecs", level: "TCP/IP, HTTP/S, Sockets", icon: "Network" }
  ]
};

export const featuredProjectData = {
  number: "01",
  title: "GitHub RAG Assistant",
  tag: "AI / Full Stack",
  timeline: "Jul 2026 – Aug 2026",
  description:
    "Built a full-stack Retrieval-Augmented Generation application that allows users to index GitHub repositories and ask natural-language questions about their codebase. The application uses semantic search and vector embeddings to retrieve relevant code context before generating answers using an LLM.",
  techStack: [
    "Python",
    "FastAPI",
    "React",
    "ChromaDB",
    "Groq LLM API",
    "Vector Embeddings"
  ],
  liveUrl: "https://github-rag-assistant-three.vercel.app",
  githubUrl: "https://github.com/sakshikumari01",
  problem:
    "Software developers frequently spend countless hours reading through unfamiliar codebases, deciphering undocumented architectures, and searching through hundreds of source files to understand implementation specifics.",
  solution:
    "A self-serve RAG pipeline that connects directly to any public GitHub repository, splits source files into syntax-aware chunks, embeds them into vector space, and generates grounded, context-aware answers using Groq's high-speed inference.",
  howItWorks:
    "The repository is cloned and parsed. Code documents are split into manageable semantic chunks. Dense embeddings are generated and persisted into ChromaDB. When a user asks a question, ChromaDB executes a cosine-similarity search to pull the top matching code snippets, which are synthesized by the Groq LLM API into a concise, contextual answer.",
  keyFeatures: [
    "GitHub repository indexing with automated directory traversal",
    "Natural-language codebase questions and semantic explanation",
    "Semantic search over functions, classes, and markdown docs",
    "Dense vector embeddings for code and comments",
    "Context-aware answers grounded in real repository files",
    "FastAPI high-throughput asynchronous backend",
    "React responsive interactive UI with query history",
    "ChromaDB local vector database persistence",
    "Groq LLM API integration for lightning-fast token generation"
  ],
  challenges:
    "Large repositories may take longer to ingest on free-tier deployment infrastructure, and cold starts can increase initial response time. Optimization was implemented with selective chunk filtering and streaming status updates.",
  architectureStages: [
    {
      step: 1,
      name: "GitHub Repository",
      short: "Repo Ingestion",
      role: "Source Ingestion",
      tech: "GitHub API / Git Clone",
      input: "Public Repository URL",
      output: "Raw source files, AST & docs",
      description: "Fetches source files, directory tree structure, READMEs, and implementation files from the target GitHub repo."
    },
    {
      step: 2,
      name: "Repository Data",
      short: "Data Extraction",
      role: "Metadata Extractor",
      tech: "Python File Walk",
      input: "Raw repository directories",
      output: "Normalized file catalog",
      description: "Filters out binaries and dependency caches (.git, node_modules, build artifacts) to isolate pure code and documentation."
    },
    {
      step: 3,
      name: "Text / Code Processing",
      short: "Syntax Cleaning",
      role: "Sanitization & Normalization",
      tech: "Regex & Language Parsers",
      input: "File buffers with comments",
      output: "Sanitized code blocks with metadata",
      description: "Cleans syntax formatting, extracts docstrings, file paths, and function headers to maintain contextual metadata."
    },
    {
      step: 4,
      name: "Chunking",
      short: "Semantic Chunking",
      role: "Document Segmentation",
      tech: "Recursive Character Splitter",
      input: "Continuous text streams",
      output: "500-1000 token chunk segments with overlap",
      description: "Splits large code files into semantically coherent chunks with overlap to prevent context fragmentation across boundaries."
    },
    {
      step: 5,
      name: "Vector Embeddings",
      short: "Dense Vectorization",
      role: "Mathematical Representation",
      tech: "Sentence Transformers / Embedding API",
      input: "Text & code chunk tokens",
      output: "High-dimensional float vectors",
      description: "Converts each code snippet into dense mathematical vector representations capturing semantic meaning and syntactic intent."
    },
    {
      step: 6,
      name: "ChromaDB",
      short: "Vector Database",
      role: "Persistent Vector Store",
      tech: "ChromaDB Embedded Engine",
      input: "Vector arrays + metadata tags",
      output: "Indexed multidimensional collection",
      description: "Stores embeddings alongside file path and line number metadata for instant cosine similarity queries."
    },
    {
      step: 7,
      name: "Semantic Search",
      short: "Similarity Query",
      role: "Vector Retrieval",
      tech: "HNSW Cosine Similarity",
      input: "User natural language query",
      output: "Ranked list of top-k nearest code chunks",
      description: "Embeds user questions in real-time and retrieves the most relevant code chunks based on mathematical closeness."
    },
    {
      step: 8,
      name: "Relevant Context",
      short: "Context Assembly",
      role: "Prompt Augmentation",
      tech: "Prompt Engineering Engine",
      input: "Top-k chunks + original user question",
      output: "Structured RAG context prompt",
      description: "Packages retrieved source snippets into an augmented system prompt instructing the model to answer strictly using provided code."
    },
    {
      step: 9,
      name: "Groq LLM",
      short: "Inference Engine",
      role: "Language Synthesis",
      tech: "Groq Llama-3 / Mixtral API",
      input: "Augmented contextual prompt",
      output: "Fast token stream",
      description: "Executes ultra-low latency token generation leveraging Groq's Tensor Processing Unit architecture."
    },
    {
      step: 10,
      name: "Natural Language Answer",
      short: "User Response",
      role: "Client Presentation",
      tech: "React Markdown Renderer",
      input: "LLM output text stream",
      output: "Formatted answer with file references",
      description: "Displays structured explanation with code blocks, file citations, and line references directly to the user."
    }
  ]
};

export const regularProjectsData = [
  {
    number: "02",
    title: "RentRide",
    badge: "Full Stack Web Application",
    tag: "MERN • Cloud Services • Payments",
    description:
      "Developed a full-stack vehicle rental platform that allows users to search vehicles, view details, make bookings and manage their rental experience. The platform also includes authentication, payments, wishlist, reviews and an admin dashboard.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Axios",
      "Cloudinary",
      "Nodemailer",
      "Twilio WhatsApp API",
      "Razorpay",
      "Railway"
    ],
    features: [
      "Vehicle search with dynamic query filters",
      "Vehicle filtering by category, price, and fuel type",
      "Comprehensive vehicle details and specifications",
      "Secure user authentication with JWT & hashed passwords",
      "Vehicle booking management with date ranges",
      "Pickup and return schedule management",
      "Online payment integration with Razorpay",
      "Automated booking receipts and invoice download",
      "Email notifications sent via Nodemailer",
      "WhatsApp notifications via Twilio API",
      "Personal wishlist saving favorite cars",
      "Community rating and verified review system",
      "Promotional discount coupon redemption",
      "Comprehensive Admin dashboard for fleet & booking control"
    ],
    liveUrl: "https://rent-ride-eta.vercel.app",
    githubUrl: "https://github.com/manash123-eng/RentRide",
    mockupType: "vehicle_rental"
  },
  {
    number: "03",
    title: "ProctorEd",
    badge: "AI-Proctored Online Exam Platform",
    tag: "Full Stack • Computer Vision • Integrity",
    description:
      "Built an online examination platform with separate Admin, Teacher and Student roles. The platform supports secure authentication, exam management, automated evaluation and AI-assisted monitoring features.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API"
    ],
    features: [
      "Multi-tier authorization: Admin, Teacher, and Student roles",
      "Secure authentication with session token validation",
      "OCR-based ID verification before exam room entry",
      "Live AI face detection monitoring for multiple faces or absence",
      "Enforced full-screen exam mode to prevent cheating",
      "Active tab-switch monitoring and strike warnings",
      "Automated scoring engine for instant evaluation",
      "Configurable negative marking parameters",
      "Automated result dispatch delivered to student email",
      "Teacher dashboard for exam creation & question banks",
      "Admin monitoring panel for system-wide metrics",
      "Secure REST API backend deployed on Render"
    ],
    deployment: {
      frontend: "Vercel",
      backend: "Render",
      database: "MongoDB Atlas",
      email: "SendGrid"
    },
    liveUrl: "https://exam-platform-yj8s.vercel.app",
    githubUrl: "https://github.com/sakshikumari01/exam-platform",
    mockupType: "proctored_exam"
  }
];

export const trackRecordData = [
  {
    title: "Regular DSA Practice using Java",
    category: "Algorithmic Problem Solving",
    highlight: "Java Core & Algorithms",
    description:
      "Consistent problem-solving practice covering Arrays, Strings, Linked Lists, Trees, Stacks, Queues, and dynamic programming in Java.",
    icon: "Code2",
    badge: "Active Discipline"
  },
  {
    title: "LeetCode Problem-Solving Practice",
    category: "Competitive Practice",
    highlight: "50-Day Streak & 100+ Solved",
    description:
      "Earned official LeetCode 50-Day Streak badge reflecting consistent problem-solving practice and solved 100+ DSA problems strengthening algorithmic thinking.",
    icon: "Flame",
    badge: "50-Day Streak Badge"
  },
  {
    title: "Social Summer of Code Season 5 Contributor",
    category: "Open Source Initiative",
    highlight: "Jul '26 – Present",
    description:
      "Selected open-source contributor in SSoC Season 5. Actively contributed to open-source codebases via Git/GitHub workflows, issue triage, pull requests, and peer reviews.",
    icon: "GitPullRequest",
    badge: "SSoC Contributor"
  },
  {
    title: "Oracle Data Platform Foundations Associate",
    category: "Cloud & Database Certification",
    highlight: "Oracle Certified (May '26)",
    description:
      "Certified in Oracle Data Platform Foundations & DBMS fundamentals, validating understanding of database architecture, cloud data services, and relational query design.",
    icon: "Award",
    badge: "Oracle Certified"
  },
  {
    title: "Infosys Springboard DBMS Part 1",
    category: "Database Foundations",
    highlight: "Infosys Springboard Certified",
    description:
      "Completed structured training in Database Management Systems covering relational schemas, keys, constraints, normalization, and ACID transaction rules.",
    icon: "CheckCircle2",
    badge: "Verified Course"
  },
  {
    title: "Advanced Backend Development (Grade A)",
    category: "University Training",
    highlight: "Centre for Professional Enhancement, LPU",
    description:
      "Completed intensive backend training in Node.js, Express.js, MongoDB & RESTful API architecture, building a full-stack MERN capstone with Grade A distinction.",
    icon: "GraduationCap",
    badge: "Grade A Certified"
  }
];

export const certificationsData = [
  {
    name: "Oracle Data Platform Foundations Associate",
    provider: "Oracle",
    year: "2026",
    skills: "DBMS, Cloud Data Systems, SQL Architecture",
    type: "Database & Cloud"
  },
  {
    name: "Oracle Certified – Artificial Intelligence (AI)",
    provider: "Oracle",
    year: "2026",
    skills: "AI Foundations, Machine Learning Principles",
    type: "AI & Cloud"
  },
  {
    name: "DBMS Part 1",
    provider: "Infosys Springboard",
    year: "2026",
    skills: "Relational Modeling, Normalization, SQL Queries",
    type: "Database"
  },
  {
    name: "Social Summer of Code Season 5 Contributor",
    provider: "SSoC Open Source Program",
    year: "2026",
    skills: "Open Source, Git & GitHub, Pull Requests, Code Reviews",
    type: "Open Source"
  },
  {
    name: "Advanced Backend Development with Node.js, Express & MongoDB",
    provider: "Centre for Professional Enhancement, LPU",
    year: "2026",
    skills: "Node.js, Express.js, MongoDB, JWT Authentication, RESTful APIs (Grade A)",
    type: "Backend & Full Stack"
  }
];

export const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    period: "2024 – 2028",
    score: "CGPA: 7.40",
    scoreType: "Academic CGPA",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks",
      "Advanced Backend Development Certification (Grade A) by Centre for Professional Enhancement",
      "Active contributor in open-source developer initiatives and coding hackathons"
    ]
  },
  {
    institution: "Sushant Public School",
    location: "Muzaffarpur, Bihar",
    degree: "Senior Secondary (Intermediate)",
    period: "Apr 2023 – Mar 2024",
    score: "61.2%",
    scoreType: "Percentage",
    highlights: [
      "Science stream with focus on Mathematics, Physics, and Chemistry",
      "Built strong foundation in analytical logic and problem solving"
    ]
  },
  {
    institution: "Holy Mission Senior Secondary School",
    location: "Muzaffarpur, Bihar",
    degree: "Secondary School (Matriculation)",
    period: "Apr 2021 – Mar 2022",
    score: "68.2%",
    scoreType: "Percentage",
    highlights: [
      "Completed standard curriculum with mathematics and science excellence"
    ]
  }
];

export const learningRoadmap = [
  {
    step: "01",
    topic: "React.js & Next.js",
    sub: "Modern Frontend",
    desc: "Component lifecycle, state management, server components, App Router, and SSR.",
    status: "Active Focus",
    progress: 85
  },
  {
    step: "02",
    topic: "Full-Stack Development",
    sub: "MERN & Python Integrations",
    desc: "End-to-end applications connecting React with Node/Express and Python FastAPI backends.",
    status: "Active Focus",
    progress: 80
  },
  {
    step: "03",
    topic: "Java DSA & Algorithmic Optimization",
    sub: "Core Problem Solving",
    desc: "Trees, Graphs, Recursion, Dynamic Programming, and Big-O time/space optimizations.",
    status: "Daily Practice",
    progress: 75
  },
  {
    step: "04",
    topic: "Backend Development",
    sub: "RESTful & Secure APIs",
    desc: "Microservices design, JWT authentication, rate limiting, and database indexing.",
    status: "In Progress",
    progress: 70
  },
  {
    step: "05",
    topic: "System Design Fundamentals",
    sub: "Scalability & Architecture",
    desc: "Load balancers, caching strategies, horizontal scaling, and fault-tolerant architectures.",
    status: "Learning",
    progress: 60
  }
];
