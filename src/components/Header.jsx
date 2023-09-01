import  { useState, useEffect } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          className={`header__logo ${isDesktop ? 'centered-logo' : ''}`}
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
        <a href="#resume" onClick={() => handleNavItemClick("resume")}>
          Skills
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
