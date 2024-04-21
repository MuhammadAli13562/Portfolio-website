import store from "@/public/project/store.png";
import chat from "@/public/project/chat.png";
import social from "@/public/project/social.png";

import {
  node,
  react,
  tailwind,
  nextjs,
  appwrite,
  sanity,
  firebase,
  matui,
  framer,
} from "@/public/stack";
import { StaticImageData } from "next/image";

const frontendstack = ["ReactJS - ", "NextJS - ", "Tailwind CSS - ", "Shadcn UI - "];
const backendstack = ["NodeJS - ", "Firebase - ", "Sanity IO - ", "Appwrite - ", "Payload - "];

const skills = [
  "Frontend Development",
  "Backend Integrations",
  "System Design",
  "Full Stack Development",
];

const sections = ["intro", "techstack", "projects", "contact"];

const frontendlogos = [react, nextjs, matui, framer, tailwind];
const backendlogos = [appwrite, node, firebase, sanity as StaticImageData];

export { frontendstack, frontendlogos, backendlogos, backendstack, skills, sections };

const navlinks = ["INTRO", "TECH", "WORK", "CONTACT"];
export { navlinks };

const FAQcontent = [
  {
    question: "Whats the best way to reach you ?",
    answer: "Through email : m.ali8.aj8@gmail.com",
  },
  {
    question: "What technologies do you use mostly ?",
    answer: "NextJS , TailwindCSS , ExpressJS , Web Sockets",
  },

  {
    question: "Would you be interested in full-time roles ?",
    answer: "Yes , Reach out to me on my Email.",
  },
];

export { FAQcontent };

/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

import { fiverr1, upwork, gmail, github } from "@/public/stack";

const workLinks = [
  {
    platform: "Gmail",
    icon: gmail,
    link: "mailto:m.ali8.aj8@gmail.com",
  },
  {
    platform: "Github",
    icon: github,
    link: "https://github.com/MuhammadAli13562",
  },
];

export { workLinks };

/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

export interface ProjectType {
  name: string;
  website: string;
  code: string;
  description: string;
  image: StaticImageData;
  tech: string;
}

export const ProjectsLink = [
  {
    name: "Ecommerce Store",
    website: "https://ali-store-ecom.vercel.app/",
    code: "https://github.com/MuhammadAli13562/ali-Ecommerce-Store/",
    description: "",
    image: store,
    tech: "Next.js , React Context , Framer motion",
  },
  {
    name: "Social Media App",
    website: "https://insta-style-gram.vercel.app/",
    code: "https://github.com/MuhammadAli13562/InstaStyleGram",
    description: "",
    image: social,
    tech: "Next.js , React Context , Framer motion",
  },
  {
    name: "Real Time Chat App",
    website: "https://chat-app-muhammad-alis-projects-f3f603a7.vercel.app/",
    code: "https://github.com/MuhammadAli13562/Full-stack-Chat-App",
    description: "",
    image: chat,
    tech: "Next.js , React Context , Framer motion",
  },
];
