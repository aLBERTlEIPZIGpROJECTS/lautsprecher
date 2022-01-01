import arrowUp from "../materials/icons/arrow-up.svg"
import MusicPlayer from "./MusicPlayer"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__superior">
                <img src={ arrowUp } alt="" className="icon"/>
                <MusicPlayer />
            </div>
        </div>
    )
}

export default Footer