import doctor from "../assets/images/doctor.png";
import movie from "../assets/images/movie.png";
import weather from "../assets/images/weather.png";
import github from "../assets/images/github.png";
import note from "../assets/images/note.jpeg"
import todo from "../assets/images/todo.png"

const projects = [
{
  number: "01",
  title: "GitHub User Search",
  category: "GitHub API Application",
  description:
    "A GitHub user search application that allows users to search GitHub profiles, explore user information, and view profile details with a responsive and modern interface.",
  technologies: ["React", "GitHub API", "Tailwind CSS"],
  image: github,
  live: "https://github-user-search-zeta-three.vercel.app/",
  github: "https://github.com/yahyadeveloper261/github-user-search",
  accent: "from-gray-700 to-gray-950",
},
  {
    number: "02",
    title: "Doctor Appointment System",
    category: "Full Stack Application",
    description:
      "A healthcare appointment platform designed to manage doctor profiles, patient registration, appointments, and user authentication.",
    technologies: ["React","Tailwind CSS", "Node.js", "Express", "MongoDB"],
    image:doctor,
    live: "https://doctor-appointment-two-kappa.vercel.app/",
    github: "https://github.com/yahyadeveloper261/doctor_appointment",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    number: "03",
    title: "Movie Explorer",
    category: "Movie Application",
    description:
      "An interactive movie discovery application with movie details, search functionality, pagination, and favorites.",
    technologies: ["React", "API Integration", "Tailwind CSS"],
    image:movie,
    live: "https://movie-app-beryl-nu.vercel.app/",
    github: "https://github.com/yahyadeveloper261/movie-app",
    accent: "from-purple-500 to-indigo-500",
  },
  {
    number: "04",
    title: "Weather Application",
    category: "Weather Application",
    description:
      "A responsive weather application providing current weather information, forecasts, and location-based weather searches.",
    technologies: ["React", "Weather API", "Tailwind CSS"],
    image:weather,
    live: "https://weather-app-rosy-kappa-93.vercel.app/",
    github: "https://github.com/yahyadeveloper261/weather-app",
    accent: "from-orange-400 to-yellow-500",
  },
  {
  number: "05",
  title: "Note Taking App",
  category: "Frontend Application",
  description:
    "A simple note-taking application that allows users to create, edit, delete, and manage notes. Notes are saved in the browser's localStorage, so data remains available after refreshing the page.",
  technologies: ["React", "JavaScript", "Tailwind CSS", "LocalStorage"],
  image: note,
  live: "https://note-app-umber-seven.vercel.app/",
  github: "https://github.com/yahyadeveloper261/Note_App",
  accent: "from-purple-500 to-pink-400",
},
{
  number: "06",
  title: "Todo App",
  category: "Frontend Application",
  description:
    "A task management application that allows users to add, edit, delete, and mark tasks as completed. Tasks are saved in the browser's localStorage, so data remains available even after refreshing the page.",
  technologies: ["React", "JavaScript", "Tailwind CSS", "LocalStorage"],
  image: todo,
  live: "https://note-app-umber-seven.vercel.app/",
  github: "https://github.com/yahyadeveloper261/Note_App",
  accent: "from-green-500 to-emerald-400",
}
];

export default function Projects({ dark }) {
  return (
    <section
      id="projects"
      className={`relative overflow-hidden py-24 sm:py-32 transition-colors duration-500 ${
        dark
          ? "bg-[#030712] text-white"
          : "bg-[#f8fafc] text-gray-900"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-20">

          <span className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/5 px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            My Portfolio
          </span>

          <h2 className="mt-7 text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight">
            Featured{" "}
            <span className="projects-gradient">
              Projects
            </span>
          </h2>

          <p
            className={`mt-6 max-w-2xl mx-auto text-base sm:text-lg leading-8 ${
              dark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Explore some of my recent projects, showcasing my
            skills in frontend and full-stack development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <article
              key={project.number}
              style={{ animationDelay: `${index * 150}ms` }}
              className={`project-card group overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                dark
                  ? "bg-gray-900/60 border-gray-800 hover:border-blue-500/40"
                  : "bg-white border-gray-200 hover:border-blue-300"
              }`}
            >

             <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-800">

  <img
    src={project.image}
    alt={project.title}
    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
  />

  {/* Category */}
  <span className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
    {project.category}
  </span>

  {/* Project Number */}
  <span className="absolute bottom-4 right-4 text-3xl font-black text-gray-400/60">
    {project.number}
  </span>

</div>

              {/* Project Content */}
              <div className="p-6 sm:p-8">

                <h3 className="text-2xl sm:text-3xl font-bold transition-colors duration-300 group-hover:text-blue-500">
                  {project.title}
                </h3>

                <p
                  className={`mt-4 text-sm sm:text-base leading-7 ${
                    dark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-lg border px-3 py-2 text-xs font-semibold ${
                        dark
                          ? "bg-gray-800 border-gray-700 text-gray-300"
                          : "bg-gray-50 border-gray-200 text-gray-700"
                      }`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
               {/* Project Action Buttons */}
<div className="mt-8 flex flex-wrap gap-3">

  {/* Live Preview */}
  <a
    href={project.live || "#"}
    target={project.live ? "_blank" : undefined}
    rel={project.live ? "noopener noreferrer" : undefined}
    onClick={(e) => {
      if (!project.live) e.preventDefault();
    }}
    className={`group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${project.accent} px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
    </svg>

    Live Preview
  </a>

  {/* View Code */}
  <a
    href={project.github || "#"}
    target={project.github ? "_blank" : undefined}
    rel={project.github ? "noopener noreferrer" : undefined}
    onClick={(e) => {
      if (!project.github) e.preventDefault();
    }}
    className={`group/btn inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-1 ${
      dark
        ? "border-gray-700 bg-gray-800/70 text-white hover:border-blue-500 hover:bg-gray-800"
        : "border-gray-200 bg-white text-gray-800 hover:border-blue-400 hover:bg-blue-50"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </svg>

    View Code
  </a>

</div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 w-0 bg-gradient-to-r ${project.accent} group-hover:w-full transition-all duration-700`} />

            </article>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className={dark ? "text-gray-400" : "text-gray-500"}>
            More projects coming soon. Always building something new.
          </p>
        </div>

      </div>
    </section>
  );
}