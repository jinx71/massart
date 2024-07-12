
"use client";

import Image from 'next/image';
import { useEffect, useState } from "react";
import { useSwipeable } from 'react-swipeable';



const PreviewShow_two = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imageUrl:
        "/photos/big screen/concept/picture 01.png",
      title: "contemporary durga puja Art 1",
    },
    {
      imageUrl:
        "/photos/big screen/concept/picture 02.png",
      title: "contemporary durga puja Art 2",
    },
    {
      imageUrl:
        "/photos/big screen/concept/picture 03.png",
      title: "contemporary durga puja Art 3",
    },
    {
      imageUrl:
        "/photos/big screen/concept/picture 04.png",
      title: "contemporary durga puja Art 4",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((currentSlide + 1) % slides.length),
    onSwipedRight: () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);


 const [isSelectTab, setIsSelectTab] = useState(0);



  const handleTabChange = (indexNum) => {
    setIsSelectTab(indexNum);
  }


  return (

    <div>
      <div className="2xl:ms-auto 2xl:me-auto max-w-7xl xl:ms-[125px] ms-[33px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[33px] md:mt-[150px] mt-[60px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[106px] lg:gap-[90px] gap-[30px] md:mb-[157px] mb-5">
          <div className="font-[Helvetica] md:hidden block text-[24px] leading-[30px] font-bold">
            Preview Show <span className="text-red-600">2024</span>
          </div>
          <div>
            <Image
              className="md:block hidden"
              src="/photos/big screen/2025/Rectangle 2.png"
              alt=""
              width={527}
              height={777}
            />
              <Image
              className="md:hidden block"
              src="/photos/phone screen/2024/Rectangle 2.png"
              alt=""
              width={527}
              height={540}
            />
          </div>
          <div>
            <div className="md:block hidden font-[Helvetica] md:text-[42px] md:leading-[56px] text-[24px] leading-[30px] font-bold mb-[20px]">
              Preview Show <span className="text-red-600">2025</span>
            </div>
            <div className="md:text-[18px] md:leading-[30px] text-[12px] md:block">
              <p className="md:mb-9 mb-5 font-helvetica">
                The preview show, conceived by massArt, received overwhelming response in its inaugural year in 2022, being hailed at home and abroad as a breakthrough idea by creating a space to accommodate tourists who want to soak in the creative aspect of Durga Puja without jostling with the crowd.
              </p>
              <p className="md:mb-9 mb-5 font-helvetica">
                MassArt is back this year with its 3rd initiative, the preview show 2024 of Durga Puja Art. Over five days - from September 30 to October 4 - the preview show will showcase a selection of the finest creations: 22 contemporary, 2 traditional, and 2 aristocrat household Durga Pujas. Before pre-registered tourists from beyond the borders of the state and the country.
              </p>
              <p className="md:mb-9 mb-5 font-helvetica">
                Alongside the preview show at the puja sites, an exhibition on ‘Making of Durga Puja Art’ will take place during the period at the iconic town hall. The exhibition is a journey through the entire process, from conception to execution, using audio-visual footage and live demonstration. There is also an opportunity to sample the craftsmanship of artists and collect specimens of their art before stepping out to enjoy the creations on view at the chosen puja sites.
              </p>
            </div>
           
          </div>
        </div>
        <div className="font-[Helvetica] md:text-[42px] md:leading-[56px] w-full md:text-center text-left text-[24px] font-bold md:mb-[50px] mb-[28px]">
          Preview Show <span className="text-red-600">2024</span>
        </div>
      </div>

      <div className="scroll-container 2xl:ms-auto 2xl:me-auto max-w-7xl no-scrollbar mx-auto">
        <div className="w-full overflow-x-auto flex justify-center no-scrollbar">
          <div className="lg:w-[50%] md:justify-center justify-start w-full grid grid-flow-col md:gap-9 gap-3 md:mb-[50px] mb-[30px]  md:ms-[0] ms-[64px]  me-[0]">
            <button onClick={() => handleTabChange(0)} className={
              isSelectTab === 0
                ? "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white"
                : "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black"
            }>
              Plan your visit
            </button>
            <button onClick={() => handleTabChange(1)} className={
              isSelectTab === 1
                ? "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white"
                : "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black"
            }>
              Programme
            </button>
            <button onClick={() => handleTabChange(2)} className={
              isSelectTab === 2
                ? "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white"
                : "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black"
            }>
              Events
            </button>
            <button onClick={() => handleTabChange(3)} className={
              isSelectTab === 3
                ? "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white"
                : "md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black"
            }>
              Beyond Art
            </button>
          </div>
        </div>
        <div className="md:hidden block blur-effect"></div>
      </div>



      <div className="2xl:ms-auto 2xl:me-auto max-w-7xl md:grid hidden  lg:grid-cols-2 grid-cols-1 xl:gap-[106px] lg:gap-[90px] gap-[30px] md:mb-[157px] mb-5 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] ">
        <div className="font-[Helvetica] md:hidden block text-[24px] leading-[30px] font-bold">
          Preview Show <span className="text-red-600">2024</span>
        </div>
        <div>
          <Image
            className="w-full h-auto rounded-[50px] object-cover"
            src="/photos/big screen/2025/Rectangle 2 (1).png"
            alt=""
            width={527}
            height={358}
          />
        </div>
        <div>
          <div className="md:block hidden font-[Helvetica] md:text-[42px] md:leading-[56px] text-[24px] leading-[30px] font-bold mb-[20px]">
            Events
          </div>
          <div className="md:text-[18px] md:leading-[30px] text-[12px] md:block hidden">
            <p className="md:mb-9 mb-5 font-helvetica">
              being a socially inclined organisation, massArt takes an endeavor of including in preview show of durga puja Art (psdpa) the faces of those who are not so privileged. thus we have multiple inclusive events for the orphans, old age people and differently abled children

              also we have mission eco-care programmes named- ecopaddle- a bicycle journey to durga puja Art venues without carbon footprint and greenitiative- a plantation drive in and around puja Art venues
            </p>
          </div>

        </div>
      </div>


      {/* how to reach kolkata section */}
      <div className="2xl:ms-auto 2xl:me-auto max-w-7xl xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[0] text-center font-[Helvetica] md:text-[42px] text-[24px] md:leading-[56px] leading-[30px] font-bold">

        <div className="md:mb-[40px] mb-[30px] text-md:center text-left">Inclusive <span className="text-buttonCustomColor">Events</span></div>

        <div className="md:grid lg:grid-cols-3 grid-cols-1 gap-5 mb-[157px] hidden">

          <div className="relative overflow-hidden rounded-[20px] group">
            <Image
              className="w-full h-auto rounded-[20px] object-cover"
              src="/photos/big screen/2025/Rectangle 22.png"
              alt=""
              width={387}
              height={217}
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[20px] group">
            <Image
              className="w-full h-auto rounded-[20px] object-cover"
              src="/photos/big screen/2025/Rectangle 22.png"
              alt=""
              width={387}
              height={217}
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] group">
            <Image
              className="w-full h-auto rounded-[20px] object-cover"
              src="/photos/big screen/2025/Rectangle 22.png"
              alt=""
              width={387}
              height={217}
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>


        </div>


        {/* show on mobile */}

        <div className="relative w-full mb-[60px] md:hidden block" {...handlers}>
          <div className="relative h-64 overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute w-full h-full transition-opacity duration-300 delay-500 ease-in-out"
                style={{ opacity: index === currentSlide ? 1 : 0 }}
              >
                <Image
                  src={slide.imageUrl}
                  alt=""
                  width={100}
                  height={100}
                  className="w-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-[rgbe 0 0 0 0] flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 delay-500 ease-in-out"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    background:
                      "linear-gradient(360deg, black, rgba(249, 0, 0, 0), rgba(249, 0, 0, 0), rgba(249, 0, 0, 0))",
                  }}
                >
                  <p className="text-[12px] leading-[23px] font-bold mb-2">
                    {slide.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="justify-center flex space-x-2 mt-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-800"}`}
              />
            ))}
          </div>
        </div>




      </div>

      {/* how to reach kolkata section */}
      <div className="2xl:ms-auto 2xl:me-auto max-w-7xl xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px] text-center font-[Helvetica] md:text-[42px] text-[24px] md:leading-[56px] leading-[30px] font-bold">

        <div className="md:mb-[40px] mb-[29px] text-md:center text-left">Mission <span className="text-buttonCustomColor">Eco-Care</span></div>

        <div className="md:grid lg:grid-cols-3 grid-cols-1 gap-5 mb-[157px] hidden">

          <div className="relative overflow-hidden rounded-[20px] group">
            <Image
              className="w-full h-auto rounded-[20px] object-cover"
              src="/photos/big screen/2025/Rectangle 22.png"
              alt=""
              width={387}
              height={217}
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[20px] group">
            <Image
              className="w-full h-auto rounded-[20px] object-cover"
              src="/photos/big screen/2025/Rectangle 22.png"
              alt=""
              width={387}
              height={217}
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[20px] group">
            <Image
              className="w-full h-auto rounded-[20px] object-cover"
              src="/photos/big screen/2025/Rectangle 22.png"
              alt=""
              width={387}
              height={217}
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>


        </div>


        {/* show on mobile */}

        <div className="relative w-full mb-[60px] md:hidden block">
          <div className="relative h-64 overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="absolute w-full h-full transition-opacity duration-300 ease-in-out"
                style={{ opacity: index === currentSlide ? 1 : 0 }}
              >
                <Image src={slide.imageUrl} alt="" className="w-full object-cover" width={100}
                  height={100} />
                <div
                  className="absolute inset-0 bg-[rgba(0, 0, 0, 0)] flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{
                    opacity: index === currentSlide ? 1 : 0,
                    background: 'linear-gradient(360deg, black, rgba(249, 0, 0, 0), rgba(249, 0, 0, 0), rgba(249, 0, 0, 0))',
                  }}
                >
                  <p className="text-lg font-bold mb-2">{slide.title}</p>
                </div>
              </div>
            ))}


          </div>
          <div className="flex justify-center space-x-2 mt-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>




    </div>

  );
};

export default PreviewShow_two;
