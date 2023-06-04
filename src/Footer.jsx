const Footer=()=>{

return (
    <div className="mt-44" id="Foot">

  <div className="flex justify-center mt-44">
    <h1 className="text-3xl text-white font-serif">Contacto</h1>
    </div>


<nav className="text-gray-400 flex justify-center gap-10 mt-1 ml-[-50px]">
<div className="h-5 w-7 mt-5">
<a href="https://www.instagram.com/fran.villella/"
target="_blank" rel="noreferrer" ><img className="ml-[20px]" src="/src/img/Insta.png" alt=""/>
<span className="hover:text-red-400">Instagram</span> 
</a>
</div>
<div className="h-5 w-8 mt-5 ml-10">
  <a href="https://twitter.com/franchicu" target="_blank" rel="noopener noreferrer">
  <img className="ml-[10px]" src="/src/img/twiter.png" alt=""/>
  <span className="hover:text-blue-500">Twitter</span>  
  </a>
</div>
<div className="h-5 w-6 mt-5 ml-5">
  <a href="https://github.com/Frahn7" target="_blank" rel="noopener noreferrer">
  <img className="ml-[12px]" src="/src/img/github.png" alt=""/>
   <span className="hover:text-yellow-300">GitHub</span>  
  </a>
</div>
<div className="h-5 w-6 mt-5 ml-5">
  <a href="https://www.linkedin.com/in/francisco-villella-330b30238/" target="_blank" rel="noopener noreferrer">
  <img className="ml-[15px]" src="/src/img/lin.png" alt=""/>
  <span className="hover:text-blue-400">Linkedin</span>  
  </a>
</div>
</nav>
</div>
);
}
export default Footer