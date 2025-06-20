import React from "react";
import Slider from "react-slick";

import review1 from "../../assets/Reviews/review1.jpg";
import review2 from "../../assets/Reviews/review2.jpg";
import review3 from "../../assets/Reviews/review3.jpg";
import review4 from "../../assets/Reviews/review4.jpg";

const reviews = [
  {
    image: review1,
    text: "Absolutely stunning experience with my AI companion!",
  },
  {
    image: review2,
    text: "The conversations feel so real — it's like magic!",
  },
  {
    image: review3,
    text: "Never felt more connected to digital companionship. 10/10.",
  },
  {
    image: review4,
    text: "Love the emotional intelligence this avatar shows!",
  },
];

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
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        What People Say
      </h2>
      <div className="px-4 md:px-16">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="px-2">
              <div className="bg-gray-800 rounded-lg p-4 shadow-md h-full flex flex-col justify-between">
                <img
                  src={review.image}
                  alt={`Review ${index + 1}`}
                  className="w-full h-64 object-cover rounded-md"
                />
                <p className="mt-4 text-sm text-gray-300 italic text-center">
                  “{review.text}”
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
