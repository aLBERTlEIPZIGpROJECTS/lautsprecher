import EventCard from "./EventCard"
const EventsGroup = () => {
    return(
        <div className="events-group">
            <h3>Right Now</h3>
            <div className="events-container">
            <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
            </div>
        </div>
    )
}

export default EventsGroup