const Component =(props)=>{
    
    const displayItems = props.parts.map(element=><li key={element.name}>{element.name}:{element.exercises}</li>)
    return(
      <>
        <ul>{displayItems}</ul>
      </>
    )
}

export default Component