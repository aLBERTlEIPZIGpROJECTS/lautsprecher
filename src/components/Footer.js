import MusicPlayer from "./MusicPlayer"
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__superior">
                <img src="../materials/icons/caret-double-up-thin.svg" alt="arrow-up" className="icon" /> 
                <MusicPlayer />
            </div>
        </div>
    )
}

export default Footer