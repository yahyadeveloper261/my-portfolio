import { useState ,useEffect} from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  setMenuOpen(false);
}, [location.pathname]);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    {name:"Resume",path:"/resume"},
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-2xl transition-all duration-500 ${
        dark
          ? "bg-gray-950/90 border-white/10 text-white"
          : "bg-white/80 border-gray-200/70 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO */}
          <NavLink
            to="/"
            className="group flex items-center text-2xl font-black tracking-tight opacity-0 animate-[entranceLeft_0.5s_ease-out_0.1s_forwards] hover:scale-105 transition duration-300"
          >
            <span className="text-blue-600 group-hover:text-cyan-500 transition-colors">
              Yahya
            </span>
            <span className="ml-1">Dev</span>
            <span className="text-blue-600 animate-pulse">.</span>
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-9">
            {links.map((link, index) => (
              <NavLink
                key={link.name}
                to={link.path}
                style={{
                  animationDelay: `${0.15 + index * 0.08}s`,
                }}
                className={({ isActive }) => `
                  group relative py-2 text-sm font-semibold
                  opacity-0 animate-[entranceLeft_0.5s_ease-out_forwards]
                  transition-all duration-300 hover:-translate-y-1
                  ${
                    isActive
                      ? "text-blue-600"
                      : dark
                        ? "text-gray-300 hover:text-cyan-400"
                        : "text-gray-600 hover:text-blue-600"
                  }
                `}
              >
                <span className="inline-block transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  {link.name}
                </span>

                <span className="absolute left-0 -bottom-1 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* DARK MODE */}
            <button
              onClick={() => setDark(!dark)}
              className={`opacity-0 animate-[entranceRight_0.5s_ease-out_0.45s_forwards] w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:rotate-180 hover:scale-110 ${
                dark
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {dark ? "☀️" : "🌙"}
            </button>

            {/* HIRE ME */}
            <NavLink
              to="/contact"
              className="hidden sm:flex relative overflow-hidden items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold shadow-lg shadow-blue-500/20 opacity-0 animate-[entranceRight_0.5s_ease-out_0.55s_forwards] transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-blue-500/40 active:scale-95 group"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span className="relative">Hire Me</span>
              <span className="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </NavLink>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden w-11 h-11 rounded-xl transition-all duration-300 hover:scale-105 ${
                dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
              }`}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`md:hidden grid transition-all duration-300 ease-in-out ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100 pb-5"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div
              className={`p-4 rounded-2xl flex flex-col gap-2 ${
                dark ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              {links.map((link, index) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: `${index * 40}ms` }}
                  className={({ isActive }) => `
                    flex justify-between items-center p-3 rounded-xl
                    font-semibold transition-all duration-300 hover:translate-x-2
                    ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : dark
                          ? "text-gray-300 hover:bg-gray-800"
                          : "text-gray-700 hover:bg-blue-100"
                    }
                  `}
                >
                  {link.name}
                  <span>↗</span>
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center p-3 rounded-xl font-bold mt-2"
              >
                Hire Me ↗
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
