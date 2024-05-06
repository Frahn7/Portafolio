"use client";

import Image from "next/image";
import React from "react";
import { useIdioma } from "~/Contexts/Idioma";
import { IoLanguage } from "react-icons/io5";
import { TiArrowSortedUp } from "react-icons/ti";

const Navbar = () => {
  const { Idioma, setIdioma } = useIdioma();

  const name = "{ VF }";
  return (
    <div>
      <nav>
        <div className="bg-black text-center text-white">
          <div className="pt-3 font-serif text-[30px] text-[#ffe4c4]">
            {name}
          </div>
          <ul className="md:flex md:flex-row md:justify-center md:gap-5 md:py-5">
            <a href="#sobremi">
              {Idioma === "ES" ? <li>Sobre Mí</li> : <li>About me</li>}
            </a>
            <a href="#experiencia">
              {Idioma === "ES" ? <li>Experiencia</li> : <li>Experience</li>}
            </a>
            <a href="#tec">
              {Idioma === "ES" ? <li>Tecnologias</li> : <li>Technologies</li>}
            </a>
            <a href="#proj">
              {Idioma === "ES" ? <li>Proyectos</li> : <li>Projects</li>}
            </a>
            <a href="#contact">
              {Idioma === "ES" ? <li>Contactame</li> : <li>Contact me</li>}
            </a>
            {/* <li>Descargar CV</li> */}
            <li className="-mt-[15px]">
              <Image
                src="/img/FranCara.png"
                className=""
                alt="."
                width={80}
                height={0}
              />
            </li>
            <div className="-mt-2 flex flex-row gap-2">
              <li
                className={
                  Idioma === "ES"
                    ? "flex h-[50px] cursor-pointer flex-row items-center rounded-full border-2 bg-gray-500  px-2 text-center align-middle text-white"
                    : "flex h-[50px] cursor-pointer flex-row items-center rounded-full border-2 bg-gray-700  px-2 text-center align-middle text-white"
                }
                onClick={() => {
                  setIdioma("ES");
                }}
              >
                <IoLanguage /> ES
              </li>
              <li
                className={
                  Idioma === "US"
                    ? "flex h-[50px] cursor-pointer flex-row items-center rounded-full border-2 bg-gray-500  px-2 text-center align-middle text-white"
                    : "flex h-[50px] cursor-pointer flex-row items-center rounded-full border-2 bg-gray-700  px-2 text-center align-middle text-white"
                }
                onClick={() => {
                  setIdioma("US");
                }}
              >
                <IoLanguage /> EN
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <div
        className=" fixed  flex w-full  justify-end p-2 "
        onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <TiArrowSortedUp className="animate-infinite flex animate-bounce justify-end rounded-full bg-white text-[50px]" />
      </div>
    </div>
  );
};

export default Navbar;
