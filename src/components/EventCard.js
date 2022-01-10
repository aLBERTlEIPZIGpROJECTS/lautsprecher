import Button from "../components/Button"

const EventCard = (props) => {
    return(
        <div className="event-card">
            <div className="event-card__txt">
                <h3>{ props.title }</h3>
                <p>{ props.musician }</p>
                <p>{ props.date }</p>
                <p>{ props.venue }</p>
                <p>{ props.cost } e</p>
                <p>{ props.links }</p>
                <p>{ props.info }</p>
                <img src={ props.img } alt="" />
            </div>
            <Button txt = "+ Info" />
        </div>
    )
}

export default EventCard