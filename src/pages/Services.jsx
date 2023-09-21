import React from "react";
import "../styles/Services.css"; // Import your CSS file here

const Services = () => {
  return (
    <div className="services" id="services">
      <div className="container">
        <div className="text">
          <h2>
            <span>My</span> Services
          </h2>
          <p>Explore Services that I provide</p>
        </div>

        <div className="service-card">
          <div className="card">
            <i className="fas fa-pencil-ruler"></i>
            <h4>Web Development</h4>
            <p>
              Hello! I specialize in building websites for individuals and small
              organizations, translating their ideas into engaging online
              platforms. My focus is on designing visually appealing and
              user-friendly websites that accurately reflect the brand identity
              of my clients. With expertise in HTML, CSS, and JavaScript, I
              ensure that every website I create is both aesthetically pleasing
              and fully functional. Throughout the development process, I work
              closely with my clients, incorporating their unique requirements
              and valuable feedback. Witnessing the positive impact that a
              well-crafted website can have on my client's online presence and
              business success is incredibly rewarding.
            </p>
          </div>

          <div className="card">
            <i className="fas fa-magic"></i>
            <h4>Resume Optimization Specialist</h4>
            <p>
              I am a resume specialist with a focus on crafting professional
              resumes that effectively combine documents to showcase
              individuals' skills and qualifications. With attention to detail
              and a deep understanding of industry standards, I create impactful
              resumes that highlight the strengths and accomplishments of
              candidates. By integrating essential documents such as cover
              letters, certifications, and portfolios, I provide comprehensive
              representations of candidates' expertise. With my expertise in
              resume writing and document consolidation, I help clients stand
              out in a competitive job market and increase their chances of
              securing their desired positions.
            </p>
          </div>

          <div className="card">
            <i className="fab fa-sketch"></i>
            <h4>Online Fashion Promoter</h4>
            <p>
              As an Online Fashion Promoter, I specialize in showcasing designer
              clothing and effectively advertising them in the digital realm.
              Through strategic online platforms and targeted marketing
              techniques, I create captivating content that highlights the
              unique styles and features of the designer's clothing line. By
              leveraging my knowledge of current fashion trends and consumer
              preferences, I aim to generate interest and engagement among the
              target audience. With a keen eye for aesthetics and a passion for
              fashion, I craft visually appealing visuals and persuasive copy to
              captivate potential customers and drive traffic to the designer's
              online store.
            </p>
          </div>
        </div>

        <a href="#">See All Services</a>
      </div>
    </div>
  );
};

export default Services;
