function ProjectCard({ project }) {
  return (
    <div className="rounded-lg bg-gray-800 p-6 shadow-lg shadow-gray-900/20 transition hover:scale-105">
      
      <img
        src={project.image}
        alt={project.title}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />

      <h3 className="mb-2 text-xl font-semibold">
        {project.title}
      </h3>

      <p className="mb-4 text-gray-400">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => {
          const Icon = tech.icon;

          return (
            <span
              key={tech.name}
              className="flex items-center gap-2 rounded-full bg-gray-700 px-3 py-1 text-sm font-semibold text-gray-300"
            >
              <Icon className="text-red-500" size={16} />

              {tech.name}
            </span>
          );
        })}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
      >
        Ver en GitHub
      </a>
    </div>
  );
}

export default ProjectCard;