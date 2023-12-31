import { useState } from "react"
import Display from './Display.jsx'
import Button from './Button.jsx'
const Shivam = ()=>{
    const [message,setMessage] = useState("");
    return(
        <>
        <Display counter={message}/>
        <br/>
        <Button onClick={()=>setMessage("Shivam is a Hagu")} text={"What is Shivam"}/>
        </>
    )
}

export default Shivam