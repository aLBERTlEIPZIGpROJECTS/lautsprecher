import SocialMedia from "./SocialMedia"

const TeamCard = (props) => {
    return(
        <div className="teamCard">
            <img src= { props.image }  alt={ props.fName } className="img__band" />
            <div className="team__info">
                <p>{ props.fName } { props.lName }</p>
                <p>{ props.role }</p>
            </div>
            <SocialMedia socialMedia = {props.SocialMedia}  />
        </div>
    )
}

export default TeamCard