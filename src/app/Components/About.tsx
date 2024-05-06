"use client";

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { useIdioma } from "~/Contexts/Idioma";

export const About = () => {
  const { Idioma } = useIdioma();

  return (
    <div className="flex justify-center px-3 pt-14" id="sobremi">
      <div>
        <h1 className="sans-serif text-5xl font-semibold text-[#ffe4c4]  ">
          {Idioma === "ES" ? "Sobre mi" : "About me"}
        </h1>
        <p className="pt-4 font-serif text-2xl text-white ">
          {Idioma === "ES" ? "Hola" : "Hello"}{" "}
          <span className="wiggle-animation">👋</span>
          <br />
          {Idioma === "ES"
            ? "Soy Francisco Villella! Soy un desarrollador Frontend & Backend"
            : "I'm Francisco Villella! I am a Frontend & Backend developer"}{" "}
        </p>
        <p className="font-serif text-2xl text-white md:w-[800px]">
          {Idioma === "ES"
            ? "Mi enfoque principal es JavaScript, donde he desarrollado habilidades excepcionales en desarrollo de aplicaciones web, diseño de bases de datos, desarrollo móvil, etc. Mi amor por resolver problemas y enfrentarme a desafíos técnicos me impulsa a buscar constantemente nuevas formas de mejorar mis habilidades."
            : "My main focus is JavaScript, where I have developed skills exceptional in web application development, database design data, mobile development, etc. My love for solving problems and facing technical challenges drives me to constantly search new ways to improve my skills."}
        </p>
        <div className="flex flex-row gap-4 pt-5 text-5xl text-white">
          <a href="https://github.com/Frahn7" target="_blank ">
            <FaGithub className="hover:text-yellow-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-villella-330b30238/"
            target="_blank"
          >
            <FaLinkedin className="hover:text-blue-400" />
          </a>
        </div>
      </div>
    </div>
  );
};
