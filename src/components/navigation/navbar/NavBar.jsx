import { useState } from "react";

function NavBar({ activeSection, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Inicio", href: "#home", id: "home" },
    { name: "Sobre mí", href: "#sobre_mi", id: "sobre_mi" },
    { name: "Proyectos", href: "#proyectos", id: "proyectos" },
    { name: "Contacto", href: "#contacto", id: "contacto" },
  ];

  const handleNavigation = (section) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 px-6 py-4 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavigation("home")}
          className="text-xl font-bold tracking-tight text-white transition hover:text-red-500"
        >
        </a>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => handleNavigation(item.id)}
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

        {/* Desktop button */}
        <a
          href="#contacto"
          onClick={() => handleNavigation("contacto")}
          className="hidden rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500 md:block"
        >
            Contacto
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-gray-300 transition hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            // X
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // ☰
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-2 px-2 py-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => handleNavigation(item.id)}
                    className={`
                      block rounded-lg px-4 py-3 text-sm font-medium transition
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

            {/* Mobile Hablemos */}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={() => handleNavigation("contacto")}
                className="block rounded-lg bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-500"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;