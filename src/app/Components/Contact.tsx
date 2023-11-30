import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="mt-20 pb-6" id="contact">
      <div className="mt-20 flex justify-center">
        <h1 className=" sans-serif flex justify-center pb-4 text-4xl font-semibold text-[#ffe4c4] ">
          Contacto:
        </h1>
      </div>

      <div className="mt-5">
        <nav className="mt-1 flex flex-wrap items-center justify-center gap-10 align-middle text-gray-400">
          <div className="  mt-5 hover:text-red-400">
            <a
              href="https://www.instagram.com/fran.villella/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="ml-[17px] text-3xl " />
              <span className="">Instagram</span>
            </a>
          </div>
          <div className="  mt-5 hover:text-blue-500">
            <a
              href="https://twitter.com/franchicu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="ml-[10px] text-3xl" />
              <span className="">Twitter</span>
            </a>
          </div>
          <div className=" ml-5 mt-5 hover:text-yellow-300">
            <a
              href="https://github.com/Frahn7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="ml-[10px] text-3xl" />
              <span className="">GitHub</span>
            </a>
          </div>
          <div className=" ml-5 mt-5 hover:text-blue-400">
            <a
              href="https://www.linkedin.com/in/francisco-villella-330b30238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="ml-[17px] text-3xl" />
              <span className="">Linkedin</span>
            </a>
          </div>
          <div className=" ml-5 mt-5 hover:text-green-500">
            <a
              href="https://wa.me/1140875898"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="ml-[17px] text-3xl" />
              <span className="">Whatsapp</span>
            </a>
          </div>
          <div className=" ml-2 mt-5 hover:text-red-600">
            <a
              href="mailto:franciscovillella2003@gmail.com?subject=Contactar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMail className="ml-1 text-3xl" />
              <span className="">Gmail</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Contact;
