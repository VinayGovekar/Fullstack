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
    return(
      <>
      <p>
      <Part name={props.name} exercises={props.exercises}/>
      </p>
      </>
    )
}

const Total = (props) =>{
  return(
    <>
    <p>Total: {props.one + props.two + props.three}</p>
    </>
  )
}

function App() {
  const title = "Half Stack application development";
  const one = 10;
  const two = 7;
  const three= 3;
  return (
    <div>
      <Header title={title}/>
      <Component name={"Fundamentals of React"} exercises={one}></Component>
      <Component name={"Using props to pass data"} exercises={two}></Component>
      <Component name={"State of a component"} exercises={three}></Component>
      <Total one={one} two={two} three={three}/>
    </div>
  )
}

export default App
