import React from "react";
import Slider from "react-slick";

import review from "../../assets/Reviews/review1.jpg";
import review2 from "../../assets/Reviews/review2.jpg";
import review3 from "../../assets/Reviews/review3.jpg";
import review4 from "../../assets/Reviews/review4.jpg";

const Reviews = [review, review2, review3, review4];

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">What People Say</h2>
      <div className="px-4 md:px-16">
        <Slider {...settings}>
          {Reviews.map((img, index) => (
            <div key={index} className="px-2">
              <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                <img
                  src={img}
                  alt={`Review ${index + 1}`}
                  className="w-full h-64 object-cover rounded-md"
                />
                <p className="mt-4 text-sm text-gray-300 italic">
                  "Absolutely stunning experience with my AI companion!"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSection;
