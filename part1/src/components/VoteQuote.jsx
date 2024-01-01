import Button from "./Button"

const VoteQuote = ({quote,count,handleNextButtonClick,handleVoteThisQuote})=>{
    return(
        <>
        <h1>{quote}</h1>
        <h3>No of votes : {count}</h3>
        <Button onClick={handleNextButtonClick} text={"Next Quote"}/>
        <Button text={"Vote this Quote"} onClick={handleVoteThisQuote}/>
        </>
    )
}
export default VoteQuote