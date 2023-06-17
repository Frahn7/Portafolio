import { faBriefcase, faDatabase, faGamepad, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Proyectos=()=>{
return(<>
<div className="mt-36" id="Proy">


                <div className="flex justify-center ">
                    <h1 className="text-3xl text-white font-serif font-extrabold underline
                    ">Proyectos</h1>
                </div>


                <div className="ml-7 w-full max-w-md mt-20 flex flex-row gap-10">

                <div className="flex flex-row gap-10">
                <a className="" href="https://github.com/Frahn7/Lista-de-Tareas-Con-React" target="_blank" rel="noreferrer">
                <div className="border-4 bg-yellow-400 h-[80px] flex flex-row w-[270px]
                    py-5 px-14 ml-3
                    hover:bg-yellow-500"> 
                <span className="text-xl font-bold">
                        Task List <FontAwesomeIcon icon={faListCheck} />
                </span>
                </div>
                </a>
                </div>

                <div className="flex flex-row gap-10">
                <a className="" href="https://github.com/Frahn7/Rick-y-Morty-Fetch-API" target="_blank" rel="noreferrer">
                <div className="border-4 bg-yellow-400 h-[80px] flex flex-row w-[270px]
                    py-5 px-14 ml-3
                    hover:bg-yellow-500"> 
                <span className="text-xl font-bold">
                        Fetch Api <FontAwesomeIcon icon={faDatabase} />
                </span>
                </div>
                </a>
                </div>
                <div className="flex flex-row gap-10">
                <a className="" href="https://github.com/Frahn7/Primer-Jueguito-con-js" target="_blank" rel="noreferrer">
                <div className="border-4 bg-yellow-400 h-[80px] flex flex-row w-[270px]
                    py-5 px-14 ml-3
                    hover:bg-yellow-500"> 
                <span className="text-xl font-bold">
                        Basic Game <FontAwesomeIcon icon={faGamepad} />
                </span>
                </div>
                </a>
                </div>
                <div className="flex flex-row gap-10">
                <a className="" href="https://github.com/Frahn7/Portafolio" target="blank">
                <div className="border-4 bg-yellow-400 h-[80px] flex flex-row w-[270px]
                    py-5 px-14 ml-3
                    hover:bg-yellow-500"> 
                <span className="text-xl font-bold">
                        Portafolio <FontAwesomeIcon icon={faBriefcase} />
                </span>
                </div>
                </a>
                </div>



                </div>             
</div>
</>        
);}
export default Proyectos