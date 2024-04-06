import { Card } from "./Cards";

export const Projects = () => {
  return (
    <div id="proj" className="mt-20">
      <div>
        <h1 className=" sans-serif flex justify-center pb-4 text-4xl font-semibold text-[#ffe4c4] ">
          Proyectos
        </h1>
      </div>
      <div className=" flex flex-wrap justify-center gap-4 pb-10 ">
        <a href="https://www.ccomplejoartmedia.com.ar/" target="_blank">
          <Card
            title="Complejo Artmedia"
            description="Me dediqué a agregar características y solucionar problemas durante mi tiempo como desarrollador en DEPC."
            tec=" React & Tailwind "
          />
        </a>
        <a
          href="https://lista-de-tareas-react-five.vercel.app/"
          target="_blank"
        >
          <Card
            title="Lista de tareas"
            description="Lista de tareas creada con React y Tailwind, con almacenamiento de datos en el LocalStorage."
            tec=" React & Tailwind "
          />
        </a>
        <a href="https://takenos-clon.vercel.app/" target="_blank">
          <Card
            title="Clon de Takenos"
            description="Hice un clon de la pagina de Takenos"
            tec=" React & Tailwind & TypeScript "
          />
        </a>
        <a href="https://www.tododescuentos.com.ar/" target="_blank">
          <Card
            title="Todo descuentos"
            description="Me dediqué a agregar características y solucionar problemas durante mi tiempo como desarrollador en DEPC."
            tec=" React & Tailwind & TypeScript "
          />
        </a>
        <a href="https://rick-y-morty-fetch-api.vercel.app/" target="_blank">
          <Card
            title="Fetch Api"
            description="Haciendo una solicitud a la API de Rick y Morty utilizando fetch, con paginación implementada."
            tec=" React & Bootstrap "
          />
        </a>
        <a href="https://app-clima-lake.vercel.app/" target="_blank">
          <Card
            title="App del clima"
            description="Creé una aplicación sencilla de pronóstico del clima que se conecta y consume la API de OpenWeather"
            tec=" React & Tailwind "
          />
        </a>
        <a href="https://www.anba.org.ar/" target="_blank">
          <Card
            title="ANBA"
            description="Me dediqué a agregar características y solucionar problemas durante mi tiempo como desarrollador en DEPC."
            tec=" React & CSS "
          />
        </a>
        <a href="https://tic-tac-toe-theta-fawn-92.vercel.app/" target="_blank">
          <Card
            title="Tic-Tac-Toe"
            description="Desarrollé el famoso juego de 3 en raya"
            tec=" React & Tailwind "
          />
        </a>
        <a
          href="https://torneo-p29hf05b1-frahn7s-projects.vercel.app/"
          target="_blank"
        >
          <Card
            title="Creador de torneo"
            description="Un creador de torneos basico que cree para probar cosas"
            tec=" React & TypeScript "
          />
        </a>
      </div>
    </div>
  );
};
