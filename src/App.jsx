import Header from "./components/Header";
import hero from "./assets/hero.webp";

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
            <button className="bg-blomsyGreen text-white/95 px-2 py-2 rounded-lg hover:bg-[#5d9683] transition-colors font-medium">
              ¡Contactanos!
            </button>
          </div>
        </div>
      </section>
      <section className="bg-blomsyGreen text-defaultText font-semibold">
        <nav>
          {/*<ul className="flex gap-4 justify-center py-3">
            {secciones.map((el) => (
              <li>
                <a href="">{el}</a>
              </li>
            ))}
          </ul>*/}
        </nav>
      </section>
    </>
  );
}

export default App;
