import React from "react";
import videobg from "../../assets/0_Office_Dentist_3840x2160.mp4";
import "../Services/services.css";
import Service from "./services-container/Service";
import personalize_img1 from '../../assets/personalize-img1.webp'
import personalize_img2 from '../../assets/personalize-img2.webp'
const Services = () => {
  return (
    <>
      <section>
        <div className="services-main-content">
          <video autoPlay loop muted className="services-background-video">
            <source src={videobg} type="video/mp4" />
          </video>
        </div>
        <div className="services-hero-content">
          <h2 className="services-hero-heading">
            Advanced Dental Care, Right Here in Chilakaluripet.{" "}
          </h2>
          <p className="services-hero-para">
            Welcome to Vishnu Dental Clinic, your trusted and advanced dental
            care provider in Chilakaluripet. We are proud to be NABH-certified,
            ensuring the highest standards of quality and patient safety. We
            offer comprehensive services for the whole family, including root
            canals, dental implants, orthodontics (braces and clear aligners),
            ceramic crowns, and children's dentistry. Our experienced dentists
            and staff utilize modern technology in treatment. Vishnu Dental
            Clinic is committed to providing quality dental care
          </p>
        </div>
        <Service />
        <div className="personalize-content-container">
          <div className="div">
            <h2 className="personalize-heading">Personalize Care</h2>
            <p className="personalize-para">
              Building lasting relationship with our valued patients
            </p>
          </div>
         
        </div>

        {/* //// */}
        <div className="personalize-img-container">
          <figcaption>
          <img src={personalize_img1}  alt="personalize-img1" className="personalize-img" loading="lazy"/>
          </figcaption>
          <figcaption>
          <img src={personalize_img2} alt="personalize-img2" className="personalize-img" loading="lazy"/>
          </figcaption>
        </div>

        <div className="safety-content-container">
          <div className="div">
            <h2 className="safety-heading">Safety Standards</h2>
            <p className="safety-para">
              Maintaining highest and hygiene aand safety our patients
            </p>
          </div>
          <button className="safety-btn">Discover</button>
        </div>
      
      </section>
    </>
  );
};

export default Services;
