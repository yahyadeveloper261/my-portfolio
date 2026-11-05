import { NavLink } from "react-router-dom";
import profile from "../assets/images/image.png";
export default function Hero({ dark }) {
  const socialClass = `flex items-center gap-2 px-4 py-3 rounded-xl border backdrop-blur-md font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
    dark
      ? "bg-gray-900/80 border-gray-700 text-gray-300 hover:text-white hover:border-blue-400"
      : "bg-white/80 border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-400"
  }`;

  const cardClass = `absolute z-20 flex items-center gap-3 rounded-2xl border px-3 py-3 sm:px-4 sm:py-3 shadow-xl backdrop-blur-xl transition-colors duration-500 ${
    dark
      ? "bg-gray-900/90 border-gray-700 text-white shadow-blue-950/40"
      : "bg-white/95 border-gray-100 text-gray-800 shadow-gray-300/50"
  }`;

  return (
    <section
      className={`relative min-h-screen flex items-center overflow-hidden pt-8 pb-8 transition-colors duration-500 ${
        dark ? "bg-[#030712] text-white" : "bg-slate-50 text-gray-900"
      }`}
    >
      {/* Background glowing effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-500/10 blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[110px] animate-pulse" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Availability */}
            <div className="hero-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-xs sm:text-sm font-semibold mb-7">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              Available for Freelance Work
            </div>

            {/* Main Heading */}
            <h1
              className={`hero-title text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black leading-tight ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm
              <span className="hero-name block mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Yahya Developer
              </span>
            </h1>

            {/* Subtitle */}
            <h2
              className={`hero-reveal hero-delay-2 mt-6 text-xl sm:text-2xl font-bold ${
                dark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              MERN Stack Developer
            </h2>

            {/* Description */}
            <p
              className={`hero-reveal hero-delay-3 mt-5 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-8 ${
                dark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I build modern, responsive and high-performance web applications
              using React, Node.js, Express and MongoDB. I turn ideas into
              beautiful digital experiences.
            </p>

            {/* Buttons */}
            <div className="hero-btn group flex items-center gap-3 mt-3  px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white font-bold shadow-lg shadow-blue-500/25 hover:-translate-y-2 active:scale-95">
              <NavLink
                to="/projects"
                className="group flex items-center gap-3 px-6 sm:px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/40 active:scale-95"
              >
                View My Work
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </NavLink>

              <NavLink
                to="/contact"
                className="contact-btn group flex items-center gap-3 px-6 sm:px-7 py-4 rounded-xl font-bold transition-all duration-300"
              >
                Contact Me
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </NavLink>
            </div>

            {/* Social Links */}
            <div className="hero-reveal hero-delay-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-4">
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide">
                <span className="w-7 h-[2px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
                <span className="follow-text font-bold">Follow Me</span>
              </span>

              <a
                href="https://github.com/yahyadeveloper261/"
                target="_blank"
                rel="noreferrer"
                className={socialClass}
              >
                <span className="text-lg">⌘</span>
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/muhammad-yahya-117607393/"
                target="_blank"
                rel="noreferrer"
                className={socialClass}
              >
                <span className="font-bold text-blue-500">in</span>
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE AREA */}
          <div className="hero-image relative flex justify-center items-center mx-auto w-full max-w-[480px]">
            {/* Outer rotating ring */}
            <div className="absolute w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] lg:w-[430px] lg:h-[430px] rounded-full border border-blue-500/30 hero-spin" />

            {/* Inner rotating ring */}
            <div className="absolute w-[245px] h-[245px] sm:w-[330px] sm:h-[330px] lg:w-[385px] lg:h-[385px] rounded-full border-2 border-dashed border-cyan-500/30 hero-spin-reverse" />

            {/* Profile Image */}
            <div className="hero-profile relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-full p-2 bg-gradient-to-tr from-blue-600 via-cyan-400 to-purple-600 shadow-2xl shadow-blue-500/30">
              <div
                className={`relative w-full h-full rounded-full overflow-hidden flex items-center justify-center ${
                  dark ? "bg-gray-800" : "bg-slate-200"
                }`}
              >
                <span className="absolute text-7xl font-black text-blue-600">
                  Y
                </span>

                <img
                  src={profile}
                  alt="Yahya - MERN Stack Developer"
                  className="relative z-10 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* React Card */}
            <div
              className={`${cardClass} hero-float hero-card-react top-5 right-0 sm:right-[-5px]`}
            >
              <span className="text-2xl sm:text-3xl">⚛️</span>
              <div>
                <p className="font-bold text-xs sm:text-sm">React.js</p>
                <p
                  className={`text-[10px] sm:text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Frontend
                </p>
              </div>
            </div>

            {/* Node Card */}
            <div
              className={`${cardClass} hero-float hero-card-node bottom-16 left-0 sm:left-[-5px]`}
            >
              <span className="text-2xl sm:text-3xl">🟢</span>
              <div>
                <p className="font-bold text-xs sm:text-sm">Node.js</p>
                <p
                  className={`text-[10px] sm:text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Backend
                </p>
              </div>
            </div>

            {/* MongoDB Card */}
            <div
              className={`${cardClass} hero-float hero-card-mongo bottom-0 right-2 sm:right-8`}
            >
              <span className="text-2xl sm:text-3xl">🍃</span>
              <div>
                <p className="font-bold text-xs sm:text-sm">MongoDB</p>
                <p
                  className={`text-[10px] sm:text-xs ${dark ? "text-gray-400" : "text-gray-500"}`}
                >
                  Database
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
