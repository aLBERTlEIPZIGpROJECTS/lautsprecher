import { Link } from "react-router-dom"

const MusicianCard = (props) => {

    return(
        <div className="community-card">
            <img src={ props.image } alt={ props.fName } className="img__band"/>
            
            <div className="community-card__txt">
                <h3 className="community-card__tittle">{ props.fName } { props.lName }</h3>
                <div className="community-card__content">
                    <p>{ props.instruments }</p>
                    <p>{ props.style }</p>
                </div>
                 <Link to = {`/musician/${props.id}`} >
                    <p>+ Info</p>
                </Link>
            </div>
        </div>
    )
}

export default MusicianCard