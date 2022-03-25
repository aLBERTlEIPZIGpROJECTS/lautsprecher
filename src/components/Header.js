import { useState } from "react"
import { Link } from "react-router-dom"
import LoginField from "./LoginField"
import BurgerMenu from "./BurgerMenu"

const Header = ( props ) => {

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
                {/* <LoginField /> */}
                <BurgerMenu />
            </div>
            
        </div>
    )
}

export default Header