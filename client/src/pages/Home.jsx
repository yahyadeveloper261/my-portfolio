import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home({ dark }) {
  const lineColor = dark ? "border-gray-700 " : "border-gray-200";

  return (
    <div>
      <Hero dark={dark} />

      <div className={`border-t ${lineColor}`} />
      <About dark={dark} />

      <div className={`border-t ${lineColor}`} />
      <Skills dark={dark} />

      <div className={`border-t ${lineColor}`} />
      <Projects dark={dark} />

      <div className={`border-t ${lineColor}`} />
      <Contact dark={dark} />

      <div className={`border-t ${lineColor}`} />
      <Footer dark={dark} />
    </div>
  );
}