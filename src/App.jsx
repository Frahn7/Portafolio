import  Inicio  from "./componentes/Inicio";
import About from "./componentes/AcercaDeMi";
import Habilidades from "./componentes/Habilidades";
import Proyectos from "./componentes/Proyectos";
import Footer from "./componentes/Footer";
import  Movimiento  from "./componentes/Movimiento";
import Tecnologias from "./componentes/Tecnologias"


function App() {
return (<>
<Movimiento/>
<Inicio/>
<About/>
<Habilidades/>
<Proyectos/>
<Tecnologias/>
<Footer/>
<div className="mt-20"></div>
</>);}
export default App
