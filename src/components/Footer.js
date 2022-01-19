import { useState } from "react"

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
        
        <div >
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
                        <p className="footer-big__txt">Home</p>
                        <p className="footer-big__txt">Events</p>
                        <p className="footer-big__txt">Community</p>
                        <p className="footer-big__txt">Articles</p>
                    </div>
                    <div className="footer__links-sub-container">
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