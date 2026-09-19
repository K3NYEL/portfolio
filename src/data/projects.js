import { SiPython, SiSqlite } from "react-icons/si";
import { FaBox, FaFilePdf, FaDesktop } from "react-icons/fa";
import KlpSystemImage from "../assets/2.png";

const projects = [
  {
    title: "KLP SYSTEM",

    description:
      "Sistema de gestión y facturación de escritorio desarrollado en Python.",

    expandedDescription:
      "Sistema de gestión y facturación de escritorio desarrollado en Python.\n\n" +
      "Klp System es una aplicación de escritorio orientada a la gestión de operaciones de facturación, con almacenamiento local y una interfaz gráfica desarrollada con CustomTkinter.\n\n" +
      "El proyecto está actualmente en desarrollo y cuenta con herramientas para ejecución desde código fuente, pruebas automatizadas y generación de ejecutables mediante PyInstaller.",

    image: KlpSystemImage,
    images: [
      "src/assets/klp_system.png",
      "src/assets/klp_system_2.png",
      "src/assets/klp_system_3.png",
    ],

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
      },
    ],

    github: "https://github.com/K3NYEL/klp_system",
  },
  {
    title: "KLP SYSTEM WEB",

    description:
      "Aplicación web para la gestión y automatización de dispositivos.",

    images: ["/klp_system_web.png"],

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
      },
    ],

    github: "https://github.com/K3NYEL/klp_system_web",
  },
];

export default projects;
