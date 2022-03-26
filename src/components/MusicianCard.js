import { Link } from "react-router-dom"
import SocialMedia from "./SocialMedia"

const MusicianCard = (props) => {

    return(
        <div className="community-card">
            <img src={ props.image } alt={ props.fName } className="img__band"/>
            
            <div className="community-card__txt">
                <h2 className="community-card__tittle">{ props.fName } { props.lName }</h2>
                <div className="community-card__content">

                    {props.instruments && props.instruments.map((instrument) => (
                        <p>instrument</p>
                    ))}
                    <p>{ props.style }</p>
                    <p>{props.bands}</p>
                </div>
                <SocialMedia socialMedia = {props.socialMedia} />
                 <Link to = {`/musician/${props.id}`} >
                    <p>+ Info</p>
                </Link>
            </div>
        </div>
    )
}

export default MusicianCard