const EventCard = (props) => {
    return(
        <div className="event-card">
            <h3>{ props.eventName }</h3>
            <p>{ props.date }</p>
            <p>{ props.bandName }</p>
            <p>{ props.cost } e</p>
            <p>{ props.links }</p>
            <p>{ props.ticketLink }</p>
            <p>{props.info }</p>
       {/*      <img src={ props.img } alt={ props.eventName } /> */}
        </div>
    )
}

export default EventCard