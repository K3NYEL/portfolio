import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState(null);

  const openCard = () => {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    setPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });

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

  const placeholderStyle =
    isExpanded && position
      ? {
          height: position.height,
          width: position.width,
        }
      : undefined;

  const expandedCard =
    isExpanded && position
      ? createPortal(
          <>
            {/* Overlay */}
            <div
              className="
                fixed
                inset-0
                z-9998
                bg-black/70
                backdrop-blur-sm
                transition-opacity
                duration-300
              "
              onClick={closeCard}
            />

            {/* Card expandida */}
            <article
              className="
                fixed
                z-9999
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-gray-900
                shadow-2xl
                shadow-black/60
                transition-all
                duration-700
                ease-[cubic-bezier(0.16,1,0.3,1)]
              "
              style={{
                top: position.top,
                left: position.left,
                width: position.width,
                height: position.height,

                transform: `
                  translate(
                    calc(50vw - ${position.left + position.width / 2}px),
                    calc(50vh - ${position.top + position.height / 2}px)
                  )
                  scale(
                    ${Math.min(
                      (window.innerWidth * 0.92) / position.width,
                      (window.innerHeight * 0.82) / position.height,
                      2.4
                    )}
                  )
                `,

                transformOrigin: "center center",
              }}
            >
              {/* Imagen */}
              <div className="relative h-52 shrink-0 overflow-hidden bg-gray-800">
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
                    z-10
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

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-3 text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="mb-6 flex flex-wrap gap-2">
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
                        <Icon size={14} className="text-red-500" />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>

                {/* GitHub */}
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
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
              </div>
            </article>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      {/* Espacio que mantiene el grid intacto */}
      {isExpanded && position ? (
        <div style={placeholderStyle} />
      ) : (
        <article
          ref={cardRef}
          onClick={openCard}
          className="
            group
            flex
            h-full
            cursor-pointer
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
          <div className="relative h-52 shrink-0 overflow-hidden bg-gray-800">
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
          <div className="flex flex-1 flex-col p-6">
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

            <p className="mb-5 min-h-[72px] text-sm leading-6 text-gray-400">
              {project.description}
            </p>

            {/* Tecnologías */}
            <div className="mb-6 flex flex-wrap gap-2">
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
                    <Icon size={14} className="text-red-500" />
                    {tech.name}
                  </span>
                );
              })}
            </div>

            {/* GitHub */}
            <div className="mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
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
                Ver en GitHub
                <span>→</span>
              </a>
            </div>
          </div>
        </article>
      )}

      {expandedCard}
    </>
  );
}

export default ProjectCard;