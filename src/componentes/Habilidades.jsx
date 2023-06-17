import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Habilidades = () => {
  return (
    <>
      <div className="flex flex-row justify-center mt-28 " id="Habilidades">
        <div className="">
          <h2 className="text-white text-4xl underline font-mono font-semibold flex justify-center">
            Habilidades
          </h2>

          <div className="flex flex-row text-white mt-20 gap-14">

            <div className="border-2 bg-emerald-600 w-[320px] h-[80px] py-3 px-24">
              <div className="text-xl font-mono font-semibold">Cretividad</div>
              <div className="flex gap-2">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "black" }} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "black" }} />
                </span>
              </div>
            </div>
            <div className="border-2 bg-emerald-600 w-[320px] h-[80px] py-3 px-24">
              <div className="text-xl font-mono font-semibold">Organizacion</div>
              <div className="flex gap-2">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "black" }} />
                </span>
              </div>
            </div>
          </div>


          <div className="flex flex-row text-white mt-20 gap-14">

            <div className="border-2 bg-emerald-600 w-[320px] h-[80px] py-3 px-24">
              <div className="text-xl font-mono font-semibold">Comunicacion</div>
              <div className="flex gap-2">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar}/>
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} style={{ color: "black" }} />
                </span>
              </div>
            </div>
            <div className="border-2 bg-emerald-600 w-[320px] h-[80px] py-3 px-24">
              <div className="text-xl font-mono font-semibold ml-[-30px]">Responsabilidad</div>
              <div className="flex gap-2">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row text-white mt-20 gap-14">

        <div className="border-2 bg-emerald-600 w-[320px] h-[80px] py-3 px-24">
        <div className="text-xl font-mono font-semibold">Adaptacion</div>
        <div className="flex gap-2">
            <span>
            <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
            <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
            <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
            <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
            <FontAwesomeIcon icon={faStar} style={{ color: "black" }} />
            </span>
        </div>
        </div>
        <div className="border-2 bg-emerald-600 w-[320px] h-[80px] py-3 px-24">
        <div className="text-xl font-mono font-semibold">Resilencia</div>
        <div className="flex gap-2">
            <span>
            <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
            <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
            <FontAwesomeIcon icon={faStar} />
            </span>
            <span>
            <FontAwesomeIcon icon={faStar}/>
            </span>
            <span>
            <FontAwesomeIcon icon={faStar} style={{ color: "black" }} />
            </span>
        </div>
        </div>
        </div>


























        </div>
      </div>
    </>
  );
};
export default Habilidades;
