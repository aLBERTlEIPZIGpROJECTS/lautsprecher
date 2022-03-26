import { useState } from "react"
import useFetch from "../useFetch"

import EventCard from "./EventCard"

const EventsSection = (props) => {

    const url = "http://localhost:5000/api/concert"
    const { data, isLoading, error } = useFetch(url)
    const [ searchTerm, setSearchTerm ] = useState("")

    return(
        <div className="events__section">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <h2>{ props.title }</h2>
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>

            <div className="events__card-container">
                {
                    data && data.filter((val) => {
                        if(searchTerm === ""){
                            return val
                        } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                            return val
                        }
                    }).map((concert) => (
                        <EventCard key = { concert.id } id = { concert.id } address = {concert.address} bands = {concert.bands} concertTitle = {concert.concertTitle} cost = {concert.cost} date = {concert.date} duration = {concert.duration} image = {concert.image} musicians = {concert.musicians} style = {concert.style} tickets = {concert.tickets} veranstaltungsort = {concert.veranstaltungsort}  />
                        ))
                }
            </div>
        </div>
    )
}

export default EventsSection