import Display from './components/Display.jsx'
import Button from './components/Button.jsx'

const Part1C = ()=>
{
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

export default Part1C