import logo from "../assets/logo-footer.png";

function Footer() {
    return (
      <footer>
        <img className="footer__logo" src={logo} alt="Logo footer" />
        <p className="footer__text">@ 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  
  export default Footer;