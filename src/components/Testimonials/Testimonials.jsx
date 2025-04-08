import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import "./Testimonials.css";

const testimonialsData = [
  {
    name: "Prathipati Rajeswari",
    message:
      "Excellent Doctor!!! Dr. Rajasekhar was very supportive, takes care with Great attention. I have been pleased with your treatment. Thank you",
  },
  {
    name: "Priya Reddy",
    message:
      "A GOOD DOCTOR TREATS THE DISEASE BUT THE GREAT DOCTOR TREATS THE PATIENT WHO HAS DISEASE. The perfect example for that quote is Dr.Rajashekar garu 🙏🏻. He is very caring to his patients."
  },
  {
    name: "Raja Reddy",
    message:
      "Highly knowledgeable doctor and best treatment. Now I was happy and free from tooth ache. The perfect example for that quote is Dr.Rajashekar garu 🙏🏻. He is very caring to his patients."
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title" data-aos="fade-up">
          What Our Patients Say
        </h2>
        <div className="testimonials-cards">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={`${index * 150}`}
            >
              <p className="testimonial-message">"{testimonial.message}"</p>
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <span className="testimonial-title">{testimonial.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
