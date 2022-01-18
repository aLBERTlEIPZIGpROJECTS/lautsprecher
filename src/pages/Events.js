import EventCard from "../components/EventCard"
import { useState, useEffect } from "react"
import Blob from "../components/Blob"
import useFetch from "../useFetch"
import EventsSection from "../components/EventsSection"
import GoTopBtn from "../components/GoTopBtn"

const Events = () => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")
   

    return(
        <div className="events">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            
            <Blob class = "blob__orange blob-high"/>
            <h1>Events</h1>
            <EventsSection />
            <GoTopBtn />
        </div>
    )
}

export default Events