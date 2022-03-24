import fbIcon from "../materials/icons/fbIcon.svg"
import twIcon from "../materials/icons/twIcon.svg"
import igIcon from "../materials/icons/igIcon.svg"

const CommunityCard = (props) =>{
    return(
        <div className="community-card">
             <img src= { props.img } alt={ props.name } className="img__band"/>
           
           <div className="community-card__txt">
               <div className="community-card__info">
                <h3>{ props.businessName } { props.bandName } {props.placeName}</h3>
                <p>{ props.fname } { props.lname }</p>
                <p>{ props.role } </p>
               </div>
               <div className="community-card__content">
                   <p>{ props.instruments }</p>
                   <p>{ props.style }</p>
                   <p>{ props.street }, {props.number}, {props.PLZ}</p>
               </div>
           </div>
           <div className="social-media-container">
                   <img src={ fbIcon } alt="facebook" className="iconMed"/>
                   <img src={ twIcon } alt="twitter" className="iconMed"/>
                   <img src={ igIcon } alt="instagram" className="iconMed"/>
               </div>
        </div>
    )
}

export default CommunityCard