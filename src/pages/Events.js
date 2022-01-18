import EventCard from "../components/EventCard"
import { useState, useEffect } from "react"
import Blob from "../components/Blob"
import useFetch from "../useFetch"
import EventsSection from "../components/EventsSection"

const Events = () => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")
   

    return(
        <div className="events">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            
            <Blob class = "blob__orange blob-low"/>
            <h1>Events</h1>
            <EventsSection />
        </div>
    )
}

export default Events