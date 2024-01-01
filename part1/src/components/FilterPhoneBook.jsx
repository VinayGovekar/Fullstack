import Input from "./Input"

const FilterPhoneBook = ({showAll,filterValue,handleShowAll,onFilterChange})=>{
    return(
        <>
            <h3>Filter</h3>
            <Input type={"text"} value={filterValue} onChange={onFilterChange}/>
            <button onClick={handleShowAll}>Show {showAll?"Important":"All"}</button>
        </>
    )
}

export default FilterPhoneBook