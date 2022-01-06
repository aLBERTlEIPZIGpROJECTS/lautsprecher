import EventCard from "../components/EventCard"
import EventsNow from "../components/EventsNov"
import { useState } from "react"

const Events = () => {

    const [events, setEvents ] = useState([
        {
            id : 0,
            title : "concert 1",
            musician : "Papa Jones",
            date : "10.02.2022, 22:00",
            venue : "Tonellis",
            cost : 10,
            info : null
        },
        {
            id : 1,
            title : "concert 2",
            musician : "Sally Garden's",
            date : "3.02.2022, 18:00",
            venue : "Clara Zetkin Park",
            cost : 0,
            info : null
        },
        {
            id : 2,
            title : "concert 3",
            musician : "Silvia Dellatastiera",
            date : "07.02.2022, 21:00",
            venue : "KuApo",
            cost : 5,
            info : null
        }
    ])
    return(
        <div className="events">
            <h1>Events</h1>
            <h2>Right Now</h2>
                {
                    events.map((event) => (
                        <EventCard eventName = { event.title} musician = { event.musician} date = { event.date } venue = { event.venue } cost = { event.cost } info = { event.info } id = { event.id } />
                        
                        ))}
            <div className="events-today">
            <h2>Heute</h2>
            {
            events.map((event) => (
                <EventCard eventName = { event.title} musician = { event.musician} date = { event.date } venue = { event.venue } cost = { event.cost } info = { event.info } id = { event.id } />

            ))}
            </div>
            <div className="events-month">
                
            </div>
        </div>
    )
}

export default Events