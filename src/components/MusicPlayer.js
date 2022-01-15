import musicplayer from "../materials/icons/trumpet.gif"
import track from "../materials/tracks/Studio 2020 - Quincas Moreira.mp3"



const MusicPlayer = () => {

    
    
    return(
        <div className="musicPlayer">

     <audio
        controls
        src= {track } className="player">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
            </div>
    )
}

export default MusicPlayer