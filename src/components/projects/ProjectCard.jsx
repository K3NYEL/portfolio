import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const openCard = () => {
    setIsExpanded(true);
    document.body.style.overflow = "hidden";
  };

  const closeCard = () => {
    setIsExpanded(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeCard();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      {/* Tarjeta normal */}
      <article
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-gray-900
          shadow-lg
          shadow-black/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-red-500/30
          hover:shadow-xl
          hover:shadow-red-500/5
        "
      >
        {/* Imagen */}
        <div className="relative h-44 shrink-0 overflow-hidden bg-gray-800">
          <img
            src={project.image}
            alt={project.title}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-gray-900/70
              via-transparent
              to-transparent
            "
          />
        </div>

        {/* Contenido */}
        <div className="flex flex-1 flex-col p-5">
          <h3
            className="
              mb-3
              text-xl
              font-semibold
              text-white
              transition-colors
              duration-300
              group-hover:text-red-500
            "
          >
            {project.title}
          </h3>

          <p className="mb-5 text-sm leading-6 text-gray-400">
            {project.description}
          </p>

          {/* Ver más */}
          <div className="mt-auto">
            <button
              type="button"
              onClick={openCard}
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-red-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-lg
                shadow-red-600/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-red-500
                active:scale-95
              "
            >
              Ver más
              <span>→</span>
            </button>
          </div>
        </div>
      </article>

      {/* Tarjeta expandida */}
      {isExpanded &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className="
                fixed
                inset-0
                z-[9998]
                bg-black/70
                backdrop-blur-sm
              "
              onClick={closeCard}
            />

            {/* Modal */}
            <div
              className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                overflow-y-auto
                p-6
              "
            >
              <article
                className="
                  relative
                  w-full
                  max-w-2xl
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-gray-900
                  shadow-2xl
                  shadow-black/60
                "
              >
                {/* Imagen */}
                <div className="relative h-52 overflow-hidden bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-gray-900/70
                      via-transparent
                      to-transparent
                    "
                  />

                  {/* Cerrar */}
                  <button
                    type="button"
                    onClick={closeCard}
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-black/60
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-200
                      hover:bg-red-600
                      active:scale-90
                    "
                    aria-label="Cerrar proyecto"
                  >
                    ✕
                  </button>
                </div>

                {/* Contenido expandido */}
                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-6 text-gray-400">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-300">
                      Tecnologías
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => {
                        const Icon = tech.icon;

                        return (
                          <span
                            key={tech.name}
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-md
                              border
                              border-white/5
                              bg-gray-800
                              px-2.5
                              py-1.5
                              text-xs
                              font-medium
                              text-gray-300
                            "
                          >
                            <Icon
                              size={14}
                              className="text-red-500"
                            />

                            {tech.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-red-600
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-red-600/20
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-red-500
                    "
                  >
                    Ver en GitHub
                    <span>→</span>
                  </a>
                </div>
              </article>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}

export default ProjectCard;