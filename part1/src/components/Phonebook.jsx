import Person from "./Person"

const Phonebook = ({persons,showAll,toggleImportance})=>{

    return(
        <>
        <h3>Phonebook</h3>
          <ul>
              {persons.map(person=><Person key={person.id} person={person} toggleImportance={()=>toggleImportance(person.id)}/>)}
          </ul>
        </>
    )
}
export default Phonebook