import { TfiNewWindow } from "react-icons/tfi";

export const Experience = () => {
  return (
    <div id="experiencia">
      <h1 className="sans-serif mt-20 flex justify-center pb-4 text-4xl font-semibold text-[#ffe4c4] ">
        Experiencia laboral
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
            En mi tiempo como freelancer, mejoré la comunicación abierta y la
            transparencia. Creo que establecer relaciones sólidas con mis
            clientes, comprendiendo sus necesidades, me ayudó a mejorar mi
            capacidad como desarrollador. Mi objetivo no solo fue entregar un
            producto final de alta calidad, sino también brindar una experiencia
            colaborativa excepcional.
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
            Durante mi tiempo en DePC, me enfoqué en la expansión y mejora
            continua de las aplicaciones móviles y web existentes. Mi principal
            responsabilidad consistía en agregar nuevas funcionalidades y
            realizar mantenimientos para garantizar un rendimiento óptimo.
          </p>
        </div>
      </div>
    </div>
  );
};
