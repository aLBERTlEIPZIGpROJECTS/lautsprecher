import fbIcon from "../materials/icons/fbIcon.svg"

const TeamCard = () => {
    return(
        <div className="teamCard">
            <img src="" alt="" />
            <p>Name Name</p>
            <p>Position</p>
            <div className="social">
                <img src={fbIcon} alt="" className="icon">{/* <a href=""></a> */}</img>
            </div>
        </div>
    )
}

export default TeamCard