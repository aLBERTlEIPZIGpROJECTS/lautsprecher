import SocialMedia from "./SocialMedia"

const CommunityCard = (props) =>{
    return(
        <div className="community-card">
             <img src= { props.img } alt={ props.name } className="img__band"/>
           
           <div className="community-card__txt">
               <div className="community-card__info">
                <h3>{ props.businessName } { props.bandName } {props.placeName}</h3>
                <p>{ props.fName } { props.lName }</p>
                <p>{ props.role } </p>
               </div>
               <div className="community-card__content">
                   <p>{ props.instruments }</p>
                   <p>{ props.style }</p>
                   <p>{ props.street }, {props.number}, {props.PLZ}</p>
               </div>
           </div>
           <SocialMedia socialMedia = {props.socialMedia} />
        </div>
    )
}

export default CommunityCard