import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GalleryCarousel.css";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
} from "../../assets/Images/Gallery/Index.jsx";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
];

const GalleryCarousel = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="gallery-container">
      <div className="gallery-carousel">
      <div className="text">
      <h2>Gallery</h2>
      <p>Explore our advanced dental treatments and patient experiences here.</p>
      </div>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="carousel-slide">
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
};

export default GalleryCarousel;
