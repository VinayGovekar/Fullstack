const Total = (props) =>{
    let total = 0;
    props.parts.forEach(part=>{
      total+=part.exercises;
    })
    return(
      <>
      <p>Total: {total}</p>
      </>
    )
  }

export default Total