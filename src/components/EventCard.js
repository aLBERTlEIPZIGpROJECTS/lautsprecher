import Button from "../components/Button"

const EventCard = (props) => {
    return(
        <div className="event-card">
            <div className="event-card__txt">
                <h3>{ props.eventName }</h3>
                <p>{ props.date }</p>
                <p>{ props.bandName }</p>
                <p>{ props.cost } e</p>
                <p>{ props.links }</p>
                <p>{ props.ticketLink }</p>
                <p>{props.info }</p>
            </div>
            <Button txt = "+ Info" />
        </div>
    )
}

export default EventCard