import {
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiSqlite,
  SiGnubash,
} from "react-icons/si";
import klpSystemImage from "../assets/klp_system.png";

const AboutMe = [
  {
    title: "Kenyel Alexander Restituyo Montero",

    description:
      "Mi nombre es Kenyel Alexander Restituyo Montero, tengo 18 años y soy un apasionado desarrollador de software. Me encanta crear aplicaciones y proyectos que resuelvan problemas y mejoren la vida,de las personas. Siempre estoy buscando aprender nuevas tecnologías,y mejorar mis habilidades para seguir creciendo en este emocionante,campo.",

    image: klpSystemImage,

    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
      },
      {
        name: "HTML5",
        icon: SiHtml5,
      },
      {
        name: "CSS",
        icon: SiCss,
      },
      {
        name: "SQLite",
        icon: SiSqlite,
      },
      {
        name: "Bash",
        icon: SiGnubash,
      },
    ],

    // Frameworks
    frameworks: [
      {
        name: "React",
        icon: SiReact,
      },
    ],
  },
];

export default AboutMe;
