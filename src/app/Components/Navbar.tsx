import "~/styles/globals.css";
import Image from "next/image";

const Navbar = () => {
  const name = "{ VF }";
  return (
    <div>
      <nav>
        <div className="bg-black text-center text-white">
          <div className="pt-3 font-serif text-[30px] text-[#ffe4c4]">
            {name}
          </div>
          <ul className=" md:flex md:flex-row md:justify-center md:gap-5 md:py-5">
            <a href="#sobremi">
              <li>Sobre Mí</li>
            </a>
            <a href="#experiencia">
              <li>Experiencia</li>
            </a>
            <a href="#tec">
              <li>Tecnologias</li>
            </a>
            <a href="#proj">
              <li>Proyectos</li>
            </a>
            <a href="#contact">
              <li>Contactame</li>
            </a>
            <li className="-mt-[15px]">
              <Image
                src="/img/FranCara.png"
                className=" hover:w-[95px]"
                alt="."
                width={80}
                height={0}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
