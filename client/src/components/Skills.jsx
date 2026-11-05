import React from "react";
const skillCategories = [
  {
    number: "01",
    title: "Frontend Development",
    subtitle: "Building beautiful interfaces",
    icon: "✦",
    skills: [
      { name: "HTML5", icon: "🌐", color: "text-orange-500" },
      { name: "CSS3", icon: "🎨", color: "text-blue-500" },
      { name: "JavaScript", icon: "⚡", color: "text-yellow-500" },
      { name: "React.js", icon: "⚛️", color: "text-cyan-500" },
      { name: "Tailwind CSS", icon: "💨", color: "text-sky-500" },
    ],
  },

  {
    number: "02",
    title: "Backend Development",
    subtitle: "Building secure and scalable server-side applications",
    icon: "⌘",
    skills: [
      { name: "Node.js", icon: "🟢", color: "text-green-500" },
      { name: "Express.js", icon: "🚀", color: "text-gray-500" },
      { name: "REST APIs", icon: "🔗", color: "text-purple-500" },
      { name: "JWT Authentication", icon: "🔐", color: "text-blue-500" },
      { name: "CRUD Operations", icon: "⚙️", color: "text-cyan-500" },
      { name: "bcrypt", icon: "🔒", color: "text-orange-500" },
      { name: "Middleware", icon: "🧩", color: "text-indigo-500" },
      { name: "Error Handling", icon: "🛠️", color: "text-red-500" },
    ],
  },

  {
    number: "03",
    title: "Database",
    subtitle: "Managing and integrating application data",
    icon: "◈",
    skills: [
      { name: "MongoDB", icon: "🍃", color: "text-green-500" },
      { name: "Mongoose", icon: "📦", color: "text-red-500" },
      { name: "Database Integration", icon: "🔗", color: "text-blue-500" },
    ],
  },

  {
    number: "04",
    title: "Tools & Technologies",
    subtitle: "My everyday development tools",
    icon: "⚙",
    skills: [
      { name: "Git", icon: "🔀", color: "text-orange-500" },
      { name: "GitHub", icon: "🐙", color: "text-gray-500" },
      { name: "VS Code", icon: "💻", color: "text-blue-500" },
      { name: "Postman", icon: "📮", color: "text-orange-500" },
      { name: "npm", icon: "📦", color: "text-red-500" },
    ],
  },
];

export default function Skills({ dark }) {
  return (
    <section
      id="skills"
      className={`relative isolate overflow-hidden py-24 sm:py-32 transition-colors duration-500 ${
        dark ? "bg-[#030712] text-white" : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[130px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="skills-heading text-center mb-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-5 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />

            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-blue-500">
              Technical Expertise
            </span>
          </div>

          <h2 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
            My <span className="skills-gradient">Skills</span>
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            The technologies and tools I use to transform ideas into modern,
            responsive and powerful web applications.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="h-1 w-16 rounded-full bg-blue-500" />
            <div className="h-1 w-8 rounded-full bg-purple-500 ml-2" />
            <div className="h-1 w-3 rounded-full bg-cyan-400 ml-2" />
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.number}
              style={{ animationDelay: `${index * 150}ms` }}
              className={`skills-card group relative overflow-hidden rounded-3xl border p-6 sm:p-8 lg:p-9 transition-all duration-500 hover:-translate-y-2 ${
                dark
                  ? "bg-gray-900/60 border-gray-800 hover:border-blue-500/40 hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)]"
                  : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.10)]"
              }`}
            >
              {/* Card Hover Glow */}
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/10 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Header */}
              <div className="relative flex items-start justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-blue-500">
                    CATEGORY {category.number}
                  </span>

                  <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight group-hover:text-blue-500 transition-colors duration-300">
                    {category.title}
                  </h3>

                  <p
                    className={`mt-2 text-sm ${
                      dark ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {category.subtitle}
                  </p>
                </div>

                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 ${
                    dark
                      ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                      : "bg-blue-50 border border-blue-100 text-blue-600"
                  }`}
                >
                  {category.icon}
                </div>
              </div>

              {/* Divider */}
              <div
                className={`h-px w-full mb-7 ${
                  dark ? "bg-gray-800" : "bg-gray-100"
                }`}
              />

              {/* Skill Items */}
              <div className="relative flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    style={{ animationDelay: `${skillIndex * 100}ms` }}
                    className="skill-circle group/skill flex flex-col items-center gap-3"
                  >
                    <div
                      className={`flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border-2 transition-all duration-500 hover:scale-110 hover:-translate-y-2 ${
                        dark
                          ? "bg-gray-900 border-gray-700 hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                          : "bg-white border-gray-200 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]"
                      }`}
                    >
                      <span className="text-3xl sm:text-4xl transition-transform duration-500 group-hover/skill:rotate-12">
                        {skill.icon}
                      </span>
                    </div>

                    <span className="text-xs sm:text-sm font-semibold text-center max-w-24">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Accent */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <p
            className={`text-sm sm:text-base ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <span className="text-blue-500 font-semibold">
              Always learning.
            </span>{" "}
            Always building. Always improving.
          </p>
        </div>
      </div>
    </section>
  );
}
