import fbIcon from "../materials/icons/fbIcon.svg"
import igIcon from "../materials/icons/igIcon.svg"
import twIcon from "../materials/icons/twIcon.svg"
import twitchIcon from "../materials/icons/twitchIcon.svg"
import inIcon from "../materials/icons/inIcon.svg"
import scIcon from "../materials/icons/scIcon.svg"
import ytIcon from "../materials/icons/ytIcon.svg"


const SocialMedia = (props) => {

    /* come from "socialMedia" */

    return(
        <div className="socialMedia-container">
            <img src={ fbIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            <img src={ twIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            <img src={ igIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            <img src={ inIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            <img src={ scIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            <img src={ ytIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            <img src={ twitchIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
        </div>
    )
}

export default SocialMedia