import immobili from "../assets/imgs/gest.jpg";
import music from "../assets/imgs/music.jpg";
import meteo from "../assets/imgs/meteo.jpg";
function Progetti() {
  return (
    <>
      <div className="m-3" id="progetti">
        <div className="border border-amber-400 p-3 bg-linear-to-b from-blue-900 to-blue-200">
          <h1 className="text-blue-900 text-3xl font-bold text-center p-3 border border-blue-400 bg-amber-200">
            Progetti
          </h1>
          <div className="flex flex-col justify-center items-center">
            {/*card dei progetti */}
            <div className="card sm:card-side max-w-sm sm:max-w-full my-3 border border-amber-400 sm:h-[15em] sm:w-[100%] md:w-[90%]">
              <figure className="h-auto  sm:w-[35%]">
                <img
                  src={immobili}
                  alt="immobili"
                  className="hover:scale-110 transition-all duration-200 ease-linear hover:cursor-pointer object-cover"
                  onClick={() => {
                    window.open(
                      "https://github.com/GiuseppeTuccilli/Capstone-Gestionale-Immobili",
                      "_blank"
                    );
                  }}
                />
              </figure>
              <div className="card-body bg-gray-800 text-white  sm:w-[65%]">
                <div className="overflow-y-auto">
                  <h5 className="card-title mb-0.5 text-white">
                    Gestionale Immobili (Front-End + Back-End)
                  </h5>
                  <p className="mb-2">
                    Gestionale con registrazione e autenticazione utenti,
                    funzionalità di recupero password.
                  </p>
                </div>

                <div className="card-actions justify-end grow items-end">
                  <button
                    className="btn bg-blue-400 hover:bg-blue-200 border-amber-200 mt-auto "
                    onClick={() => {
                      window.open(
                        "https://github.com/GiuseppeTuccilli/Capstone-Gestionale-Immobili",
                        "_blank"
                      );
                    }}
                  >
                    <span className="text-2xl mb-1 icon-[tabler--brand-github]"></span>{" "}
                    Repository
                  </button>
                </div>
              </div>
            </div>
            {/*fine card */}
            {/*card dei progetti */}
            <div className="card sm:card-side max-w-sm sm:max-w-full my-3 border border-amber-400 sm:h-[15em] sm:w-[100%] md:w-[90%]">
              <figure className="h-auto sm:w-[35%]">
                <img
                  src={music}
                  alt="music"
                  className="hover:scale-110 transition-all duration-200 ease-linear hover:cursor-pointer object-cover"
                  onClick={() => {
                    window.open(
                      "https://github.com/GiuseppeTuccilli/CloneAppleMusic",
                      "_blank"
                    );
                  }}
                />
              </figure>
              <div className="card-body bg-gray-800 text-white sm:w-[65%]">
                <div className="overflow-y-auto">
                  <h5 className="card-title mb-0.5 text-white">
                    Clone Apple Music (Front-End)
                  </h5>
                  <p className="mb-2">
                    Pagina iniziale di Apple Music totalmente responsive con
                    player e barra di ricerca funzionante.
                  </p>
                </div>
                <div className="card-actions justify-end grow items-end">
                  <button
                    className="btn bg-blue-400 hover:bg-blue-200 border-amber-200"
                    onClick={() => {
                      window.open(
                        "https://github.com/GiuseppeTuccilli/CloneAppleMusic",
                        "_blank"
                      );
                    }}
                  >
                    <span className="text-2xl mb-1 icon-[tabler--brand-github]"></span>{" "}
                    Repository
                  </button>
                </div>
              </div>
            </div>
            {/*fine card */}
            {/*card dei progetti */}
            <div className="card sm:card-side max-w-sm sm:max-w-full my-3 border border-amber-400 sm:h-[15em] sm:w-[100%] md:w-[90%]">
              <figure className="h-auto  sm:w-[35%]">
                <img
                  src={meteo}
                  alt="meteo"
                  className="hover:scale-110 transition-all duration-200 ease-linear hover:cursor-pointer object-cover"
                  onClick={() => {
                    window.open(
                      "https://github.com/GiuseppeTuccilli/MeteoWebApp",
                      "_blank"
                    );
                  }}
                />
              </figure>
              <div className="card-body bg-gray-800 text-white  sm:w-[65%]">
                <div className="overflow-y-auto">
                  <h5 className="card-title mb-0.5 text-white">
                    Meteo Web App (Front-End)
                  </h5>
                  <p className="mb-2">
                    App per il meteo totalmente responsive con ricerca località
                    e previsioni per 5 giorni.
                  </p>
                </div>
                <div className="card-actions justify-end grow items-end">
                  <button
                    className="btn bg-blue-400 hover:bg-blue-200 border-amber-200"
                    onClick={() => {
                      window.open(
                        "https://github.com/GiuseppeTuccilli/MeteoWebApp",
                        "_blank"
                      );
                    }}
                  >
                    <span className="text-2xl mb-1 icon-[tabler--brand-github]"></span>{" "}
                    Repository
                  </button>
                </div>
              </div>
            </div>
            {/*fine card */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Progetti;
