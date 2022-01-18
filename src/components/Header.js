import BurgerMenu from "./BurgerMenu"
import ArrowDown from "../materials/icons/arrow-down.svg"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"

const Header = () => {

    const [bgClass, setBgClass] = useState("bg__orange")

    return(
        <div className="header" id="header">
            <div className={`header__top ${bgClass}`}></div>
            <div className="header__med">
            <Link to ="/">
                <div className="logo">
                    <h2 className="web-title">Lautsprecher</h2>
                    <p className="web-subtitle">Web Musik Magazine Leipzig</p>
                </div>
            </Link>
            </div>
            <div className="header__bot">
                <BurgerMenu />
            </div>
            
        </div>
    )
}

export default Header