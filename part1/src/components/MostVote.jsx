const MostVote = ({quote}) =>
{
    return(
        <>
        <h2>
            Quote with the max vote : {quote.vote}
        </h2>
        {quote.quote}
        </>
    )
}

export default MostVote