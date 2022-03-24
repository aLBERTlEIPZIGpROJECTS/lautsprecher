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
              <CommunityCard fname = {person.fname} lname = { person.lname} instruments = { person.instruments } style = { person.style} number={person.number} PLZ={person.PLZ} street={person.street} mail = { person.mail } phone = { person.phone } fb = { person.fb } tw = { person.tw}  ig = { person.ig} sc = { person.sc} yt={person.yt} twitch={person.twitch} website = { person.website } image = { person.image }  key = { person.id } role={person.role}/>
          ))
      }
  </div>
    )
}

export default CommunityTab