"use client";
import { useState } from "react";

const EventPartener = () => {
  const [isSelectTab, setIsSelectTab] = useState(0);
  const handleTabChange = (indexNum) => {
    setIsSelectTab(indexNum);
  };
  return (
    <div className="bg-EventPartner pt-[50px] font-helvetica mt-8">
      <div className=" font-helvetica bg-EventPartner max-w-[1200px] mx-auto">
        <div className="py-[41px] xs:px-[32px] grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="font-bold lg:text-[42px]  font-helvetica text-[24px] leading-[3rem] ">
              <span className="text-buttonCustomColor">
                Building Memories -
              </span>
              Your Trusted Event Partner
            </h1>
            <p
              className="text-[12px] leading-[20px] font-helvetica 
          font-normal  py-[25px]"
            >
              Find out more about our team, vision, and dedication to creating
              extraordinary experiences. In this section, we share our story and
              our commitment to the success of each event Find out more about
              our team, vision, and dedication to creating extraordinary
              experiences. In this section, we share our story and our
              commitment to the success of each event
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[20px] ">
            {/* card 1 */}
            <div
              onClick={() => handleTabChange(0)}
              className={
                isSelectTab === 0
                  ? "bg-buttonCustomColor rounded-[5px] p-6 text-white"
                  : "bg-[#D9D9D9]  rounded-[5px] text-black hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 p-6 ease-in-out"
              }
            >
              <p className="font-helvetica font-bold text-[24px] leading-[26px]">
                2.5 crores
              </p>
              <p className=" text-[12px]  leading-[20px] pt-[2px]">
                of people from around the world visit Kolkata Durga Puja Art
                Events That Took Place
              </p>
            </div>
            {/* card2 */}
            <div
              onClick={() => handleTabChange(1)}
              className={
                isSelectTab === 1
                  ? "bg-buttonCustomColor rounded-[5px] pt-[14px] p-6 text-white"
                  : "bg-[#D9D9D9] p-6 rounded-[5px] text-black hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
              }
            >
              <p className="font-helvetica font-bold text-[24px] leading-[26px]">
                3,000 +
              </p>
              <p className="text-[12px] font-normal leading-[20px] pt-[2px]">
                durga puja Art installations
              </p>
            </div>

            {/* card3 */}
            <div
              onClick={() => handleTabChange(2)}
              className={
                isSelectTab === 2
                  ? "bg-buttonCustomColor rounded-[5px] p-6 text-white"
                  : "bg-[#D9D9D9] p-6 rounded-[5px] text-black hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
              }
            >
              <p className="font-helvetica font-bold text-[24px] leading-[26px]">
                2 million
              </p>
              <p className="text-[12px]  leading-[20px] pt-[2px]">
                people find scope of earning livelihood in the sphere of
                tourism, transport, food and artisanry
              </p>
            </div>

            {/* card4 */}

            <div
              onClick={() => handleTabChange(3)}
              className={
                isSelectTab === 3
                  ? "bg-buttonCustomColor rounded-[5px] p-6 text-white"
                  : "bg-[#D9D9D9] p-6 rounded-[5px] text-black hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
              }
            >
              <p className="font-helvetica font-bold text-[24px] leading-[26px]">
                4.6%
              </p>
              <p className="text-[12px]  leading-[20px] pt-[2px]">
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
