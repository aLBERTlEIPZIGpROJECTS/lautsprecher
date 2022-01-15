import { useState } from "react"
import ReactAudioPlayer from "react-audio-player"
import musicplayer from "../materials/icons/trumpet.gif"
import track from "../materials/tracks/Studio 2020 - Quincas Moreira.mp3"


const MusicPlayer = () => {

    const [ playStyle, setPlayStyle ] = useState("icon-player__off")
    const [ playingState, setPlayingState ] = useState ("off")


    function playMusic () {
        playStyle === "icon-player__off" ? setPlayStyle("icon-player__on") : setPlayStyle ("icon-player__off")
        playingState === "off" ? setPlayingState("on") : setPlayingState ("off")
    }

    return(
        <div className="musicPlayer">
            <img src={musicplayer} alt="" className={ playStyle } onClick={ playMusic } />
            <div className= { playingState }>
                <ReactAudioPlayer src = { track }  controls />
            </div>
        </div>
    )
}

export default MusicPlayer