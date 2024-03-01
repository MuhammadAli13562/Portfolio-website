import OneFront from "@/public/project/Ecommerce-app/frontpage.png";
import twoFront from "@/public/project/social-media-app/explore.png";

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

const frontendstack = [
  "ReactJS - ",
  "NextJS - ",
  "Tailwind CSS - ",
  "Shadcn UI - ",
];
const backendstack = [
  "NodeJS - ",
  "Firebase - ",
  "Sanity IO - ",
  "Appwrite - ",
  "Payload - ",
];

const skills = [
  "Frontend Development",
  "Backend Integrations",
  "System Design",
  "Full Stack Development",
  "UI/UX Design",
];

const sections = ["intro", "techstack", "projects", "contact"];

const projects = [
  {
    image: OneFront,
    heading: "NextJS - SANITY - STRIPE ECOMMERCE APP",
    details: "",
  },
  {
    image: twoFront,
    heading: "REACT - PAYLOAD SOCIAL MEDIA APP",
    details: "",
  },
];

const frontendlogos = [react, nextjs, matui, framer, tailwind];
const backendlogos = [appwrite, node, firebase, sanity as StaticImageData];

export {
  frontendstack,
  frontendlogos,
  backendlogos,
  backendstack,
  skills,
  sections,
  projects,
};

const navlinks = ["INTRO", "TECH", "WORK", "CONTACT"];
export { navlinks };

const FAQcontent = [
  {
    question: "Whats the best way to reach you ?",
    answer: "Through email : m.ali8.aj8@gmail.com",
  },
  {
    question: "What technologies do you use mostly ?",
    answer: "NextJS with Sanity or Appwrite",
  },

  {
    question: "Would you be interested in full-time roles ?",
    answer: "Yes , Reach out to me on my Email.",
  },
];

export { FAQcontent };

/////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

import { fiverr1, fiverr2, upwork, gmail, github } from "@/public/stack";

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
  {
    platform: "Fiverr",
    icon: fiverr1,
    link: "https://www.fiverr.com/alijaved98",
  },
  {
    platform: "Upwork",
    icon: upwork,
    link: "https://www.upwork.com/freelancers/~0160e634e61d97aa04",
  },
];

export { workLinks };
