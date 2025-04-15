import logo from "../assets/logo.webp";
import menubars from "../assets/bars.svg";

const Header = () => {
  return (
    <header className="flex fixed z-10 bg-[#FAFAFA] w-full justify-between items-center px-5 py-2">
      <img className="w-28 h-auto object-contain" src={logo} alt="logo" />
      <nav className="hidden">
        <ul>
          <li>
            <a href="#">EXAMPLE</a>
          </li>
          <li>
            <a href="#">EXAMPLE</a>
          </li>
          <li>
            <a href="#">EXAMPLE</a>
          </li>
          <li>
            <a href="#">EXAMPLE</a>
          </li>
        </ul>
      </nav>
      <div>
        <img className="pt-2" src={menubars} alt="bars icon menu" />
      </div>
    </header>
  );
};

export default Header;
