import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "sneakerhub",
    number: "01",
    title: "SneakerHub",
    description:
      "A modern sneaker shopping interface where users can explore products, manage their cart, and track the total price through a responsive interface.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    features: [
      "Browse sneaker products",
      "Add and remove products from cart",
      "Dynamic cart total calculation",
      "Toast notifications",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "blog-application",
    number: "02",
    title: "Blog Application",
    description:
      "A blogging platform that allows users to create, manage, edit, and delete blog posts through a simple and user-friendly interface.",
    technologies: ["Python", "Django", "SQLite", "Bootstrap"],
    features: [
      "User registration and login",
      "Create blog posts",
      "Edit and delete posts",
      "Manage blog content",
    ],
    githubUrl: "",
    liveUrl: "",
  },
  {
    slug: "personal-portfolio",
    number: "03",
    title: "Personal Portfolio",
    description:
      "A personal website designed to showcase my developer profile, technical skills, projects, and contact information.",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Responsive layout",
      "Personal introduction",
      "Skills and projects showcase",
      "Contact section",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];