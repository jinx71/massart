import Image from "next/image";
import Link from "next/link";

const HomeAboutUs = () => {
  return (
    <div
      className="  xs:pt-[60px] bg-white font-helvetica grid 
      xs:grid-cols-1
     
        xs:mx-[32px]
    
    "
    >
      <div className="">
        <h1 className="xs:text-[24px] xs:leading-[36px] font-helvetica font-bold xs:pb-[15px]">
          What is
          <span className="text-buttonCustomColor "> durga puja Art </span>
        </h1>
        <p
          className=" font-normal font-helvetica xs:text-[12px] xs:leading-[18px] xs:pb-[25px]
        "
        >
          Durga puja is bengal’s biggest festival that takes place over a week
          or so in september-october, on dates varying every year but announced
          well in advance. at the centre of the celebration is the figure of
          goddess durga, crafted traditionally in clay, who is worshipped in the
          act of vanquishing the demon mahishasura.
        </p>

        <Image
          src="/images/picture (16).png"
          alt="Durga Puja"
          width={100}
          height={100}
          className="w-full h-[347px] object-cover rounded-[10px]
             "
        />
      </div>
      <div>
<Link href='/about-us'>
  <button
          className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold
      px-[17px] py-[4px] rounded-full"
        >
          Read More
        </button>
</Link>
      
      </div>
    </div>
  );
};

export default HomeAboutUs;
