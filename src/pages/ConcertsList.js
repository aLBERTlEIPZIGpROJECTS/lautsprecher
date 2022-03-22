import { useState } from "react"
import useFetch from "../useFetch"

import EventCard from "../components/EventCard"

const EventsList = ( props ) => {

    const url = "http://localhost:5000/api/concert"
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
              }).map((concert) => (
                    <EventCard  key = { concert.id } concertTitle = {concert.title} bandName = { concert.band} musician = {concert.musician} style = { concert.style} place = { concert.place } time = { concert.time } duration = { concert.duration } cost = { concert.cost } tickets = { concert.tickets} image = { concert.image } id = { concert.id }/>
                ))
            }
        </div>
    )
}

export default EventsList