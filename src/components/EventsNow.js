import EventCard from "./EventCard"
import { useState } from "react"
import useFetch from "../useFetch"

const EventsNow = () => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")


    return(
        <div>
             { error && <div>{ error }</div>}
                { isLoading && <div>Loading...</div>}
                <h2>Today</h2>

            <div className="events__container">
                {
                    data && data.map((event) => (
                        <EventCard eventName = { event.title } musician = { event.musician } date = { event.date } venue = { event.venue } img = { event.img } cost = { event.cost } links = { event.links } info = { event.info } key = { event.id }/>
                        ))
                }
            </div>
        </div>
    )
}

export default EventsNow