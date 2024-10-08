import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import SunstonePickleball from "../assets/projects/SunstonePickleball.png";

export const HERO_CONTENT = `I am a passionate front end developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have started to develop my skills in front-end JavaScript technologies like React and Next.js, as well as CSS frameworks including Tailwind, and SASS. I strive to create websites that are not only functional but also have a great design to match. `;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for user-friendly web applications. With 1 year of professional experience, I have worked with a variety of technologies, including React, Next.js, Tailwind, React-Router-DOM, and Framer Motion. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy playing the piano, exploring new technologies, and contributing to open-source projects.`;

export const ABOUT_TEXT1 = `I am currently a Sophomore at Florida Gulf Coast University where I am earning my B.S. in Software Engineering. My most relevant coursework is Calculus II, Statistical Methods, Programming I, and General Physics 1. I am currently taking Calculus III, Discrete Mathematics, Programming II, as well as Digital Systems and Architecture. I am currently expanding my skills by building projects, practicing LeetCode, and learning as much as I can on my own.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Research Assistant",
    company: " FGCU",
    description: `Took over an Unreal Engine simulation project that models a Water Energy Food system. Using C++, and the built in blueprint method in Unreal, I have tested and fixed bugs, as well as add new features to improve the user experience of the simulation.`,
    skills: ["Unreal Engine", "C++", "Virtual Reality"],
  },
  {
    year: "2024 - Present",
    role: "Student Math Tutor",
    company: " FGCU",
    description: `Helped students in math topics ranging from Algebra to Calculus II. Worked with students on a variety of topics by helping with Homework, Classwork, and anything else they needed help with.`,
    skills: ["Problem Solving", "Comunication", "Math"],
  },
  {
    year: "2023-2024",
    role: "Back of House Worker",
    company: " Chick-fil-A",
    description: `Worked in the Back of House for Chick-fil-A which included making the food, communicating with kitchen staff and front of house staff. `,
    skills: ["Service", "Teamwork", "Communication"],
  },
];

export const PROJECTS = [
  {
    title: "Sunstone Pickleball Website",
    image: SunstonePickleball,
    description: "A website for the Sunstone Pickleball Website that includes a gallery carousel, player profile cards, events calendar, as well as a contact section.",
    skills: ["React", "Tailwind", "React-Router", "Framer Motion"],
    demo: "https://www.sunstonepickleball.com",
    github: "https://github.com/JacksonBryantFGCU/SunstonePickleballClub",
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information. Uses Framer Motion for all of the section animations. ",
    skills: ["React", "Tailwind", "Framer Motion"],
    demo: "https://jacksonbryantportfolio.netlify.app/",
    github: "https://github.com/JacksonBryantFGCU/portfolio",
  },
  {
    title: "Upgrades by Taylor Website",
    image: project1,
    description:
      "A fully functional web application that has an image gallery, Contact Form, as well as a testimonial carousel.",
    skills: ["HTML", "CSS", "JS", "FormSpree"],
    demo: "https://linkedin.com",
    github: "https://github.com/JacksonBryantFGCU/UpgradesbyTaylor",

  },
];

export const CONTACT = {
  address: "Wellen Park Venice, Fl 34293 ",
  phoneNo: "+1 443 994 5589 ",
  email: "jackbryant5589@gmail.com",
};
