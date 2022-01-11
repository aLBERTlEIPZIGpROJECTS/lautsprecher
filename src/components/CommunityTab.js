import CommunityCard from "./CommunityCard"
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
      <div className="card">
      <h2>{ props.title }</h2>
      {
        persons &&  persons.map((person) => (
              <CommunityCard name = { person.name } fname = {person.fname} lname = { person.lname} instrument = { person.instrument } style = { person.style} member = { person.member} address = { person.address } mail = { person.mail } phone = { person.phone } facebook = { person.facebook } twitter = { person.twitter} instagram = { person.instagram} soundcloud = { person.soundcloud} site = { person.site }  key = { person.id }/>
          ))
      }
  </div>
    )
}

export default CommunityTab