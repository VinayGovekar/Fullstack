import Person from "./Person"

const Phonebook = ({persons,showAll,handleShowAll})=>{

    return(
        <>
        <h3>Phonebook</h3>
          <button onClick={handleShowAll}>Show {showAll?"Important":"All"}</button>
          <ul>
              {persons.map(person=><Person key={person.id} name={person.name}/>)}
          </ul>
        </>
    )
}
export default Phonebook