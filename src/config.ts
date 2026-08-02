export const siteConfig = {
  name: "Philip Jan Baruis",
  title: "Senior Android Engineer",
  description: "Portfolio website of Philip Jan Baruis",
  accentColor: "#818CF8",
  social: {
    email: "philipjanbaruis@gmail.com",
    linkedin: "https://www.linkedin.com/in/philipjanb/",
    twitter: "https://x.com/",
    github: "https://github.com/philipjan",
  },
  aboutMe:
    "Senior Android Engineer with 9 years of experience specializing in native mobile architectures, high-scale payment integrations, and code modernization from Java to Kotlin. Proven track record of accelerating development velocity by building custom agentic AI tools and protocol-level pipelines.",
  skills: ["Kotlin", "Java", "Kotlin Multiplatform", "Compose Multiplatform", "Jetpack Compose", "Ktor", "Spring Boot", "Automation Scripting (Linux)", "Sonarqube", "Jenkins", "Docker", "Firebase Services", "Model Context Protocol (MCP)", "Github Copilot (Agents/Skills/CLI)", "Local LLM", "LaunchDarkly", "Gradle"],
  projects: [
    {
      name: "Easy Order (Customer)",
      description:
        "Used by restaurants (Japan), customers inside the establishment directly placing orders on the app and being acknowledged and processed. Users are able to see the order status until the serving of foods.",
      link: "https://easy-order.jp/",
      skills: ["Retrofit", "Kotlin", "Coroutines", "REST Api", "Google Play Console"],

    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],

    },
    {
      name: "ExtensionKit",
      description:
        "",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],

    },
  ],
  experience: [
    {
      company: "Quantrics Enterprises Inc.",
      title: "Senior Android Developer",
      dateRange: "July 2023 - July 2026",
      bullets: [
        "AI-Native Tooling: Automated redundant development workflows by building custom MCP server integrations, featuring a Figma-to-Android Studio pipeline for UI generation and a GitLab bridge for GitHub Copilot.",
        "High-Scale Payments: Designed a secure Autopay flow and deep-link payment pipeline deployed to thousands of North American users, deprecating manual form flows via automated ID verification to optimize checkout velocity.",
      ],
    },
    {
      company: "Baxta",
      title: "Android Developer",
      dateRange: "Jun 2022 - May 2023",
      bullets: [
        "Performance & UI/UX: Overhauled the core application splash screen and startup dependencies to strictly optimize launch times, while developing the interactive detail views for the core Discover Module.",
      ],
    },
    {
      company: "Tawk.to",
      title: "Android Developer",
      dateRange: "April 2020 - May 2022",
      bullets: [
        "Protocol Migration & Navigation: Successfully migrated the core real-time communication framework from legacy MQTT to highly concurrent WebSockets, and engineered a comprehensive navigation UI overhaul.",
      ],
    },
    {
      company: "Earlier Tech Roles (CAPSL, Bywave, Sutherland, LogimineAsia, PJ Lhuillier)",
      title: "Android Developer | Technical, Software Support",
      dateRange: "2015 - 2020",
      bullets: [],
    }
  ],
  education: [
    {
      school: "University of Southern Mindanao",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2011 - 2015",
      achievements: [],
    }
  ],
};
