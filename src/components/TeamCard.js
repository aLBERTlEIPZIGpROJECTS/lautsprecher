import fbIcon from "../materials/icons/fbIcon.svg"

const TeamCard = (props) => {
    return(
        <div className="teamCard">
            <img src={ props.img } alt={ props.fname } className="img__profile" />
            <p>{ props.fname } { props.lname }</p>
            <p>{ props.position }</p>
            <div className="social">
                <img src={ fbIcon } alt="" className="icon">{/* <a href=""></a> */}</img>
            </div>
        </div>
    )
}

export default TeamCard