import portrait from "../materials/img/team/cezanne.jpg"

const BandCard = (props) => {
    return(
        <div className="band-card">
            <img src={ portrait } alt={ props.name } className="img__band"/>
            <div className="musician-card__txt">
                <h3>{ props.bandName }</h3>
                <p>{ props.style }</p>
                <p>{ props.mail }</p>
                <p>{ props.phone }</p>
                <p>{ props.socialLink }</p>
                <p>{ props.info }</p>
                <p>{ props.member }</p>
            </div>
            
        </div>
    )
}

export default BandCard