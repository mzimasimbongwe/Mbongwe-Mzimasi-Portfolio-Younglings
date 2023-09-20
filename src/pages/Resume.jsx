import { useState, useEffect } from 'react';
import '../styles/Skills.css';
import '../styles/WorkExperience.css';
import '../styles/Skillsexp.css'

const SkillsAndExperience = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`skillsAndExp ${darkMode ? 'dark-mode' : ''}`} id="resume">
      <label className={`electric-switch ${darkMode ? 'active' : ''}`}>
        <input type="checkbox" onChange={toggleDarkMode} />
        <span className="slider"></span>
      </label>
      <h2 className="page-section__title resume__title">
        Skills And <span>Experience</span>
      </h2>
      <div className="skillsAndExperienceContainer">
        <div className="skillsBox">
        <img src="https://i.ibb.co/pvDkK6s/Untitled-design-8.png"   alt="Skills Image" className="skills-image" />
          <h1>Prgramming Skills</h1>
          <div className="skills">
            <h2>Html</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '85%' }}></div>
            </div>
            <h2>Css</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h2>Javascript</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '80%' }}></div>
            </div>
            <h2>Java</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h2>Node.js</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h2>GitHub</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h2>Firebase</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h2>SQL</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h2>React js</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h1>Designing Skills</h1>
            <h2>Vite</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h2>Figma</h2>
          </div>
          <div className="skills">
            <div className="progress">
              <div className="percent" style={{ width: '70%' }}></div>
            </div>
            <h2>Canva</h2>
          </div>
          <div className="progress">
              <div className="percent" style={{ width: '90%' }}></div>
            </div>
        </div>
        <div className="work-exp">
          <div className="container">
            <div className="work">
              <h2>Work Experience</h2>
              <p>
                In my software-focused work experience, I have demonstrated innovation and a keen adherence to deadlines. As a Software Developer, I have engaged with designing and developing user-centered digital/print marketing assets, overseeing the entire process from inception to polished final products.
              </p>
            </div>
            <div className="exp">
              <div>
                <h3>Junior Software Developer</h3>
                <h5>Younglings Africa, Cape Town, Western Cape, RSA<br /><p>2023 - Present</p></h5>
                <div className="pbox">
                  <p>18 Months</p>
                </div>
                <hr />
              </div>
              <div>
                <h3>System Development Learnership</h3>
                <h5>CapaCiTi, Salt River, Cape Town, Western Cape, RSA<br /><p>Jan 2023 - July 2023</p></h5>
                <div className="pbox">
                  <p>5 Months</p>
                </div>
                <hr />
              </div>
              <div>
                <h3>End User Computing Learnership</h3>
                <h5>Multichoice, Bellville, Western Cape, RSA<br /><p>Jan 2022 - Dec 2022</p></h5>
                <div className="pbox">
                  <p>12 Months</p>
                </div>
                <hr />
              </div>
              <div>
                <h3>IT TECHNICIAN INTERN</h3>
                <h5>Masibambane Senior Secondary School, Kraaifontein, Western Cape, RSA<br /><p>Jan 2021 - Dec 2022</p></h5>
                <div className="pbox">
                  <p>12 Months</p>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndExperience;
