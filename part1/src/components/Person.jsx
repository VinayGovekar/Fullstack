import Button from "./Button"

const Person = ({person,toggleImportance})=>
{
    return(
        <>
        <li>{person.name} <Button onClick={toggleImportance} text={person.important?"True":"False"} /> </li>
        </>
    )
}

export default Person