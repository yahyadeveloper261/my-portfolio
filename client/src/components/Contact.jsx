import React from "react";

export default function Contact({ dark }) {
  const socials = [
    {
      name: "Fiverr",
      letter: "F",
      desc: "Hire me for your project",
      link: "https://www.fiverr.com/s/WebNwpE",
      color: "hover:border-green-400",
      text: "text-green-500",
      bg: "group-hover:bg-green-500/10",
    },
    {
      name: "Facebook",
      letter: "f",
      desc: "Follow my journey",
      link: "YOUR_FACEBOOK_URL",
      color: "hover:border-indigo-400",
      text: "text-indigo-500",
      bg: "group-hover:bg-indigo-500/10",
    },
    {
      name: "LinkedIn",
      letter: "in",
      desc: "Let's build connections",
      link: "https://www.linkedin.com/in/muhammad-yahya-117607393",
      color: "hover:border-blue-400",
      text: "text-blue-500",
      bg: "group-hover:bg-blue-500/10",
    },

    {
      name: "WhatsApp",
      letter: "W",
      desc: "Let's chat directly",
      link: "https://wa.me/923106801549",
      color: "hover:border-emerald-400",
      text: "text-emerald-500",
      bg: "group-hover:bg-emerald-500/10",
    },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden px-6 py-24 transition-colors duration-500 ${
        dark ? "bg-[#030712] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* Background Effects */}

      <div
        className={`absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full blur-[130px] animate-pulse ${
          dark ? "bg-blue-600/20" : "bg-blue-400/20"
        }`}
      />

      <div
        className={`absolute -right-32 bottom-20 h-72 w-72 rounded-full blur-[130px] animate-pulse ${
          dark ? "bg-purple-600/20" : "bg-purple-400/20"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}

        <div className="mb-16 text-center animate-fade-in">
          <p className="follow-text mb-5 font-semibold tracking-[5px]">
            CONTACT ME
          </p>

          <h2 className="text-4xl font-extrabold md:text-6xl">
            Let's Start a<span className="hero-name ml-3">Conversation</span>
          </h2>

          <p
            className={`mx-auto mt-6 max-w-xl ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Have an idea or project? I'm ready to turn your vision into a modern
            and professional website. Feel free to contact me anytime.
          </p>

          <div className="mx-auto mt-7 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>

        {/* Social Cards */}

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {socials.map((item, index) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 150}ms` }}
              className={`group rounded-2xl border p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${item.color} animate-fade-in ${
                dark
                  ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
                  : "border-gray-200 bg-white shadow-sm hover:border-blue-400 hover:shadow-xl"
              }`}
            >
              {/* Icon */}

              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl text-4xl font-black shadow-md transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${item.text} ${item.bg} ${
                  dark ? "bg-white/10" : "bg-gray-100"
                }`}
              >
                {item.letter}
              </div>

              {/* Name */}

              <h3 className="mt-6 text-xl font-bold">{item.name}</h3>

              {/* Description */}

              <p
                className={`mt-2 text-sm ${
                  dark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {item.desc}
              </p>

              {/* Connect Button */}

              <p
                className={`mt-7 text-sm font-bold transition-all duration-300 group-hover:tracking-wider ${item.text}`}
              >
                Connect Now →
              </p>
            </a>
          ))}
        </div>

        {/* Bottom Contact Box */}

        <div
          className={`contact-btn mt-20 rounded-3xl p-10 text-center shadow-xl transition-all duration-500 hover:shadow-2xl md:p-14 ${
            dark ? "bg-[#030712]" : "bg-white"
          }`}
        >
          <p className="follow-text mb-4 font-semibold tracking-widest">
            HAVE A PROJECT?
          </p>

          <h3 className="text-2xl font-bold md:text-4xl">
            Let's Build Something Amazing!
          </h3>

          <p
            className={`mx-auto mt-5 max-w-xl ${
              dark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            I'm available for freelance projects, collaborations and exciting
            opportunities.
          </p>

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="hero-btn mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 px-9 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-blue-500/30"
          >
            Get In Touch
            <span className="text-xl">↗</span>
          </a>
        </div>

        {/* Footer */}

        <div
          className={`mt-16 border-t pt-8 text-center ${
            dark ? "border-white/10" : "border-gray-200"
          }`}
        >
          <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>
            Designed & Developed with ❤️ by
            <span className="follow-text ml-1 font-bold">Yahya</span>
          </p>

          <p
            className={`mt-3 text-xs ${
              dark ? "text-gray-500" : "text-gray-400"
            }`}
          >
            © {new Date().getFullYear()} Yahya. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
