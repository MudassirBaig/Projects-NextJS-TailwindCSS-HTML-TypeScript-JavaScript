import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated in Electronic",
    location: "Karachi, Sindh",
    description:
      "I graduated after 4 years of studying. I immediately found a job as a R&D Enginner.",
    icon: React.createElement(LuGraduationCap),
    date: "2010",
  },
  {
    title: "R&D Engineer",
    location: "Karachi, Sindh",
    description:
      "I worked as a R&D Engineer for 4 years in 1 job and 4 years in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2011 - 2015",
  },
  {
    title: "Full-Stack Developer",
    location: "GIAIC, Karachi, Sindh",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio-Website",
    description:
      "I worked as a full-stack developer on this startup project for 2 weeks. Users can see the portfolio of the person. I created different componenets and use them.",
    tags: ["React", "Next.js", "Tailwind", "Typescript", "Framer Motion"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Movie-Search",
    description:
      "Movie Search application allows users to: Search by movie title, Display movie details (title, poster, synopsis), Use a movie API (OMDB)",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Shadcn UI", "OMDB API"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "C#",
  "Mysql",
  "Tauri",
  "Rust",
  "Github",
  "Bitbucket",
  "Scrum Methodology",
  "Asana",
  "Trello",
  "Slack",
  "Discord",
  "Linux",
  "MS Project",
  "AWS DB",
  "Project Management"
  
] as const;
