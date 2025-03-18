import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  cucumber,
  reactjs,
  tailwind,
  git,
  nextjs,
  figma,
  advantec,
  intuit,
  interswitch,
  carrent,
  smoothsounds,
  shareme,
  jest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Product Manager",
    icon: backend,
  },
  {
    title: "Automated Testing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Jest",
    icon: jest,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "cucumber",
    icon: cucumber,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Software Developer / Systems Technical support Analyst",
    company_name: "Advantec Marine Services Limited",
    icon: advantec,
    iconBg: "#383E56",
    date: "Nov 2018 – Oct 2020",
    points: [
      "Product Development: Designed and launched a video surveillance application, meeting all project goals within established timelines.",
      "Quality Assurance: Led User Acceptance Testing (UAT) to identify and resolve defects, enhancing system stability and user satisfaction.",
      "Stakeholder Engagement: Gathered and implemented user feedback to refine product requirements, resulting in a 35% reduction in system downtime.",
    ],
  },
  {
    title: "Product Manager",
    company_name: "Interswitch Limited",
    icon: interswitch,
    iconBg: "#E6DEDD",
    date: "Oct 2020 – Jul 2022",
`   points: [
      "Strategic Roadmap & Execution: Developed and executed a product vision and roadmap aligned with market trends and company OKRs.",
      "Customer Impact & Revenue Growth: Led a migration for 50,000 merchants and 2M+ customers, reducing churn by 23% and driving an annual revenue increase of $1.2M.",
      "Workflow Innovation: Digitized POS request workflows, reducing approval times from 15 days to instant and improving merchant satisfaction by 46%.",
      "Market Analysis: Conducted comprehensive market and competitive research to identify and prioritize high-impact product features.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Intuit",
    icon: intuit,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Cross-Functional Collaboration: Partnered with product teams to translate user feedback into innovative product enhancements for digital workforce tools.",
      "Process Optimization: Developed the Intuit Promotion Tool, streamlining HR workflows for 18,000+ employees and reducing processing time by 30%.",
      "User Experience Design: Led a UI redesign for Intuit Academy that boosted adoption by 30% among tax professionals and bookkeepers.",
      "Data-Driven Solutions: Engineered data visualization tools that empowered 2,000+ managers to make informed, strategic decisions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    url: "https://rentacar-pearl.vercel.app/",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/TheCount511/rentacar",
  },
  {
    name: "Smooth Sounds",
    url: "https://ecommerce-theta-bay.vercel.app/",
    description:
      "E-commerce application for a store selling earphones and speakers. Payment processing setup with stripe",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: smoothsounds,
    source_code_link: "https://github.com/TheCount511/ecommerce",
  },
  {
    name: "Share Me",
    url: "https://sharemebyfadhil.netlify.app/",
    description:
      "An application similar to pinterest, that allows users to share pictures",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/TheCount511/shareme",
  },
];

export { services, technologies, experiences, testimonials, projects };
