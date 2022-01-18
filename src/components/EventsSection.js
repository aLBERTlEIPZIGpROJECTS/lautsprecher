import EventCard from "./EventCard"
import useFetch from "../useFetch"
import Button from "./Button"

const EventsSection = (props) => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")

    return(
        <div className="events__section">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <h2>{ props.title }</h2>

            <div className="events__card-container">
                {
                    data && data.map((event) => (
                        <EventCard eventName = { event.title } musician = { event.musician } date = { event.date } venue = { event.venue } img = { event.img } cost = { event.cost } links = { event.links } info = { event.info } key = { event.id }/>
                        ))
                }
            </div>
            <Button txt = "+ events" link ="events" className="button__orange" />
        </div>
    )
}

export default EventsSection