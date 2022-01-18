import { useState } from "react"

const SearchBar = () => {
    
    const [ searchTerm, setSearchTerm ] = useState("")
    
    return(
        <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
    )
}

export default SearchBar