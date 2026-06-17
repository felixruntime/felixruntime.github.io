import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Project Alpha",
    description:
      "Placeholder project — a full-stack web application with modern architecture and clean API design.",
    stack: ["React", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/felixruntime",
    demoUrl: "https://example.com",
  },
  {
    title: "Project Beta",
    description:
      "Placeholder project — machine learning pipeline for data analysis and predictive modeling.",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/felixruntime",
  },
  {
    title: "Project Gamma",
    description:
      "Placeholder project — developer tooling and automation scripts for CI/CD workflows.",
    stack: ["TypeScript", "Docker", "GitHub Actions"],
    githubUrl: "https://github.com/felixruntime",
    demoUrl: "https://example.com",
  },
];
