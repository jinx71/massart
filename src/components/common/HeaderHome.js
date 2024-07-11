"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiFacebook } from "react-icons/ci";
import {
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HeaderHome = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

   const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [activeButton, setActiveButton] = useState("Get ticket");

  const buttons = [
    { label: "Get ticket", id: "Get ticket" },
    { label: "View more", id: "View more" },
  ];

  return (
    <div className="relative xs:h-[80vh] ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/Header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="navbar relative
         xs:pl-[0px] xs:pr-[32px] pt-[50px]
     
      "
      >
        {/* mobile */}
        <div className=" flex justify-between items-center w-full flex-row-reverse  ">
        

          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className=" bg-transparent text-white h-[32px] w-[32px]  md:hidden xl:hidden 2x:hidden lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content right-0 mt-3 z-10 p-2 shadow bg-[white] rounded-[5px] w-56"
            >
            
              <li className="text-[#ed2127] font-helvetica">
                <Link href="/">Home</Link>
              </li>
                <li className="text-[#ed2127] font-helvetica">
                <Link href="/about-us">About</Link>
              </li>
              <li className="text-[#ed2127] font-helvetica">
                 <Link href="/concept">Concept</Link>
              </li>
              <li className="text-[#ed2127] font-helvetica">
                 <Link href="/2023">Preview show 2023</Link>
              </li>
              <li className="text-[#ed2127] font-helvetica">
                 <Link href="/preview-show-2024">Preview show 2024</Link>
              </li>
                   <li className="text-[#ed2127] font-helvetica">
                 <Link href="/preview-show-2025">Preview show 2025</Link>
              </li>

              <li className="text-[#ed2127] font-helvetica">
            
                <Link href="/gallery">Gallery</Link>
              </li>
              <li className="text-[#ed2127] font-helvetica">
                <a>Press</a>
              </li>
              <li className="text-[#ed2127] font-helvetica">
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </div>


          <div className="w-full">

        <Link href="/">
        <Image
          src="/images/massart 1.png"
          alt="massart-logo"
          width={100}
          height={100}
          className="h-[49px] object-contain"
        />

    </Link>
          </div>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white font-helvetica">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white font-helvetica">
              <Link href="/about-us">About</Link>
            </li>
            <li className="text-white font-helvetica">
              <Link href="/concept">Concept</Link>
            </li>
           <li className="text-white font-helvetica">
          <div className="dropdown">
            <Link href="/preview-show-2024">Preview Show</Link>
            <ul className="dropdown-content">
              <li>
                <Link href="/2023">2023</Link>
              </li>
              <li>
                <Link href="/preview-show-2024">2024</Link>
              </li>
              <li>
                <Link href="/preview-show-2025">2025</Link>
              </li>
            </ul>
          </div>
        </li>

            <li className="text-white font-helvetica">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="text-white font-helvetica">
              <Link href="/individual">Individual</Link>
         
            </li>
            <li className="text-white font-helvetica">
               <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
       
         <div className="navbar-end hidden  md:flex lg:flex xl:flex 2xl:flex ">
          <Link href='/login' className=" bg-buttonCustomColor rounded-[1000px]  px-[36px] py-[12px] leading-[24px] text-white font-poppins text-[18px]">
            Login
          </Link>
        </div>
      
       
      </div>

      <div
        className="
        
        absolute bottom-[35px] left-0 w-full grid justify-center items-center 
   
    text-black font-helvetica"
      >
        <div className="">
          <div className="">
            {/* <h1 className="xs:text-[36px] xs:leading-[40px] text-white font-helvetica font-bold xs:pb-[27px]">
              Witness Bengal
            </h1> */}
            <div className="flex gap-x-[14px] justify-center ">
              
                   {/* <div>
 <button onClick={toggleModal} className="text-white xs:px-[17px] xs:py-[4px] font-helvetica font-bold xs:text-[20px] xs:leading-[24px] bg-buttonCustomColor xs:rounded-full hover:bg-transparent transition-colors duration-300 ease-in-out border-transparent border hover:border-buttonCustomColor">
                Get Ticket
              </button>

                   </div>
              */}



                   {/* <Link href="/gallery">
              <button className="text-white xs:px-[17px] xs:py-[4px] font-helvetica font-bold xs:text-[20px] xs:leading-[24px] border border-buttonCustomColor xs:rounded-full hover:bg-buttonCustomColor hover:border-transparent transition-colors duration-300 ease-in-out">
                View More
              </button>
              </Link> */}
         
            </div>
          </div>
          <div className="flex space-x-[10px] text-white pt-[39px] text-[18px] justify-center ">
            <CiFacebook />
            <FaLinkedinIn />
            <FaPinterest />
            <FaXTwitter />
            <FaWhatsapp />
            <FaInstagram />
          </div>
        </div>

        {/* <Image
          src="/public/images/unescoHeader.png"
          width={100}
          height={100}
          alt=""
          className="absolute bottom-0 right-0 hidden block-md
       md:h-[130px]  lg:h-[130px]  xl:h-[130px] object-cover
       mr-[87px]"
        /> */}
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
                  className="md:w-[97px] md:h-[48px] w-[39px] h-[22px] border rounded-full md:text-[18px] md:leading-[24px] text-[20px] leading-[16px] border-black hover:bg-red-600 hover:border-buttonCustomColor hover:text-white delay-150"
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
    </div>
  );
};

export default HeaderHome;
