import { useState } from "react"
import useFetch from "../useFetch"

import MusicianCard from "../components/MusicianCard"

const MusiciansTab = ( props ) => {

    const url = "http://localhost:5000/api/musician"
    const { data, isLoading, error } = useFetch(url)
    const [ searchTerm, setSearchTerm ] = useState("")

    return(
        <div className= {`${ props.class}`} >
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>

            {
              data &&  data.filter((val) => {
                  if(searchTerm === ""){
                      return val
                  } else if(val.fname.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                      return val
                  }
              }).map((musician) => (
                    <MusicianCard  key = { musician.id } fName = {musician.fName} lName = { musician.lName} instruments = { musician.instruments } style = { musician.style} mail = { musician.mail } website = {musician.website} bands = { musician.bands } socialMedia = {props.socialMedia} image = { musician.image } id = { musician.id }/>
                ))
            }
        </div>
    )
}

export default MusiciansTab