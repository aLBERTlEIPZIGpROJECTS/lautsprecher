import { Link } from "react-router-dom"

import fbIcon from "../materials/icons/fbIcon.svg"
import twIcon from "../materials/icons/twIcon.svg"
import igIcon from "../materials/icons/igIcon.svg"

const OtherCard = (props) => {
    return(
        <div className="community-card">
            <img src= { props.img } alt={ props.name } className="img__band"/>
           
            <div className="community-card__txt">
                <h3>{ props.name }</h3>
                <div className="community-card__content">
                    <p>{ props.address }</p>
                    <p>{ props.phone }</p>
                    <p>{ props.site }</p>
                </div>
                <div className="social-media-container">
                    <img src={ fbIcon } alt="facebook" className="iconMed"/>
                    <img src={ twIcon } alt="twitter" className="iconMed"/>
                    <img src={ igIcon } alt="instagram" className="iconMed"/>
                </div>
                <Link to = {`/other/${props.id}`} >
                    <p>+ Info</p>
                </Link>
            </div>
            
        </div>
    )
}

export default OtherCard
