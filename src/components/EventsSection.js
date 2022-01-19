import { useState } from "react"
import useFetch from "../useFetch"

import EventCard from "./EventCard"
import Button from "./Button"

const EventsSection = (props) => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")
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
                    }).map((event) => (
                        <EventCard eventName = { event.title } musician = { event.musician } date = { event.date } venue = { event.venue } img = { event.img } cost = { event.cost } links = { event.links } info = { event.info } key = { event.id }/>
                        ))
                }
            </div>
            <Button txt = "+ events" link ="events" className="button__orange" />
        </div>
    )
}

export default EventsSection