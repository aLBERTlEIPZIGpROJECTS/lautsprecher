import EventCard from "../components/EventCard"
import EventsNow from "../components/EventsNov"

const Events = () => {
    return(
        <div className="events">
            <h1>Events</h1>
            <EventsNow />
            <div className="events-today">
                <h2>Heute</h2>
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
            </div>
            <div className="events-month">
                
            </div>
        </div>
    )
}

export default Events