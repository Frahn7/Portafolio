import { useState } from "react";

const About = () => {
  let [idioma, setIdioma] = useState("txtEspañol");

  return (
    <>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col justify-center" id="About">
          <div
            className="text-4xl text-white underline font-semibold flex flex-col items-center mt-14
    font-serif"
          >
            Acerca de mi:
          </div>

          <div className=" flex mt-10 gap-10 justify-center">
            <button
              className="min-w-[130px] h-40px  text-white px-5 py-2 font-bold cursor-pointer transition-all duration-300 font-serif relative inline-block outline-none rounded-md border-none bg-[#4433ff] z-10 group
       hover:bg-gray-600"
              name="txtEspañol"
              onClick={() => {
                setIdioma("txtEspañol");
              }}
            >
              Español
            </button>
            <button
              className="min-w-[130px] h-40px text-white px-5 py-2 font-bold cursor-pointer transition-all duration-300 font-serif
      hover:bg-gray-600 relative inline-block outline-none rounded-md border-none bg-[#4433ff] z-10 group"
              name="txtIngles"
              onClick={() => {
                setIdioma("txtIngles");
              }}
            >
              Ingles
            </button>
            <button
              className="min-w-[130px] h-40px text-white px-5 py-2 font-bold cursor-pointer transition-all duration-300 font-serif
       hover:bg-gray-600 relative inline-block outline-none rounded-md border-none bg-[#4433ff] z-10 group"
              name="txtPortugues"
              onClick={() => {
                setIdioma("txtPortugues");
              }}
            >
              Portugués

            </button>
          </div>
          <div className="mt-10">
            {idioma === "txtEspañol" && (
              <div className="max-w-lg mx-auto p-4 bg-slate-600 shadow-md rounded-lg">
                <p className="text-xl leading-relaxed text-gray-300 font-serif font-semibold text-center">
                  Hola, soy Francisco,
                  <br /> Desarrollador web en busca de ser Full-Stack Developer.{" "}
                  <br /> Tengo 20 años. <br /> Desde chico me llamaba la
                  atención las computadoras, <br /> ¡Y bueno, ya saben cómo
                  termina la historia! <br /> Espero que disfruten de mi
                  portafolio y ¡gracias por ver!
                </p>
              </div>
            )}

            {idioma === "txtIngles" && (
              <div className="max-w-lg mx-auto p-4 bg-slate-600 shadow-md rounded-lg">
                <p className="text-xl leading-relaxed text-gray-300 font-serif font-semibold text-center">
                  Hi, Im Francisco,
                  <br /> a web developer looking to be a well-rounded developer.{" "}
                  <br /> I am 20 years old. <br /> Ever since I was a kid,
                  computers caught my attention, <br /> Well, you know how the
                  story ends! <br /> I hope you enjoy my portfolio and thanks
                  for viewing!
                </p>
              </div>
            )}

            {idioma === "txtPortugues" && (
              <div className="max-w-lg mx-auto p-4 bg-slate-600 shadow-md rounded-lg">
                <p className="text-xl leading-relaxed text-gray-300 font-serif font-semibold text-center">
                  Olá, sou Francisco,
                  <br /> um desenvolvedor web que quer se tornar um
                  desenvolvedor de pleno direito. <br /> Tenho 20 anos. <br />{" "}
                  Os computadores estão na minha cabeça desde que eu era
                  criança, <br /> Bem, você sabe como a história termina! <br />{" "}
                  Espero que gostem do meu portfólio, obrigado por olhar!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
