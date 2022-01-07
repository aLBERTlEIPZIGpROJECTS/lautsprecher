import portrait from "../materials/img/team/cezanne.jpg"

const MusicianCard = (props) => {
    return(
        <div className="musician-card">
            <img src={ portrait } alt={ props.name } className="img__profile"/>
            <div className="musician-card__txt">
                <h3>{ props.fname } { props.lname }</h3>
                <h2>{ props.bandName }</h2>
                <p>{ props.instrument }</p>
                <p>{ props.style }</p>
                <p>{ props.mail }</p>
                <p>{ props.phone }</p>
                <p>{ props.socialLink }</p>
            </div>
            
        </div>
    )
}

export default MusicianCard