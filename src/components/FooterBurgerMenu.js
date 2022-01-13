import { useState } from "react"

const BurgerMenu = () => {

    const [burgerClass, setBurgerClass] = useState("burger-small")

    function updateClass(){
        burgerClass === "burger-small" ? setBurgerClass ("burger-big") : setBurgerClass ("burger-small")
    }

    return(
        <div className= { burgerClass } onClick={ updateClass } >
            <div className={`${burgerClass}__top`}>
                <p className={`${ burgerClass }__txt`}>Events</p>
                <p className={`${ burgerClass }__txt`}>Community</p>
                <p className={`${ burgerClass }__txt`}>Articles</p>
                <p className={`${ burgerClass }__txt`}>History</p>
            </div>
            <div className={`${burgerClass}__med`}>
            </div>
            <div className={`${burgerClass}__bot` } >
            </div>
        </div>
    )
}

export default BurgerMenu