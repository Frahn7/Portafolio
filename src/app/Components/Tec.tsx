"use client";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTypescript } from "react-icons/si";

interface TecProps {
  className: string;
  icon: React.ReactNode;
}

function TecnologiasCard({ className, icon }: TecProps) {
  const textColor =
    "bg-badge-background h-[90px] w-[200px] flex  content-center items-center rounded-md justify-center bg-black text-center align-middle font-medium text-[60px] " +
    className;

  return <div className={textColor}>{icon}</div>;
}

export const Tec = () => {
  return (
    <div className="pb-20" id="tec">
      <div>
        <h1 className="sans-serif mt-20 flex justify-center px-20 pb-4 text-4xl font-semibold text-[#ffe4c4] ">
          Tecnologías destacadas <span className="spin-animation">⚙</span>
        </h1>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2 px-[25px] text-center align-middle">
        <TecnologiasCard
          icon={<FaHtml5 />}
          className="text-orange-600 hover:text-orange-400"
        />
        <TecnologiasCard
          icon={<IoLogoCss3 />}
          className="text-blue-500 hover:text-blue-300"
        />
        <TecnologiasCard
          icon={<RiJavascriptFill />}
          className="text-yellow-500 hover:text-yellow-300"
        />
        <TecnologiasCard
          icon={<FaReact />}
          className="text-blue-700 hover:text-blue-500"
        />
        <TecnologiasCard
          icon={<TbBrandNextjs />}
          className="text-white hover:text-gray-300"
        />
        <TecnologiasCard
          icon={<SiTypescript />}
          className="text-blue-700 hover:text-blue-500"
        />
        <TecnologiasCard
          icon={<FaNodeJs />}
          className="text-green-600 hover:text-green-400"
        />
        <TecnologiasCard
          icon={<FaPhp />}
          className="text-violet-400 hover:text-violet-200"
        />
        <TecnologiasCard
          icon={<FaLaravel />}
          className="text-red-500 hover:text-red-300"
        />
        <TecnologiasCard
          icon={<FaAws />}
          className="text-yellow-600 hover:text-yellow-400"
        />
        <TecnologiasCard
          icon={<SiMysql />}
          className="text-white hover:text-gray-300"
        />
        <TecnologiasCard
          icon={<SiTailwindcss />}
          className="text-blue-700 hover:text-blue-500"
        />
        <TecnologiasCard
          icon={<BsFillBootstrapFill />}
          className="text-violet-900 hover:text-violet-700"
        />
      </div>
    </div>
  );
};
