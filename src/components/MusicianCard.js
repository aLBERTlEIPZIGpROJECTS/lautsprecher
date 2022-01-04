const MusicianCard = (props) => {
    return(
        <div className="musician-card">
            <img src={ props.img } alt={ props.name } className="img-profile"/>
            <div className="musician-card__txt">
                <h3>{ props.fname } { props.lname }</h3>
                <p>{ props.instrument }</p>
                <p>{ props.style }</p>
            </div>
            
        </div>
    )
}

export default MusicianCard