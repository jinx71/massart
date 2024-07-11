"use client";
import { useState } from "react";

const EventPartener = () => {
     const [isSelectTab, setIsSelectTab] = useState(0);
  const handleTabChange = (indexNum) => {
    setIsSelectTab(indexNum);
  }
  return (
    <div className=" bg-white pt-[50px] font-helvetica">
      <div className="   px-[32px] font-helvetica bg-EventPartner">
        <div className="py-[41px] ">
          <h1 className=" font-bold  font-helvetica text-[24px] leading-[36px] ">
            <span className="text-buttonCustomColor">Building Memories -</span>
            Your Trusted Event Partner
          </h1>
          <p
            className="text-[12px] leading-[18px] font-helvetica 
          font-normal  pt-[10px] pb-[15px] "
          >
            Find out more about our team, vision, and dedication to creating
            extraordinary experiences. In this section, we share our story and
            our commitment to the success of each event
          </p>
          <div className="grid grid-cols-2 gap-[20px] ">
            {/* card 1 */}
        <div
      onClick={() => handleTabChange(0)}
      className={
        isSelectTab === 0
          ? "bg-buttonCustomColor rounded-[5px] pt-[14px] px-[17px] pb-[14px] text-white"
          : "bg-[#D9D9D9] pl-[17px] pt-[19px] pb-[20px] rounded-[5px] text-black hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
      }
    >
      <p className="font-helvetica font-bold text-[20px] leading-[26px]">
        2.5 crores
      </p>
      <p className="font-helvetica text-[8px] font-normal leading-[12px] pt-[2px]">
        of people from around the world visit Kolkata Durga Puja Art Events That Took Place
      </p>
    </div>
            {/* card2 */}
             <div
      onClick={() => handleTabChange(1)}
      className={
        isSelectTab === 1
          ? "bg-buttonCustomColor rounded-[5px] pt-[14px] px-[17px] pb-[14px] text-white"
          : "bg-[#D9D9D9] pl-[17px] pt-[19px] pb-[20px] rounded-[5px] text-black hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
      }
    >
      <p className="font-helvetica font-bold text-[20px] leading-[26px]">
        3,000 +
      </p>
      <p className="font-helvetica text-[8px] font-normal leading-[12px] pt-[2px]">
         durga puja Art installations
      </p>
    </div>
          

            {/* card3 */}
                     <div
      onClick={() => handleTabChange(2)}
      className={
        isSelectTab === 2
          ? "bg-buttonCustomColor rounded-[5px] pt-[14px] px-[17px] pb-[14px] text-white"
          : "bg-[#D9D9D9] pl-[17px] pt-[19px] pb-[20px] rounded-[5px] text-black hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
      }
    >
      <p className="font-helvetica font-bold text-[20px] leading-[26px]">
        2 million
      </p>
      <p className="font-helvetica text-[8px] font-normal leading-[12px] pt-[2px]">
         people find scope of earning livelihood in the sphere of
                tourism, transport, food and artisanry
      </p>
    </div>
          
            
            {/* card4 */}

                        <div
      onClick={() => handleTabChange(3)}
      className={
        isSelectTab === 3
          ? "bg-buttonCustomColor rounded-[5px] pt-[14px] px-[17px] pb-[14px] text-white"
          : "bg-[#D9D9D9] pl-[17px] pt-[19px] pb-[20px] rounded-[5px] text-black hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
      }
    >
      <p className="font-helvetica font-bold text-[20px] leading-[26px]">
       4.6%
      </p>
      <p className="font-helvetica text-[8px] font-normal leading-[12px] pt-[2px]">
      turnover amount shares in bengal gdp
      </p>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPartener;
