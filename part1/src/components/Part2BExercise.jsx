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
    
      const onNoteSubmit=(event)=>{
        event.preventDefault()
        const newPerson = {
            name:newName,
            id:persons.length+1,
            important:Math.Random<0.5
        }
        setPersons(persons.concat(newPerson))
        setNewName("")
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
          <h2>Numbers</h2>
            <ul>
                {persons.map(person=> <li key={person.id}>{person.name}</li>)}
            </ul>
        </div>
      )
}

export default Part2BExercise