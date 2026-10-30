// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import springsecurityLogo from "./assets/tech_logo/springsecurity.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import csharpLogo from "./assets/tech_logo/csharp.png";
import hibernateLogo from "./assets/tech_logo/hibernate.png";
import restapiLogo from "./assets/tech_logo/restapi.png";
import microservicesLogo from "./assets/tech_logo/microservices.png";
import jwtLogo from "./assets/tech_logo/jwt.png";
import sqlWorkBenchLogo from "./assets/tech_logo/sqlworkbench.png";
import jenkinsLogo from "./assets/tech_logo/jenkins.png";
import unityLogo from "./assets/tech_logo/unity.png";
import slotGameSystemsLogo from "./assets/tech_logo/slotgamesystems.png";
import mathModelImplementationLogo from "./assets/tech_logo/mathmodelimplementation.png";
import gamePrototypingLogo from "./assets/tech_logo/slotGamePrototyping.png";
import gameFlowLogo from "./assets/tech_logo/slotGameFlow.png";
import visualStudioLogo from "./assets/tech_logo/visualstudio.png";


// Experience Section Logo's
import arriseLogo from "./assets/company_logo/arrise.png";
import curiousJrLogo from "./assets/company_logo/curiousJr.png";
import highRadiusLogo from "./assets/company_logo/highRadius.png";

// Education Section Logo's
import kiitLogo from "./assets/education_logo/kiit.png";
import mtsLogo from "./assets/education_logo/mts.png";
import stJohnsLogo from "./assets/education_logo/stJohns.png";

// Project Section Logo's
import sweetCrazeLogo from "./assets/work_logo/sweetCraze.png";
import scmLogo from "./assets/work_logo/scm.png";
import imdbLogo from "./assets/work_logo/imdb.png";
import invoiceLogo from "./assets/work_logo/invoiceProject.png";

