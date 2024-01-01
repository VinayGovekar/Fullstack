import { useState } from "react"
const Part2BExercise = ()=>{
    const [persons, setPersons] = useState([
        { 
            id:1,
            name: 'Arto Hellas',
            important:true
        }
      ]) 
      const [newName, setNewName] = useState('')

      const onNameInputChange = (event) => setNewName(event.target.value)
      const [showAll,setShowAll] = useState(true)
    
      const personsToShow=showAll?persons:persons.filter(person=>person.important)

      const ValidateName = ()=>{
        if(newName==="") return false
        if(persons.find(person=>person.name===newName)===undefined) return true
        return false
      }

      const onNoteSubmit=(event)=>{
        event.preventDefault()
        if(ValidateName()){
            const newPerson = {
                name:newName,
                id:persons.length+1,
                important:Math.Random<0.5
            }
            setPersons(persons.concat(newPerson))
            setNewName("")
        }
        else alert(`${newName} person is already present`)
       
      }

      const handleShowAll = ()=>{
        console.log(persons)
        setShowAll(!showAll)
      }
      return (
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={onNoteSubmit}>
            <div>
              Name: <input value={newName} onChange={onNameInputChange} />
            </div>
            <div>
              <button type="submit" >Add</button>
            </div>
          </form>
          <button onClick={handleShowAll}>Show {showAll?"Important":"All"}</button>
          <h2>Numbers</h2>
            <ul>
                {personsToShow.map(person=> <li key={person.id}>{person.name}</li>)}
            </ul>
        </div>
      )
}

export default Part2BExercise