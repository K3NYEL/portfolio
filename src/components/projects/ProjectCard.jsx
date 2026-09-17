function ProjectCard({ project }) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-xl
        border border-white/10
        bg-gray-800/80
        shadow-lg shadow-black/20
        transition-all duration-300 ease-out
        hover:-translate-y-2
        hover:border-red-500/30
        hover:shadow-xl hover:shadow-red-500/10
      "
    >
      {/* Imagen */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-48 w-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3
          className="
            mb-2 text-xl font-semibold
            transition-colors duration-300
            group-hover:text-red-500
          "
        >
          {project.title}
        </h3>

        <p className="mb-4 text-gray-400">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <span
                key={tech.name}
                className="
                  flex items-center gap-2
                  rounded-full
                  bg-gray-700/70
                  px-3 py-1.5
                  text-sm font-medium text-gray-300
                  transition-all duration-300
                  group-hover:bg-gray-700
                "
              >
                <Icon
                  size={16}
                  className="text-red-500"
                />

                {tech.name}
              </span>
            );
          })}
        </div>

        {/* GitHub */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center
            rounded-lg
            bg-red-600
            px-4 py-2
            text-sm font-semibold text-white
            shadow-lg shadow-red-600/20
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-red-500
            hover:shadow-red-500/30
          "
        >
          Ver en GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;