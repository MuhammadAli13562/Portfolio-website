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
