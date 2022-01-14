import { useState } from "react"
import arrowUp from "../materials/icons/arrow-up.svg"
import MusicPlayer from "./MusicPlayer"
import FooterBurgerMenu from "./FooterBurgerMenu"

const Footer = () => {

    const [footerClass, setFooterClass] = useState("footer-small")

    function updateFooterClass () {
        footerClass === "footer-small" ? setFooterClass("footer-big") : setFooterClass ("footer-small") 
    }

    return(
        <div className={footerClass}>
            <div className={`${footerClass}__top`}>
                <FooterBurgerMenu onClick={updateFooterClass}/>
                {/* <img src={ arrowUp } alt="" className="icon" onClick={updateFooterClass}/> */}
                {/* <MusicPlayer /> */}
            </div>
            <div className={`${footerClass}__bot`}>
                <div className={`${footerClass}__txt-container`}>
                    <div className="sub-container">
                        <p className="footer-big__txt">Home</p>
                        <p className="footer-big__txt">Events</p>
                        <p className="footer-big__txt">Community</p>
                        <p className="footer-big__txt">Articles</p>
                    </div>
                    <div className="sub-container">
                        <p className="footer-big__txt">History</p>
                        <p className="footer-big__txt">Contact</p>
                        <p className="footer-big__txt">About us</p>
                        <p className="footer-big__txt">Impressum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer