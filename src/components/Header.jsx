import logo from "../assets/logo.webp";
import menubars from "../assets/bars.svg";
import xicon from "../assets/x.svg";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ["Inicio", "Nosotros", "Redes", "Contactanos"];

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className="flex fixed z-20 bg-[#FAFAFA] w-full justify-between items-center px-5 py-2">
        <img className="w-28 h-auto object-contain" src={logo} alt="logo" />
        <nav className="hidden">
          <ul>{/*navLinks.map((el) => el)*/}</ul>
        </nav>
        <button onClick={handleClick}>
          <img className="pt-2" src={menubars} alt="bars icon menu" />
        </button>
        <nav
          className={`${
            open ? "translate-x-0" : "translate-x-full"
          } bg-blomsyGreen text-defaultText font-semibold z-50 text-xl fixed top-0 right-0 w-60 h-screen transition-transform duration-300 ease-in-out`}
        >
          <button onClick={handleClick}>
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
        <div
          onClick={handleClick}
          className={`${
            open ? "block" : "hidden"
          } fixed inset-0 bg-black opacity-50 lg:hidden z-40`}
        />
      </header>
    </>
  );
};

export default Header;
