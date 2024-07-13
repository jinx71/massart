import Image from "next/image";
import Link from "next/link";
import HomePageImage01 from "../../public/images/HomePageImage-01.jpg";
const HomeAboutUs = () => {
  return (
    <div className="xs:pt-[60px] lg:pt-0 bg-white font-helvetica xs:mx-[32px] lg:mt-[150px]">
      <div className="flex flex-col lg:flex-row-reverse justify-center lg:gap-20">
        <div className="lg:w-1/3">
          <h1 className="xs:text-[24px] lg:text-[42px] xs:leading-[36px] font-helvetica font-bold xs:pb-[15px]">
            What is
            <span className="text-buttonCustomColor "> durga puja Art </span>
          </h1>
          <p
            className=" font-normal font-helvetica xs:text-[12px] xs:leading-[18px] xs:pb-[25px] lg:text-[16px] lg:pt-10
        "
          >
            Durga puja is bengal’s biggest festival that takes place over a week
            or so in september-october, on dates varying every year but
            announced well in advance. at the centre of the celebration is the
            figure of goddess durga, crafted traditionally in clay, who is
            worshipped in the act of vanquishing the demon mahishasura.
          </p>
          <Link href="/about-us">
            <button
              className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold
      px-[17px] py-[4px] rounded-full hidden lg:block"
            >
              Read More
            </button>
          </Link>
        </div>
        <div className="">
          <Image
            src={HomePageImage01}
            alt="Durga Puja"
            width={527}
            height={411}
            className="w-full h-[347px] object-cover rounded-[10px]
             "
          />
        </div>
      </div>
      <div>
        <Link href="/about-us">
          <button
            className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold
      px-[17px] py-[4px]  mt-10 rounded-full lg:hidden block"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeAboutUs;
