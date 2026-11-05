import React from "react";
import { NavLink } from "react-router-dom";

export default function About({ dark }) {
  const details = [
    { icon: "💻", title: "Development", value: "Full Stack Web Development" },
    { icon: "⚡", title: "Performance", value: "Fast & Responsive Websites" },
    { icon: "🎯", title: "Approach", value: "Clean & Maintainable Code" },
    { icon: "🚀", title: "Goal", value: "Building Real-World Projects" },
  ];

  const cardClass = `group relative p-6 rounded-2xl border shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 hover:border-blue-400/50 transition-all duration-500 ${
    dark
      ? "bg-gray-900 border-gray-800 text-white"
      : "bg-slate-50 border-gray-200 text-gray-900"
  }`;

  const mutedText = dark ? "text-gray-400" : "text-gray-500";

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-12 sm:py-28 transition-colors duration-500 ${
        dark ? "bg-[#030712] text-white" : "bg-slate-50 text-gray-900"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-10">
        {/* Section Heading */}
        <div className="text-center mb-16 opacity-0 animate-[fadeIn_0.7s_ease-out_0.1s_forwards]">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-sm font-bold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Get To Know Me
          </span>

          <h2 className="mt-5 text-4xl sm:text-5xl font-black">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className={`mt-4 max-w-2xl mx-auto leading-7 ${mutedText}`}>
            A little introduction about my journey, skills and passion for
            building modern web applications.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="opacity-0 animate-[slideLeft_0.8s_ease-out_0.3s_forwards]">
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-snug">
              I'm Yahya, a passionate{" "}
              <span className={dark ? "text-cyan-400" : "text-blue-600"}>
                MERN Stack Developer
              </span>
            </h3>

            <p
              className={`mt-6 leading-8 ${dark ? "text-gray-400" : "text-gray-600"}`}
            >
              I am a web developer passionate about creating modern,
              user-friendly and responsive web applications. I enjoy
              transforming ideas into practical digital experiences.
            </p>

            <p
              className={`mt-4 leading-8 ${dark ? "text-gray-400" : "text-gray-600"}`}
            >
              My development journey focuses on React, JavaScript, Node.js,
              Express and MongoDB. I continuously improve my skills by building
              real-world projects and learning modern development practices.
            </p>

            <p
              className={`mt-4 leading-8 ${dark ? "text-gray-400" : "text-gray-600"}`}
            >
              My goal is to help businesses and clients build reliable,
              attractive and high-quality web solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <NavLink
                to="/contact"
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 bg-[length:200%_auto] text-white font-bold shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-right hover:-translate-y-2 hover:shadow-xl active:scale-95"
              >
                Let's Work Together
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </NavLink>

              <NavLink
                to="/projects"
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl border font-bold transition-all duration-300 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-2 ${
                  dark
                    ? "border-gray-700 text-white"
                    : "border-gray-300 text-gray-800"
                }`}
              >
                My Projects ↗
              </NavLink>
            </div>
          </div>

          {/* Right Information Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {details.map((item, index) => (
              <div
                key={item.title}
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
                className={`${cardClass} opacity-0 animate-[slideRight_0.7s_ease-out_forwards]`}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {item.icon}
                </div>

                <h4 className="mt-5 text-lg font-extrabold">{item.title}</h4>

                <p className={`mt-2 text-sm leading-6 ${mutedText}`}>
                  {item.value}
                </p>

                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Highlight */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t pt-10 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards] ${
            dark ? "border-gray-800" : "border-gray-200"
          }`}
        >
          {[
            ["06+", "Portfolio Projects"],
            ["MERN", "Technology Stack"],
            ["100%", "Learning Mindset"],
            ["24/7", "Passion for Coding"],
          ].map(([number, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {number}
              </h3>

              <p
                className={`mt-2 text-xs sm:text-sm font-semibold ${mutedText}`}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
