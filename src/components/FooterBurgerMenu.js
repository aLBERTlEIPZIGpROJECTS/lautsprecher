import { useState } from "react"
import { Link } from "react-router-dom"

const FooterBurgerMenu = () => {

    const [burgerClass, setBurgerClass] = useState("burger-small")

    function updateClass(){
        burgerClass === "burger-small" ? setBurgerClass ("burger-big") : setBurgerClass ("burger-small")
    }

    return(
        <div className= { burgerClass } onClick={ updateClass } >
            <h4>Hello</h4>
         {/*    <div className={`${burgerClass}__top`}>
                <Link to = "/events" className={`${burgerClass}__link`}>Events</ Link >
                <Link to = "/community" className={`${burgerClass}__link`}>Community</ Link >
                <Link to = "/articles" className={`${burgerClass}__link`}>Articles</ Link >
                <Link to = "/history-articles" className={`${burgerClass}__link`}>History</ Link >
            </div>
            <div className={`${burgerClass}__med`}>
            </div>
            <div className={`${burgerClass}__bot` } >
            </div> */}
        </div>
    )
}

export default FooterBurgerMenu