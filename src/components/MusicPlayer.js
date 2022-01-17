import { useState } from "react"
import musicplayer from "../materials/icons/trumpet.gif"
import track from "../materials/tracks/Studio 2020 - Quincas Moreira.mp3"

const MusicPlayer = () => {

    const [ playerClass, setPlayerClass ] = useState("stop")

    const playMusic = () => {
        setPlayerClass("play")
    }

    
    return(
        <div className="musicPlayer">
            <audio
                controls autoPlay
                src= {track }  className="player">
            </audio>
        </div>
    )
}

export default MusicPlayer