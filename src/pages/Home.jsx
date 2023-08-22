
import { useEffect } from 'react';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa6';


const Home = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Web-developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup the Typed instance when the component is unmounted
    return () => {
      typed.destroy();
    };
  }, []);

  return (
  <section className="page-section home" id="home">
    <div className="home__content rain">
      <div className="home__content">
        <h2 className="home__title">Hello, I am Mzimasi Mbongwe</h2>
        <h1 className="home__name">A Web-developer</h1>
        <h2 className="home__title">
          I am a <span className="multiple-text"></span>
        </h2>
        <div className="home__description">
          <p>
            This is my official Portfolio website to showcase my all works related to
            web development and UI design.
          </p>
        </div>
        <div className="home__social social-media">
          <a href="https://github.com/mzimasimbongwe" className="social-media__link animated">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/mzimasi-mbongwe-217933208/" className="social-media__link animated">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://web.facebook.com/profile.php?id=100063655705791" className="social-media__link animated">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.instagram.com/scott_vincent98/" className="social-media__link animated">
            <FaInstagram className="icon" />
          </a>
        </div>
        <a href="mbongwe cv (3).pdf" className="btn">Download CV</a>
      </div>
      </div>
      <div className="home__image">
        <img src="https://i.ibb.co/jHcr2gk/scott.png" alt="home-image" />
      </div>
    </section>
  );
};

export default Home;
