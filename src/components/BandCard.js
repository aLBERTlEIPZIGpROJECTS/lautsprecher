import portrait from "../materials/img/team/cezanne.jpg"
import fbIcon from "../materials/icons/fbIcon.svg"
import twIcon from "../materials/icons/twIcon.svg"
import igIcon from "../materials/icons/igIcon.svg"
import mailIcon from "../materials/icons/mailIcon.svg"
import siteIcon from "../materials/icons/siteIcon.svg"

const BandCard = (props) => {
    return(
        <div className="community-card">
            <img src={ portrait } alt={ props.name } className="img__band"/>
            
            <div className="community-card__txt">
                <h3>{ props.bandName }</h3>
            <div className="community-card__content">
                <p>{ props.style }</p>
                <p>{ props.member }</p>
            </div>
            <div className="social-media-container">
                    <img src={ fbIcon } alt="facebook" className="iconMed"/>
                    <img src={ twIcon } alt="twitter" className="iconMed"/>
                    <img src={ igIcon } alt="instagram" className="iconMed"/>
                 {/*    <img src={ mailIcon } alt="mail" className="iconMed"/> */}
                    {/* <img src={ siteIcon } alt="site" className="iconMed"/> */}
                </div>
            </div>
            
        </div>
    )
}

export default BandCard