import { faAddressCard, faDiagramProject, faFileSignature, faMicrochip, faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Movimiento=()=>{
    return( <>
    <div className="flex flex-row gap-10 justify-center text-lg font-mono mt-4 font-medium
    ">

    <a href="#About" className="text-red-400 hover:text-red-200">About 
    <FontAwesomeIcon className="ml-2" icon={faAddressCard} /></a>
    <a href="#Habilidades" className="text-red-400 hover:text-red-200 ">Habilidades
     <FontAwesomeIcon className="ml-2" icon={faWaveSquare}/></a>
    <a href="#Proy" className="text-red-400 hover:text-red-200">Proyectos
    <FontAwesomeIcon className="ml-2" icon={faDiagramProject} /></a>
    <a href="#tecno" className="text-red-400 hover:text-red-200">Tecnologias 
    <FontAwesomeIcon className="ml-2" icon={faMicrochip} /></a>
    <a href="#Foot" className="text-red-400 hover:text-red-200">Contacto 
    <FontAwesomeIcon className="ml-2" icon={faFileSignature} /></a>
    </div>
    </>
    );
}
export default Movimiento