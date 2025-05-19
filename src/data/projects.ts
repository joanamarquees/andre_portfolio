import disney_clone from '@/assets/outline_svgs/disney+clone.svg'
import kahootbot from '@/assets/outline_svgs/kahootbot.svg';
import drift_ml from '@/assets/outline_svgs/drift-ml.svg'
import airline from '@/assets/outline_svgs/airline.svg'
import ticketline from '@/assets/outline_svgs/ticket-line.svg'
import timelapse from '@/assets/outline_svgs/timelapse.svg'
import nami from '@/assets/outline_svgs/nami.svg'
import smart from '@/assets/outline_svgs/smart-city.svg'
import feelings from '@/assets/outline_svgs/feeling-analyser.svg'
import furutsu from '@/assets/outline_svgs/furutsu.svg'
import shop from '@/assets/outline_svgs/smart-shopping.svg'
import synced_city from '@/assets/outline_svgs/synced-city.svg'
import kaboom_clash from '@/assets/outline_svgs/boomberman.svg'

// COMPANY LOGOS
import alma from '@/assets/alma.svg'
import athinketh from '@/assets/athinketh.svg'

import video_preview from '@/assets/preview.mp4'

import * as SiIcons from 'react-icons/si';

// LABELS FOR THE STACK ICONS
export const stackLabels: { [key in keyof typeof SiIcons]?: string } = {
  SiReact: "React",
  SiTypescript: "TypeScript",
  SiTailwindcss: "Tailwind CSS",
  SiNextdotjs: "Next.js",
  SiPython: "Python",
  SiPrisma: "Prisma",
  SiJavascript: "JavaScript",
  SiCss3: "CSS",
  SiMongodb: "MongoDB",
  SiArduino: "Arduino",
  SiC: "C",
  SiOpencv: "Computer Vision",
  SiTensorflow: "Tensor Flow",
  SiSelenium: "Selenium",
  SiShopify: "Shopify",
  SiRemix: "Remix",
  SiCloudflare: "Cloudflare",
  SiOllama: "AI",
};
// INDIVIDUAL PROJECTS - interface and data
export interface ProjectType {
  image: any,
  name: String,
  description: String,
  gitLink: String,
  date: String,
  stack: (keyof typeof SiIcons)[]; // Only valid keys from SiIcons
}

export const projects: ProjectType[] = [
  {
    image: kaboom_clash,
    name: "Kaboom Clash",
    description: "Bomberman type gamebut for multiplayer - weekend project",
    gitLink: "https://github.com/arrzdev/kaboom-clash",
    date: "march 2025",
    stack: ["SiReact", "SiTypescript"],
  },
  {
    image: synced_city,
    name: "Synced city",
    description: "Dynamic web application designed to enhance urban experiences",
    gitLink: "https://github.com/arrzdev/multisynq-hackathon",
    date: "november 2024",
    stack: ["SiReact", "SiTypescript", "SiTailwindcss"],
  },
  {
    image: shop,
    name: "Smart shooping",
    description: "Compare grocery prices across supermarkets and save more on every shop",
    gitLink: "https://github.com/arrzdev/ninf-winter-hackathon24",
    date: "february 2024",
    stack: ["SiNextdotjs", "SiTailwindcss", "SiPython", "SiPrisma"],
  },
  {
    image: furutsu,
    name: "Furutsu",
    description: "Suika look alike game with different game modes",
    gitLink: "https://github.com/arrzdev/furutsu",
    date: "february 2024",
    stack: ["SiJavascript", "SiCss3"],
  },
  {
    image: feelings,
    name: "Sentiment analyser",
    description: "Understand how people feel with a single line of text and AI",
    gitLink: "https://github.com/arrzdev/mzn-interview",
    date: "january 2024",
    stack: ["SiNextdotjs", "SiTailwindcss", "SiPython"],
  },
  {
    image: nami,
    name: "NAMI",
    description: "Aquatic navigation for mapping and inspection",
    gitLink: "https://github.com/arrzdev/Neecathon-23",
    date: "december 2023",
    stack: ["SiPython", "SiArduino", "SiC"],
  },
  {
    image: timelapse,
    name: "Aging Timelapse",
    description: "Align portrait pictures of someone to create a timelapse video of their age progression",
    gitLink: "https://github.com/arrzdev/Age-Progression-Timelapse-Software",
    date: "november 2023",
    stack: ["SiPython", "SiOpencv"],
  },
  {
    image: ticketline,
    name: "Ticketline",
    description: "Ticket system for my old school’s student committee to manage party ticket sales",
    gitLink: "https://github.com/arrzdev/ticket-line-comissao",
    date: "september 2023",
    stack: ["SiMongodb", "SiNextdotjs", "SiTailwindcss"],
  },
  {
    image: smart,
    name: "Smart City",
    description: "Smart parking system to ease traffic in Costa da Caparica using city cameras",
    gitLink: "https://github.com/arrzdev/ninf-hackathon",
    date: "may 2023",
    stack: ["SiMongodb", "SiNextdotjs", "SiTailwindcss", "SiPython"],
  },
  {
    image: airline,
    name: "Airline website",
    description: "Airline website made in 5-6 hours during a hackathon. Placed 2nd out of ~12 teams, solo",
    gitLink: "https://github.com/arrzdev/code-marathon",
    date: "march 2023",
    stack: ["SiNextdotjs", "SiTailwindcss", "SiPython"],
  },
  {
    image: drift_ml,
    name: "Tensor Drift",
    description: "ML project for CarX that uses computer vision to navigate and drift through a race track",
    gitLink: "https://github.com/arrzdev/tensor-drift",
    date: "february 2023",
    stack: ["SiPython", "SiTensorflow", "SiOpencv"],
  },
  {
    image: disney_clone,
    name: 'Disney+ - clone',
    description: "One of my first Next.js projects — a Disney+ clone",
    gitLink: "https://github.com/arrzdev/disneyplus-clone",
    date: "july 2022",
    stack: ["SiNextdotjs", "SiTailwindcss"],
  },
  {
    image: kahootbot,
    name: 'KahootBot',
    description: "Gives you the answer to any question from your teacher kahoot",
    gitLink: "https://github.com/arrzdev/KahootBot",
    date: "april 2021",
    stack: ["SiPython", "SiOpencv", "SiSelenium"],
  },
]

