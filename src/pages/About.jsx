
import '../styles/About.css';

const About = () => {
  return (
    <section className="page-section about" id="about">
      <div className="about__container">
        <div className="about__image">
          <img src="https://i.ibb.co/nk9kwFn/about-image.png" alt="about-image" />
        </div>
        <div className="about__content">
          <h2 className="page-section__title about__title">
            About <span>Me</span>
          </h2>
          <h3 className="about__sub-title">Frontend Developer</h3>
          <div className="about__description">
            <p>
              I am a recent graduate in Information Technology with a passion for software development.
              My academic background has provided me with a solid foundation in programming languages such as HTML, CSS, JavaScript, Java, C#, and Python, as well as a strong understanding of user experience design and modern software development practices. Aside from my technical skills, I possess strong communication and collaboration skills, and am able to work well in a team environment. I am passionate about developing software solutions that are both user-friendly and technologically advanced, and am committed to staying up-to-date with emerging technologies and trends. In my free time, I enjoy exploring new technologies, experimenting with programming languages, and developing personal projects. 
              My ultimate goal is to make a positive impact in the field of web and app development and contribute to the success of my team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
