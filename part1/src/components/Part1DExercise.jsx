import { useState } from "react"
import ButtonHandles from "./ButtonHandles";
import FeedbackStatistics from "./FeedbackStatistics";

const Part1DExecise = ()=>{
    const [goodCount,setGood] = useState(0);
    const [neutralCount,setNeutral] = useState(0);
    const [badCount,setBad] = useState(0);

    const handleGood = () => setGood(goodCount+1);
    const handleNeutral = () => setNeutral(neutralCount+1);
    const handleBad = ()=> setBad(badCount+1);
    return(
        <>
        <ButtonHandles goodClick={handleGood} neutralClick={handleNeutral} badClick={handleBad}/>
        <FeedbackStatistics good={goodCount} neutral={neutralCount} bad={badCount}/>
        </>
    )
}

export default Part1DExecise