import MusicianCard from "../components/MusicianCard"
import { useState, useEffect } from "react"

const Musicians = (props) => {
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
        <div className={`${props.class}`}>
            <h1>Musicians</h1>
            {
              musicians &&  musicians.map((musician) => (
                    <MusicianCard bandName = { musician.bandName } fname = {musician.fname} lname = { musician.lname} instrument = { musician.instrument } style = { musician.style} mail = { musician.mail } phone = { musician.phone } socialLink = { musician.socialLink }  key = { musician.id }/>
                ))
            }
        </div>
    )
}

export default Musicians