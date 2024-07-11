"use client";

import React, { useState } from "react";
import { HiMiniMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";

const GuidenceStep = () => {
  const [openAccordion, setOpenAccordion] = useState(1);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const items = [
    {
      id: 1,
      number: "01",
      question: "what is durga puja Art ?",
      answer:
        "durga puja is bengal’s biggest festival that takes place over a week or so in september-october, on dates varying every year but announced well in advance. at the centre of the celebration is the figure of goddess durga, crafted traditionally in clay, who is worshipped in the act of vanquishing the demon mahishasura. it is particularly in the streets of kolkata (calcutta), the capital of the state, that durga puja transcends religious bounds and serves as the cradle for the world’s largest publicly funded Art show. the idols and structures created from months in advance in street corners – become exquisite works of artistic expression, unique to each locality every year. thus there is a different artistic interpretation offered in every locality through the choice of a different theme to which the entire structure conforms.every autumn, the entire city wakes up to an explosion of creativity, with every neighbourhood decked up in unique templates that are a mélange of traditional Art and contemporary concepts, that are diverse and creative enough to rival any international Art biennale.",
    },
    {
      id: 2,
      number: "02",
      question: "what is massArt ?",
      answer:
        "a non-profit organization conceived in june 2022 with the objective of promoting Art and culture of bengal. run by a team of motivated, experienced, traditionally rooted and technologically enabled professionals. registered under the west bengal societies registration act 1961",
    },
    {
      id: 3,
      number: "03",
      question:
        "how did suddenly kolkata durga puja Art come in the national and international limelight ?",
      answer:
        "indecember 2021, unescoinscribed Kolkata durga puja on its representative list of “intangible cultural heritage of humanity”. durga puja was always the highest show of Art and culture, but now with unesco’sinscription, it suddenly became in the national and international limelight. it brought immense joy and sense of pride among the durga puja Art lovers of kolkata and all around.",
    },
    {
      id: 4,
      number: "04",
      question:
        "why durga puja Art is the world’s biggest public Art festival ?",
      answer:
        "durga puja Art is the world’s biggest public Art festival as the entire city turns into an public Art gallery. it is thus many times bigger than any other famous Art biennales in the world.every year durga puja is created in public space through a mass involvement process. and the public space is being somewhat transformed into different Art spaces. it has created its magnitude on the basis of inter relationship among Art forms and creative innovations. Artistry and artisanry, aesthetic and creative pursuits are the distinct signature of this public Art festival.every year around 25 million people visit durga puja. every year this world’s biggest Art festival holds a budget around 9.52 billion usd which is 4.6% gdp of the state west bengal.",
    },
    {
      id: 5,
      number: "05",
      question: "what is preview show of durga puja Art (psdpa) ?",
      answer:
        "durga puja Art is all about passion for many Art loving tourists for both domestic and international. every year around 25 million visitor visit this Art festival.psdpa is the world’s first ever guided public Art show at night,a first of its kind initiative of international essence- where we showcased the brilliance of Art aspects of kolkatadurga puja to national and international visitors and Art lovers across the globe, ensuring special seamless and exclusive viewing before the pujas open for the masses.2024 is the 3.0 edition of this preview show. we have successfully completed edition 1.0 in 2022 and edition 2.0 in 2023.whereunesco and british councilwere the partners of this event",
    },
    {
      id: 6,
      number: "06",
      question: "what is the main objective behind psdpa ?",
      answer:
        "to present seamless guided tour of the best of durga puja Art to distinguished guests including artists, architects, curators, cultural delegates, bureaucrats, diplomats and all other Art loving people from local, national and abroad.worldwide expansion and promotion of bengal’s Art, culture, heritage",
    },
    {
      id: 7,
      number: "07",
      question: "what is the main objective behind psdpa ?",
      answer:
        "to present seamless guided tour of the best of durga puja Art to distinguished guests including artists, architects, curators, cultural delegates, bureaucrats, diplomats and all other Art loving people from local, national and abroad.worldwide expansion and promotion of bengal’s Art, culture, heritage",
    },
    {
      id: 8,
      number: "08",
      question: "what is the viewing process of psdpa ?",
      answer:
        "tickets for enthusiast viewers.donor passes.nvitation for diplomats and bureaucrats",
    },
    {
      id: 9,
      number: "09",
      question:
        "what are the most unique features of this durga puja Art of Kolkata ?",
      answer:
        "this is world’s biggest andindia’s first public Art show.world’s first public Art show at night. the show is limited to the hours after sundown (6pm to 5am) so as to offer the full impact of the illumination that is integral to most.thematic installations.exclusive viewing in a pre-puja festival crowd free space of Art venues",
    },

    {
      id: 10,
      number: "10",
      question:
        "what shall be accommodation & traveling plan during stay and visit ?",
      answer:
        "preview show of durga puja Art (psdpa) is completely an organised Art festival. accommodation and Art walkthrough with trained and professional guides are available for the guided tour for details contact +91 84207 97474, travel@massart.in",
    },

    // Add more items as needed
  ];

  return (
    <div className="px-[32px]">
      <div className="">
        {items.map((item) => (
          <div
            key={item.id}
            className={`${
              openAccordion === item.id ? "bg-buttonCustomColor" : "bg-white"
            } rounded-[10px]`}
          >
            <div
              className={`${
                openAccordion === item.id ? "text-white" : "text-black"
              } pt-[25px] px-[20px] pb-[20px]`}
            >
              <div>
                <div
                  className="flex justify-between  cursor-pointer pb-[13px]"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <div className="flex  gap-x-[13px]">
                    <div>
                      <p className="text-[24px] leading-[27px] font-helvetica font-bold">
                        {item.number}
                      </p>
                    </div>
                    <h6 className="z-20 text-[20px] leading-[26px] font-helvetica font-bold">
                      {item.question}
                    </h6>
                  </div>
                  <span className="transform transition-transform duration-300 ease-linear">
                    {openAccordion === item.id ? (
                      <div className="size-[28px] rounded-full bg-white flex justify-center items-center">
                        <HiMiniMinusSmall className="text-buttonCustomColor" />
                      </div>
                    ) : (
                      <div className="size-[28px] rounded-full bg-white flex justify-center items-center">
                        <HiMiniPlusSmall className="text-black" />
                      </div>
                    )}
                  </span>
                </div>
                {openAccordion === item.id && (
                  <div>
                    <p className="text-[12px] leading-[18px] pl-[40px] pr-[26px] font-normal font-helvetica">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidenceStep;
