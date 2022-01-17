import MusicianCard from "../components/MusicianCard"
import { useState, useEffect } from "react"
import useFetch from "../useFetch"

const MusiciansTab = ( props ) => {

  const { data, isLoading, error } = useFetch("http://localhost:8000/musicians")

    return(
        <div className= {`${ props.class}`} >
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            {
              data &&  data.map((musician) => (
                    <MusicianCard fname = {musician.fname} lname = { musician.lname} instrument = { musician.instrument } style = { musician.style} mail = { musician.mail } phone = { musician.phone } bands = { musician.bands } fb = { musician.fb } tw = { musician.tw} ig = { musician.ig} sc = { musician.sc }  key = { musician.id }/>
                ))
            }
        </div>
    )
}

export default MusiciansTab