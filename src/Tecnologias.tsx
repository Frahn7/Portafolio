import { faAreaChart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tecnologias=()=>{
return(
<div className="mt-32 text-white" id="tecno">

                <h1 className="text-white flex justify-center text-4xl underline font-semibold mb-10">Tecnologias</h1>

        <div className="flex justify-center gap-5 ">

            <div className="flex flex-col gap-10">

        <   h1 className="border-4 border-red-600 bg-white text-black text-4xl
            h-[80px] py-1 px-20">HTML <img className="h-6 ml-6" src="/src/img/html.png" alt="src"/></h1>

            <h1 className="border-4 border-red-600 bg-white text-black text-4xl
            h-[80px] py-1 px-20">CSS <img className="h-6 ml-6" src="/src/img/css.png" alt="src"/></h1>
            
            <h1 className="border-4 border-red-600 bg-white text-black text-4xl
            h-[80px] py-1 px-7">JavaScript <img className="h-6 ml-[88px]" src="/src/img/js.png" alt="src"/></h1>

            <h1  className="border-4 border-red-600 bg-white text-black text-4xl
            h-[80px] py-1 px-16">
                React <img className="h-6 ml-10" src="/src/img/react.png" alt="src"/>
            </h1>
            </div>
            
            <div className="flex flex-col gap-10">
            <h1 className="border-4 border-red-600 bg-white text-black text-4xl
            h-[80px] py-1 px-16">Node <img className="h-6 ml-7" src="/src/img/node.png" alt="src"/></h1>

            <h1 className="border-4 border-red-600 bg-white text-black text-4xl
            h-[80px] py-1 px-10">Next js<img className="h-6 ml-16" src="/src/img/nextjs.png" alt="src"/></h1>

            <h1 className="border-4 border-red-600 bg-white text-black text-4xl
            h-[80px] py-1 px-16">PHP <img className="h-6 ml-6" src="/src/img/php.png" alt="src"/></h1>

            <h1 className="border-4 border-red-600 bg-white text-black text-4xl
            h-[80px] py-1 px-7">Talwind css <img className="h-6 ml-24" src="/src/img/talwind.png" alt="src"/></h1>
            </div>
            
            


        </div>
</div>);}
export default Tecnologias;