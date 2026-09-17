import { SiPython, SiSqlite } from "react-icons/si";
import { FaBox, FaFilePdf, FaDesktop } from "react-icons/fa";

const projects = [
  {
    title: "KLP SYSTEM",

    description:
      "Aplicación de escritorio para la gestión y automatización de dispositivos.",

    image: "/klp_system.png",

    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "SQLite",
        icon: SiSqlite,
      },
      {
        name: "Pyinstaller",
        icon: FaBox,
      },
      {
        name: "Tkinter",
        icon: FaDesktop, 
      },
      {
        name: "ReportLab",
        icon: FaFilePdf, 
      }
    ],

    github: "https://github.com/K3NYEL/klp_system",
  },
  {
    title: "KLP SYSTEM WEB",

    description:
      "Aplicación web para la gestión y automatización de dispositivos.",

    image: "/klp_system_web.png",

    technologies: [
      {
        name: "Python",
        icon: SiPython,
      },
      {
        name: "SQLite",
        icon: SiSqlite,
      },
      {
        name: "Flask",
        icon: FaDesktop, 
      },
      {
        name: "Bootstrap",
        icon: FaFilePdf, 
      }
    ],

    github: "https://github.com/K3NYEL/klp_system_web",
  }
];

export default projects;