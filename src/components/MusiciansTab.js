import MusicianCard from "../components/MusicianCard"
import { useState, useEffect } from "react"

const MusiciansTab = ( props ) => {
    const [musicians, setMusicians] = useState(null)

    useEffect(() => {
      fetch("http://localhost:8000/musicians")
        .then(res => {
          return res.json()
        })
        .then(data => {
          setMusicians(data)
        })
    })

    return(
        <div className= {`${ props.class}`} >
            {
              musicians &&  musicians.map((musician) => (
                    <MusicianCard fname = {musician.fname} lname = { musician.lname} instrument = { musician.instrument } style = { musician.style} mail = { musician.mail } phone = { musician.phone } bands = { musician.bands } fb = { musician.fb } tw = { musician.tw} ig = { musician.ig} sc = { musician.sc }  key = { musician.id }/>
                ))
            }
        </div>
    )
}

export default MusiciansTab