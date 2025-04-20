import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FlowerCard from "./components/ui/FlowerCard";
import CommentsCard from "./components/ui/CommentsCard";

import hero from "./assets/images/hero.webp";
import wave from "./assets/icons/wave.svg"; // Aún no se usa, podrías eliminarlo si no lo necesitas
import flower1 from "./assets/images/flower1.webp";
import sobreblomsy from "./assets/images/sobreblomsy.webp";

function App() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative">
        <img
          className="w-full h-[90vh] object-cover brightness-75"
          src={hero}
          alt=""
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
        <div className="absolute inset-0 h-full flex flex-col justify-center px-5 lg:px-5 gap-3 pt-9 lg:max-w-7xl mx-auto">
          <h2 className="text-defaultText font-bold text-4xl lg:text-6xl">
            Haz florecer cada momento
          </h2>
          <h3 className="font-semibold text-pink-200 text-xl lg:text-2xl">
            ¡Consigue las flores más hermosas con nosotros!
          </h3>
          <p className="text-defaultText lg:text-xl">
            ¡La empresa de flores más conocida del sector!, enviando flores a
            todo el país con envíos veloces y fiables.
          </p>
          <div className="lg:pt-10">
            <button className="bg-blomsyGreen text-greenText px-2 py-2 lg:px-8 lg:py-3 lg:text-base rounded-lg hover:bg-[#5d9683] transition-colors font-medium">
              ¡Contáctanos!
            </button>
          </div>
        </div>
      </section>

      {/* Sobre Blomsy */}
      <section className="w-full h-screen lg:h-auto text-greenText relative lg:my-20 lg:max-w-7xl lg:mx-auto lg:flex items-center gap-20">
        <div className="flex flex-col justify-center h-full space-y-3 text-pretty lg:w-5xl px-5 lg:px-5">
          <h2 className="font-bold text-3xl">Sobre Blomsy</h2>
          <p>
            En Blomsy creemos que cada flor tiene una historia que contar.
            Creamos arreglos únicos para cada ocasión, con amor, cuidado y un
            toque de diseño moderno. Flores frescas, ideas frescas.
          </p>
          <p>
            Nuestro equipo combina creatividad, amor por la naturaleza y un
            profundo conocimiento del arte floral para diseñar arreglos que
            inspiran, consuelan, celebran y acompañan. Ya sea un cumpleaños, una
            despedida, un "te quiero" o simplemente un momento para alegrar el
            día, en Blomsy encontrarás el detalle perfecto.
          </p>
          <p>
            Trabajamos con flores frescas seleccionadas cuidadosamente,
            priorizando la calidad y la sostenibilidad. Nos enorgullece formar
            parte de momentos especiales en la vida de nuestros clientes, y eso
            nos impulsa a dar siempre lo mejor.
          </p>
          <p className="italic">Con cariño, el equipo de Blomsy.</p>
        </div>
        <div className="w-3xl hidden lg:block px-5">
          <img
            className="w-full h-auto rounded-xl shadow-lg object-cover"
            src={sobreblomsy}
            alt=""
          />
        </div>
      </section>

      {/* Arreglos Destacados */}
      <section className="relative w-full h-full bg-blomsyGreen">
        <div className="lg:max-w-7xl mx-auto flex flex-col">
          <h2 className="font-bold text-3xl text-greenText text-center py-16">
            Nuestros Arreglos Destacados
          </h2>

          <div className="flex flex-col space-y-10 lg:space-y-0 px-5 lg:px-5 lg:flex-row lg:gap-9">
            <FlowerCard img={flower1} title="Armonía Solar" price="15.000" />
            <FlowerCard img={flower1} title="Armonía Solar" price="15.000" />
            <FlowerCard img={flower1} title="Armonía Solar" price="15.000" />
          </div>

          <button className="bg-white text-greenText py-2 my-7 rounded-xl mx-5 lg:mx-5">
            Ver catálogo completo
          </button>
        </div>
      </section>

      {/* Testimonios */}
      <section className="flex flex-col lg:flex-col mb-30">
        <h2 className="text-greenText font-bold text-3xl py-20 text-center">
          Testimonios
        </h2>

        <div className="flex flex-col gap-14 lg:flex-row lg:max-w-7xl mx-auto lg:gap-0">
          <div className="flex-1">
            <CommentsCard
              text="“Quedé encantada con el ramo, llegó a tiempo y más hermoso de lo que imaginé. ¡Gracias Blomsy por hacerlo tan especial!”"
              author="— Camila R., Santiago 🏡"
            />
          </div>
          <div className="flex-1">
            <CommentsCard
              text="“La atención al cliente fue excelente y mi esposa amó las flores. ¡Definitivamente volveré a comprar!”"
              author="— Jorge M., Valparaíso 💐"
            />
          </div>
          <div className="flex-1">
            <CommentsCard
              text="“Lo pedí para un cumpleaños y llegó con una nota preciosa. Súper recomendados.”"
              author="— Antonia G., Concepción 🎉"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
