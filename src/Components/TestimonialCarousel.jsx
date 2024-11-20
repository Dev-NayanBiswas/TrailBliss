import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageUploader from "../Utilities/Scripts/ImageUploader";

const testimonials = [
    {
      "image": "johnSnow.webp",
      "comment": "Trail Bliss offers the perfect balance of adventure and sustainability. Every moment feels connected to nature’s beauty. It’s a magical experience that combines thrilling adventures with a strong focus on eco-consciousness. Truly a wonderful choice for anyone looking to explore and preserve our planet!",
      "name": "John Snow"
    },
    {
      "image": "daenerys.jpg",
      "comment": "Their eco-friendly adventures are thoughtfully planned, offering an unforgettable experience for nature enthusiasts. From breathtaking destinations to sustainable practices, Trail Bliss ensures every journey is meaningful. Highly recommended for anyone seeking adventure while being mindful of the environment. A truly remarkable experience!",
      "name": "Daenerys Targaryen"
    },
    {
      "image": "liam.webp",
      "comment": "Trail Bliss makes you appreciate the wonders of nature like never before. Their exceptional service and unwavering commitment to environmental preservation set them apart. Every trip is inspiring, adventurous, and incredibly rewarding. A must-try for those passionate about eco-tourism and sustainable travel!",
      "name": "Liam Carter"
    },
    {
      "image": "sophie.jpg",
      "comment": "A must-try for adventurers! Trail Bliss sets the standard for sustainable travel. Their inspiring approach and over 20 years of excellence deliver unforgettable experiences that showcase nature’s beauty while prioritizing its protection. Perfect for eco-conscious travelers seeking adventure and serenity.",
      "name": "Sophia Brown"
    },
    {
      "image": "emma.webp",
      "comment": "Trail Bliss offers breathtaking destinations and responsible adventures. Immerse yourself in nature while supporting sustainability and conservation. Experience unforgettable moments, thrilling journeys, and serene escapes. Trail Bliss truly redefines eco-tourism with adventures designed to inspire and protect. Simply amazing!",
      "name": "Emma Watson"
    }
  ]
  

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="w-full py-10 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-left text-gray-700/45">
        Happy Faces
      </h2>
      <div className="h-0.5 border-b-[1px] border-[var(--primary-color)] my-4 w-7/12"></div>
      <div className="max-w-5xl grid grid-cols-1 mx-auto rounded-xl">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col min-h-[320px] items-center rounded-lg p-6 md:flex-row md:gap-6"
            >
              <img
                src={ImageUploader(testimonial.image)}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0"
              />
              <div className="flex flex-col items-center md:text-left min-h-[140px] rounded-lg">
                <p className="text-lg text-gray-700 italic mb-4">
                  “{testimonial.comment}”
                </p>
                <span className="text-sm font-bold text-[var(--primary-color)] text-right">
                  - {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
