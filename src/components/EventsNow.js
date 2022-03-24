import useFetch from "../useFetch"

import EventCard from "./EventCard"
import Button from "./Button"

const EventsNow = () => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")


    return(
        <div className="events__section">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <h2>Today</h2>

            <div className="events__card-container">
                {
                    data && data.map((concert) => (
                        <EventCard concertTitle = { concert.concertTitle } number={concert.number} PLZ={concert.PLZ} street={concert.street} bands={concert.bands} veranstaltungsort={concert.veranstaltungsort} cost={concert.cost} date={concert.date} duration={concert.duration} image ={concert.image}  musicians = { concert.musicians } style={concert.style} tickets={concert.tickets} key = { concert.id }/>
                        ))
                }
            </div>
            <Button txt = "+ events" link ="events" className="button__orange" />
        </div>
    )
}

export default EventsNow