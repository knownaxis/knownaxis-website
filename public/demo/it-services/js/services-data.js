/**
 * Novaplex Technologies - IT Services & Experience Data
 */

const NOVAPLEX_DATA = {
  brand: {
    name: "Novaplex",
    tagline: "Enterprise Cloud, Cybersecurity & Custom IT Solutions",
    sla: "99.99% Live SLA Guarantee",
    phone: "+1 (800) 492-NOVAPLEX",
    email: "enterprise@novaplextech.com"
  },

  // 4 Top Cards under "Innovating Business Growth With IT Ingenuity"
  featureCards: [
    {
      id: "cloud-devops",
      icon: "cloud",
      title: "Cloud & DevOps Solutions",
      desc: "Accelerate releases and automate multi-cloud infrastructure across AWS, Azure, and GCP with automated Terraform IaC.",
      linkText: "Explore Architecture",
      badge: "Cloud Scale",
      isFeatured: false
    },
    {
      id: "cyber-security",
      icon: "shield",
      title: "Cyber Defense & Zero Trust",
      desc: "Comprehensive 24/7 SIEM monitoring, continuous pen-testing, endpoint security, and proactive compliance defense.",
      linkText: "View Defense Specs",
      badge: "Zero-Trust",
      isFeatured: false
    },
    {
      id: "custom-software",
      icon: "code",
      title: "Software & AI Engineering",
      desc: "Bespoke enterprise web platforms, scalable microservices, private LLM agents, and high-throughput data pipelines.",
      linkText: "Explore Solutions",
      badge: "High Velocity",
      isFeatured: true // Elegant accent badge, not an inverted purple block
    },
    {
      id: "managed-it",
      icon: "headset",
      title: "24/7 Managed SRE & IT",
      desc: "Enterprise workstation fleet management, Intune/Jamf MDM, rapid 15-minute dispatch, and cloud backup systems.",
      linkText: "Review SLAs",
      badge: "15-Min SLA",
      isFeatured: false
    }
  ],

  // "Navigating Tech Horizons Together" Stats
  stats: [
    { value: "250+", label: "Enterprise Projects Delivered" },
    { value: "99.8%", label: "Uptime & SLA Reliability" },
    { value: "15 min", label: "Incident Response Time" }
  ],

  // Tabbed Portfolios / Landmark Case Studies
  portfolioTabs: [
    { id: "tech", label: "Technology", icon: "cpu" },
    { id: "network", label: "Networking", icon: "wifi" },
    { id: "engineering", label: "Engineering", icon: "layers" },
    { id: "cloud", label: "Cloud & DevOps", icon: "cloud" },
    { id: "security", label: "Cyber Security", icon: "shield" }
  ],

  portfolios: {
    "tech": {
      title: "Delivering Next-Gen Enterprise AI Pipelines",
      subtitle: "Scalable Data Lakehouse & Automated Predictive Models",
      desc: "Migrated a global logistics firm from disparate SQL silos to an automated Snowflake and Apache Kafka streaming architecture, slashing query response times by 10x.",
      metrics: [
        { label: "Query Speedup", val: "10x Faster" },
        { label: "Data Processed", val: "4.5 TB / Day" },
        { label: "Cost Savings", val: "38% OpEx" }
      ],
      deliverables: [
        "Real-time event streaming with Apache Kafka & Spark",
        "Air-gapped private LLM copilot for executive analytics",
        "Automated data governance and GDPR lineage tracking"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      mobileMockup: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80"
    },
    "network": {
      title: "Global SD-WAN & Zero-Trust Mesh Backbone",
      subtitle: "Unified Connectivity for 42 International Branches",
      desc: "Consolidated legacy MPLS lines into a redundant, software-defined SD-WAN network with end-to-end WireGuard cryptographic tunnels and centralized policy management.",
      metrics: [
        { label: "Latency Drop", val: "-45% Global" },
        { label: "Network SLA", val: "99.999%" },
        { label: "Bandwidth Boost", val: "4x Uplink" }
      ],
      deliverables: [
        "Zero Trust Network Access (ZTNA) with Cloudflare Magic Transit",
        "Automated failover between fiber and satellite links",
        "Unified Cisco & Fortinet firewall management console"
      ],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
      mobileMockup: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80"
    },
    "engineering": {
      title: "FinTech Microservices Platform Transformation",
      subtitle: "Zero-Loss Transaction Engine Handling 12M Ops/Day",
      desc: "Re-architected a legacy banking core into containerized Go and Node.js microservices running on AWS EKS with distributed Redis caching and PostgreSQL clusters.",
      metrics: [
        { label: "Transaction Vol", val: "12M+ Daily" },
        { label: "P99 Latency", val: "18 ms" },
        { label: "Deployment Cycle", val: "Multiple / Day" }
      ],
      deliverables: [
        "Kubernetes orchestration with automated pod autoscaling",
        "GitOps release workflows orchestrated via ArgoCD",
        "PCI-DSS v4.0 certified payment gateway tokenization"
      ],
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
      mobileMockup: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=500&q=80"
    },
    "cloud": {
      title: "Multi-Region Cloud Modernization on AWS & Azure",
      subtitle: "High-Availability Active-Active Architecture",
      desc: "Designed and executed a zero-downtime lift-and-shape cloud migration for an enterprise healthcare network holding 3.5M patient medical records.",
      metrics: [
        { label: "Migration Downtime", val: "0 Seconds" },
        { label: "Annual Savings", val: "$420,000" },
        { label: "Disaster Recovery", val: "RPO < 3 min" }
      ],
      deliverables: [
        "Multi-cloud Terraform landing zones with strict IAM controls",
        "Automated cross-region database replication with AWS Aurora",
        "Continuous FinOps monitoring with anomaly alerts"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
      mobileMockup: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"
    },
    "security": {
      title: "Zero-Trust Cybersecurity & SIEM Hardening",
      subtitle: "SOC 2 Type II Certification & 24/7 Threat Hunting",
      desc: "Implemented an autonomous Security Operations Center (SOC) with CrowdStrike Falcon and Splunk SIEM for an international trading house.",
      metrics: [
        { label: "Detection SLA", val: "< 8 Mins" },
        { label: "Threats Blocked", val: "142k / Mo" },
        { label: "Audit Result", val: "100% Passed" }
      ],
      deliverables: [
        "24/7 AI-driven XDR endpoint telemetry and automated quarantine",
        "Annual adversarial red-team penetration testing",
        "Automated compliance audit trails for ISO 27001 & SOC 2"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
      mobileMockup: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=500&q=80"
    }
  },

  // 4 Core Pillars Strip beneath Video Banner
  corePillars: [
    { title: "Web Solutions", desc: "High-performance enterprise web apps and resilient client portals." },
    { title: "Cyber Security", desc: "Zero-trust defenses, pen testing, and autonomous 24/7 SOC." },
    { title: "Cloud Computing", desc: "Multi-cloud architecture, serverless scale, and FinOps governance." },
    { title: "IT Management", desc: "Proactive remote helpdesk, device MDM, and automated backups." }
  ],

  // Enterprise Engagement Models (Monthly Retainer vs Annual Agreement with -20% discount)
  pricing: [
    {
      id: "foundation",
      name: "Core Infrastructure",
      badge: "Scale-Ups & Growth",
      desc: "Essential cloud infrastructure governance, automated backups, and 24/7 endpoint defense for high-velocity teams.",
      priceMonthly: 1499,
      priceAnnual: 1199,
      period: "per month",
      isFeatured: false,
      features: [
        "Up to 25 Managed Cloud Nodes (AWS/GCP/Azure)",
        "24/7 Security Operations & Endpoint Defense",
        "Automated Hourly Cloud Backups (RPO < 1h)",
        "Terraform IaC Configuration & Drift Monitoring",
        "Weekly Vulnerability Scans & Compliance Audits",
        "Guaranteed 1-Hour SRE Incident Response"
      ],
      btnText: "Initiate Core Scope"
    },
    {
      id: "accelerated",
      name: "Accelerated Scale",
      badge: "Most Selected",
      desc: "Comprehensive multi-cloud management, zero-trust cybersecurity, and rapid SRE dispatch with dedicated pods.",
      priceMonthly: 3499,
      priceAnnual: 2799,
      period: "per month",
      isFeatured: true, // Focus card with glowing border
      features: [
        "Unlimited Multi-Cloud Clusters & Hybrid Nodes",
        "Dedicated SRE Pod + 24/7 CSIRT Security Desk",
        "Zero-Downtime Automated CI/CD GitOps Pipelines",
        "SOC 2 Type II & ISO 27001 Continuous Compliance",
        "Multi-Region Disaster Recovery & Active Failover",
        "Guaranteed 15-Minute Critical SLA Hotline"
      ],
      btnText: "Deploy SRE Pod"
    },
    {
      id: "transformation",
      name: "Enterprise Dedicated",
      badge: "Full Custom SLA",
      desc: "Full dedicated engineering squad integrated seamlessly with your internal technical leadership.",
      priceMonthly: 6999,
      priceAnnual: 5599,
      period: "per month",
      isFeatured: false,
      features: [
        "Dedicated Principal Architect + 3 Senior SREs",
        "Bespoke High-Throughput Microservices & Private AI",
        "Custom Zero-Trust Mesh & Air-Gapped Workloads",
        "Quarterly Red-Team Adversary Penetration Testing",
        "Direct Slack / Teams SRE Incident War Room",
        "Executive Board-Level Technical Strategy Audits"
      ],
      btnText: "Consult Enterprise Architect"
    }
  ],

  // Skilled Expert Team
  team: [
    {
      name: "Alexander Vance",
      role: "Chief Solutions Architect",
      exp: "14+ Yrs Exp • AWS & Azure Fellow",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "David Chen",
      role: "VP of Cybersecurity & Threat",
      exp: "CISSP • Ex-Defense SecOps",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Elena Rostova",
      role: "Principal DevOps & SRE Lead",
      exp: "CKA Certified • Kubernetes Pioneer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Marcus Sterling",
      role: "Director of AI Systems",
      exp: "M.S. MIT • Enterprise LLMs",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Security Accordion
  securityAccordion: [
    {
      q: "How does Novaplex enforce Zero-Trust Architecture across multi-cloud nodes?",
      a: "We implement mutual TLS (mTLS) 2048-bit encryption on all service-to-service communications, enforce least-privilege role-based access control (RBAC) via HashiCorp Vault and Okta, and eliminate static administrative credentials with ephemeral token auth."
    },
    {
      q: "What is your critical incident response time and escalation procedure?",
      a: "For Sev-1 production incidents, our dedicated CSIRT team responds within 15 minutes guaranteed by contract. Our automated SIEM systems trigger self-healing pods and isolated quarantines within seconds of anomalous telemetry detection."
    },
    {
      q: "How do you ensure audit readiness for SOC 2 Type II and HIPAA compliance?",
      a: "Every server configuration, database query log, and code commit is cryptographically immutabilized with continuous evidence collection. We provide real-time compliance dashboards so your executive auditors can review compliance posture on demand."
    },
    {
      q: "Can Novaplex support hybrid setups with legacy on-premise data centers?",
      a: "Yes. Over 60% of our enterprise clients operate hybrid architectures. We bridge legacy physical racks to modern cloud environments using encrypted DirectConnect tunnels, edge proxies, and centralized Prometheus/Grafana observability."
    }
  ],

  // Client Testimonials
  testimonials: [
    {
      quote: "Novaplex migrated our entire transaction processing engine to AWS with zero seconds of downtime. Their cybersecurity team caught vulnerabilities our previous vendor missed for two years.",
      author: "Liam Henderson",
      role: "Chief Technology Officer",
      company: "Finova Banking Group",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80",
      isHighlighted: false
    },
    {
      quote: "The automated CI/CD pipeline built by Novaplex took our engineering team from releasing once a month to shipping 15+ stable production releases every single day. Our velocity surged by 340%.",
      author: "Sophia Martinez",
      role: "VP of Engineering",
      company: "HealthPulse AI",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      isHighlighted: true // Highlighted center card
    },
    {
      quote: "Their 24/7 Managed SRE team feels like an in-house elite SWAT unit. Potential infrastructure bottlenecks are caught and neutralized before our customers ever notice them.",
      author: "James Robinson",
      role: "Head of Infrastructure",
      company: "Global FreightLog",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      isHighlighted: false
    }
  ],

  // Featured News & Insights
  news: [
    {
      title: "The 2026 Shift: Why Multi-Cloud Mesh Beats Monolithic Infrastructure",
      category: "Cloud Strategy",
      date: "September 04, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
      author: "Alexander Vance"
    },
    {
      title: "Defending Against Zero-Day Vulnerabilities with Autonomous SIEM Telemetry",
      category: "Cyber Defense",
      date: "August 29, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      author: "David Chen"
    },
    {
      title: "Scaling Kubernetes from 10 to 1,000 Microservices Without Release Friction",
      category: "DevOps & SRE",
      date: "August 18, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      author: "Elena Rostova"
    }
  ]
};
