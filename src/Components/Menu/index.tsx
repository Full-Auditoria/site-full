import { useState } from "react";
import { Banner } from "./style.ts";
import logo from "./../../assets/logo.png";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Banner menuOpen={menuOpen}>
      <div>
        <img src={logo} alt="logo" />
        <div className="mobile-menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">Quem Somos</a>
          <a href="#services">Nossos Serviços</a>
          <a href="#workus">Trabalhe Conosco</a>
          <a href="#contact" className="button">
            Entre em Contato
          </a>
        </nav>
      </div>
    </Banner>
  );
};

export default Menu;
