import Display from "./Display"
import StatisticsLine from "./StatisticsLine"

const FeedbackStatistics = ({good,neutral,bad})=>{
    const total = good+neutral+bad;
    if(good===0 && neutral===0 && bad===0){
        return(
            <>
            <h1>Statistics</h1>
            <Display counter={"No feedback given yet"}/>
            </>
        )
    }
    const positivePercentage = (good*100)/total;
    console.log(total,good,total*100,positivePercentage);
    return(
        <>
        <h1>Statistics</h1>
        <table>
            <tbody>
            <StatisticsLine type={"Good"} count={good} />
            <StatisticsLine type={"Neutral"} count={neutral}/>
            <StatisticsLine type={"Bad"} count={bad}/>
            <StatisticsLine type={"All"} count={total}/>
            <StatisticsLine type={"Average"} count={total/3}/>
            <StatisticsLine type={"PostivePercentage"} count={positivePercentage} />
            </tbody>
        </table>
        </>
    )
}

export default FeedbackStatistics