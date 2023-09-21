import { useState, useEffect } from "react";
import "../styles/Testimonials.css";
const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Prof Seraphin Desire Eyono Obono",
      role: "Lecturing, Research, Students Supervision, Students Mentorship",
      designation:
        "Mzimasi was my Advanced Diploma student in Information Technology with a specialization in Applications Development. He is passionate about coding and web development. Mzimasi is a hard worker, and I can also see him as a leader, based on how he was working with the other students in class. He is a young man whose performance can easily be optimized if he is placed in a suitable environment with enough resources.",
      package: "",
      image:
        "https://i.ibb.co/S0LyqWC/Whats-App-Image-2023-08-16-at-16-03-21-removebg-preview.png",
    },
    {
      id: 2,
      name: "Anganathi Zingca",
      role: "Vox Telecom Technian",
      designation: "",
      package:
        "Mzimasi is an excellent team player who works collaboratively with others to achieve common goals. He is always willing to lend a helping hand, share his knowledge and expertise, and provide guidance and support to his colleagues.",
      image:
        "https://i.ibb.co/4WLw8Y5/Whats-App-Image-2023-08-16-at-16-03-21-2-removebg-preview.png",
    },
    {
      id: 3,
      name: "Kenneth Basjan",
      role: "Younglings Junior Software Developer",
      designation:
        "I have never been so impressed with someone's work ethic like this before. Mzimasi has been such a blessing to my business. I highly recommend him, especially if you have any request that need Web and Apps  Development .",
      image:
        "https://i.ibb.co/zXgv5Bv/20230331125920-IMG-1968-removebg-preview.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="testimonial_container">
      <h2 className="page-section__title services__title" id="testimonials">
        My <span>Testimonials</span>
      </h2>
      <div className="testimonial_item_container">
        <a href="#" target="_blank" className="testimonial_stories_link">
          <div className="testimonial_card zoom">
            <div className="testimonial_text">
              <h3 style={{ fontSize: "24px", fontWeight: 600 }}>
                {testimonials[activeIndex].name}
              </h3>
              <p className="testimonial_role">
                {testimonials[activeIndex].role}
              </p>
              <hr className="hr_style" />
              <p style={{ fontSize: "20px" }}>
                {testimonials[activeIndex].designation}
              </p>
              <p style={{ fontSize: "20px" }}>
                {testimonials[activeIndex].package}
              </p>
            </div>
            <div className="testimonial_image">
              <img
                src={testimonials[activeIndex].image}
                height="80"
                width="130"
                className="testimonial_image_second"
                alt={`testimonial ${testimonials[activeIndex].id}`}
              />
            </div>
            <div className="testimonial_bottom">
              <img
                src="https://i.ibb.co/17kg1nz/Modern-Creative-Technology-Logo-1-removebg-preview.png"
                height="20"
                width="100"
                loading="lazy"
                className="testimonial_company_image"
                alt={`company logo ${testimonials[activeIndex].id}`}
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
