import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function PresentationCard({ title, description, image, technologies, frameworks }) {
  return (
    <article
      className="
        group
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5

      "
    >
      <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center">
        {/* Imagen */}
        <div
          className="
            flex
            h-40
            w-full
            shrink-0
            items-center
            justify-center
            overflow-hidden
            rounded-xl
            border
            border-white/10
            bg-gray-900/50
            sm:w-56
          "
        >
          <img
            src={image}
            alt={title}
            className="
              h-full
              w-full
              object-contain
              p-2
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        </div>

        {/* Contenido */}
        <div className="flex min-w-0 flex-1 flex-col">
          <h3 className="mb-2 text-2xl uppercase font-semibold text-white">
            {title}
          </h3>

          <p className="mb-4 max-w-2xl text-sm leading-6 text-gray-400">
            {description}
          </p>
          <h2 className="text-lg text-red-500 font-semibold uppercase">
            Skills
          </h2>

          {/* Tecnologías */}
          <div className="mb-5 flex flex-wrap gap-2">
            {technologies.map((tech) => {
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
                    bg-gray-900/60
                    px-2.5
                    py-1.5
                    text-xs
                    font-medium
                    text-gray-300
                  "
                >
                  <Icon className="h-4 w-4 text-red-500" />
                  {tech.name}
                </span>
              );
            })}
          </div>

          {/* FrameWork */}
          <h2 className="text-lg text-red-500 font-semibold uppercase">
            FrameWorks
          </h2>

          <div className="mb-5 flex flex-wrap gap-2">
            {frameworks.map((fw) => {
              const Icon = fw.icon;

              return (
                <span
                  key={fw.name}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-md
                    border
                    border-white/5
                    bg-gray-900/60
                    px-2.5
                    py-1.5
                    text-xs
                    font-medium
                    text-gray-300
                  "
                >
                  <Icon className="h-4 w-4 text-red-500" />
                  {fw.name}
                </span>
              );
            })}
          </div>
          {/* Redes sociales */}
          <div className="flex gap-3">
            <a
              href="https://github.com/K3NYEL/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/TU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
            >
              <FaLinkedin size={20} />
            </a>

            <a
              href="https://stackoverflow.com/users/TU_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-red-500/30 hover:bg-red-500/10 hover:text-red-500"
            >
              <FaStackOverflow size={20} />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PresentationCard;
