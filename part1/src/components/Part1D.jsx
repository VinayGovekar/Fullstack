import { useState } from "react"
import Display from "./Display";
import Button from "./Button";

const History = ({allClicks})=>{
    if(allClicks.Length===0){
        return(
            <>
            <Display counter={"No clicks yet"}></Display>
            </>
        )
    }
    return(
        <>
        <Display counter={allClicks.join("")}/>
        </>
    )
}

const Part1D = ()=>{

    const [left,setLeft] = useState(0);
    const [right,setRight] = useState(0);
    const [allClicks,setClicks] = useState([]);
    const [total,setTotal] = useState(0);
    
    const handleLeftClick = ()=>{
        setLeft(left+1);
        setClicks(allClicks.concat("L"));
        setTotal(left+right);
    }
    const handleRightClick = ()=>{
        setRight(right+1);
        setClicks(allClicks.concat("R"));
        setTotal(left+right);
    }
    return(
        <>
        <Display counter={left}/>
        <Display counter={right}/>
        <br/>
        <Button onClick={handleLeftClick} text={"Left"} />
        <Button onClick={handleRightClick} text={"Right"}/>
        <p>
            <History allClicks={allClicks}/>
        </p>
        <p>Total : {total}</p>
        </>
    )
}

export default Part1D