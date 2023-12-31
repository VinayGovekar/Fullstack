const StatisticsLine = ({type,count}) =>{
    return(
        <>
        <tr>
            <td>
                {type}
            </td>
            <td>
                {count}
            </td>
        </tr>
        </>
    )
}

export default StatisticsLine