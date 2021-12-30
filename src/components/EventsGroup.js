import EventCard from "./EventCard"
const EventsGroup = () => {
    return(
        <div className="events-group">
            <h3>Right Now</h3>
            <div className="events-container">
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}

export default EventsGroup