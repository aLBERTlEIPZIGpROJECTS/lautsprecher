import { useState } from "react"
import { Link } from "react-router-dom"
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
                <Link to = "/events" className={`${burgerClass}__link`}>Events</ Link >
                <Link to = "/community" className={`${burgerClass}__link`}>Community</ Link >
                <Link to = "/articles" className={`${burgerClass}__link`}>Articles</ Link >
                <Link to = "/history" className={`${burgerClass}__link`}>History</ Link >
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