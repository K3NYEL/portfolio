function NavBar({ activeSection, onNavigate }) {
  const navItems = [
    {
      name: "Inicio",
      href: "#home",
      id: "home",
    },
    {
      name: "Sobre mí",
      href: "#sobre_mi",
      id: "sobre_mi",
    },
    {
      name: "Proyectos",
      href: "#proyectos",
      id: "proyectos",
    },
    {
      name: "Contacto",
      href: "#contacto",
      id: "contacto",
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => onNavigate("home")}
          className="text-xl font-bold tracking-tight text-white transition hover:text-red-500"
        >
        </a>

        {/* Navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => onNavigate(item.id)}
                  className={`
                    rounded-lg px-4 py-2 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:bg-white/10 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Hablemos */}
        <a
          href="#contacto"
          onClick={() => onNavigate("contacto")}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
        >
          Contacto
        </a>

      </div>
    </nav>
  );
}

export default NavBar;