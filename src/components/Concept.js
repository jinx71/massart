"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Concept = () => {
  const currentPath = usePathname();
  return (
    <div className="xs:pt-[32px] lg:pt-[0px]">
      {currentPath =="/" && (
        <div className="grid md:grid-cols-2  gap-6 items-center">
        {/* card1 */}
        <div className="relative h-[400px] md:h-[590px] rounded-md overflow-hidden group  bg-[url('/images/conceptOfDurgaPuja.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000]  rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-[24px] leading-[23px] font-helvetica font-bold text-[#FCFCFC]">
              Concept of Durga Puja Art
            </p>
            <div className="pt-[10px]">
              <p className="text-[14px] pr-[25%]  text-[#b8b4b4] font-normal font-helvetica">
                Durga Puja is technically West Bengal’s largest religious
                festival, centred on the goddess Durga, destroyer of the demon
                Mahishasura. But increasingly, Durga Puja is also the world’s
                largest publicly funded Art show.
              </p>
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid  md:grid-cols-2 gap-6 items-center">
          {/* card 2 */}
          <div className="h-[285px] w-full relative group">
            <div className="relative group">
              <Image
                className="w-full object-cover rounded-[10px]"
                src="/images/preview show-min.jpg"
                height={100}
                width={100}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <p className="text-[18px] absolute top-36 left-4 leading-[23px] font-helvetica font-bold text-white">
              preview show 2024
            </p>
            {/* <div className="absolute left-[25px] bottom-[25px] opacity-1  duration-300">
              <p className="text-[18px] leading-[23px] font-helvetica font-bold text-white">
                preview show 2024
              </p>
              <div className="pt-[10px]">
                <p className="text-[18px] pr-[25%] leading-[14px] text-white font-normal font-helvetica">
                  our preview show 2024 to be staged at a prominent kolkata
                  venue is intended to show you how durga puja in bengal has
                  evolved into a display of contemporary Art while remaining
                  deeply rooted in tradition.
                </p>

                <div className="pt-[10px]">
                  <Link href="/concept">
                    <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div> */}
            <p className="text-[14px] pt-2 pr-[25%] leading-[20px]  font-normal font-helvetica">
              our preview show 2024 to be staged at a prominent kolkata venue...{" "}
              <span className="underline">View More</span>
            </p>
          </div>
          {/* card 3 */}
          <div className="h-[285px] w-full relative group">
            <div className="relative group">
              <Image
                className="w-full h-full object-cover rounded-[10px]"
                src="/images/Previewpass-234-min.jpg"
                height={100}
                width={100}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-[18px] absolute top-36 left-4 leading-[23px] font-helvetica font-bold text-white">
              preview pass
            </p>
            <p className="text-[14px] pt-2 pr-[25%] leading-[20px]  font-normal font-helvetica">
              the third edition of preview show of durga puja Art 2024
              kolkata..... <span className="underline">View More</span>
            </p>
          </div>
          {/* card4 */}
          <div className="h-[285px] w-full relative group">
            <div className="relative group">
              <Image
                className="w-full h-full object-cover rounded-[10px]"
                src="/images/nominationProcess.jpg"
                height={100}
                width={100}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <p className="text-[18px] absolute top-36 left-4 leading-[23px] font-helvetica font-bold text-white">
              nomination process
            </p>
            <p className="text-[14px] pt-2 pr-[25%] leading-[20px]  font-normal font-helvetica">
              our preview show 2024 to be staged at a prominent kolkata venue...{" "}
              <span className="underline">view more</span>
            </p>
          </div>
          {/* card5 */}

          <div className="h-[285px] w-full relative group">
            <div className="relative group">
              <Image
                className="w-full h-full object-cover rounded-[10px]"
                src="/images/nominationProcess.jpg"
                height={100}
                width={100}
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#00000000] to-[#000000] rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <p className="text-[18px] absolute top-36 left-4 leading-[23px] font-helvetica font-bold text-white">
              hand in hand
            </p>
            <p className="text-[14px] pt-2 pr-[25%] leading-[20px]  font-normal font-helvetica">
              your participation will enable bengal Art, culture and herit....{" "}
              <span className="underline">view more</span>
            </p>
          </div>
        </div>
      </div>
      )}

      {/* should not show in home page */}
      {currentPath !== "/" && (
        <div className="xl:ms-[125px] ms-[33px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[33px] md:mt-[50px] mx-[0px]">
          <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[106px] gap-[17px] md:mb-[61px] mb-7">
            <div>
              <Image
          src="/photos/big screen/concept/picture 01.png"
          className="md:block hidden"
          alt="img"
          width={527}
          height={777}
        />
        <Image
          src="/photos/phone screen/concept/picture 1.png"
          className="md:hidden block"
          alt="img"
          width={366}
          height={347}
        />
        
            </div>
            <div>
              <div className="font-[Helvetica] md:text-[49px] leading-[56px] text-[24px] font-bold mb-[5px]">
                <span className="text-red-600">What</span> Is Durga Puja Art
              </div>
              <div className="md:text-[15px] leading-[24px] text-[12px]">
                <p
                  className="md:mb-6 mb-5"
                  style={{ fontFamily: "sans-serif" }}
                >
                  durga puja is bengal’s biggest festival that takes place over
                  a week or so in september-october, on dates varying every year
                  but announced well in advance. at the centre of the
                  celebration is the figure of goddess durga, crafted
                  traditionally in clay, who is worshipped in the act of
                  vanquishing the demon mahishasura. it is particularly in the
                  streets of kolkata (calcutta), the capital of the state, that
                  durga puja transcends religious bounds and serves as the
                  cradle for the world’s largest publicly funded Art show. while
                  the worship of durga and her four divine children remains the
                  ritualistic core, the temporary shelters of the idols –
                  structures created from months in advance in street corners –
                  become exquisite works of artistic expression, unique to each
                  locality every year. thus there is a different artistic
                  interpretation offered in every locality through the choice of
                  a different theme to which the entire structure conforms.
                </p>
                <p
                  className="md:mb-6 mb-5"
                  style={{ fontFamily: "sans-serif" }}
                >
                  every autumn, the entire city wakes up to an explosion of
                  creativity, with every neighbourhood decked up in unique
                  templates that are a mélange of traditional Art and
                  contemporary concepts, that are diverse and creative enough to
                  rival any international art biennale. commercial promotion and
                  sponsorship have kept pace with the explosion of Art,
                  providing an eco-system of community support.
                </p>
                <p
                  className="md:mb-6 mb-5"
                  style={{ fontFamily: "sans-serif" }}
                >
                  as a result, every year, the durga puja experience is
                  different and diverse. the evolution of durga puja of kolkata
                  into an inclusive, community-driven celebration of Art has
                  been hailed by unesco, which describes it as "the best
                  instance of the public performance of religion and Art, and as
                  thriving ground for collaborative artists and designers...”.
                  durga puja has been inscribed on its list of intangible
                  cultural heritage of humanity in 2021.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show on mobile */}
      {currentPath !== "/" && (
        <div className="grid grid-flow-col auto-cols-max gap-3 mx-[32px] overflow-x-auto no-scrollbar lg:flex lg:justify-evenly">
         
          <div className="relative group rounded-lg overflow-hidden justify-center flex duration-150">
            <Image
              className=""
              width={320}
              height={700}
              src="/photos/phone screen/concept/picture 2.png"
              alt=""
            />
            <div className="hidden absolute text-[12px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-2 text-white">
              <p className="text-[12px] leading-[15px] font-[Helvetica] mb-[10px]">
                Contemporary Durga Puja Art
              </p>
              <div className="pt-[10px]">
                <p className="text-[8px] pr-[25%] leading-[14px] text-white font-normal font-helvetica">
                  the third edition of preview show of durga puja Art 2024
                  kolkata, is going to be held on 30 september to 4 october. the
                  show time being 6 pm to 5 am.
                </p>
                <div className="pt-[10px]">
                  <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                    Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden justify-center flex">
            <Image
              className=""
              width={320}
              height={249}
              src="/photos/phone screen/concept/picture 3.png"
              alt=""
            />
            <div className="hidden absolute text-[12px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-2 text-white">
              <p className="text-[12px] leading-[15px] font-[Helvetica] mb-[10px]">
                Multi Genre Music Festival 2024
              </p>
              <div className="pt-[10px]">
                <p className="text-[8px] pr-[25%] leading-[14px] text-white font-normal font-helvetica">
                  the third edition of preview show of durga puja Art 2024
                  kolkata, is going to be held on 30 september to 4 october. the
                  show time being 6 pm to 5 am.
                </p>
                <div className="pt-[10px]">
                  <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                    Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group rounded-lg overflow-hidden justify-center flex">
            <Image
              className=""
              width={320}
              height={249}
              src="/photos/phone screen/concept/picture 3.png"
              alt=""
            />
            <div className="hidden absolute text-[12px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-2 text-white">
              <p className="text-[12px] leading-[15px] font-[Helvetica] mb-[10px]">
                Multi Genre Music Festival 2024
              </p>
              <div className="pt-[10px]">
                <p className="text-[8px] pr-[25%] leading-[14px] text-white font-normal font-helvetica">
                  The third edition of preview show of durga puja Art 2024
                  kolkata, is going to be held on 30 september to 4 october. the
                  show time being 6 pm to 5 am.
                </p>
                <div className="pt-[10px]">
                  <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                    Registration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Concept;
