import React from "react";
import resumePDF from "../assets/images/resume.pdf";
import {
  FaGithub,
  FaLinkedin,
  FaBriefcase,
  FaGraduationCap,
  FaDownload,
  FaCode,
  FaLaptopCode,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function Resume() {
  const skills = [
    "React.js",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git & GitHub",
  ];

  const projects = [
    {
      name: "Doctor Appointment SaaS",
      desc: "A full-stack appointment booking platform with patient and doctor dashboards, authentication and appointment management.",
      tech: "React, Node.js, Express, MongoDB",
    },
    {
      name: "Mini Product App",
      desc: "A product management application with search, sorting, filtering and CRUD functionality.",
      tech: "React, Tailwind CSS, Node.js",
    },
    {
      name: "Weather App",
      desc: "A responsive weather application displaying weather information using an API.",
      tech: "React, JavaScript, API",
    },
    {
      name: "Notes App",
      desc: "A simple notes application for creating, editing and managing notes.",
      tech: "React, JavaScript, CSS",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080d19] text-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 font-semibold tracking-widest mb-4">
              MY RESUME
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Yahya <span className="text-cyan-400">Baloch</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mt-5">
              MERN Stack Developer
            </h2>

            <p className="text-gray-400 leading-8 mt-6 max-w-xl">
              I am a passionate MERN Stack Developer focused on building modern,
              responsive and user-friendly web applications. I enjoy creating
              full-stack projects and solving real-world problems through code.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={resumePDF}
                download="Yahya-Baloch-Resume.pdf"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-xl transition"
              >
                <FaDownload /> Download CV
              </a>

              <a
                href="projects"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-xl transition"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-6 mt-9 text-2xl text-gray-400">
              <a
                href="https://github.com/yahyadeveloper261/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-yahya-117607393"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=balochyahya753@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Developer Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20"></div>

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000"
              alt="Developer working on laptop"
              className="relative w-full h-[320px] sm:h-[430px] object-cover rounded-3xl border border-cyan-500/30 shadow-2xl"
            />

            <div className="absolute bottom-5 left-5 right-5 bg-black/70 backdrop-blur-md p-4 rounded-xl">
              <p className="text-cyan-400 font-semibold">
                Full Stack Developer
              </p>
              <p className="text-gray-300 text-sm">
                Building modern web experiences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-[#101827] py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-8 max-w-4xl">
            I am currently pursuing a BS in Information Technology. I have
            approximately 1.5 years of web development practice and continuously
            improve my skills by building practical projects. My goal is to
            create secure, scalable and user-friendly web applications.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <h2 className="text-3xl font-bold mb-10">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-[#111c2e] border border-gray-800 hover:border-cyan-400 p-5 rounded-xl text-center transition hover:-translate-y-1"
            >
              <FaCode className="text-cyan-400 text-2xl mx-auto mb-3" />
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Experience */}
      <section className="bg-[#101827] py-16 px-5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">
              <FaGraduationCap className="inline text-cyan-400 mr-3" />
              Education
            </h2>

            <div className="border-l-2 border-cyan-400 pl-6">
              <h3 className="text-xl font-semibold">
                BS Information Technology
              </h3>
              <p className="text-cyan-400 mt-2">Southern Redeemer College</p>
              <p className="text-gray-400 mt-2">Currently in 5th Semester</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">
              <FaBriefcase className="inline text-cyan-400 mr-3" />
              Experience
            </h2>

            <div className="border-l-2 border-cyan-400 pl-6">
              <h3 className="text-xl font-semibold">
                Web Development Practice
              </h3>
              <p className="text-cyan-400 mt-2">
                1.5 Years of Learning & Development
              </p>
              <p className="text-gray-400 mt-2 leading-7">
                Building responsive interfaces, React applications and
                full-stack projects using the MERN stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-7xl mx-auto px-5 md:px-10 py-16">
        <h2 className="text-3xl font-bold mb-10">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#111c2e] border border-gray-800 hover:border-cyan-400 p-7 rounded-2xl transition hover:-translate-y-1"
            >
              <FaLaptopCode className="text-cyan-400 text-3xl mb-5" />

              <h3 className="text-xl font-bold mb-3">{project.name}</h3>

              <p className="text-gray-400 leading-7">{project.desc}</p>

              <p className="text-cyan-400 text-sm mt-5">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#101827] py-16 px-5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Let's Work <span className="text-cyan-400">Together</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Have a project in mind? Let's connect and build something great.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=balochyahya753@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-cyan-500 text-black font-semibold px-7 py-3 rounded-xl mt-7 hover:bg-cyan-400 transition"
          >
            <FaEnvelope /> Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Yahya Baloch. All Rights Reserved.
      </footer>
    </div>
  );
}
