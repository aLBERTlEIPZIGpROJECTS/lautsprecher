import { useState } from "react"
import fbIcon from "../materials/icons/fbIcon.svg"
import twIcon from "../materials/icons/twIcon.svg"
import igIcon from "../materials/icons/igIcon.svg"
import mailIcon from "../materials/icons/mailIcon.svg"
import siteIcon from "../materials/icons/siteIcon.svg"

const BurgerMenu = () => {

    const [burgerClass, setBurgerClass] = useState("footer-burger-small")

    function updateClass(){
        burgerClass === "footer-burger-small" ? setBurgerClass ("footer-burger-big") : setBurgerClass ("footer-burger-small")
    }

    return(
        <div className= { burgerClass } onClick={ updateClass } >
            <div className={`${burgerClass}__top`}>
                <p className={`${ burgerClass }__txt`}>Events</p>
                <p className={`${ burgerClass }__txt`}>Community</p>
                <p className={`${ burgerClass }__txt`}>Articles</p>
                <p className={`${ burgerClass }__txt`}>History</p>
                <div className={ `${burgerClass}__social-media`}>
                    <img src={ fbIcon } alt="facebook" className="iconMed"/>
                    <img src={ twIcon } alt="twitter" className="iconMed"/>
                    <img src={ igIcon } alt="instagram" className="iconMed"/>
                    <img src={ mailIcon } alt="mail" className="iconMed"/>
                    <img src={ siteIcon } alt="site" className="iconMed"/>
                </div>
            </div>
            <div className={`${burgerClass}__med`}>
            </div>
            <div className={`${burgerClass}__bot` } >
            </div>
        </div>
    )
}

export default BurgerMenu