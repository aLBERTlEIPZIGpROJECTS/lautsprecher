import BurgerMenu from "./BurgerMenu"
import ArrowDown from "../materials/icons/arrow-down.svg"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="header">
            <div className="header__top"></div>
            <div className="header__med">
                <div className="logo">
                    <h2>Lautsprecher</h2>
                    <p>Web Musik Magazine Leipzig</p>
                </div>
                {/* <BurgerMenu /> */}
            </div>
            <div className="header__bot">
                {/* hier müssen die Links sein */}
                <img src={ ArrowDown } alt="" className="icon" />
            </div>
            
        </div>
    )
}

export default Header