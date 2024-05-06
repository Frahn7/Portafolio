"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useIdioma } from "~/Contexts/Idioma";

const Contact = () => {
  const { Idioma } = useIdioma();

  return (
    <div className="mt-20 pb-6" id="contact">
      <div className="mt-20 flex justify-center">
        <h1 className=" sans-serif flex justify-center pb-4 text-4xl font-semibold text-[#ffe4c4] ">
          {Idioma === "ES" ? "Contacto" : "Contact me"}
        </h1>
      </div>

      <div className="mt-5">
        <nav className="mt-1 flex flex-wrap items-center justify-center gap-10 align-middle text-gray-400">
          <div className=" hover:text-yellow-300">
            <a
              href="https://github.com/Frahn7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className=" text-3xl" />
            </a>
          </div>
          <div className=" hover:text-blue-400">
            <a
              href="https://www.linkedin.com/in/francisco-villella-330b30238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className=" text-3xl" />
            </a>
          </div>
          <div className=" hover:text-red-600">
            <a
              href="mailto:franciscovillella2003@gmail.com?subject=Contactar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMail className=" text-3xl" />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Contact;
