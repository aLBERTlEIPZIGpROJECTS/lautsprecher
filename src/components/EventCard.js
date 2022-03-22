import Button from "../components/Button"
import { Link } from "react-router-dom"

const EventCard = (props) => {


    return(
                <div className="event-card " >
                <div className="event-card__block">
                    <h3 className="event-card__title">{ props.concertTitle }</h3>
                    <p className="event-card__txt">{ props.bandName }</p>
                    <p className="event-card__txt">{ props.musician }</p>
                    <p className="event-card__txt">{ props.style }</p>
                    <p className="event-card__txt">{ props.place }</p>
                    <p className="event-card__txt">{ props.time }</p>
                    <p className="event-card__txt">{ props.duration }</p>
                    <p className="event-card__txt">{ props.cost }</p>
                    <p className="event-card__txt">{ props.tickets }</p>
                    <img src= { props.image } alt="" className="event-card__img" />
                </div>
                <Link to = {`/event/${props.id}`} className = "event-card__btn">
                    <p>+ Info</p>
                </Link>
        </div>
    )
}

export default EventCard