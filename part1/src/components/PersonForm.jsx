import Input from "./Input"

const PersonForm = ({newName,phoneNumber,onNoteSubmit,onNameInputChange,onPhoneInputChange})=>
{
    return(
        <>
        
        <h3>Person Form</h3>
        <form onSubmit={onNoteSubmit}>
            <div>
              Name: <Input type={"text"} onChange={onNameInputChange} value={newName}/>
            </div>
            <div>
                Phone: <Input type={"text"} value={phoneNumber} onChange={onPhoneInputChange}/>
            </div>
            <div>
              <button type="submit" >Add</button>
            </div>
          </form>
        </>
    )
}

export default PersonForm