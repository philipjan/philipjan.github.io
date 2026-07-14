export const siteConfig = {
  name: "Philip Jan Baruis",
  title: "Senior Android Engineer",
  description: "Portfolio website of Ryan Fitzgerald",
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
      name: "AI Dev Roundup Newsletter",
      description:
        "One concise email. Five minutes. Every Tuesday. Essential AI news & trends, production-ready libraries, powerful AI tools, and real-world code examples",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      images: ["/sample1.jpeg", "/sample1.jpeg"],
    },
    {
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      images: ["/sample1.jpeg"],
    },
    {
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      link: "https://extensionkit.io/?ref=devportfolio",
      skills: ["React", "Node.js", "AWS"],
      images: ["/sample1.jpeg", "/sample1.jpeg", "/sample1.jpeg"],
    },
  ],
  experience: [
    {
      company: "Quantrics Enterprises Inc.",
      title: "Senior Android Developer",
      dateRange: "July 2023 - Present",
      bullets: [
        "Designed a secure Autopay flow and deep-link payment pipeline deployed to thousands of active users across North America.",
        "Integrated third-party automated ID verification service for credit/debit transactions, deprecating manual form flows to optimize checkout velocity.",
        "Managed end-to-end Google Play Store release activities with Release Train Engineers and App Architects; authored Post-Mortem RCAs for complex regression defects.",
        "Developed custom GitHub Copilot Agents and Skills to automate redundant developer workflows, including automated code review compliance and a code-to-markdown summary engine for Jira/GitLab pull requests.",
        "Acted as interim technical lead to coordinate, mentor, and delegate tasks to junior and mid-level developers during crucial agile sprint ceremonies.",
        "Engineered an internal Model Context Protocol (MCP) server pipeline to bridge FIgma design tokens to Android Studio, automating Jetpack Compose UI component generation."
      ],
    },
    {
      company: "Baxta",
      title: "Android Developer",
      dateRange: "Jun 2022 - May 2023",
      bullets: [
        "Overhauled the core application splash screen and configured startup dependencies to optimize application launch times and initial performance boundaries.",
        "Orchestrated MS App Center CI/CD for faster test build submission to testers, and play store",
        "Developed the core Discover Module geolocation placement tracking and interactive detail views.",
      ],
    },
    {
      company: "Tawk.to",
      title: "Android Developer",
      dateRange: "April 2020 - May 2022",
      bullets: [
        "Successfully migrated core real-time communication framework from legacy MQTT protocol to highly concurrent WebSockets.",
        "Engineered a comprehensive navigation UI overhaul and spearheaded development of the core Administration Section module.",
        "Eliminated unexpected runtime logical failures by introducing robust testing coverage and deep scenario bug debugging.",
      ],
    },
    {
      company: "CAPSL",
      title: "Android Developer",
      dateRange: "December 2019 - February 2020",
      bullets: [
        "Implemented a high-performance Round Robin Tournament matchmaking algorithm handling sequence tracking and leaderboard standings features."
      ],
    },
    {
      company: "Bywave Web and Mobile Apps",
      title: "Android Developer",
      dateRange: "June 2017 - December 2019",
      bullets: [
        "Unit-testing code for robustness, including edge cases, usability, and general reliability before releasing to production.",
        "Enhanced application reverse-engineering protection by implementing code obfuscation to safeguard sensitive code assets.",
        "Partnered with cross-functional product teams to design, iterate, and ship features within scalable production pipelines.",
      ],
    },
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
