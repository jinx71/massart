

import { questions } from "@/src/helperData/helperData";
import Question from "./Qestion";
// import { useState } from "react/cjs/react.production.min";



const AskQuestion = () => {
    // console.log(questions);
    return (
        <div className="text-[20px] leading-[26px] font-helvetica text-[#000000] flex flex-col gap-[25px]">
            {questions.map((question, index) => (
                <Question key={index} question={question.question} ans={question.ans} index={index} />
            ))}
        </div>
    );

}
export default AskQuestion;

