import { useState, useEffect } from "react";

import AboutMe from "./data/aboutMe";
import PresentationCard from "./components/base/Cards/PresentationCard";
import FormCard from "./components/base/Cards/FormCard";
import NavBar from "./components/navigation/navbar/NavBar";
import ProjectCard from "./components/projects/ProjectCard";
import projects from "./data/projects";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = [...document.querySelectorAll("section[id]")];

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;

      let closestSection = null;
      let closestDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        setActiveSection(closestSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (section) => {
    const element = document.getElementById(section);

    if (!element) return;

    setActiveSection(section);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <NavBar activeSection={activeSection} onNavigate={handleNavigation} />

      {/* Main content */}
      <main>
        {/* Home */}
        <section
          id="home"
          className="scroll-mt-24 flex min-h-screen items-center justify-center px-6 py-24"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Kenyel Alexander Restituyo Montero
            </h1>

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-red-500">
              Desarrollador de software
            </p>

            <p className="max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              Desarrollo aplicaciones y proyectos de software mientras exploro
              nuevas tecnologías y sigo mejorando mis habilidades.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#sobre_mi"
                onClick={() => handleNavigation("sobre_mi")}
                className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                Leer mas
              </a>
              <a
                href="#proyectos"
                onClick={() => handleNavigation("proyectos")}
                className="rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
              >
                Ver proyectos
              </a>

              <a
                href="#contacto"
                onClick={() => handleNavigation("contacto")}
                className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
              >
                Contactarme
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="sobre_mi"
          className="min-h-[calc(100vh-6rem)] scroll-mt-24 mx-auto max-w-6xl px-6 py-16"
        >
          <div className="mb-8">
            <h2 className="mb-2 text-3xl font-bold uppercase tracking-widest text-red-500 sm:text-4xl">
              Sobre mí
            </h2>
          </div>

          <PresentationCard
            title={AboutMe[0].title}
            description={AboutMe[0].description}
            image={AboutMe[0].image}
            technologies={AboutMe[0].technologies}
            frameworks={AboutMe[0].frameworks}
          />
          
        </section>

        {/* Projects */}
        <section
          id="proyectos"
          className="scroll-mt-24 mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col justify-center px-6 py-16"
        >
          <div className="mb-10">
            <h2 className="mb-2 text-3xl font-bold uppercase tracking-widest text-red-500 sm:text-4xl">
              Proyectos
            </h2>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-up h-full"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contacto"
          className="scroll-mt-24 mx-auto max-w-6xl px-6 py-16"
        >
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:p-8">
            <FormCard />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500"></footer>
    </div>
  );
}

export default App;
