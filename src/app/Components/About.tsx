import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export const About = () => {
  return (
    <div className="flex justify-center px-3 pt-14" id="sobremi">
      <div>
        <h1 className="sans-serif text-5xl font-semibold text-[#ffe4c4]  ">
          Sobre mi
        </h1>
        <p className="pt-4 font-serif text-2xl text-white ">
          Hola <span className="wiggle-animation">👋</span>
          <br /> Soy Francisco Villella! Soy un desarrollador Frontend &
          Backend.
        </p>
        <p className="font-serif text-2xl text-white md:w-[800px]">
          Mi enfoque principal es JavaScript, donde he desarrollado habilidades
          excepcionales en desarrollo de aplicaciones web, diseño de bases de
          datos, desarrollo móvil, etc. Mi amor por resolver problemas y
          enfrentarme a desafíos técnicos me impulsa a buscar constantemente
          nuevas formas de mejorar mis habilidades.
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
