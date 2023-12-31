import Button from "./Button"

const ButtonHandles = (props) =>{
    return(
    <>
    <h1>Give Feedback</h1>
    <Button onClick={props.goodClick} text={"Good"}/>
    <Button onClick={props.neutralClick} text={"Neutral"}/>
    <Button onClick={props.badClick} text={"Bad"}/>
    </>)
}

export default ButtonHandles