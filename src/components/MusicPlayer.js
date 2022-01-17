import { useState } from "react"
import playerIcon from "../materials/icons/trumpet.gif"
import track from "../materials/tracks/Studio 2020 - Quincas Moreira.mp3"

const MusicPlayer = () => {

    const [ playerClass, setPlayerClass ] = useState("icon-style__off")
    const [ playerStatus, setPlayerStatus ] = useState("mute")


    const playMusic = () => {
        playerClass === "icon-style__off" ? setPlayerClass("icon-style__on") : setPlayerClass("icon-style__off")

        playerStatus === "mute" ? setPlayerStatus("") : setPlayerStatus("mute")
    }

    
    return(
        <div className="music-player">
            <img src={ playerIcon } alt="" onClick={ playMusic } className= { playerClass }/>
            <audio
                controls /* autoPlay   */
                src= {track }  className="player">
            </audio>
        </div>
    )
}

export default MusicPlayer