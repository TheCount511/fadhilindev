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
    title: "Solutions Engineer",
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
      "Developed application interfaces for a Cloud based video surveillance System with the use of HTML, SCSS, JavaScript and jQuery ",
      "Integrated different smart camera APIs onto the surveillance system’s application to fetch surveillance streams from the cameras and populate the user interface with them",
      "Carried out unit testing and developed use cases for testing, maintained and optimised the code base, Identified application errors, and fixed bugs",
      "Developed technical documentation, system requirement specification and translated business requirement into technical requirements",
      "Managed the organisation’s websites and made modifications when required",
      "Led the organizations technical support team and managed 2 support staff members",
    ],
  },
  {
    title: "Technical product owner / Software Engineer",
    company_name: "Interswitch Limited",
    icon: interswitch,
    iconBg: "#E6DEDD",
    date: "Oct 2020 – Jun 2022",
    points: [
      "Worked with an agile software engineering team in designing and building user interfaces, and front-end components for web portals with the use of ReactJs, HTML, CSS, JavaScript and REST APIs",
      "Led an Initiative to optimise the UI of an internal application utilised for bulk preparation of Verve payment cards, resulting in a 10% increase in productivity. This was achieved by gathering data on frequently used features and also implementing a filtering feature to aid searching.",
      "Worked in collaboration with developers from various banks and organisations to integrate Interswitch's virtual credit card and Paycode service into their systems. Paycode enables cardless payments and withdrawals at ATMs.",
      "Maintained the paycode service for the sandbox environment, and deployed new and updated application packages via Kubernetes and Jenkins",
      "Organised and executed user acceptance tests with clients and provided direct support to B2B customers throughout the project lifecycle, from inception to post-implementation.",
      "Developed technical documentations for applications and services managed by the Application Implementation Team (FAQs, Known Errors, Support manuals, API integration documentation etc.)",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Intuit",
    icon: intuit,
    iconBg: "#383E56",
    date: "Aug 2022 - Present",
    points: [
      "Cross collaborating with teams across North America in maintaining and developing new features for the Intuit Academy platform using ReactJs, SCSS, and Javascript, and Integrating various services to the platform via Graphql APIs",
      "Led the Integration of automated testing onto the CI/CD build pipeline for Intuit Academy and Implemented tests with Cypress and Cucumber.",
      "Overhauled and streamlined Splunk dashboards, increasing data querying speeds, allowing for faster KPI error detections, pattern recognitions, and report generation.",
      "working in an agile environment with daily scrum meetings to keep track of user stories / bugs in projects, and participating in sprint planning and retrospectives.",
      "Prioritised workload and tasks by utilising tools such as Jira",
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
