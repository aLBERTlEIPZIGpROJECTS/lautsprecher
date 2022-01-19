import Button from "../components/Button"
import { Link } from "react-router-dom"

const EventCard = (props) => {


    return(
                <div className="event-card " >
                <div className="event-card__block">
                    <h3 className="event-card__title">{ props.eventName }</h3>
                    <p className="event-card__txt">{ props.musician }</p>
                    <p className="event-card__txt">{ props.date[0] }</p>
                    <p className="event-card__txt">{ props.date[1] }</p>
                    <p className="event-card__txt">{ props.venue }</p>
                    <p className="event-card__txt">{ props.links }</p>
                    <img src= { props.img } alt="" className="event-card__img" />
                </div>
                <Link to = {`/event/${props.id}`} className = "event-card__btn">
                    <p>+ Info</p>
                </Link>
        </div>
    )
}

export default EventCard