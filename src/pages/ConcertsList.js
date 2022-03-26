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
                    <EventCard  key = { concert.id } address = {concert.address}  concertTitle = {concert.title} bands = { concert.bands} cost = {concert.cost} date = {concert.date} duration = {concert.duration} image = {concert.image} musicians = {concert.musicians} style = {concert.style} tickets = { concert.tickets} id = { concert.id } veranstaltungsort = {concert.veransltaltungsort}/>
                ))
            }
        </div>
    )
}

export default EventsList