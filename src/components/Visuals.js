"use client";
import Image from "next/image";
import { useState } from "react";
import { IoMdFastforward } from "react-icons/io";

const Visual = () => {
  const [activeButton, setActiveButton] = useState("Donor Pass");
    const [isSelectTab, setIsSelectTab] = useState(0);
  const handleTabChange = (indexNum) => {
    setIsSelectTab(indexNum);
  }

  const buttons = [
    { label: "Donor Pass", id: "Donor Pass", imageIndex: 1 },
    { label: "Preview Pass", id: "Preview Pass", imageIndex: 2 },
  ];

  return (
    <div
      className="pt-[60px]   xs:px-[32px]
      
      
      bg-white font-helvetica"
    >
      <div className="">
        <h1 className="xs:text-[24px] font-bold  font-helvetica xs:leading-[35px]">
          Witness the World's Biggest Public
          <span className="text-buttonCustomColor"> Art Festival</span>
        </h1>
      </div>

      {/* button */}

      <div className="grid grid-cols-3 justify-between items-center w-full xs:gap-x-[10px] xs:py-[25px]">
 <button
      onClick={() => handleTabChange(0)}
      className={
        isSelectTab === 0
          ? "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] font-bold font-helvetica text-white border border-transparent bg-buttonCustomColor rounded-full"
          : "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] rounded-full font-bold font-helvetica border border-buttonCustomColor hover:bg-buttonCustomColor hover:border-transparent hover:text-white text-black"
      }
    >
      Donor Pass
    </button>
    
         <button
      onClick={() => handleTabChange(1)}
      className={
        isSelectTab === 1
          ? "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] font-bold font-helvetica text-white border border-transparent bg-buttonCustomColor rounded-full"
          : "xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px] rounded-full font-bold font-helvetica border border-buttonCustomColor hover:bg-buttonCustomColor hover:border-transparent hover:text-white text-black"
      }
    >
     Preview Pass
    </button>
        <button
          className="xs:text-[11px] xs:leading-[24px] xs:py-[4px] xs:px-[15px]
        font-bold font-helvetica  border border-transparent text-black flex items-center gap-x-[5px]"
        >
          View More <IoMdFastforward size={16} className="" />
        </button>
      </div>

      <div className="h-[232px]">
        <Image
          className=" h-full w-full object-cover rounded-[10px]"
          src="/images/witness.png"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Visual;
