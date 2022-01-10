import portrait from "../materials/img/team/cezanne.jpg"

const OtherCard = (props) => {
    return(
        <div className="band-card">
            <img src={ portrait } alt={ props.name } className="img__band"/>
            <div className="musician-card__txt">
                <p>{ props.name }</p>
                <p>{ props.fname } { props.lastname}</p>
                <p>{ props.address }</p>
                <p>{ props.mail }</p>
                <p>{ props.phone }</p>
                <p>{ props.site }</p>
            </div>
            
        </div>
    )
}

export default OtherCard