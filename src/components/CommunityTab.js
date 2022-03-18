import CommunityCard from "./CommunityCard"
import { useState, useEffect } from "react"
import useFetch from "../useFetch"

const CommunityTab = (props) => {
    const [persons, setPersons] = useState(null)
    const { data, isLoading, error } = useFetch("http://localhost:8000/articles")


    useEffect(() => {
      fetch( "http://localhost:4000/user1" )
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
        data &&  data.map((person) => (
              <CommunityCard name = { person.name } inhaber = { person.inhaber }  fname = {person.fname} lname = { person.lname} instrument = { person.instrument } style = { person.style} member = { person.member} address = { person.address } mail = { person.mail } phone = { person.phone } facebook = { person.facebook } twitter = { person.twitter} instagram = { person.instagram} soundcloud = { person.soundcloud} site = { person.site } img = { person.img }  key = { person.id }/>
          ))
      }
  </div>
    )
}

export default CommunityTab