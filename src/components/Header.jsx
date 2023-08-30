import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="Navbar">
      <div className="nav-logo-container">
        <img
          src="https://i.ibb.co/1M5wW8D/Logo-removebg-preview.png"
          alt="header__logo"
          className="header__logo"
        />
        <span className="nav-logo"></span>
      </div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#home" onClick={() => handleNavItemClick("home")}>
          Home
        </a>
        <a href="#about" onClick={() => handleNavItemClick("about")}>
          About
        </a>
        <a href="#services" onClick={() => handleNavItemClick("services")}>
          Services
        </a>
        <a href="#portfolio" onClick={() => handleNavItemClick("portfolio")}>
          Projects
        </a>
        <a href="#testimonials" onClick={() => handleNavItemClick("testimonials")}>
          Testimonials
        </a>
        <a href="#contact" onClick={() => handleNavItemClick("contact")}>
          Contact
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
