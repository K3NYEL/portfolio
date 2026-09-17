import { useState } from "react";

import NavBar from "./components/navigation/navbar/NavBar";
import ProjectCard from "./components/projects/ProjectCard";
import projects from "./data/projects";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const handleNavigation = (section) => {
    setActiveSection(section);
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
          className="scroll-mt-24 animate-fade-up flex py-30 items-center justify-center px-6"
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
        <section id="sobre_mi" className="animate-fade-up mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-red-500">
              Sobre mí
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Conociéndome un poco
            </h2>
          </div>

          <p className="max-w-3xl leading-8 text-gray-400">
            Mi nombre es Kenyel Alexander Restituyo Montero, tengo 18 años y soy
            un apasionado desarrollador de software. Me encanta crear
            aplicaciones y proyectos que resuelvan problemas y mejoren la vida
            de las personas. Siempre estoy buscando aprender nuevas tecnologías
            y mejorar mis habilidades para seguir creciendo en este emocionante
            campo.
          </p>
        </section>

        {/* Projects */}
        <section id="proyectos" className="animate-fade-up scroll-mt-24 mx-auto max-w-6xl px-6 py-24">
          <div className="mb-10">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-red-500">
              Proyectos
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Algunos de mis proyectos
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-up"
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
        <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl uppercase tracking-widest text-red-500">
              Contacto
            </h2>

            <p className="mx-auto mb-8 max-w-xl text-gray-400">
              Si quieres conocer más sobre mis proyectos o ponerte en contacto
              conmigo, puedes hacerlo aquí.
            </p>

            <a
              href="mailto:tuemail@example.com"
              className="inline-flex rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Enviar mensaje
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-gray-500"></footer>
    </div>
  );
}

export default App;
