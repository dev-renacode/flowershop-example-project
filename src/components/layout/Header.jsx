import { useState } from "react";
import logo from "../../assets/images/logo.webp";
import menubars from "../../assets/icons/bars.svg";
import xicon from "../../assets/icons/x.svg";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["Inicio", "Sobre Blomsy", "Productos", "Contactanos"];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="fixed z-20 w-full lg:pt-3 lg:px-5">
      {/* Contenedor principal */}
      <div className="flex items-center justify-between bg-[#FAFAFA] py-2 px-5 lg:px-8 w-full lg:max-w-7xl lg:mx-auto lg:rounded-xl lg:backdrop-blur-2xl lg:bg-blomsyGreen/80">
        {/* Logo */}
        <img className="w-28 h-auto object-contain" src={logo} alt="logo" />

        {/* Navegación Desktop */}
        <nav className="hidden lg:block">
          <ul className="flex gap-5 pt-2 text-greenText font-semibold text-lg">
            {navLinks.map((el) => (
              <li key={el}>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botón menú móvil */}
        <button onClick={handleClick} className="lg:hidden">
          <img className="pt-2" src={menubars} alt="bars icon menu" />
        </button>

        {/* Navegación móvil */}
        <nav
          className={`${
            open ? "translate-x-0" : "translate-x-full"
          } bg-blomsyGreen text-greenText font-semibold z-50 text-xl fixed top-0 right-0 w-50 h-screen transition-transform duration-300 ease-in-out lg:hidden`}
        >
          <button onClick={handleClick} className="pt-5 pl-2">
            <img src={xicon} alt="close icon" />
          </button>
          <ul className="flex flex-col gap-5 h-full pt-10 pl-5">
            {navLinks.map((el) => (
              <li key={el}>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Fondo oscurecido al abrir menú móvil */}
        <div
          onClick={handleClick}
          className={`${
            open ? "block" : "hidden"
          } fixed inset-0 bg-black opacity-50 lg:hidden z-40`}
        />
      </div>
    </header>
  );
};

export default Header;
