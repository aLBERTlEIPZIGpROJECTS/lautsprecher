import EventCard from "../components/EventCard"
import { useState, useEffect } from "react"

const Events = () => {

    const [events, setEvents ] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/concerts")
            .then(res => {
                return res.json()
            })
            .then (data => {
                setEvents(data)
            })
    })




    return(
        <div className="events">
            <h1>Events</h1>
            <h2>Right Now</h2>
            <div className="events__container">
                {
                   events && events.map((event) => (
                        <EventCard title = { event.title} musician = { event.musician} date = { event.date } venue = { event.venue } cost = { event.cost } info = { event.info } links = { event.links } id = { event.id } img = { event.img } key = { event.id} />
                        
                        ))}
            </div>
            <h2>Heute</h2>
            <div className="events__container">
            {
            events && events.map((event) => (
                <EventCard eventName = { event.title} musician = { event.musician} date = { event.date } venue = { event.venue } cost = { event.cost } info = { event.info } id = { event.id } key = { event.id } />
            ))}
            </div>
            <div className="events-month">
                
            </div>
        </div>
    )
}

export default Events