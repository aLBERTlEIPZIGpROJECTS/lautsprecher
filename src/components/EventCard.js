import Button from "../components/Button"
import useFetch from "../useFetch"

const EventCard = (props) => {

    const { data, isLoading, error } = useFetch("http://localhost:8000/concerts")

    return(
        <div className="event-card " >
                <div className="event-card__block bg-black">
                    <h3 className="event-card__txt">{ props.title }</h3>
                    <p className="event-card__txt">{ props.musician }</p>
                    <p className="event-card__txt">{ props.date[0] }</p>
                    <p className="event-card__txt">{ props.date[1] }</p>
                    <p className="event-card__txt">{ props.venue }</p>
                    <p className="event-card__txt">{ props.links }</p>
                    <img src= { props.img } alt="" className="img__event" />
                    <Button txt = "+ Info" className = "button__black" link = "/" />
                </div>
        </div>
    )
}

export default EventCard