import { useState } from "react"
import { Link } from "react-router-dom"

import mail from "../materials/icons/mailIcon.svg"
import twitter from "../materials/icons/twIcon.svg"
import facebook from "../materials/icons/fbIcon.svg"
import instagram from "../materials/icons/igIcon.svg"
import soundcloud from "../materials/icons/arrow-up.svg"

const Footer = () => {

    const [ footerClass, setFooterClass ] = useState("footer__small")
    const [ maskClass, setMaskClass ] = useState("footer__small-mask")
    const [ burgerAnimation, setBurgerAnimation ] = useState("animation-on")
    
    function updateFooter () {
        footerClass === "footer__small" ? setFooterClass("footer__big") : setFooterClass ("footer__small") 
        maskClass === "footer__small-mask" ? setMaskClass("footer__big-mask") : setMaskClass ("footer__small-mask")
        burgerAnimation === "animation-on" ? setBurgerAnimation("") : setBurgerAnimation("animation-on")
    }

    return(
        
        <div className="footer">
          <div className = { footerClass }>
              <div className= { maskClass }>
              </div>
                  <div className={`footer-burger__container ${burgerAnimation}` }onClick={ updateFooter }>
                    <div className="footer-burger__top"></div>
                    <div className="footer-burger__med"></div>
                    <div className="footer-burger__bot"></div>
                  </div>
                <div className={`footer__links-container`}>
                    <div className="footer__links-sub-container">
                        <Link to = "/" className="footer-big__txt">Home</Link>
                        <Link to = "/events" className="footer-big__txt">Events</Link>
                        <Link to = "/community" className="footer-big__txt">Community</Link>
                        <Link to = "/articles" className="footer-big__txt">Articles</Link>
                    </div>
                    <div className="footer__links-sub-container">
                        <Link to = "/history-articles" className="footer-big__txt">History</Link>
                        <Link to = "/contact" className="footer-big__txt">Contact</Link>
                        <Link to = "/about" className="footer-big__txt">About us</Link>
                        <Link to = "/impressum" className="footer-big__txt">Impressum</Link>
                    </div>
                    <div className="footer__links-sub-container">
                        <a href="mailto:mail@lautsprecher.com"><img src={ mail } alt="mail" className="iconMed" /></a>
                        <a href="https://twitter.com/" target= "_blank"><img src={ twitter } alt="twitter" className="iconMed" /></a>
                        <a href="https://facebook.com" target= "_blank"><img src={ facebook } alt="facebook" className="iconMed" /></a>
                        <a href="https://https://www.instagram.com/" target= "_blank"><img src={ instagram } alt="instagram" className="iconMed" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer