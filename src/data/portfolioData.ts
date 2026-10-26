export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'AI & Automation' | 'Backend & Full-Stack' | 'CRM & Management';
  liveUrl: string;
  githubUrl: string; // points to GitHub profile until individual repo URLs are provided
  technologies: string[];
  keyFeatures: string[];
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degreeOrProgram: string;
  location: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammad Hammad",
    role: "Full Stack AI Automation Engineer",
    headline: "Full Stack AI Automation Engineer",
    introduction: "I build AI-powered applications, intelligent automation workflows, AI agents, and backend systems that solve real-world problems.",
    aboutBio: [
      "I am currently studying Software Engineering at COMSATS University Islamabad, Attock Campus, Pakistan. My technical focus lies at the intersection of AI automation, autonomous agents, and robust backend engineering.",
      "Rather than chasing hype, I concentrate on building reliable software systems that eliminate repetitive human effort, streamline operational pipelines, and deliver measurable utility through Python, FastAPI, n8n, relational and modern databases, and responsive frontend interfaces.",
      "I am actively seeking software engineering internships, junior developer roles, and select freelance engineering contracts where I can apply practical engineering discipline to real-world challenges."
    ],
    location: "COMSATS University Islamabad, Attock Campus, Pakistan",
    linkedinUrl: "https://linkedin.com/in/muhammad-hammadkdev",
    githubUrl: "https://github.com/hamadKdev/",
    email: "khanmuhamd2007@gmail.com",
    phone: "03309144903",
    // Configurable CV/Resume link pointing to the verified uploaded PDF in public folder
    cvUrl: "/Muhammad-Hammad-Resume.pdf",
    resumePdfUrl: "/Muhammad-Hammad-Resume.pdf",
    resumeDownloadFilename: "Muhammad-Hammad-Resume.pdf",
    statusText: "Available for Internships & Junior Roles",
  },

  skills: [
    {
      title: "AI and Automation",
      description: "Building intelligent workflows, LLM reasoning pipelines, and autonomous agent systems.",
      skills: [
        { name: "AI Automation", description: "End-to-end task orchestration and automated data handoffs" },
        { name: "AI Agents", description: "Autonomous task-executing agents with tool calling and context management" },
        { name: "n8n Workflows", description: "Complex visual and webhook-triggered business logic workflows" },
        { name: "LLM Integrations", description: "Structured prompt chains, embeddings, and API integrations" },
        { name: "Workflow Automation", description: "Custom event-driven pipelines and scheduled business jobs" }
      ]
    },
    {
      title: "Backend Development",
      description: "Developing robust, well-documented server architectures and high-performance endpoints.",
      skills: [
        { name: "Python", description: "Core backend scripting, asynchronous programming, and data processing" },
        { name: "FastAPI", description: "High-speed async RESTful API design with Pydantic type safety" },
        { name: "REST APIs", description: "Clean endpoint contracts, status codes, and modular routing" },
        { name: "API Integration", description: "Third-party services, webhooks, and secure payloads" },
        { name: "Authentication", description: "JWT, OAuth flows, role-based access control, and secure headers" }
      ]
    },
    {
      title: "Database",
      description: "Designing schema relationships, optimizing queries, and securing persistent storage.",
      skills: [
        { name: "SQL", description: "Relational data querying, indexing, foreign keys, and constraints" },
        { name: "Supabase", description: "PostgreSQL-as-a-service, Row Level Security, and realtime events" },
        { name: "Database Design", description: "Normalized schemas, entity modeling, and data integrity" }
      ]
    },
    {
      title: "Frontend and Deployment",
      description: "Crafting responsive interfaces and deploying reliable production builds.",
      skills: [
        { name: "React", description: "Component-driven architecture, custom hooks, and state workflows" },
        { name: "HTML", description: "Semantic markup, accessibility compliance, and structural hierarchy" },
        { name: "CSS", description: "Modern styling, Tailwind utility systems, and responsive design" },
        { name: "Vercel", description: "Edge deployment, environment configuration, and continuous delivery" },
        { name: "Application Deployment", description: "Build pipeline verification, production configuration, and monitoring" }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "campus-resolve-ai",
      title: "CampusResolve AI",
      shortDescription: "An AI-assisted university complaint management platform designed to organize campus facilities and IT support complaints.",
      fullDescription: "CampusResolve AI addresses common bottlenecks in university administration by intelligently categorizing, prioritizing, and triaging student and faculty complaints regarding campus facilities, laboratory equipment, and IT infrastructure. The platform streamlines complaint lifecycles from submission to administrative resolution.",
      category: "AI & Automation",
      liveUrl: "https://campus-resolve-complaint-ai.vercel.app/",
      githubUrl: "https://github.com/hamadKdev/",
      technologies: ["AI Automation", "FastAPI / Python", "React", "REST APIs", "Vercel"],
      keyFeatures: [
        "AI-assisted classification of incoming campus complaints",
        "Automated routing to appropriate department coordinators",
        "Transparent real-time status tracking for students and staff",
        "Administrative dashboard for ticket resolution and reporting"
      ],
      badge: "Featured System"
    },
    {
      id: "admit-crew",
      title: "AdmitCrew — Agentic Abroad Study Management System",
      shortDescription: "A study-abroad consultancy CRM focused on admissions workflows and student application management.",
      fullDescription: "AdmitCrew is a focused customer relationship management (CRM) platform built specifically for international education consultants. It manages the end-to-end student journey, from initial prospect qualification and university selection to document verification and visa application milestone tracking.",
      category: "CRM & Management",
      liveUrl: "https://agnetic-abroad-srudy-managment-syst.vercel.app/",
      githubUrl: "https://github.com/hamadKdev/",
      technologies: ["React", "CRM Architecture", "Database Design", "Vercel", "REST APIs"],
      keyFeatures: [
        "Student lifecycle pipeline from inquiry to visa issuance",
        "Document requirement checklists and submission tracking",
        "Counselor assignment and follow-up task reminders",
        "University and program eligibility catalog management"
      ],
      badge: "Production CRM"
    },
    {
      id: "ai-inventory-system",
      title: "AI Inventory System",
      shortDescription: "An inventory management application designed to support stock operations and AI-assisted workflows.",
      fullDescription: "A modern commercial inventory system developed for retail and shopping mall operations. The application tracks multi-category SKU counts, alerts operators when reorder thresholds are approached, and utilizes AI-assisted logic to predict stock replenishments based on historical turnover patterns.",
      category: "AI & Automation",
      liveUrl: "https://ai-inventory-for-a-shopping-mall-sy.vercel.app/",
      githubUrl: "https://github.com/hamadKdev/",
      technologies: ["Python", "FastAPI", "React", "AI Logic", "Vercel"],
      keyFeatures: [
        "Multi-department inventory tracking and SKU categorization",
        "Stock depletion threshold alerts and reorder suggestions",
        "Audit trail for incoming shipments and store transfers",
        "Clean operational metrics dashboard for store management"
      ],
      badge: "Operations Tool"
    },
    {
      id: "clinic-appointment-system",
      title: "Clinic Appointment Management System",
      shortDescription: "A clinic management application for organizing patient appointments and workflows for doctors and administrators.",
      fullDescription: "A dependable healthcare scheduling platform tailored for clinics and outpatient facilities. It eliminates scheduling conflicts, tracks patient consultations, manages physician availability rosters, and provides administrative staff with a clear overview of daily clinic throughput.",
      category: "Backend & Full-Stack",
      liveUrl: "https://doctor-appointment-system-project.vercel.app/",
      githubUrl: "https://github.com/hamadKdev/",
      technologies: ["React", "Appointment Workflow", "API Integration", "Vercel"],
      keyFeatures: [
        "Interactive slot booking with doctor availability conflict prevention",
        "Patient intake records and consultation history",
        "Administrative scheduling board for appointment confirmation",
        "Clean, responsive layout for receptionists and medical staff"
      ],
      badge: "Healthcare Platform"
    },
    {
      id: "event-registration-system",
      title: "Event Registration and Management System",
      shortDescription: "An event management application designed to organize events and participant registrations.",
      fullDescription: "A comprehensive event coordination platform that enables organizers to publish events, manage attendee capacities, process attendee registrations, and verify participant credentials on event day through an intuitive administrative interface.",
      category: "Backend & Full-Stack",
      liveUrl: "https://event-managment-system-project.vercel.app/",
      githubUrl: "https://github.com/hamadKdev/",
      technologies: ["React", "Registration Engine", "Database Integration", "Vercel"],
      keyFeatures: [
        "Event publishing portal with ticket and attendee limits",
        "Instant participant registration and verification",
        "Attendee directory with filtering and status management",
        "Responsive public event detail pages with quick booking"
      ],
      badge: "Event Architecture"
    }
  ] as Project[],

  services: [
    {
      id: "ai-automation",
      title: "AI Workflow Automation",
      summary: "Connecting your business tools, databases, and communication channels into autonomous, event-driven pipelines that reduce operational overhead.",
      deliverables: [
        "Automated data ingestion from forms, webhooks, and APIs",
        "Intelligent document and text classification",
        "Multi-step automated business routing"
      ],
      icon: "Zap"
    },
    {
      id: "n8n-workflows",
      title: "n8n Workflow Development",
      summary: "Building self-hosted or cloud n8n workflows with custom webhook triggers, conditional branching, error-handling routines, and API connectors.",
      deliverables: [
        "Robust n8n visual flow architecture",
        "Webhook and polling-based trigger systems",
        "Fail-safe error logging and recovery alerts"
      ],
      icon: "GitBranch"
    },
    {
      id: "ai-agents",
      title: "AI Agent Integration",
      summary: "Designing goal-oriented AI agents equipped with custom tool calling, structured outputs, and persistent context memory to perform real tasks.",
      deliverables: [
        "Tool-augmented agent implementations",
        "Structured JSON schema outputs from LLMs",
        "Contextual memory and retrieval mechanisms"
      ],
      icon: "Bot"
    },
    {
      id: "python-fastapi",
      title: "Python & FastAPI Backend Development",
      summary: "Architecting clean, type-safe asynchronous REST APIs designed for high throughput, low latency, and straightforward maintenance.",
      deliverables: [
        "Asynchronous FastAPI endpoint design",
        "Pydantic data validation and request sanitization",
        "Clean architectural separation of routes and business logic"
      ],
      icon: "Server"
    },
    {
      id: "rest-apis",
      title: "REST API Development",
      summary: "Building clear, standard-compliant API contracts that seamlessly bridge frontend interfaces, mobile clients, and third-party systems.",
      deliverables: [
        "Predictable REST endpoints with proper HTTP semantics",
        "Interactive OpenAPI / Swagger auto-documentation",
        "Rate-limiting and defensive request handling"
      ],
      icon: "Network"
    },
    {
      id: "database-integration",
      title: "Database Integration",
      summary: "Designing normalized database schemas in PostgreSQL, Supabase, and SQL systems with strict referential integrity and optimized queries.",
      deliverables: [
        "Relational schema modeling and migration strategies",
        "Row Level Security (RLS) and access rules",
        "Efficient index structures for search and retrieval"
      ],
      icon: "Database"
    },
    {
      id: "ai-powered-apps",
      title: "AI-Powered Application Development",
      summary: "Creating complete, usable web applications where AI capabilities are genuinely integrated into user workflows rather than added as an afterthought.",
      deliverables: [
        "End-to-end integration of backend intelligence and modern UI",
        "Practical user workflows with real-time feedback",
        "Production deployment ready for end users on Vercel"
      ],
      icon: "Cpu"
    }
  ] as ServiceItem[],

  education: [
    {
      id: "comsats",
      institution: "COMSATS University Islamabad",
      degreeOrProgram: "Bachelor of Science in Software Engineering (BS SE)",
      location: "Attock Campus, Pakistan",
      period: "Undergraduate Studies",
      status: "In Progress",
      description: "Rigorous academic curriculum covering software architecture, data structures, algorithms, object-oriented design, database management systems, computer networks, and operating systems.",
      highlights: [
        "Core focus on Software Engineering principles and backend systems",
        "Active development of practical academic and personal software applications",
        "Emphasis on clean code, software life cycle methodologies, and practical problem-solving"
      ]
    },
    {
      id: "metaklouds",
      institution: "MetaKlouds",
      degreeOrProgram: "AI Automation Engineering Specialized Training",
      location: "Professional Training",
      period: "Focused Professional Track",
      status: "Completed / Specialized Track",
      description: "Intensive practical training focused on autonomous AI agents, workflow automation pipelines, n8n integrations, LLM API orchestration, and enterprise workflow design.",
      highlights: [
        "Hands-on building of real-world automated workflows and triggers",
        "Designing resilient n8n automation architectures with custom webhooks",
        "Integrating LLM APIs for automated classification, summarization, and data extraction"
      ]
    }
  ] as EducationItem[]
};
