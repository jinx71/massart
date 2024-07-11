import Image from "next/image";

const SocialContributor = () => {
  return (
    <div className="px-[32px] py-[60px]">
      <div className="w-full grid grid-cols-3 gap-4 justify-between items-center">
        <div className="w-full flex justify-center items-center h-[86px] hover:bg-EventPartner">
          <Image
            className="w-[90px] h-[25px] object-cover"
            src="/images/BritishCouncil_Logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full flex justify-center items-center h-[86px] hover:bg-EventPartner">
          <Image
            className="w-[75px] h-[61px] object-cover"
            src="/images/unesco.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full flex justify-center items-center h-[86px] hover:bg-EventPartner">
          <Image
            className="w-[73px] h-[40px] object-cover"
            src="/images/india.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>

      <hr className="bg-black my-[10px]" />

      <div className="w-full grid grid-cols-3 gap-4 justify-between items-center">
        <div className="w-full flex justify-center items-center h-[86px] hover:bg-EventPartner">
          <Image
            className="w-[90px] h-[25px] object-cover"
            src="/images/BritishCouncil_Logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full flex justify-center items-center h-[86px] hover:bg-EventPartner">
          <Image
            className="w-[75px] h-[61px] object-cover"
            src="/images/unesco.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full flex justify-center items-center h-[86px] hover:bg-EventPartner">
          <Image
            className="w-[73px] h-[40px] object-cover"
            src="/images/india.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialContributor;
