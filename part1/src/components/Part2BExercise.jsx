import { useState } from "react"
import PersonForm from "./PersonForm"
import Phonebook from "./Phonebook"
import FilterPhoneBook from "./FilterPhoneBook"
import axios from "axios"
const Part2BExercise = ()=>{
    const [persons, setPersons] = useState([]) 

    axios
    .get("http://localhost:3001/persons")
    .then(response =>{
      setPersons(response.data)
    })
      const [newName, setNewName] = useState('')
      const [newPhone,setNewPhone] = useState('')
      const [showAll,setShowAll] = useState(true)
      const [filerValue,setFilterValue] = useState('')
      const [filerPersons,setFilterPersons] = useState(persons)
      const onNameInputChange = (event) => setNewName(event.target.value)
      const onPhoneInputChange = (event) => setNewPhone(event.target.value)
      const onFilterChange = (event) => {
        if(event.target.value===""){
            setPersons(filerPersons)
            setFilterValue("")
        }
        else{
            setFilterValue(event.target.value)
            setPersons(persons.filter(person=>person.name.toLowerCase().includes(filerValue.toLowerCase())))
        }
      }
      const personsToShow=showAll?persons:persons.filter(person=>person.important)

      const ValidateForm = ()=>{
        if(newName==="") return "Name cannot be empty"
        if(newPhone==="") return "Phone number cannot be empty"
        if(persons.find(person=>person.name===newName)===undefined) return ""
        return `${newName} person is already present`
      }

      const onNoteSubmit=(event)=>{
        event.preventDefault()
        let message=ValidateForm()
        if(message===""){
            const newPerson = {
                name:newName,
                phone:newPhone,
                id:persons.length+1,
                important:Math.Random<0.5
            }
            setPersons(persons.concat(newPerson))
            setFilterPersons(persons.concat(newPerson))
            setNewName("")
            setNewPhone("")
        }
        else alert(message)
       
      }

      const handleShowAll = (event)=>{
        event.preventDefault()
        console.log(persons)
        setShowAll(!showAll)
      }
      return (
        <div>
            <h2>Phonebook App</h2>
            <PersonForm 
            newName={newName} 
            phoneNumber={newPhone}
            onNoteSubmit={onNoteSubmit} 
            onNameInputChange ={onNameInputChange}
            onPhoneInputChange={onPhoneInputChange}
            />
            <FilterPhoneBook 
            showAll={showAll} 
            filterValue={filerValue}
            handleShowAll={handleShowAll}
            onFilterChange={onFilterChange}
            />
            <Phonebook 
            persons={personsToShow} />
            
        </div>
      )
}

export default Part2BExercise