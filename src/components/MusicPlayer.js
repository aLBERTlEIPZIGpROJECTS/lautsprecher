import { useState } from "react"
import playerIcon from "../materials/icons/trumpet.gif"
import track from "../materials/tracks/Studio 2020 - Quincas Moreira.mp3"

const MusicPlayer = () => {

    const [ musicPlayer, setMusicPlayer ] = useState("player__on")

  return(
    <div className="music-player">
      <img src= { playerIcon} alt="" className={` iconMed player__on ${ musicPlayer }`} />
      <audio controls src= {track}></audio>
      
    </div>
  )
};

export default MusicPlayer