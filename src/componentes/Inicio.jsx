import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import {faMugHot} from "@fortawesome/free-solid-svg-icons"

const Inicio = ()=>{
    
  return (<>
<div>
      <div className="flex flex-row mt-40 justify-center" id="Inicio">
        <div>
        <img src="/src/img/FranCara.png" alt="src"/>
        </div>
        <div className="mt-24">
        <h1 className="text-gray-400 text-4xl flex justify-center font-semibold font-serif">
        Francisco Villela 
        </h1>
        <h1 className="text-blue-700  text-4xl flex justify-center font-semibold font-serif">
        Web Developer <FontAwesomeIcon className="ml-3" icon={faMugHot} style={{color:"gray"}}/>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </h1>
        </div>
      </div>
      <div className="mt-52"></div>
</div>
</>);}

export default Inicio
