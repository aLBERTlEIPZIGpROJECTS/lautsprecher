import fbIcon from "../materials/icons/fbIcon.svg"
import twIcon from "../materials/icons/twIcon.svg"
import igIcon from "../materials/icons/igIcon.svg"

const PopUp = ( props ) =>{
    return(
        <div className= {` ${props.class} popup-card `}>
            <div className="popup-card__img">
                <img src={ props.img } alt="" className="popup-card__img" />
            </div>
                <div className="popup-card__txt">
                    <div className="popup-card__info">
                        <p className="popup-card__close" >X</p>
                        <h3 className="popup-card__title">{ props.name }</h3>
                        <p>{ props.fname } { props.lname }</p>
                    </div>
                    <div className="popup-card__content">
                        {/* <p>{ props.inhaber["fname"] }{ props.inhaber["lname"] }</p> */}
                            <p>{ props.rol }</p>
                        <p>{ props.instrument }</p>
                        <p>{ props.style }</p>
                        <p>{ props.member }</p>
                        <p>{ props.address }</p> {/* change it for a link to a map */}
                    </div>
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
    )
}

export default PopUp