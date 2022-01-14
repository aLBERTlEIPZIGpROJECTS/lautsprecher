import musicplayer from "../materials/icons/trumpet.gif"
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'

const MusicPlayer = () => {
    return(
        <div className="musicPlayer">
            <img src={ musicplayer } alt="test" className="icon" />
            <ReactJkMusicPlayer />
        </div>
    )
}

export default MusicPlayer