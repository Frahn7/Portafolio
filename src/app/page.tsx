import "~/styles/globals.css";
import Navbar from "./Components/Navbar";
import { About } from "./Components/About";
import { Experience } from "./Components/Experience";
import { Tec } from "./Components/Tec";
import { Projects } from "./Components/Projects";
import Contact from "./Components/Contact";
import { IdiomaProvider } from "~/Contexts/Idioma";

export default function HomePage() {
  return (
    <div className="bg-general">
      <IdiomaProvider>
        <Navbar />
        <About />
        <Experience />
        <Tec />
        <Projects />
        <Contact />
      </IdiomaProvider>
    </div>
  );
}
