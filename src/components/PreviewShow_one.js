"use client";
import Image from 'next/image';
import { useState } from 'react';

import { FaRoad } from "react-icons/fa";
import { FaPeopleGroup, FaTrainSubway } from "react-icons/fa6";
import { GiAirplaneDeparture } from "react-icons/gi";
import { IoMdBus } from 'react-icons/io';

import Carousel from './Carousel';




const PreviewShow_one = () => {

  // const [currentSlide, setCurrentSlide] = useState(0);
  // const slides = [
  //   {
  //     icon: GiAirplaneDeparture,
  //     text: 'Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.',
  //   },
  //   {
  //     icon: FaTrainSubway,
  //     text: 'The state has an extensive road network, with multiple bus services connecting various parts of the state and neighboring regions.',
  //   },
  //   {
  //     icon: FaPeopleGroup,
  //     text: 'Kolkata is also a major port city, with both domestic and international shipping routes.',
  //   },
  // ];

  const [isOpen, setIsOpen] = useState(false);
    const [isSelectTab, setIsSelectTab] = useState(0);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleTabChange = (indexNum) => {
    setIsSelectTab(indexNum);
  }



  return (

    <div>
      <div className="xl:ms-[125px] ms-[33px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[33px] md:mt-[150px] mt-[60px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[106px] lg:gap-[90px] gap-[30px] md:mb-[157px] mb-5">
          <div className="font-[Helvetica] md:hidden block text-[24px] leading-[30px] font-bold">
            Preview Show <span className="text-red-600">2024</span>
          </div>
          <div>
            <Image
              className="w-auto h-auto object-cover md:block hidden"
              src="/photos/big screen/2025/Rectangle 2.png"
              alt=""
              width={527}
              height={777}
            />
            <Image
              className="md:hidden block"
              src="/photos/big screen/2025/Rectangle 2.png"
              alt=""
              width={527}
              height={777}
            />
          </div>
          <div>
            <div className="md:block hidden font-[Helvetica] md:text-[50px] md:leading-[56px] text-[24px] leading-[30px] font-bold mb-[20px]">
              Preview Show <span className="text-red-600">2024</span>
            </div>
            <div className="md:text-[18px] md:leading-[30px] text-[12px] md:block hidden">
              <p className="md:mb-9 mb-5">
                The preview show, conceived by massArt, received overwhelming response in its inaugural year in 2022, being hailed at home and abroad as a breakthrough idea by creating a space to accommodate tourists who want to soak in the creative aspect of Durga Puja without jostling with the crowd.
              </p>
              <p className="md:mb-9 mb-5">
                MassArt is back this year with its 3rd initiative, the preview show 2024 of Durga Puja Art. Over five days - from September 30 to October 4 - the preview show will showcase a selection of the finest creations: 22 contemporary, 2 traditional, and 2 aristocrat household Durga Pujas. Before pre-registered tourists from beyond the borders of the state and the country.
              </p>
              <p className="md:mb-9 mb-5">
                Alongside the preview show at the puja sites, an exhibition on ‘Making of Durga Puja Art’ will take place during the period at the iconic town hall. The exhibition is a journey through the entire process, from conception to execution, using audio-visual footage and live demonstration. There is also an opportunity to sample the craftsmanship of artists and collect specimens of their art before stepping out to enjoy the creations on view at the chosen puja sites.
              </p>
            </div>
            <div className="md:text-[18px] md:leading-[30px] text-[13px] leading-[21px] md:hidden block -mt-3">
              <p className="md:mb-9 mb-5">
                Durga puja is bengal's biggest festival that takes place over a week or so in september-october, on dates varying every year but announced well in advance. at the centre of the celebration is the figure of goddess durga, crafted traditionally in clay, who is worshipped in the act of vanquishing the demon mahishasura.
              </p>
            </div>
          </div>
        </div>
        <div className="font-[Helvetica] md:text-[50px] md:leading-[56px] w-full md:text-center text-left text-[24px] leading-[36px] font-bold md:mb-[50px] mb-[22px]">
          Preview Show <span className="text-red-600">2024</span>
        </div>
      </div>

      <div className="scroll-container 2xl:ms-auto 2xl:me-auto max-w-7xl">
        <div className="w-full overflow-x-auto flex justify-center">
          <div className="md:w-1/2 w-full grid grid-flow-col md:gap-9 gap-3 md:mb-[50px] mb-[30px]  ms-[63px]  me-[0]">
            <button onClick={() => handleTabChange(0)}   className={
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

{
  isSelectTab == 0 && <div
        className="w-full h-full relative rounded-[10px] bg-cover md:mb-[150px] mb-[60px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <div className="relative grid md:grid-cols-3 grid-cols-1 p-[33px] md:py-[75px] py-[18px] items-center">
          <div className="col-span-2 lg:mx-[150px] text-white">
            <span className="text-buttonCustomColor md:text-[50px] md:leading-[56px] text-[24px] leading-[36px] font-bold">ticket <span className="text-white">options will be available</span></span>
            <div className="md:mt-[15px] mt-[5px] md:text-[18px] md:leading-[30px] text-[13px] leading-[22px] text-white">
              ticket options will be available soon. more ticket options including student concession are available. please call +91 8420460550
            </div>
          </div>
          <div className="col-span-1 md:text-center text-left leading-[0px] mt-[23px] mb-[18px]">
            <button onClick={toggleModal} className="md:w-[173px] md:h-[48px] w-[92px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">
              Get Ticket
            </button>

          </div>
        </div>
      </div>
}


{
  isSelectTab == 1 && <div
        className="w-full h-full relative rounded-[10px] bg-cover md:mb-[150px] mb-[60px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <div className="relative grid md:grid-cols-3 grid-cols-1 p-[33px] md:py-[75px] py-[18px] items-center">
      <div className="col-span-2 lg:mx-[150px] text-white">
            <span className="text-buttonCustomColor md:text-[50px] md:leading-[56px] text-[24px] leading-[36px] font-bold">ticket <span className="text-white">options will be available</span></span>
            <div className="md:mt-[15px] mt-[5px] md:text-[18px] md:leading-[30px] text-[13px] leading-[22px] text-white">
              ticket options will be available soon. more ticket options including student concession are available. please call +91 8420460550
            </div>
          </div>
          <div className="col-span-1 md:text-center text-left leading-[0px] mt-[23px] mb-[18px]">
            <button onClick={toggleModal} className="md:w-[173px] md:h-[48px] w-[92px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">
              Get Ticket
            </button>

          </div>
        </div>
      </div>
}


{
  isSelectTab == 2 && <div
        className="w-full h-full relative rounded-[10px] bg-cover md:mb-[150px] mb-[60px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <div className="relative grid md:grid-cols-3 grid-cols-1 p-[33px] md:py-[75px] py-[18px] items-center">
        <div className="col-span-2 lg:mx-[150px] text-white">
            <span className="text-buttonCustomColor md:text-[50px] md:leading-[56px] text-[24px] leading-[36px] font-bold">ticket <span className="text-white">options will be available</span></span>
            <div className="md:mt-[15px] mt-[5px] md:text-[18px] md:leading-[30px] text-[13px] leading-[22px] text-white">
              ticket options will be available soon. more ticket options including student concession are available. please call +91 8420460550
            </div>
          </div>
          <div className="col-span-1 md:text-center text-left leading-[0px] mt-[23px] mb-[18px]">
            <button onClick={toggleModal} className="md:w-[173px] md:h-[48px] w-[92px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">
              Get Ticket
            </button>

          </div>
        </div>
      </div>
}

{
  isSelectTab == 3 && <div
        className="w-full h-full relative rounded-[10px] bg-cover md:mb-[150px] mb-[60px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <div className="relative grid md:grid-cols-3 grid-cols-1 p-[33px] md:py-[75px] py-[18px] items-center">
         <div className="col-span-2 lg:mx-[150px] text-white">
            <span className="text-buttonCustomColor md:text-[50px] md:leading-[56px] text-[24px] leading-[36px] font-bold">ticket <span className="text-white">options will be available</span></span>
            <div className="md:mt-[15px] mt-[5px] md:text-[18px] md:leading-[30px] text-[13px] leading-[22px] text-white">
              ticket options will be available soon. more ticket options including student concession are available. please call +91 8420460550
            </div>
          </div>
          <div className="col-span-1 md:text-center text-left leading-[0px] mt-[23px] mb-[18px]">
            <button onClick={toggleModal} className="md:w-[173px] md:h-[48px] w-[92px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">
              Get Ticket
            </button>

          </div>
        </div>
      </div>
}
      

      {/* how to reach kolkata section */}
      <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px] font-bold md:mb-[50px] mb-[30px]">
        How to reach <br /> <span className="text-buttonCustomColor">Kolkata?</span>
      </div>

      <div className='mb-[58px] md:hidden block'>
        <Carousel />
      </div>
      <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] mb-[150px]">
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group custom-width bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <GiAirplaneDeparture className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-[18px] leading-[30px] text-base group-hover:text-white transition duration-300">
              Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <FaTrainSubway className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
              Kolkata is directly connected for railways also in terms of Indian major cities. There are two main railway stations for the city - Sealdah and Howrah.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <IoMdBus className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
              The city is well-connected by the road network to the rest of the country. NH 2 connects Delhi with Kolkata. Other important national highways are NH 6 (Mumbai), NH 34 (Siliguri), and NH 41 (Haldia).
            </p>
          </div>
        </div>
      </div>

      <div>

      </div>



      {/* getting arround kolkata section */}

      <div className="bg-[#EFEDED] md:py-20 py-[38px] md:mb-[160px] mb-[60px]">
        <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px]  font-bold mb-[25px]">
          Getting arround<br></br> <span className="text-buttonCustomColor">Kolkata</span>
        </div>

        <Carousel />

        <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px]">
          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                  <FaPeopleGroup className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
                We offer group coaches in which you can travel in comfort from one location to another, in the company of friends and fellow visitors. Do let us know in advance should you wish to make reservations.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                  <GiAirplaneDeparture className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                  <GiAirplaneDeparture className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                  <GiAirplaneDeparture className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                  <GiAirplaneDeparture className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* where to stay section */}

      <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px] font-bold md:mb-[50px] mb-[28px]">
        where to <span className="text-buttonCustomColor">stay?</span>
      </div>

      <div className='mb-[58px] md:hidden block'>
        <Carousel />
      </div>

      <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] mb-[150px]">
        <div className="flex justify-center items-center">
          <div style={{
            boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
          }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <GiAirplaneDeparture className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
              Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div style={{
            boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
          }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <FaTrainSubway className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
              Kolkata is directly connected for railways also in terms of Indian major cities. There are two main railway stations for the city - Sealdah and Howrah.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div style={{
            boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
          }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                <FaRoad className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300">
              Kolkata is directly connected by national and state highways.
            </p>
          </div>
        </div>

      </div>
      {/* carousel */}




      {/* <div className="relative flex overflow-hidden rounded-lg">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full"
              >
                <div

                  className="group bg-red-50 md:p-10 p-5 h-full rounded-lg text-center hover:bg-red-500 transition duration-300 flex flex-col items-center justify-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="bg-red-500 w-[100px] h-[100px] flex justify-center items-center rounded-full group-hover:bg-white transition duration-300">
                      <slide.icon className="group-hover:text-red-500 text-white w-[52px] h-[52px]" />
                    </div>
                  </div>
                  <p
                    className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300"
                  
                  >
                    {slide.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> */}



      {/* Navigation buttons */}
      {/* <button
          onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        >
          <MdKeyboardArrowRight />
        </button> */}
      {/* <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div> */}





      {/* modal */}

      {isOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-[#D9D9D9] bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative shadow">

              <div className="md:p-5 p-[20px] bg-[#D9D9D9] rounded-[10px]">

                <div className="font-[Helvetica] md:text-[50px] md:leading-[59px] text-[24px] leading-[33px] font-bold mb-[20px]">
                  <span className="text-red-600">ticket </span> options will be available soon.
                </div>
                <p className='md:text-[18px] md:leading-[30px] text-[13px] leading-[20px] mb-[27px]'>more ticket options including student concession are available. please call +91 8420460550</p>
                <div className='leading-[0px]'>   <button
                  type="button"
                  className="md:w-[97px] md:h-[48px] w-[39px] h-[22px] border rounded-full md:text-[18px] md:leading-[24px] text-[12px] leading-[16px] border-black hover:bg-red-600 hover:border-buttonCustomColor hover:text-white delay-150"
                  onClick={toggleModal}
                >
                  ok
                </button></div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default PreviewShow_one;
