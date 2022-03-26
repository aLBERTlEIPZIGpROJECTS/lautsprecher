import { Link } from "react-router-dom"
import SocialMedia from "./SocialMedia"

const BandCard = (props) => {


    return(
        <div className="community-card">
            <img src={ props.image } alt={ props.bandName } className="img__band"/>
            
            <div className="community-card__txt">
                <h3>{ props.bandName }</h3>
            <div className="community-card__content">
                <p>{ props.style }</p>
                <p>{props.musicians}</p>
                <p>{props.concerts}</p>
            </div>
            <SocialMedia socialMedia = {props.socialMedia} />

            <Link to = {`/band/${props.id}`} >
                <p>+ Info</p>
            </Link>
            </div>
            
        </div>
    )
}

export default BandCard