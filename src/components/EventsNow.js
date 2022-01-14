import EventCard from "./EventCard"
import { useState } from "react"

const EventsNow = () => {

    const [events, setEvents ] = useState ([
        {
            id : 0,
            title : "concert 1",
            musician : "Papa Jones",
            date : "10.02.2022, 22:00",
            venue : "Tonellis",
            cost : 10,
            info : null
        }
    ])

    return(
        <div className="events-now">
                <h2>Right Now</h2>
                {
                    events.map((event) => (
                        <EventCard eventName = { event.title } musician = { event.musician } date = { event.date } venue = { event.venue } cost = { event.cost } links = { event.links } info = { event.info } key = { event.id }/>
                        ))
                }
            </div>
    )
}

export default EventsNow