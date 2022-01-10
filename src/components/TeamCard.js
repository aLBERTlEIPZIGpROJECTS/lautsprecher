import fbIcon from "../materials/icons/fbIcon.svg"
import portrait from "../materials/img/team/cezanne.jpg"

const TeamCard = (props) => {
    return(
        <div className="teamCard">
            <img src= { portrait }  alt={ props.fname } className="img__profile" />
            <div className="team__info">
                <p>{ props.fname } { props.lname }</p>
                <p>{ props.rol }</p>
            </div>
            <div className="social">
                <img src={ fbIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            </div>
        </div>
    )
}

export default TeamCard