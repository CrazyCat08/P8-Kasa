import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img className="header__logo" src={logo} alt="Logo" />
      <nav className="header__nav">
        <Link className="nav__link" to="/">
          Accueil
        </Link>
        <Link className="nav__link" to="/about">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
