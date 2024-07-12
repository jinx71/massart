"use client";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "/public/styles/MasterClass.css";

const events = [
  {
    date: "20",
    month: "Jan",
    image: "/images/ExcitingLine.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "/images/ExcitingLine.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "/images/ExcitingLine.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "/images/ExcitingLine.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "/images/ExcitingLine.jpg",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
];

const MasterClass = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="overflow-hidden mt-8">
      <Slider {...settings} className="">
        {events.map((event, index) => (
          <div key={index} className="">
            <div className="relative group h-[450px] w-[360px] mx-10">
              <Image
                className="w-[100vw] rounded-lg h-full object-cover"
                src={event.image}
                alt={event.title}
                height={100}
                width={100}
              />

              <div
                className="absolute top-0 left-[32px] bg-buttonCustomColor
                 group-hover:opacity-100 opacity-0 duration-500"
              >
                <p className="text-[22px] xs:leading-[23px] font-bold font-helvetica text-white xs:px-[14px] xs:pt-[19px]">
                  {event.date}
                </p>
                <p className="xs:text-[14px] py-2 xs:leading-[23px] font-bold font-helvetica text-white xs:px-[14px] ">
                  {event.month}
                </p>
              </div>

              <div className="absolute bottom-[30px] left-[32px]  bg-opacity-75  june group-hover:opacity-100 opacity-0 duration-500">
                <p className="xs:text-[20px] xs:leading-[32px] font-bold font-helvetica xs:pb-[2px] text-[#ffffff]">
                  {event.title}
                </p>
                <p className="xs:text-[12px] pb-[11px] xs:leading-[13px] font-normal font-helvetica text-[#ffffff99]">
                  {event.author}
                </p>
                <p className="xs:text-[12px] xs:leading-[16px] font-helvetica font-normal flex items-center text-[#ffffff99]">
                  <FaLocationDot className="mr-[9px]" />
                  {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MasterClass;
