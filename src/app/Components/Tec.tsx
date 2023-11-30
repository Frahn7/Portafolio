interface TecProps {
  title: string;
  className: string;
}

function TecnologiasCard({ title, className }: TecProps) {
  const textColor =
    "bg-badge-background h-[60px] w-[250px] content-center items-center rounded-md bg-black pt-4 text-center align-middle text-[17px] font-medium " +
    className;

  return <div className={textColor}>{title}</div>;
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
        <TecnologiasCard title="HTML" className="text-orange-600" />
        <TecnologiasCard title="CSS" className="text-blue-500" />
        <TecnologiasCard title="JAVASCRIPT" className="text-yellow-500" />
        <TecnologiasCard title="REACT" className="text-blue-700" />
        <TecnologiasCard title="NEXT JS" className="text-white" />
        <TecnologiasCard title="NODEJS" className="text-green-600" />
        <TecnologiasCard title="PHP" className="text-violet-400" />
        <TecnologiasCard title="LARAVEL" className="text-red-500" />
        <TecnologiasCard title="AWS" className="text-yellow-600" />
        <TecnologiasCard title="MYSQL" className="text-white" />
        <TecnologiasCard title="TAILWIND" className="text-blue-700" />
        <TecnologiasCard title="BOOTSTRAP" className="text-violet-900" />
      </div>
    </div>
  );
};
