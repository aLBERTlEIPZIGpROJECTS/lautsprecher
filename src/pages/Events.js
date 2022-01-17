import EventCard from "../components/EventCard"
import { useState, useEffect } from "react"
import Blob from "../components/Blob"
import useFetch from "../useFetch"

const Events = () => {

    const [events, setEvents ] = useState(null)
    const [ date, setDate ] = useState (null)

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")
   

    return(
        <div className="events">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            
            <Blob class = "blob__orange blob-low"/>
            <h1>Events</h1>
            
            <h2>Heute</h2>
            <div className="events__container">
            
            {
                data && data.map((event) => (
                 <EventCard eventName = { event.title} musician = { event.musician} img = { event.img } date = { event.date } venue = { event.venue } cost = { event.cost } info = { event.info } id = { event.id } key = { event.id } />
            ))}
            </div>
            <div className="events-month">
                
            </div>
        </div>
    )
}

export default Events