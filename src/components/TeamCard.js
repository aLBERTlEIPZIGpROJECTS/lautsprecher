import fbIcon from "../materials/icons/fbIcon.svg"
import twIcon from "../materials/icons/twIcon.svg"
import igIcon from "../materials/icons/igIcon.svg"
import mailIcon from "../materials/icons/mailIcon.svg"

const TeamCard = (props) => {
    return(
        <div className="teamCard">
            <img src= { props.img }  alt={ props.fname } className="img__band" />
            <div className="team__info">
                <p>{ props.fname } { props.lname }</p>
                <p>{ props.rol }</p>
            </div>
            <div className="social">
                <img src={ fbIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
                <img src={ twIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
                <img src={ igIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
                <img src={ mailIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            </div>
        </div>
    )
}

export default TeamCard