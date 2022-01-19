import { useState } from "react"
import useFetch from "../useFetch"

import MusicianCard from "../components/MusicianCard"

const MusiciansTab = ( props ) => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/musicians")
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
                    <MusicianCard fname = {musician.fname} lname = { musician.lname} instrument = { musician.instrument } style = { musician.style} mail = { musician.mail } phone = { musician.phone } bands = { musician.bands } fb = { musician.fb } tw = { musician.tw} ig = { musician.ig} sc = { musician.sc }  key = { musician.id } img = { musician.img } id = { musician.id }/>
                ))
            }
        </div>
    )
}

export default MusiciansTab