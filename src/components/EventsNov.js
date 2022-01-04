import EventCard from "../components/EventCard"

const EventsNow = () => {
    return(
        <div className="events-now">
                <h2>Right Now</h2>
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
            </div>
    )
}

export default EventsNow