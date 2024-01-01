import { useState } from "react"
import VoteQuote from "./VoteQuote"
import MostVote from "./MostVote";

const Part1DExercise2 = ()=>{

    const quotes = [{
        quote:'If it hurts, do it more often.',
        vote:0
    },
    {
        quote:'Adding manpower to a late software project makes it later!',
        vote:0
    },
    {
        quote:'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        vote:0
    },
    {
        quote:'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        vote:0
    }
    ]
    let maxVote=0;
    const [voteCount,setVote] =useState(quotes);
    const [selectedVote,setSelected] = useState(0);
    const handleNextButtonClick = () =>{
        let lastQuote = voteCount.length-1
        if(selectedVote==lastQuote){
            setSelected(0)
        }
        else {
            setSelected(selectedVote+1)
        }
    } 
    const GetQuoteWithMaxVote = (newQuotes) =>{
        newQuotes.forEach(quote=>{
            if(quote.vote>maxVote) maxVote=quote.vote
        });
        return newQuotes.find(item=>item.vote===maxVote)
    }

    const handleVoteThisQuote = ()=>{
        let newVotes = JSON.parse(JSON.stringify(voteCount))
        newVotes[selectedVote].vote+=1
        setVote(newVotes)
    }
    return(
        <>
        <VoteQuote 
        quote={voteCount[selectedVote].quote} 
        count={voteCount[selectedVote].vote} 
        handleNextButtonClick={handleNextButtonClick} 
        handleVoteThisQuote={handleVoteThisQuote}
        />
        <MostVote quote={GetQuoteWithMaxVote(voteCount)} />
        </>
    )
}

export default Part1DExercise2