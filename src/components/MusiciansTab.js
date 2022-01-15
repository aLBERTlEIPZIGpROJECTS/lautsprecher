import MusicianCard from "../components/MusicianCard"
import { useState, useEffect } from "react"
import Blob from "../components/Blob"

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
          {/* <Blob class = "blob__violet"/> */}
            {
              musicians &&  musicians.map((musician) => (
                    <MusicianCard fname = {musician.fname} lname = { musician.lname} instrument = { musician.instrument } style = { musician.style} mail = { musician.mail } phone = { musician.phone } bands = { musician.bands } socialLink = { musician.socialLink }  key = { musician.id }/>
                ))
            }
        </div>
    )
}

export default MusiciansTab