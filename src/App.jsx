import Header from "./components/Header";
import hero from "./assets/hero.webp";
import wave from "./assets/wave.svg";
import wave2 from "./assets/wave2.svg";

function App() {
  return (
    <>
      <Header />
      <section className="relative">
        <img
          className="w-full h-[70vh] object-cover brightness-75"
          src={hero}
          alt=""
        />
        <div class="absolute inset-0 bg-black/40 backdrop-blur-xs" />
        <div className="absolute inset-0 h-full flex flex-col justify-center px-5 gap-3 pt-9">
          <h2 className="text-defaultText font-bold text-4xl">
            Haz florecer cada momento
          </h2>
          <h3 className="font-semibold text-pink-200 text-xl">
            ¡Consigue las flores más hermosas con nosotros!
          </h3>
          <p className="text-defaultText">
            ¡La empresa de flores más conocida del sector!, enviando flores a
            todo el pais con envíos veloces y fiables.
          </p>

          <div>
            <button className="bg-blomsyGreen text-greenText px-2 py-2 rounded-lg hover:bg-[#5d9683] transition-colors font-medium">
              ¡Contactanos!
            </button>
          </div>
        </div>
        <img className="absolute bottom-0" src={wave} alt="" />
      </section>
      <section className="bg-blomsyGreen w-full h-96 text-greenText">
        <div className="px-5 flex flex-col justify-center h-full space-y-3">
          <h2 className="font-bold text-3xl">Sobre Blomsy</h2>
          <p className="">
            En Blomsy creemos que cada flor tiene una historia que contar.
            Creamos arreglos únicos para cada ocasión, con amor, cuidado y un
            toque de diseño moderno. Flores frescas, ideas frescas.
          </p>
          <p className="italic">Con cariño, el equipo de Blomsy.</p>
        </div>
      </section>
      <section className="relative bg-white w-full h-[70vh]">
        <img className="absolute top-0" src={wave2} alt="" />
      </section>
    </>
  );
}

export default App;
