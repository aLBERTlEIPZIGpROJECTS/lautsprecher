import MusicianCard from "../components/MusicianCard"
import { useState, useEffect } from "react"

const CommunityTab = (props) => {
    const [persons, setPersons] = useState(null)

    useEffect(() => {
      fetch( props.url )
        .then(res => {
          return res.json()
        })
        .then(data => {
          setPersons(data)
        })
    }, [])

    return(
      <div className="musicians">
      <h2>{ props.title }</h2>
      {
        persons &&  persons.map((person) => (
              <MusicianCard bandName = { person.bandName } fname = {person.fname} lname = { person.lname} instrument = { person.instrument } style = { person.style} mail = { person.mail } phone = { person.phone } socialLink = { person.socialLink }  key = { person.id }/>
          ))
      }
  </div>
    )
}

export default CommunityTab