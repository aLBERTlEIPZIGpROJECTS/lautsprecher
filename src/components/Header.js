import BurgerMenu from "./BurgerMenu"
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className="header">
            <div className="header__superior">
                <div className="logo">
                    <h2>Lautsprecher</h2>
                    <p>Web Musik Magazine Leipzig</p>
                </div>
                <BurgerMenu />
            </div>
            <div className="header__inferior">
                {/* hier müssen die Links sein */}
            </div>
        </div>
    )
}

export default Header