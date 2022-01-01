import EventCard from "../components/EventCard"

const Events = () => {
    return(
        <div className="events">
            <h1>Events</h1>
            <div className="events-now">
                <h2>Right Now</h2>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className="events-today">
                <h2>Heute</h2>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
            <div className="events-month">
                
            </div>
        </div>
    )
}

export default Events