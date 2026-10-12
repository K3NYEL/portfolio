import { SiDart, SiFlutter, SiPython, SiSqlite } from "react-icons/si";
import { FaAndroid, FaBox, FaFilePdf, FaDesktop } from "react-icons/fa";
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
    images: [KlpSystemImage],

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
    title: "MyFinc",

    description:
      "Aplicación de finanzas personales para administrar cuentas, movimientos y respaldos desde el dispositivo.",

    expandedDescription:
      "MyFinc es una aplicación de finanzas personales desarrollada con Flutter, pensada para organizar el dinero y mantener los datos bajo el control del usuario.\n\n" +
      "Permite administrar cuentas y balances, registrar ingresos, gastos y transferencias, y consultar estadísticas y categorías. También incluye copias de seguridad locales que se pueden crear y restaurar.\n\n" +
      "La aplicación utiliza SQLite como almacenamiento principal y ofrece opciones de tema claro, oscuro o según el sistema. El código fuente está disponible en GitHub.",

    image: null,
    images: [],

    technologies: [
      {
        name: "Flutter",
        icon: SiFlutter,
      },
      {
        name: "Dart",
        icon: SiDart,
      },
      {
        name: "SQLite",
        icon: SiSqlite,
      },
      {
        name: "Android",
        icon: FaAndroid,
      },
    ],

    github: "https://github.com/K3NYEL/myfinc",
  },
];

export default projects;
