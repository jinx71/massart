import Image from "next/image";

import Link from "next/link";
import { LuSend } from "react-icons/lu";
import SocialContributor from "../SocialContributor/SocialContributer";

const Footer = () => {
  return (
    <>
      <SocialContributor />
      <footer className="bg-footerColor ">
        <div className=" text-white xs:px-[32px] xs:pt-[35px] xs:pb-[25px]">
          <div className="h-[57px] w-[49px] ">
            <Image
              className="w-full h-full object-cover "
              src="/images/massart 1.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[45px]">
            <div>
              <nav className="xs:py-[25px]">
                <p className="xs:text-[12px] xs:leading-[17px] font-normal font-helvetica">
                  a non-profit organization conceived in june 2022 with the
                  objective of promoting Art and culture of bengal.
                </p>
              </nav>

              <nav>
                <h6 className=" xs:text-[16px] xs:leading-[24px]  font-helvetica font-bold text-white">
                  Learn More
                </h6>
                <p className="link opacity-60 link-hover xs:pt-[10px] xs:pb-[8px]  xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Terms Of Use
                </p>
                <p className="link link-hover opacity-60 xs:pb-[8px] xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Privacy policy
                </p>
                <Link  href='/faq'>
                 <p className="link link-hover opacity-60  xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  FAQ
                </p>
                </Link>
               
              </nav>
              <nav>
                <p className="xs:pt-[25px] xs:text-[8px] xs:leading-[12px] font-normal xs:text-left">
                  Copyright © 2024 massArt, Designed & Developed Ethically by
                  <a href="https://www.ethicalden.com/" target="_blank">
                    <span className="underline"> Ethical Den</span>
                  </a>
                </p>
              </nav>
            </div>

            <div>
              <nav>
                <h6 className="xs:pb-[10px] pt-[25px] xs:text-[16px]  xs:leading-[24px]  font-helvetica font-bold text-white">
                  Navigation
                </h6>
                 <Link  href='/'>
                  <p className="xs:pb-[8px] opacity-60 link link-hover xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Home
                </p>
                 </Link>
               
                <Link  href='/about-us'>
                  <p className="xs:pb-[8px] opacity-60 link link-hover xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  About Us
                </p>
                </Link>
              

               <Link  href='/concept'>
                <p className="xs:pb-[35px] opacity-60 link link-hover xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Concept
                </p>
               </Link>
               
              </nav>

              <form>
                <h6 className="xs:pb-[6px] xs:text-[16px] xs:leading-[24px]  font-helvetica font-bold text-white">
                  Newsletter
                </h6>
                <p className="opacity-60 font-helvetica font-normal xs:pb-[13px] xs:text-[12px] xs:leading-[16px]">
                  Don't miss the latest information on this platform
                </p>
                <fieldset className="form-control">
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-full h-[30px] input input-bordered xs:text-[12px] xs:leading-[20px] font-normal bg-emailColor font-helvetica rounded-none"
                    />
                    <button className="bg-buttonCustomColor w-[40px] h-[30px] flex items-center justify-center p-[5px] rounded-none">
                      <LuSend size={14} className="text-white" />
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
