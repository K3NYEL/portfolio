import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChangingImage, setIsChangingImage] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const changeImage = (index) => {
    if (index === currentImage) return;

    setIsChangingImage(true);

    setTimeout(() => {
      setCurrentImage(index);
      setIsChangingImage(false);
    }, 150);
  };

  const openCard = () => {
    setCurrentImage(0);
    setIsChangingImage(false);
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

            {/* Contenedor del modal */}
            <div
              className="
                fixed
                inset-0
                z-[9999]
                flex
                items-center
                justify-center
                overflow-y-auto
                p-4
                sm:p-6
              "
            >
              {/* Card expandido */}
              <article
                className="
                  relative
                  w-full
                  max-w-5xl
                  max-h-[90vh]
                  overflow-y-auto
                  rounded-2xl
                  border
                  border-white/10
                  bg-gray-900
                  shadow-2xl
                  shadow-black/60
                "
              >
                {/* Galería */}
                <div className="overflow-hidden bg-gray-950">
                  {/* Imagen */}
                  <button
                    type="button"
                    onClick={closeCard}
                    className="
    absolute
    right-4
    top-4
    z-20
    flex
    h-9
    w-9
    items-center
    justify-center
    rounded-full
    bg-black/50
    text-lg
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
                  <div
                    className="
                      relative
                      h-60
                      w-full
                      overflow-hidden
                      sm:h-67.5
                    "
                  >
                    <img
                      key={project.images[currentImage]}
                      src={project.images[currentImage]}
                      alt={`${project.title} - imagen ${currentImage + 1}`}
                      onClick={() => setIsImageViewerOpen(true)}
                      className={`
                        h-full
                        w-full
                        object-contain
                        p-3
                        cursor-zoom-in
                        transition-all
                        duration-200
                        ease-out
                        ${
                          isChangingImage
                            ? "scale-[0.98] opacity-0"
                            : "scale-100 opacity-100"
                        }
                      `}
                    />

                    {/* Anterior */}
                    {project.images.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          changeImage(
                            (currentImage - 1 + project.images.length) %
                              project.images.length,
                          )
                        }
                        className="
                          absolute
                          left-3
                          top-1/2
                          flex
                          h-9
                          w-9
                          -translate-y-1/2
                          items-center
                          justify-center
                          rounded-full
                          bg-black/60
                          text-xl
                          text-white
                          backdrop-blur-md
                          transition-all
                          duration-200
                          hover:bg-red-600
                          active:scale-90
                        "
                        aria-label="Imagen anterior"
                      >
                        ‹
                      </button>
                    )}

                    {/* Siguiente */}
                    {project.images.length > 1 && (
                      <button
                        type="button"
                        onClick={() =>
                          changeImage(
                            (currentImage + 1) % project.images.length,
                          )
                        }
                        className="
                          absolute
                          right-3
                          top-1/2
                          flex
                          h-9
                          w-9
                          -translate-y-1/2
                          items-center
                          justify-center
                          rounded-full
                          bg-black/60
                          text-xl
                          text-white
                          backdrop-blur-md
                          transition-all
                          duration-200
                          hover:bg-red-600
                          active:scale-90
                        "
                        aria-label="Imagen siguiente"
                      >
                        ›
                      </button>
                    )}

                    {isImageViewerOpen && (
                      <div
                        className="
      fixed
      inset-0
      z-[10000]
      flex
      items-center
      justify-center
      bg-black/90
      p-4
      backdrop-blur-md
    "
                        onClick={() => setIsImageViewerOpen(false)}
                      >
                        <img
                          src={project.images[currentImage]}
                          alt={`${project.title} - imagen ampliada`}
                          className="
        max-h-[90vh]
        max-w-[95vw]
        object-contain
        cursor-zoom-out
        rounded-lg
        shadow-2xl
      "
                          onClick={(event) => event.stopPropagation()}
                        />

                        {/* Cerrar */}
                        <button
                          type="button"
                          onClick={() => setIsImageViewerOpen(false)}
                          className="
        absolute
        right-5
        top-5
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-black/60
        text-xl
        text-white
        backdrop-blur-md
        transition-all
        duration-200
        hover:bg-red-600
        active:scale-90
      "
                          aria-label="Cerrar imagen"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Miniaturas */}
                  {project.images.length > 1 && (
                    <div
                      className="
                        flex
                        justify-center
                        gap-2
                        overflow-x-auto
                        border-t
                        border-white/5
                        bg-gray-900
                        p-2
                      "
                    >
                      {project.images.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          onClick={() => changeImage(index)}
                          className={`
                            h-12
                            w-18
                            shrink-0
                            overflow-hidden
                            rounded-md
                            border
                            transition-all
                            duration-300
                            ${
                              currentImage === index
                                ? "scale-105 border-red-500 opacity-100"
                                : "border-white/10 opacity-50 hover:opacity-100"
                            }
                          `}
                        >
                          <img
                            src={image}
                            alt={`Miniatura ${index + 1}`}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-5 sm:p-6">
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-sm leading-6 text-gray-400">
                    {project.expandedDescription || project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-5">
                    <h4
                      className="
                        mb-2
                        text-sm
                        font-semibold
                        uppercase
                        tracking-wider
                        text-gray-300
                      "
                    >
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
                            <Icon size={14} className="text-red-500" />
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
