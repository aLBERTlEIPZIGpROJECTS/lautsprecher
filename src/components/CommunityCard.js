import portrait from "../materials/img/team/cezanne.jpg"
import fbIcon from "../materials/icons/fbIcon.svg"
import twIcon from "../materials/icons/twIcon.svg"
import igIcon from "../materials/icons/igIcon.svg"
import mailIcon from "../materials/icons/mailIcon.svg"
import siteIcon from "../materials/icons/siteIcon.svg"

const CommunityCard = (props) =>{
    return(
        <div className="community-card">
             <img src= { props.img } alt={ props.name } className="img__band"/>
           
           <div className="community-card__txt">
               <h3>{ props.name } { props.fname} {props.lname} </h3>
               <div className="community-card__content">
                   <p>{ props.inhaber["fname"] }{ props.inhaber["lname"] }</p>
                   <p>{ props.instrument }</p>
                   <p>{ props.style }</p>
                   <p>{ props.rol }</p>
                   <p>{ props.member }</p>
                   <p>{ props.address }</p> {/* change it for a link to a map */}
               </div>
               <div className="social-media-container">
                   <img src={ fbIcon } alt="facebook" className="iconMed"/>
                   <img src={ twIcon } alt="twitter" className="iconMed"/>
                   <img src={ igIcon } alt="instagram" className="iconMed"/>
                
                {/*
                <img src={ other icon! } alt="phone" className="iconMed"/>
                */}
                {/*
                <img src={ mailIcon } alt="mail" className="iconMed"/> */}
                {/*
                <img src={ siteIcon } alt="site" className="iconMed"/> */}
               </div>
           </div>
        </div>
    )
}

export default CommunityCard