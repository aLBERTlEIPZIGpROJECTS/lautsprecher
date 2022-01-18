import PopUp from "./PopUp"
import { useState } from "react"

const MusicianCard = (props) => {

    const [ popClass, setPopClass ] = useState("pop-hide")

    function changePopClass(){
        popClass === "pop-hide" ? setPopClass("pop-show") : setPopClass("pop-hide")
    }

    return(
        <div className="community-card">
            <img src={ props.img } alt={ props.name } className="img__band"/>
            
            <div className="community-card__txt">
                <h3 className="community-card__tittle">{ props.fname } { props.lname }</h3>
                <div className="community-card__content">
                    <p>{ props.instrument }</p>
                    <p>{ props.style }</p>
                </div>
                <button className="pop-switch" onClick={ changePopClass }>+Info</button>

                <PopUp name = { props.name } fname = { props.fname } lname = { props.lname } rol = { props.rol } instrument = { props.instrument } style = { props.style } member = { props.member } address = { props.address } fb = { props.fb} tw = { props.tw } ig = { props.ig } site = { props.site} img = { props.img} class = {popClass}/>
            </div>
        </div>
    )
}

export default MusicianCard