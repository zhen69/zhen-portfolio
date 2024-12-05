export const navigation = [
  { title: "Skills", href: "skills" },
  { title: "Experience", href: "experience" },
  { title: "Projects", href: "projects" },
  {
    title: "Resume",
    href: "https://drive.google.com/file/d/1gU3luIsSJe1v09cRk_jet9at5vp7moar/view?usp=sharing",
  },
];

export const introduction = {
  name: "Zhen Wei Liao",
  title: [
    "I'm a Software Engineer",
    1500,
    "I'm a Web Developer",
    1500,
    "I'm a Full Stack Developer",
    1500,
    "I'm a Programmer",
    1500,
  ],
  education: "B.S. in Computer Science | Stony Brook University | Class of 2025",
  email: "zhenwei.liao99@gmail.com",
  links: {
    github: "https://github.com/zhen69",
    linkedin: "https://www.linkedin.com/in/zhenwei-liao-148baa273/",
    resume:
      "https://drive.google.com/file/d/1gU3luIsSJe1v09cRk_jet9at5vp7moar/view?usp=sharing",
  },
  description:
    "Hi there! I'm currently a senior at Stony Brook University, pursuing a B.S. in Computer Science with Honors. My passion for Software Engineering has grown from a high school interest into a deep commitment. I see coding as a complex puzzle, where designing algorithms and integrating components to achieve precise results is both challenging and rewarding. I aspire to pursue a career that nurtures my interests while enabling me to develop impactful solutions.",
};

import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import git from "../assets/tech/git.png";
import java from "../assets/tech/java.png";
import python from "../assets/tech/python.png";
import nextjs from "../assets/tech/nextjs.png";

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
];

import sbu from "../assets/companies/sbu.png";
import frgx from "../assets/companies/frgx.png";
import cme from "../assets/companies/cme.png";

export const experiences = [
  {
    title: "Web Developer",
    company_name: "Department of Computer Science at Stony Brook University",
    icon: sbu,
    iconBg: "#383E56",
    date: "March 2023 - Present",
    points: [
      "Developed websites independently and collaboratively, adhering to faculty requirements and university standards.",
      "Administered Linux servers, resolving system errors and maintaining an up-to-date MySQL database.",
      "Automated server tasks through shell scripting, increasing operational efficiency.",
      "Led the migration of all Drupal 7 sites to Drupal 10, ensuring seamless transitions and improved site performance.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "FragranceX",
    icon: frgx,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Developed an Azure Function App and GUI that leveraged the GPT API to automate HTML source code corrections for product descriptions, resulting in a 4+ hour monthly time savings for developers.",
      "Contributed to a C# CLI tool that facilitated the migration of over 100 Azure Function Apps from .NET 6 to .NET 8 Isolated.",
      "Implemented a process using the Google Sheets API to automate updates to the product description sheet, improving data accuracy and workflow efficiency.",
      "Utilized Selenium to develop and execute unit test cases, ensuring robust UI functionality and reliability.",
    ],
  },
  {
    title: "Teaching Assistant for Object-Oriented Programming",
    company_name: "Stony Brook University",
    icon: sbu,
    iconBg: "#383E56",
    date: "Aug 2023 - Dec 2023",
    points: [
      "Held weekly lab section for 30+ students and reviewed Object-Oriented Programming concepts by completing 25+ JAVA projects.",
      "Assisted students in developing effective/efficient algorithms to resolve programming problems.",
      "Answered students’ emails and 200+ posts on Piazza with detailed responses.",
    ],
  },
  {
    title: "Data Entry Clerk / Technical Aide",
    company_name: "CME Insurance Brokerage Inc.",
    icon: cme,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug 2023",
    points: [
      "Collaborated with fellow interns to manage and input four years of client data into the company database within 6 weeks, reducing data errors by 80%.",
      "Enhanced productivity in a fast-paced environment by delivering exceptional IT support and promptly troubleshooting technical issues.",
    ],
  },
];

