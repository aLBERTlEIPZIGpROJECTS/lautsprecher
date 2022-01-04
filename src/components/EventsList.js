import EventCard from "../components/EventCard"

const EventsList = (props) => {
    return(
        <div className="events-list">
                <h2>{ props.listName }</h2>
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
                <EventCard eventName = "Blues Concert" date = "03.02.2022" bandName = "Papa Jones" cost = "10" links = "test" info = "test" />
            </div>
    )
}

export default EventsList