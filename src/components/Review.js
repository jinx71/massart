"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "/public/styles/MasterClass.css";

const testimonials = [
  {
    id: 1,
    name: "Sagnik Roy",
    title: "Founder & CEO",
    text: "Puja Art has transformed our understanding and appreciation of art in a profound way. The collection is extraordinary.",
    rating: 5,
    image: "/images/Ellipse 115.png",
    video: "/images/Group .png",
  },
  {
    id: 2,
    name: "Amit Das",
    title: "Art Collector",
    text: "The quality and variety of artwork available on Puja Art are impressive. It's my go-to platform for discovering new artists.",
    rating: 5,
    image: "/images/Ellipse 116.png",
    video: "/images/Group .png",
  },
  // Add more items as needed
];

const Review = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white w-full overflow-hidden">
      <div className="pl-[32px] pr-[56px] pb-[25px] pt-[60px]">
        <h2 className="text-[24px] font-bold xs:leading-[36px] text-left">
          What our <span className="text-red-500">popular customers </span>are
          saying
        </h2>
        <p className="pt-[10px] text-[12px] font-normal leading-[18px]">
          Find out more about our team, vision, and dedication to creating
          extraordinary experiences. In this section, we share our story and our
          commitment to the success of each event.
        </p>
      </div>
      <div className="px-[22px]">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-[10px]">
              <div className="bg-white p-[25px] shadow-lg">
                <div>
                  <Image
                    src={testimonial.video}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-full h-[137px] object-cover"
                  />
                </div>
                <p className="text-[12px] pt-[15px] pb-[35px] font-helvetica md:text-[18px] font-normal text-gray-600">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className=" font-helvetica lg:text-[18px] md:text-[18px] sm:text-[12px] xs:text-[12px] font-bold">
                      {testimonial.name}
                    </p>
                    <p className="font-helvetica  xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] xs:text-[12px] font-normal">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
