import kahootbot from '../assets/kahootbot.svg';
import disney_clone from '../assets/disney+clone.svg'
import drift_ml from '../assets/drift-ml.svg'
import airline from '../assets/airline.svg'
import ticketline from '../assets/ticket-line.svg'
import timelapse from '../assets/timelapse.svg'
import nami from '../assets/nami.svg'
import smart from '../assets/smart-city.svg'
import feelings from '../assets/feeling-analyser.svg'
import furutsu from '../assets/furutsu.svg'
import shop from '../assets/smart-shopping.svg'
import synced_city from '../assets/synced-city.svg'
import kaboom_clash from '../assets/boomberman.svg'

export interface ProjectType {
  image: any,
  name: String,
  description: String,
  gitLink: String,
  date: String,
}

export const projects: ProjectType[] = [
  {
    image: kaboom_clash,
    name: "Kaboom Clash",
    description: "Bomberman type gamebut for multiplayer - weekend project",
    gitLink: "https://github.com/arrzdev/kaboom-clash",
    date: "march 2025",
  },
  {
    image: synced_city,
    name: "Synced city",
    description: "Dynamic web application designed to enhance urban experiences",
    gitLink: "https://github.com/arrzdev/multisynq-hackathon",
    date: "november 2024",
  },
  {
    image: shop,
    name: "Smart shooping",
    description: "Compare grocery prices across supermarkets and save more on every shop",
    gitLink: "https://github.com/arrzdev/ninf-winter-hackathon24",
    date: "february 2024",
  },
  {
    image: furutsu,
    name: "Furutsu",
    description: "Suika look alike game with different game modes",
    gitLink: "https://github.com/arrzdev/furutsu",
    date: "february 2024",
  },
  {
    image: feelings,
    name: "Sentiment analyser",
    description: "Understand how people feel with a single line of text and AI",
    gitLink: "https://github.com/arrzdev/mzn-interview",
    date: "january 2024"
  },
  {
    image: nami,
    name: "NAMI",
    description: "Aquatic navigation for mapping and inspection",
    gitLink: "https://github.com/arrzdev/Neecathon-23",
    date: "december 2023"
  },
  {
    image: timelapse,
    name: "Aging Timelapse",
    description: "Align portrait pictures of someone to create a timelapse video of their age progression",
    gitLink: "https://github.com/arrzdev/Age-Progression-Timelapse-Software",
    date: "november 2023"
  },
  {
    image: ticketline,
    name: "Ticketline",
    description: "Ticket system for my old school’s student committee to manage party ticket sales",
    gitLink: "https://github.com/arrzdev/ticket-line-comissao",
    date: "september 2023"
  },
  {
    image: smart,
    name: "Smart City",
    description: "Smart parking system to ease traffic in Costa da Caparica using city cameras",
    gitLink: "https://github.com/arrzdev/ninf-hackathon",
    date: "may 2023"
  },
  {
    image: airline,
    name: "Airline website",
    description: "Airline website made in 5-6 hours during a hackathon. Placed 2nd out of ~12 teams, solo",
    gitLink: "https://github.com/arrzdev/code-marathon",
    date: "march 2023"
  },
  {
    image: drift_ml,
    name: "Tensor Drift",
    description: "ML project for CarX that uses computer vision to navigate and drift through a race track",
    gitLink: "https://github.com/arrzdev/tensor-drift",
    date: "february 2023"
  },
  {
    image: disney_clone,
    name: 'Disney+ - clone',
    description: "One of my first Next.js projects — a Disney+ clone",
    gitLink: "https://github.com/arrzdev/disneyplus-clone",
    date: "july 2022"
  },
  {
    image: kahootbot,
    name: 'KahootBot',
    description: "Gives you the answer to any question from your teacher kahoot",
    gitLink: "https://github.com/arrzdev/KahootBot",
    date: "april 2021",
  },
]