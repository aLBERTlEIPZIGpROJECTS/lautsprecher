import Button from "../components/Button"

const EventCard = (props) => {
    return(
        <div className="event-card">
            <div className="event-card__block bg-black">
                <h3 className="event-card__txt">{ props.title }</h3>
                <p className="event-card__txt">{ props.musician }</p>
                <p className="event-card__txt">{ props.date }</p>
                <p className="event-card__txt">{ props.venue }</p>
                <p className="event-card__txt">{ props.links }</p>
                <p className="event-card__txt">{ props.info }</p>
            </div>
            <Button txt = "+ Info" className = "bg-white" />
        </div>
    )
}

export default EventCard