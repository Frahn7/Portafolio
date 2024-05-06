"use client";

import { TfiNewWindow } from "react-icons/tfi";
import { useIdioma } from "~/Contexts/Idioma";

export const Experience = () => {
  const { Idioma } = useIdioma();

  return (
    <div id="experiencia">
      <h1 className="sans-serif mt-20 flex justify-center pb-4 text-4xl font-semibold text-[#ffe4c4] ">
        {Idioma === "ES" ? " Experiencia laboral" : "Work experience"}
      </h1>

      <div className=" flex flex-wrap justify-center gap-4 pb-10 ">
        <div className="border-dark_grey hover:bg-hover flex min-h-[200px] flex-col rounded-lg border bg-black p-4 transition">
          <span className="flex items-center gap-2">
            <h3 className=" flex flex-row text-lg font-medium text-white">
              Freelance
            </h3>
          </span>
          <small className="flex gap-2 text-[.8rem] text-white">
            2021-2022
          </small>

          <p className="tracking-sm mt-4 flex w-[300px] flex-row text-sm text-white">
            {Idioma === "ES"
              ? "En mi tiempo como freelancer, mejoré la comunicación abierta y la transparencia. Creo que establecer relaciones sólidas con mis clientes, comprendiendo sus necesidades, me ayudó a mejorar mi capacidad como desarrollador. Mi objetivo no solo fue entregar un producto final de alta calidad, sino también brindar una experiencia colaborativa excepcional."
              : "In my time as a freelancer, I improved open communication and transparency. I believe that establishing strong relationships with my clients, understanding their needs, helped me improve my ability as a developer. My goal was not only to deliver a high-quality final product, but also to provide an exceptional collaborative experience."}
          </p>
        </div>
        <div className="border-dark_grey hover:bg-hover flex min-h-[200px] flex-col rounded-lg border bg-black p-4 transition">
          <span className="flex items-center gap-2">
            <h3 className=" flex flex-row text-lg font-medium text-white">
              Fullstack @ DePC
            </h3>
          </span>
          <small className="flex gap-2 text-[.8rem] text-white">
            2022-2023
          </small>
          <a href="https://depcsuite.com/" target="_blank">
            <p className="tracking-sm mt-4 flex flex-row text-sm text-white">
              <TfiNewWindow className=" mr-[1px] mt-[1px]" /> DePC Technology
            </p>
          </a>
          <p className="tracking-sm mt-4 flex w-[300px] flex-row text-sm text-white">
            {Idioma === "ES"
              ? "Durante mi tiempo en DePC, me enfoqué en la expansión y mejora continua de las aplicaciones móviles y web existentes. Mi principal responsabilidad consistía en agregar nuevas funcionalidades y realizar mantenimientos para garantizar un rendimiento óptimo."
              : "During my time at DePC, I focused on the continuous expansion and improvement of existing mobile and web applications. My main responsibility was to add new features and perform maintenance to ensure optimal performance."}
          </p>
        </div>
      </div>
    </div>
  );
};
