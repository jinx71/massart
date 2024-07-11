"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useSwipeable } from 'react-swipeable';


const TwoZeroTwoThree = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imageUrl:
        "/photos/big screen/concept/picture 01.png",
      title: "Contemporary durga puja Art 1",
    },
    {
      imageUrl:
        "/photos/big screen/concept/picture 02.png",
      title: "Contemporary durga puja Art 2",
    },
    {
      imageUrl:
        "/photos/big screen/concept/picture 03.png",
      title: "Contemporary durga puja Art 3",
    },
    {
      imageUrl:
        "/photos/big screen/concept/picture 04.png",
      title: "Contemporary durga puja Art 4",
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

  return (
    <div className="max-w-7xl 2xl:ms-auto 2xl:me-auto xl:ms-[125px] ms-[33px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[33px] lg:mt-[150px] md:mt=[100px] mt-[60px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[106px] md:gap-[52px] gap-7 lg:mb-[157px] mb-7">
        <div className="flex justify-center">
          <Image
            className="lg:w-full w-2/3 h-auto rounded-[50px] lg:block hidden"
            width={527}
            height={777}
            src="/photos/big screen/concept/picture 01.png"
            alt=""
          />
          <Image
            className="md:w-2/3 w-full h-auto rounded-[5px] lg:hidden block"
            width={366}
            height={347}
            src="/photos/phone screen/2023/picture.png"
            alt=""
          />
        </div>
        <div>
          <div className="md:block hidden font-[Helvetica] lg:text-[50px] lg:leading-[56px] md:text-[36px] md:leading-[46px] text-[24px] leading-[36px] font-bold mb-[20px]">
            Preview Show <span className="text-red-600">2023</span>
          </div>

          <div className="md:hidden block font-[Helvetica] lg:text-[50px] lg:leading-[56px] md:text-[36px] md:leading-[46px] text-[24px] leading-[36px] font-bold mb-[20px]">
          <span className="text-red-600">What</span> is durga puja Art
          </div>

          <div className="md:block hidden md:text-[18px] md:leading-[24px] text-[12px] leading-[18px]">
            <p className="md:mb-9 mb-5 font-normal font-helvetica">
              Every year, we are confronted with new categories of Durga Puja
              Art and artists, displaying ever newer templates of contemporary
              Art and design—diverse and creative enough to rival any
              international Art biennale, though perhaps not yet positioned as
              such. Commercial promotion and sponsorship have kept pace with the
              explosion of Art, making far-reaching changes to the very nature
              of the festival.
            </p>

            <p className="md:mb-9 mb-5">
              While the creativity comes from artists and Art designers, the
              work of setting up and decorating a pandal, or transporting the
              idols from the place of production to pandals, is still mostly
              done by a hired workforce.
            </p>

            <p className="md:mb-9 mb-5">
              Our preview show is a journey through the entire process. From
              conception to the final outcome, using cutting-edge audio-visual
              techniques, we provide an immersive experience that will leave you
              with unforgettable memories of Bengal’s largest festival. It
              convincingly claims its place as the world’s largest public Art
              exhibition. Even international names such as Suvaprasanna, Jogen
              Chowdhury, and Samira Ich have entered the fray at various times,
              along with professional Art directors from cinema, commercial and
              graphic artists, and even textile designers.
            </p>
          </div>

          <div className="md:hidden block md:text-[18px] md:leading-[24px] text-[12px] leading-[18px]">
            <p className="md:mb-9 mb-5 font-normal font-helvetica">
            durga puja is bengal’s biggest festival that takes place over a week  or so in september-october, on dates varying every year but announced  well in advance. at the centre of the celebration is the figure of  goddess durga, crafted traditionally in clay, who is worshipped in the  act of vanquishing the demon mahishasura. it is particularly in the  streets of kolkata (calcutta), the capital of the state, that durga puja  transcends religious bounds and serves as the cradle for the world’s  largest publicly funded Art show. while the worship of durga and her  four divine children remains the ritualistic core, the temporary  shelters of the idols – structures created from months in advance in  street corners – become exquisite works of artistic expression, unique  to each locality every year. thus there is a different artistic  interpretation offered in every locality through the choice of a  different theme to which the entire structure conforms.
            </p>

            <p className="md:mb-9 mb-5">
            every autumn, the entire city wakes up to an explosion of creativity,  with every neighbourhood decked up in unique templates that are a  mélange of traditional Art and contemporary concepts, that are diverse  and creative enough to rival any international art biennale. commercial  promotion and sponsorship have kept pace with the explosion of Art,  providing an eco-system of community support.
            </p>

            <p className="md:mb-9 mb-5">
            as a result, every year, the durga puja experience is different and  diverse. the evolution of durga puja of kolkata into an inclusive,  community-driven celebration of Art has been hailed by unesco, which  describes it as "the best instance of the public performance of religion  and Art, and as thriving ground for collaborative artists and  designers...”. durga puja has been inscribed on its list of intangible  cultural heritage of humanity in 2021.
            </p>
          </div>
        </div>
      </div>

      <div className="md:grid lg:grid-cols-2 grid-cols-1 lg:gap-[106px] md:gap-[20px] gap-7 lg:mb-[157px] mb-7 hidden">
        <div className="font-[Helvetica] lg:text-[50px] lgleading-[59px] md:text-[36px] md:leading-[46px] text-[24px] leading-[36px] font-bold">
          Selected Art <span className="text-red-600"> <br className="md:block hidden" /> venue </span>
        </div>
        <div>
          <div className="md:text-[18px] md:leading-[24px] font-normal">
            <p>
              Out of a pool of over 3000 Durga Puja organizing associations who
              are keen to be in the list, only 26 Durga Puja Art venues were
              selected for PSDP2023. Among them, 22 were contemporary, 2
              traditional, and 2 aristocrat household (bonedibari) Puja Art
              venues. An exhibition titled ‘Making of Durga Puja Art’ held in
              Kolkata Town Hall was an important venue for Durga Puja Art lovers
            </p>
          </div>
        </div>
      </div>

      <div className="md:grid md:grid-cols-3 grid-cols-1 gap-5 mb-[157px] hidden">
        <div className="relative group rounded-[20px] overflow-hidden">
          <Image
            className="w-full h-auto"
            width={387}
            height={491}
            src="/photos/big screen/concept/picture 04.png"
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-5 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
            }}
          >
            <p className="text-[24px] leading-[32px] font-bold font-[Helvetica] mb-[10px]">
              Contemporary durga puja Art
            </p>
            <div>
              <a
                className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto"
                href="#"
              >
                read more
              </a>
            </div>
          </div>
        </div>

        <div className="relative group rounded-[20px] overflow-hidden">
          <Image
            className="w-full h-auto"
            width={387}
            height={491}
            src="/photos/big screen/concept/picture 02.png"
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-5 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
            }}
          >
            <p className="text-[24px] leading-[32px] font-bold font-[Helvetica] mb-[10px]">
              Contemporary durga puja Art 1
            </p>
            <div>
              <a
                className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto"
                href="#"
              >
                read more
              </a>
            </div>
          </div>
        </div>

        <div className="relative group rounded-[20px] overflow-hidden">
          <Image
            className="w-full h-auto"
            width={387}
            height={491}
            src="/photos/big screen/concept/picture 03.png"
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-5 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
            }}
          >
            <p className="text-[24px] leading-[32px] font-bold font-[Helvetica] mb-[10px]">
            Contemporary durga puja Art
            </p>
            <div>
              <a
                className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto"
                href="#"
              >
                read more
              </a>
            </div>
          </div>
        </div>

        <div className="relative group rounded-[20px] overflow-hidden">
          <Image
            className="w-full h-auto"
            width={387}
            height={491}
            src="/photos/big screen/concept/picture 04.png"
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-5 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
            }}
          >
            <p className="text-[24px] leading-[32px] font-bold font-[Helvetica] mb-[10px]">
            Contemporary durga puja Art
            </p>
            <div>
              <a
                className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto"
                href="#"
              >
                read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* show on mobile */}
      <div className="md:hidden block font-[Helvetica] md:text-[50px] text-[24px] font-bold mb-[25px]">
        Selected Art <span className="text-red-600">venue</span>
      </div>

      <div className="relative w-full mb-[60px] md:hidden block" {...handlers}>
        <div className="relative h-64 overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-opacity duration-300 ease-in-out"
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
                className="absolute inset-0 bg-[rgbe 0 0 0 0] flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out"
                style={{
                  opacity: index === currentSlide ? 1 : 0,
                  background:
                    "linear-gradient(360deg, black, rgba(249, 0, 0, 0), rgba(249, 0, 0, 0), rgba(249, 0, 0, 0))",
                }}
              >
                <p className="text-[20px] leading-[23px] font-bold mb-2">
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
              className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default TwoZeroTwoThree;