export const SkillsInfo = [
  {
    title: "Game Development",
    skills: [
      { name: "Unity", logo: unityLogo },
      { name: "Slot Game Systems", logo: slotGameSystemsLogo },
      { name: "Math-Model Implementation", logo: mathModelImplementationLogo },
      { name: "Game Prototyping", logo: gamePrototypingLogo },
      { name: "Game Flow", logo: gameFlowLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C#", logo: csharpLogo },
      { name: "C++", logo: cppLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "Java", logo: javaLogo },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React JS", logo: reactjsLogo },
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Spring Security", logo: springsecurityLogo },
      { name: "Hibernate", logo: hibernateLogo },
      { name: "Rest API", logo: restapiLogo },
      { name: "Microservices", logo: microservicesLogo },
      { name: "JWT", logo: jwtLogo },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "Unity", logo: unityLogo },
      { name: "Visual Studio", logo: visualStudioLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Jenkins", logo: jenkinsLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "SQL", logo: sqlWorkBenchLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: arriseLogo,
    role: "SDE-1",
    company: "Arrise Solutions Powering Pragmatic Play",
    date: "July 2023 - Present",
    desc: "Slot game developer on the Prototype Team, building new features and mechanics in C# and Unity. Translated complex slot math models into game logic with math and domain experts, earning recognition from senior leadership. Implemented and validated game flow in JavaScript, cutting bugs reported in testing by 15%, and improved measured game performance by 25%. Features I contributed to are projected to reach 52–67% of the user base, with an estimated 30% engagement lift.",
    skills: [
      "C#",
      "Unity",
      "JavaScript",
      "Slot Math Models",
      "Prototyping",
      "Jenkins",
    ],
  },

  {
    id: 1,
    img: curiousJrLogo,
    role: "Software Developer Intern",
    company: "CuriousJr",
    date: "April 2022 - January 2023",
    desc: "Developed and deployed 20+ interactive games, 3+ courses, and 12+ competition projects for the CuriousJr app. Mentored a junior intern, improving their coding proficiency by 50% and ensuring timely delivery. Contributed across the frontend stack using JavaScript, HTML, CSS, and jQuery to build engaging, educational experiences tailored for mobile users.",
    skills: ["JavaScript", "HTML", "CSS", "Jquery"],
  },

  {
    id: 2,
    img: highRadiusLogo,
    role: "Full stack Developer Intern",
    company: "High Radius",
    date: "January 2022 - April 2022",
    desc: "Built Java backend servlets interfacing with SQL for data extraction and manipulation, and integrated backend logic with Web APIs, including dynamic file handling and format conversion.",
    skills: ["HTML", "CSS", "Javascript", "Material UI", "Java", "SQL", "JDBC"],
  },
];

export const education = [
  {
    id: 0,
    img: kiitLogo,
    school: "KIIT University, Bhubaneswar",
    date: "July 2019 - June 2023",
    grade: "8.96 CGPA",
    desc: "I have completed my bachelor's degree in Computer Science and Engineering from KIIT University, Bhubaneswar. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at KIIT University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - BTech",
  },
  {
    id: 1,
    img: mtsLogo,
    school: "MTS Public School, Mirzapur",
    date: "July 2018 - June 2019",
    grade: "80.8 %",
    desc: "I completed my 12th grade from MTS Public School with a focus on Physics, Chemistry, and Mathematics, along with Computer Science as an elective. This combination strengthened my analytical thinking and introduced me to programming fundamentals, which laid the foundation for my interest in software development and problem-solving.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: stJohnsLogo,
    school: "St John's Co-Ed School, Prayagraj",
    date: "July 2016 - June 2017",
    grade: "79.6 %",
    desc: "I completed my 10th grade from St. John’s Co-Ed School, where I opted for Computer Applications as an elective subject over Commerce and Hindi. This early exposure to computers sparked my curiosity in technology and laid the groundwork for my continued interest in programming and software development.",
    degree: "ICSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Sweet Craze",
    description:
      "Published Pragmatic Play slot game. Implemented game mathematics and logic in C# from the provided math file, validated in-game behaviour against the math data, and integrated it with the visuals and gameplay flow.",
    image: sweetCrazeLogo,
    tags: [
      "C#",
      "Unity",
      "JavaScript",
      "Jenkins",
      "Game Math",
      "Prototyping",
    ],
    github: null,
    webapp: "https://www.pragmaticplay.com/en/games/sweet-craze/#",
  },
  {
    id: 1,
    title: "Smart Contact Manager",
    description:
      "Built a full-featured contact management system that allows users to securely manage and organize their contacts. Integrated Spring Security for authentication and access control, and used Spring Data JPA for efficient data handling. The application features a modern interface with user-friendly notifications powered by SweetAlert2, focusing on both functionality and a smooth user experience.",
    image: scmLogo,
    tags: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Thymeleaf",
      "HTML",
      "CSS",
      "JavaScript",
      "SweetAlert2",
      "Git",
      "Maven",
    ],
    github: "https://github.com/Havoac/Smart-Contact-Manager/tree/V2.0",
    webapp: null,
  },
  {
    id: 2,
    title: "Movie Scope",
    description:
      "A feature-rich movie browsing web app built with ReactJS in a sleeke dark theme. The app allows users to browse movies, view detailed information, and explore popular, top-rated, and upcoming films using the movieScope API. Designed with a modern UI and responsive layout for a smooth user experience across devices.",
    image: imdbLogo,
    tags: ["React JS", "HTML", "CSS", "JavaScript", "Fetch API", "REST APIs"],
    github: "https://github.com/Havoac/MovieScope",
    webapp: "https://movies-scope.netlify.app/",
  },
  {
    id: 3,
    title: "Invoice Management Project",
    description:
      "Built a full-stack Movie and Invoice Management application with dynamic dashboards. Implemented CRUD operations for movies using Spring Boot with filtered search and pagination support. Designed a B2B Fintech Receivables Dashboard using React.js and Material UI to visualize invoice data interactively.",
    image: invoiceLogo,
    tags: [
      "Java",
      "Spring Boot",
      "REST API",
      "MySQL",
      "React JS",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Pagination",
      "CRUD",
      "Git",
    ],
    github: "https://github.com/Havoac/Invoice-Management-Project",
    webapp: null,
  },
];
