import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRoad } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdBus } from "react-icons/io";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


const carouselData = [
  {
    text: "netaji subhas chandra bose international airport, kolkata and its neighbourhood district airport kazi nazrul islam airport, andal, burdwan have airways access to almost all the major cities of india and abroad.",
    icon: <FaRoad className="group-hover:text-red-500 text-white" />,
  },
  {
    text: "netaji subhas chandra bose international airport, kolkata and its neighbourhood district airport kazi nazrul islam airport, andal, burdwan have airways access to almost all the major cities of india and abroad.",
    icon: <FaPeopleGroup className="group-hover:text-red-500 text-white" />,
  },
  {
    text: "netaji subhas chandra bose international airport, kolkata and its neighbourhood district airport kazi nazrul islam airport, andal, burdwan have airways access to almost all the major cities of india and abroad.",
    icon: <IoMdBus className="group-hover:text-red-500 text-white" />,
  },
];


const PrevArrow = ({ onClick }) => (
  <button className="prev-arrow" onClick={onClick}>
    <MdKeyboardArrowLeft width={40} height={40} color="white" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="next-arrow" onClick={onClick}>
    <MdKeyboardArrowRight width={40} height={40} color="white" />
  </button>
);

const Carousel = () => {
  const sliderSettings = {
    autoplaySpeed: 3500,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (

    <div className="relative custom-slick-style md:hidden block">
      <Slider {...sliderSettings}>
        {carouselData.map((item, index) => (
          <div key={index} className="slide-item group py-[37px] px-[20px] h-full rounded-lg text-center transition duration-300">           
              <div className="flex justify-center mb-4">
                <div className=" w-[85px] h-[85px] bg-red-600 icon-hover flex justify-center items-center rounded-full transition duration-300">
                  {item.icon}
                </div>
              </div>
              <p
                className="text-black group-hover:text-white font-normal text-[12px] leading-[14px] transition duration-300"
                
              >
                {item.text}
              </p>       
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