// FEATURED PROJECTS - interface and data
export interface FeaturedProjectType {
  id: String,
  index: number,
  preview: any,
  name: String,
  description: String,
  role: String,
  date: String,
  stack: (keyof typeof SiIcons)[]; // Only valid keys from SiIcons
  client: String,
  clientLink: String,
  clientLogo: any,
}

export const freelancingProjects: FeaturedProjectType[] = [
  { 
    id: "shop-together",
    index: 0,
    preview: video_preview,
    name: "Shop Together",
    description: "At Shop Together, I served as the lead Full-Stack Developer, building a custom Shopify-integrated browser extension from the ground up. The project required a deep understanding of the Shopify API ecosystem, including storefront access, checkout flows, and product data integration. I engineered the entire architecture, incorporating modern frameworks while learning and utilizing Cloudflare tools—such as Workers and Durable Objects—to handle edge processing and ensure a responsive, scalable experience. This project is a strong example of my ability to independently deliver complex, API-driven applications and rapidly adapt to unfamiliar technologies.",
    role: "Full-stack Developer",
    date: "February 2025 - May 2025",
    stack: ["SiReact", "SiShopify", "SiRemix", "SiCloudflare"], // add multisynq icon, or arrows diverging
    client: "ALMA",
    clientLink: "https://alma.dev/",
    clientLogo: alma,
  },
  { 
    id: "smartreg",
    index: 1,
    preview: video_preview,
    name: "SMARTREG",
    description: "For SMARTREG, I am the responsible for the development of an AI-powered system that automates Regulatory Solutions for banks. Each step of the regulatory process—from input validation to capital computation—is handled by modular AI components, each mapped to the specific section of the regulation it enforces. The system can explain its reasoning, adapt to changes in regulation versions, and suggest updates to the code based on new rules. This project highlights my ability to deliver intelligent, regulation-aware solutions in highly structured domains.",
    role: "Product full-stack Developer",
    date: "February 2025 - now",
    stack: ["SiPython", "SiOllama"],
    client: "ATHINKETH",
    clientLink: "",
    clientLogo: athinketh,
  },
  { 
    id: "twitch extension",
    index: 2,
    preview: video_preview,
    name: "Comment Picker",
    role: "Full-stack Developer",
    description: "I created this project on my own to......... preciso de um text maior de exemplo bla ojdidendkj noiononndknkdnkdnkdnkdnkdnkdnkdnkdnkdnkdn   kdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkd nkdndkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdn opjnknkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkd nkdndkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkdnkd nkdndkdnkd nkdnd",
    date: "May 2025",
    stack: ["SiReact"],
    client: "TUDU",
    clientLink: "",
    clientLogo: "",
  },
]
