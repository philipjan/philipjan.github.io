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
    "Senior Android Engineer with 9 years of experience specializing in native mobile architectures, high-scale payment pipelines, and inclusive, accessible (a11y) UI design. I have a proven track record of accelerating development velocity and optimizing technical workflows—from automating UI component generation via custom Model Context Protocol (MCP) servers, to building robust GitHub Copilot agents that streamline code review compliance.",
  skills: ["Kotlin", "Java", "Kotlin Multiplatform", "Compose Multiplatform", "Jetpack Compose", "Ktor", "Spring Boot", "Automation Scripting (Linux, Mac)", "Sonarqube", "Jenkins", "Docker", "Firebase Services", "Github Copilot (Agents/Skills/CLI/MCP)", "Local LLM Integration", "LaunchDarkly", "Gradle"],
  projects: [
    {
      name: "Preauth Autopay Pipeline",
      description:
        "Secure payment integration and identification verification built with AI-native pipelines and engineered for complete screen-reader and keyboard accessibility.",
      link: "https://play.google.com/store/apps/details?id=ca.bell.selfserve.mybellmobile&hl=en ",
      skills: ["Copilot AI Tooling (Agents, Skills, MCP)", "Kotlin", "Jetpack Components", "Coroutines", "Analytics Integration", "Deeplinks", "Third Party Integration", "Android Accessibility (a11y / TalkBack)"],

    },
    {
      name: "FIFA World Cup 2026 Platform",
      description:
        "High-scale tournament stats & offer platform built with inclusive UI design, TalkBack voiceover support, and dynamic navigation.",
      link: "https://play.google.com/store/apps/details?id=ca.bell.selfserve.mybellmobile&hl=en",
      skills: ["Jetpack Components", "Kotlin", "Copilot AI Tooling (Agents, Skills, MCP)", "Coroutines","Analytics Integration", "Bash Scripting", "Charles Proxy","Android Accessibility (a11y / TalkBack)", "Deeplink"],
    },
    {
      name: "Tawk.to Live Chat SaaS",
      description:
        "Subscription-driven Live Chat SaaS platform, enabling real-time direct communication with integrated audio and video calling capabilities.",
      link: "https://play.google.com/store/apps/details?id=to.tawk.android&hl=en",
      skills: ["MQTT", "Websocket","Kotlin", "Firebase (Crashlytics, Analytics)", "Jetpack Components"],

    },
    {
      name: "Baxta App",
      description:
          "Pet social networking and directory platform with location discovery, media sharing, and automated MS App Center CI/CD deployment pipelines.",
      link: "https://www.baxtapro.com/",
      skills: ["Koin", "Firebase Services", "Kotlin", "Jetpack Components, MS App Center"],

    },
    {
      name: "Baash E-Sports Platform",
      description:
          "Mobile tournament management platform supporting team rosters, brackets, dynamic notifications, and OCR-based automated score tracking.",
      link: "https://web.facebook.com/baashesports/",
      skills: ["Retrofit", "Kotlin", "Dagger2", "Firebase Services"],

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
