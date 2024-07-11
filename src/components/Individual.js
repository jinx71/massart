"use client";

import Image from "next/image";
import { useState } from "react";

import { GoDash } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi2";

const Individual = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleAccordion = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((item) => item !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className="max-w-7xl 2xl:ms-auto 2xl:me-auto ms-[35px]  lg:ms-[100px] lg:me-[100px] me-[35px] lg:mt-[150px] mt-[60px]">
      <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-28 md:gap-14 gap-0">
        <div>
          <Image
            width={527}
            height={777}
            className="w-full h-auto md:block hidden"
            src="/photos/big screen/Individual Page/picture 01.png"
            alt="Image 1" />

          <Image
            width={366}
            height={347}
            className="w-full h-auto md:hidden block"
            src="/photos/phone screen/individual/picture.png"
            alt="Image 1" />
        </div>

        <div className="">
          <div className="lg:text-[50px] lg:leading-[56px] md:text-left text-[24px] leading-[36px] font-bold lg:mb-[60px] mb-[30px] md:mt-0 mt-[25px]">
            arjunpur amra sabai <br className="md:block hidden" />
            <span className="text-red-600"> club</span>
          </div>
          <div className="">
            {[
              {
                title: "title",
                content:
                  "ganadevata",
              },
              { title: "concept", content: "Concept content" },
              {
                title: "area of Installation",
                content: "Area of Installation content",
              },
            ].map((section, index) => (
              <div className="mb-2" key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="lg:text-[32px] text-[20px] font-bold">
                    {section.title}
                  </div>
                  <div className="lg:text-[32px] text-[20px]">
                    {openSections.includes(index) ? (
                      <GoDash />
                    ) : (
                      <HiOutlinePlus />
                    )}
                  </div>
                </div>
                <div
                  className={`accordion-content lg:text-[24px] md:leading-[30px] text-[16px] leading-[18px] font-bold md:border-b-[1px] border-0 mt-[10px] border-black ${openSections.includes(index) ? "open" : ""}`}
                >
                  <p className="text-gray-500 pb-[10px]">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto my-[51px] md:block hidden">
        <div className="grid gap-6 md:grid-cols-2 grid-cols-1 w-full">
          <div className="grid grid-flow-row gap-6">
            <Image
              width={605}
              height={341}
              className="w-full min-h-full rounded-[10px]"
              src="/photos/big screen/Individual Page/picture 02.png"
              alt="Image 1"
            />
            <div className="flex">
              <div className="flex-1 pr-3">
                <Image
                  width={288}
                  height={341}
                  className="w-full min-h-full object-cover rounded-[10px]"
                  src="/photos/big screen/Individual Page/picture 04.png"
                  alt="Image 1"
                />
              </div>
              <div className="flex-1 pl-3">
                <Image
                  width={288}
                  height={341}
                  className="w-full min-h-full object-cover rounded-[10px]"
                  src="/photos/big screen/Individual Page/picture 05.png"
                  alt="Image 1"
                />
              </div>
            </div>
          </div>
          <div>
            <Image
              width={565}
              height={712}
              className="w-full h-auto rounded-[10px]"
              src="/photos/big screen/Individual Page/picture 03.png"
              alt="Image 1"
            />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Individual;
