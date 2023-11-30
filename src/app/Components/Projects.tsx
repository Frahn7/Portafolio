import "~/styles/globals.css";
import { Card } from "./card";

export const Projects = () => {
  return (
    <div id="proj" className="mt-20">
      <div>
        <h1 className=" flex justify-center pb-4 font-serif text-4xl font-semibold text-[#ffe4c4] underline">
          Proyectos:
        </h1>
      </div>
      <div className=" flex flex-wrap justify-center gap-4 pb-10 ">
        <a
          href="https://github.com/Frahn7/Lista-de-Tareas-Con-React"
          target="_blank"
        >
          <Card
            title="Lista de tareas"
            description="Lista de tareas con react y tailwind almacenando en el LocalStorage los datos"
            tec=" React & Tailwind "
          />
        </a>
        <a
          href="https://github.com/Frahn7/Rick-y-Morty-Fetch-API"
          target="_blank"
        >
          <Card
            title="Fetch Api"
            description="Fetch a la api re rick y morty con paginacion incluida"
            tec=" React & Tailwind "
          />
        </a>
        <a href="https://github.com/Frahn7/Tic-Tac-Toe" target="_blank">
          <Card
            title="Tic-Tac-Toe"
            description="El famoso juego de 3 en raya "
            tec=" React & Tailwind "
          />
        </a>
        <a href="https://github.com/Frahn7/App-clima" target="_blank">
          <Card
            title="App del clima"
            description="Una simple app del clima que consume la api de OpenWeather"
            tec=" React & Tailwind "
          />
        </a>
        <a
          href="https://github.com/Frahn7/Primer-Jueguito-con-js"
          target="_blank"
        >
          <Card
            title="Mokekom"
            description="Un juego inspirado en pokemon"
            tec=" JavaScript & CSS "
          />
        </a>
      </div>
    </div>
  );
};
