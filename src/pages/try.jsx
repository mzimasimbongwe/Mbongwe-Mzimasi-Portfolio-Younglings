import React, { useEffect } from 'react';
import '../styles/try.css'; // Make sure to replace with your actual CSS file name

const SkillBox = () => {
  useEffect(() => {
    const animateSkills = () => {
      const skillListItems = document.querySelectorAll('.skill-box li');

      skillListItems.forEach((item, i) => {
        const bar = item.querySelector('.bar');
        const percent = item.getAttribute('data-percent') + '%';

        bar.querySelector('b').textContent = percent;

        setTimeout(() => {
          bar.style.width = percent;
        }, i * 1000);

        setTimeout(() => {
          bar.querySelector('b').style.display = 'block';
        }, i * 1000 + 1000);
      });
    };

    animateSkills();
  }, []);

  return (
    <div className="skill-box">
      <h3>Development</h3>
      <div className="skills">
        <ul>
          {/* Replace the existing development skills with your provided skills */}
          <li data-percent="90">
            <span>Html</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="85">
            <span>Css</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>Javascript</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="80">
            <span>Java</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>Node.js</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>GitHub</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>Firebase</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>SQL</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>React js</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>Vite</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>Figma</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          <li data-percent="70">
            <span>Canva</span>
            <span className="bar">
              <b></b>
            </span>
          </li>
          {/* End of provided development skills */}

          {/* Add your work experience */}
          <li>
            <span>Junior Software Developer at Younglings Africa, Cape Town, Western Cape, RSA</span>
          </li>
          <li>
            <span>System Development Learnership at CapaCiTi, Salt River, Cape Town, Western Cape, RSA (Jan 2023 - July 2023)</span>
          </li>
          <li>
            <span>End User Computing Learnership at Multichoice, Bellville, Western Cape, RSA (Jan 2022 - Dec 2022)</span>
          </li>
          <li>
            <span>IT TECHNICIAN INTERN at Masibambane Senior Secondary School, Kraaifontein, Western Cape, RSA (Jan 2021 - Dec 2022)</span>
          </li>
          {/* End of work experience */}
        </ul>
      </div>
    </div>
  );
};

export default SkillBox;
