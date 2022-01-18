import EventCard from "./EventCard"
import { useState } from "react"
import useFetch from "../useFetch"
import Button from "./Button"

const EventsNow = () => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")


    return(
        <div className="events-now">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <h2>Today</h2>

            <div className="events-now__container">
                {
                    data && data.map((event) => (
                        <EventCard eventName = { event.title } musician = { event.musician } date = { event.date } venue = { event.venue } img = { event.img } cost = { event.cost } links = { event.links } info = { event.info } key = { event.id }/>
                        ))
                }
            </div>
            <Button txt = "+ events" link ="events" className="centered__btn button__orange" />
        </div>
    )
}

export default EventsNow