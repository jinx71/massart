

import Image from "next/image";


const ContemporaryBggreenGrid = () => {
    return (
        <>
            <div className="relative group rounded-[20px] overflow-hidden">
                <Image
                    className="w-full h-auto"
                    width={387}
                    height={491}
                    src="/photos/big screen/concept/picture 04.png"
                    alt=""
                />
                <div
                    className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    style={{
                        background:
                            "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
                    }}
                >
                    <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
                        contemporary durga puja Art
                    </p>
                    <div>
                        <a
                            className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto"
                            href="#"
                        >
                            read more
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative group rounded-[20px] overflow-hidden">
                <Image
                    className="w-full h-auto"
                    width={387}
                    height={491}
                    src="/photos/big screen/concept/picture 02.png"
                    alt=""
                />
                <div
                    className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    style={{
                        background:
                            "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
                    }}
                >
                    <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
                        contemporary durga puja Art
                    </p>
                    <div>
                        <a
                            className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto"
                            href="#"
                        >
                            read more
                        </a>
                    </div>
                </div>
            </div>

            <div className="relative group rounded-[20px] overflow-hidden">
                <Image
                    className="w-full h-auto"
                    width={387}
                    height={491}
                    src="/photos/big screen/concept/picture 03.png"
                    alt=""
                />
                <div
                    className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                    style={{
                        background:
                            "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
                    }}
                >
                    <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
                        contemporary durga puja Art
                    </p>
                    <div>
                        <a
                            className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto"
                            href="#"
                        >
                            read more
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContemporaryBggreenGrid;