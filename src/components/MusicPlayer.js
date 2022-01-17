import { useState } from "react"
import { icons } from "react-icons";
import playerIcon from "../materials/icons/trumpet.gif"
import track from "../materials/tracks/Studio 2020 - Quincas Moreira.mp3"

const MusicPlayer = () => {

    const [ musicPlayer, setMusicPlayer ] = useState("")
    const [ iconStyle, setIconStyle ] = useState("icon-style__on")

    function playerState (){
      musicPlayer === "" ? setMusicPlayer("mute") : setMusicPlayer("")
      iconStyle === "icon-style__on" ? setIconStyle("icon-style__off") : setIconStyle("icon-style__on")
    }
    

  return(
    <div className="music-player">
      <img src= { playerIcon} alt="" className= { iconStyle } onClick={ playerState } />
      <audio controls musicPlayer src= {track}></audio>
      
    </div>
  )
};

export default MusicPlayer