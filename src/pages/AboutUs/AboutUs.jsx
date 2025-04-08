import React from "react";
import hero_img from "../../assets/aboutus-hero-img.webp";
import image from "../../assets/secondary-content-img.webp";
import image_2 from "../../assets/secondary-content-img2.webp"; // Fixed the file name here
import videobg from '../../assets/0_Office_Dentist_3840x2160.mp4'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import gallery_1 from '../../assets/gallery-1.webp'
import gallery_2  from '../../assets/gallery-2.webp'
import gallery_3  from '../../assets/gallery-3.webp'
import gallery_4  from '../../assets/gallery-4.webp'
import { Link } from "react-router-dom";
import "../AboutUs/AboutUs.css";

const AboutUs = () => {
  const settings = {
    dots: true,          // Show navigation dots
    infinite: true,      // Loop through the slides
    speed: 200,          // Transition speed
    slidesToShow: 1,     // Show one image at a time
    slidesToScroll: 1,   // Scroll one image at a time
  };
  return (
    <>
      <section>
        <div className="main-content">
          <video autoPlay  loop muted className="aboutus-background-video">
            <source
              src={videobg}
              type="video/mp4"
            />
          </video>

          <div className="main-content-text">
            <h2 className="main-content-heading">
              Welcome to Vishnu <br />
              Dental Clinic
            </h2>
            <h4 className="main-content-subheading">
              Your Smile, Our Priority
            </h4>
            <p className="main-content-para">
              At Vishnu Dental Clinic in Chilakaluripet, we go beyond routine
              dental care—we treat you like family. Whether you need a routine
              check-up, root canal treatment, tooth implantation, or relief from
              dental pain, our goal is to provide expert care in a warm,
              stress-free environment. We believe a healthy, pain-free smile
              enhances your confidence and quality of life.
            </p>
            <Link to="/contactus">
              <button className="main-content-btn">Contact</button>
            </Link>
          </div>
          <div className="main-img-content">
            <figcaption>
              <img
                src={hero_img}
                alt="Dental staff providing care"
                loading="lazy"
                className="aboutus-hero-img"
              />
            </figcaption>
          </div>
        </div>

        <div className="secondary-content">
          <div className="secondary-img-content">
            <figcaption>
              <img
                src={image}
                alt="Dental office staff"
                loading="lazy"
                className="secondary-content-img1"
              />
              <img
                src={image_2}
                alt="Patient being treated at the clinic"
                loading="lazy"
                className="secondary-content-img2"
              />
            </figcaption>
          </div>
          <div className="secondary-content-text">
            <h2 className="secondary-content-heading">
              Our Commitment <br /> Statement
            </h2>
            <p className="secondary-content-para">
              At Vishnu Dentals, we understand that dental issues are a part of
              life—whether it's children enjoying sweets, adults facing
              age-related concerns, or unexpected dental emergencies. While no
              dental problem can be permanently eliminated, our commitment is to
              always be ready to provide the best care whenever you need it.
              With our expertise, advanced treatments, and patient-first
              approach, we ensure that every visit brings relief, confidence,
              and a healthier smile. No matter the dental challenge, we are here
              to help you every step of the way.
            </p>
          </div>
        </div>

        <div className="aboutus-gallery">
          <div className="div">
          <h2 className="gallery-content-subheading">
              Our Awards  & Certificates
            </h2>
          </div>
          <div className="gallery-grid">
          <img src={gallery_1} alt="gallery-img-1" className="gallery-img"/>
          <img src={gallery_2} alt="gallery-img-2" className="gallery-img"/>
          <img src={gallery_3} alt="gallery-img-3" className="gallery-img"/>
          <img src={gallery_4} alt="gallery-img-4" className="gallery-img"/>

          </div>
      
   
    </div>
      </section>
    </>
  );
};

export default AboutUs;
