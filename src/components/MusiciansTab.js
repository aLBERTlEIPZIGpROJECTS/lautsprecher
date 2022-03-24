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
                    <MusicianCard  key = { musician.id } fName = {musician.fName} lName = { musician.lName} instruments = { musician.instruments } style = { musician.style} email = { musician.email } phone = { musician.phone } bands = { musician.bands } fb = { musician.fb } tw = { musician.tw} ig = { musician.ig} sc = { musician.sc } yt = { musician.yt } in = { musician.sc } twitch = { musician.twitch } image = { musician.image } id = { musician.id }/>
                ))
            }
        </div>
    )
}

export default MusiciansTab