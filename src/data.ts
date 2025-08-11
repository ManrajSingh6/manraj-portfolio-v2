import type { ExperienceEntry } from "./components/experience-card";
import type { ExtracurricularEntry } from "./components/extracurricular-card";

export const EXPERIENCE_DATA: readonly ExperienceEntry[] = [
  {
    position: {
      title: "Software Developer",
      startDate: new Date("2025-09-02"),
      description:
        "Develop full-stack features in a React SPA to enable the intelligent monitoring and control of commercially deployed solar projects.",
    },
    company: {
      name: "Energy Toolbase",
      url: "https://www.energytoolbase.com/",
    },
    badges: [
      "Typescript",
      "React",
      "Node.js",
      "GraphQL",
      "AWS",
      "Distributed Systems",
    ],
  },
  {
    position: {
      title: "Software Developer Intern",
      startDate: new Date("2023-05-01"),
      endDate: new Date("2024-08-28"),
      description:
        "Developed full-stack features in a React SPA enabling the intelligent monitoring and control of commercially deployed solar projects. Led an intern team from requirements to release and contributed to the “Papercuts” initiative delivering high-value enhancements and reliability fixes.",
    },
    company: {
      name: "Energy Toolbase",
      url: "https://www.energytoolbase.com/",
    },
    badges: ["Typescript", "React", "Node.js", "GraphQL", "AWS"],
  },
  {
    position: {
      title: "Web Development Intern",
      startDate: new Date("2022-07-01"),
      endDate: new Date("2022-09-30"),
      description:
        "Built responsive full-stack web applications with modern JavaScript frameworks, HTML, and CSS; launched WooCommerce and Shopify sites for eight small businesses, enabling subscription-based services.",
    },
    company: {
      name: "Omnivir",
    },
    badges: ["Javascript", "HTML", "CSS"],
  },
];

export const EXTRACURRICULAR_DATA: readonly ExtracurricularEntry[] = [
  {
    position: {
      title: "Full-stack Developer",
      description:
        "Built a custom CNN to classify wildlife species, with preprocessing and data augmentation for robust performance. Architected a full-stack web app that lets users upload images and view classification results in real time, backed by a model-serving API and a responsive UI for clear feedback.",
    },
    event: {
      name: "Calgary Hacks Hackathon",
      date: new Date("2025-03-01"),
    },
    badges: [
      "Typescript",
      "Python",
      "Machine Learning",
      "Express",
      "React",
      "Supabase",
    ],
  },
  {
    position: {
      title: "Developer",
      description:
        "Collaborated in a two-person team to build a desktop GUI that teaches Java fundamentals using Java and Swing. Designed interactive lessons and quizzes with live code examples and instant feedback to engage young learners.",
    },
    event: {
      name: "Hack Your Learning Hackathon",
      date: new Date("2022-03-01"),
    },
    badges: ["Java", "Swing GUI"],
  },
];
