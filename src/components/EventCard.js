import Button from "../components/Button"
import useFetch from "../useFetch"

const EventCard = (props) => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")

    return(
        <div className="event-card " >
                <div className="event-card__block">
                    <h3 className="event-card__title">{ props.title }</h3>
                    <p className="event-card__txt">{ props.musician }</p>
                    <p className="event-card__txt">{ props.date[0] }</p>
                    <p className="event-card__txt">{ props.date[1] }</p>
                    <p className="event-card__txt">{ props.venue }</p>
                    <p className="event-card__txt">{ props.links }</p>
                    <img src= { props.img } alt="" className="event-card__img" />
                </div>
                    <Button txt = "+ Info" className = "event-card__btn" link = "/" />
        </div>
    )
}

export default EventCard