import frgx_ai from "../assets/projects/frgx-ai-project.png";
import frgx_migrator from "../assets/projects/dotnet_migration_project.png";
import orcanet from "../assets/projects/orcanet-project.png";
import word_count from "../assets/projects/word-count-project.png";
import kalm from "../assets/projects/kalm-project.png";

export const projects = [
  {
    title: "KALM",
    time: "Aug 2024 - Present",
    img: kalm,
    description: [
      "Developed a React-based user-friendly GUI to simplify interactions with KALM, improving system usability and accessibility for non-technical users by reducing the need for complex CLI commands.",
      "Utilized Flask for backend development, handling key functionalities such as submitting marked training data, parsing sentences to extract semantic relations, and answering questions based on authored knowledge.",
    ],
  },
  {
    title: "AI Content Fix Function App",
    time: "Jun 2024 - Aug 2024",
    img: frgx_ai,
    description: [
      "Implemented an Azure Function App (Service Bus Trigger and Http Trigger) that utilizes the GPT API to auto-fix the product description HTML source code on the production website.",
      "Developed a user-friendly GUI using vanilla JS that enables the user to approve the fixtures made by GPT.",
      "Implemented a separate process in an existing console application to update the product description sheet via the Google Sheets API, enhancing data accuracy and workflow efficiency.",
    ],
  },
  {
    title: ".NET 6 To 8 Migrator",
    time: "Jun 2024 - Aug 2024",
    img: frgx_migrator,
    description: [
      "Contributed to a C# CLI tool that migrates Azure Function App from .NET 6 to .NET 8 Isolated.",
      "Created processes that updates the csproj configuration file, replaces the directives in each file with the corresponding .NET 8 directives, and interacts with the Microsoft Upgrade Assistant CLI tool via the command line.",
      "Identified and resolved bugs during the validation phase to ensure software quality.",
      "Developed unit tests to cover edge cases, enhancing code robustness and reliability.",
    ],
  },
  {
    title: "Word Check",
    time: "Aug 2024 - Sept 2024",
    img: word_count,
    description: [
      "Created a simple web interface that allows users to input a sentence and check the number of letters/words in the sentence.",
      "Developed a simple algorithm that checks for potential spelling errors.",
    ],
  },
  {
    title: "OrcaNet",
    time: "Jan 2024 - May 2024",
    img: orcanet,
    description: [
      "Collaborated on a semester-long project to develop a blockchain-based file system that allows users to use cryptocurrency to save and access data on a distributed network.",
      "Led a front-end team to develop a professional statistics page displaying network status and a wallet page for tracking transaction history and enabling cryptocurrency transfers based on wallet ID.",
      "Designed server-side services to ensure optimal user experience.",
    ],
  },
];

export const technicalCommunicationProjects = [
  {
    title: "User Manual",
    description:
      "Documented the process to push a existing project to a Github Repository.",
    btnText: "View Manual",
    url: "https://drive.google.com/file/d/19Ox-gpUvD_gVUyJ2NzKm-VhpN9K_3cFD/view?usp=sharing",
  },
  {
    title: "Media Release: New AI Innovation Institute",
    description:
      "Wrote a media release about the new AI innovation Institute at Stony Brook University",
    btnText: "View Release",
    url: "https://drive.google.com/file/d/1rk6DN_G6MIuP99IInkXsCLPf7mJeoHKG/view?usp=sharing",
  },
  {
    title: "Literature Review: AI in Education",
    description:
      "Discussed the possibility of AI in education based on two literatures.",
    btnText: "View Review",
    url: "https://drive.google.com/file/d/1bgXOhfrHSKVg46LR1KyOnMxbvU8GIYEx/view?usp=sharing",
  },
  {
    title: "Collaborative Problem Solving",
    url: "https://drive.google.com/file/d/1VIt-faRV2HDWghtD_0dpFzXZACmnZkPH/view?usp=sharing",
    description:
      "Collaborated with a diverse team and proposed a solution to the problem surrounding event visibility",
    btnText: "View Presentation",
  },
];
