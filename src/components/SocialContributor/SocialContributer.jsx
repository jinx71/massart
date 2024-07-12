import Image from "next/image";

const SocialContributor = () => {
  return (
    <div className="px-[32px] py-[30px]">
      <div className="w-full grid grid-cols-3 gap-4 justify-between items-center">
        <div className="w-full h-full lg:p-6 flex justify-center items-center  hover:bg-EventPartner">
          <Image
            className="object-cover"
            src="/images/BritishCouncil_Logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full h-full lg:p-6 flex justify-center items-center  hover:bg-EventPartner">
          <Image
            className="object-cover"
            src="/images/unesco.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full h-full lg:p-6 flex justify-center items-center hover:bg-EventPartner">
          <Image
            className=" object-cover"
            src="/images/india.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
      </div>

      <hr className="bg-black my-[10px]" />

      <div className="grid grid-cols-3 gap-3 justify-between items-center">
        <div className="w-full h-full lg:p-6 flex justify-center items-center hover:bg-EventPartner">
          <Image
            className="object-cover"
            src="/images/BritishCouncil_Logo.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full h-full lg:p-6 flex justify-center items-center  hover:bg-EventPartner">
          <Image
            className="object-cover"
            src="/images/unesco.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>

        <div className="w-full h-full lg:p-6 flex justify-center items-center  hover:bg-EventPartner">
          <Image
            className=" object-cover"
            src="/images/india.png"
            alt="logo"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialContributor;
