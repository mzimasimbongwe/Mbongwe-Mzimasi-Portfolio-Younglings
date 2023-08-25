import  { useState } from 'react';
 

const Home = () => <div id="home">Home Content</div>;
const About = () => <div id="about">About Content</div>;
const Services = () => <div id="services">Services Content</div>;
const Projects = () => <div id="portfolio">Projects Content</div>;
const Testimonials = () => <div id="testimonials">Testimonials Content</div>;
const Contact = () => <div id="contact">Contact Content</div>;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (event, section) => {
    event.preventDefault();
    const target = section;
    const targetElement = document.getElementById(target);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
      setMenuOpen(false);
      setActiveSection(section);
    }
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div>
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <img
          src="https://i.ibb.co/1M5wW8D/Logo-removebg-preview.png"
          alt="header__logo"
          className="header__logo"
        />
        <div className={`header__menu menu ${menuOpen ? 'open' : ''}`}>
          <div className="menu__icon" onClick={handleMenuToggle}>
            <span></span>
          </div>
          <nav className="menu__body">
            <ul className="menu__list">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={(event) => handleMenuClick(event, section.id)}
                    className={`menu__link ${activeSection === section.id ? 'active' : ''}`}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <div className="content">
        {activeSection === 'home' && <Home />}
        {activeSection === 'about' && <About />}
        {activeSection === 'services' && <Services />}
        {activeSection === 'portfolio' && <Projects />}
        {activeSection === 'testimonials' && <Testimonials />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </div>
  );
};

export default Header;
