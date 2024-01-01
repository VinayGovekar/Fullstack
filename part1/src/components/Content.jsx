import Part from "./Part"

const Content = ({parts})=>{

    return(
        <>
        <table>
            <tbody>
                {parts.map(part=><tr key={part.id}><Part name={part.name} exercises={part.exercises}/></tr>)}
            </tbody>
        </table>
        </>
    )    
}

export default Content