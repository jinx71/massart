
"use client"
import { useState } from "react";

import { MdOutlineRemove } from "react-icons/md";
import { VscAdd } from "react-icons/vsc";

const Question = ({ question, ans, index }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    return (
        <>
            <div className={`flex gap-[17px] pt-[25px] pb-[25px] p-5 pl-[60px] ${showAnswer && "bg-[#ED2127]"} rounded-[10px] mb-[60px]`}>
                {/* <p>{index + 1}</p> */}
                {/* <VscAdd /> */}
                <div className="flex flex-col gap-[25px] grow">
                    <div className="flex justify-between">
                        <p className={`max-w-[216px]  cursor-pointer ${showAnswer && "text-[#FFFFFF]"}`} onClick={() => setShowAnswer(!showAnswer)}>{question}</p>
                        {
                            showAnswer ? <p className="cursor-pointer w-7 h-7 rounded-3xl bg-[#FFFFFF] flex items-center justify-center"><MdOutlineRemove className="text-[#EE5A34]" onClick={() => setShowAnswer(!showAnswer)} /></p> : <p className="cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}><VscAdd className="text-[#0D062D]" /></p>
                        }
                    </div>
                    {
                        showAnswer && <div className="text-xs text-[#FFFFFF] pr-[6px]">
                            {ans}
                        </div>
                    }
                </div>


            </div>
        </>
    )
}

export default Question;