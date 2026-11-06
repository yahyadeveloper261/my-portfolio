import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
export default function App() {
  // Dark mode state + LocalStorage
  const [dark, setDark] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("dark")) ?? false;
    } catch (error) {
      return false;
    }
  });

  // Save dark mode whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("dark", JSON.stringify(dark));
    } catch (error) {
      console.log(error);
    }
  }, [dark]);

  return (
    <>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/about" element={<About dark={dark} />} />
        <Route path="/skills" element={<Skills dark={dark} />} />
        <Route path="/projects" element={<Projects dark={dark} />} />
        <Route path="/resume" element={<Resume dark={dark} />} />
        <Route path="/contact" element={<Contact dark={dark} />} />
      </Routes>
    </>
  );
}
