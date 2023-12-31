import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const Part =(props)=>{
  return(
    <>
      {props.name} {props.exercises}
    </>
  )
}

const Header = (props) =>{
  return(
    <>
    <h1>{props.title}</h1>
    </>
  )
}

const Component =(props)=>{
    
    const displayItems = props.parts.map(element=><li key={element.name}>{element.name}:{element.exercises}</li>)
    return(
      <>
        <ul>{displayItems}</ul>
      </>
    )
}

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

const Part1A = ()=>{
  const title = "Half Stack application development";
  const parts = [
    {
      name:"Fundamentals of React",
      exercises:10
    },
    {
      name:"Using props to pass data",
      exercises:7
    },
    {
      name:"State of a component",
      exercises:3
    }
  ]

  return (
    <div>
      <Header title={title}/>
      <Component parts={parts}/>
      <Total parts={parts}></Total>
    </div>
  )
}

const Display =({counter})=><>{counter}</>

const Button = ({onClick,text}) =><><button onClick={onClick}>{text}</button></>

function App() {
  const [counter, setCounter] = useState(0)
  const handleClick =()=> setCounter(counter+1);
  const resetCounter = ()=> setCounter(0);
  return (
    <div>
      <Display counter={counter}/>
      <p>
      <Button onClick={handleClick} text={"Increment"}/>
      <Button onClick={()=>setCounter(counter-1)} text={"Decrement"}/>
      <Button onClick={resetCounter} text={"Reset"} />
      </p>
    </div>
  )
}

export default App
