import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MusiciansTab from "../components/MusiciansTab";
import BandsTab from "../components/BandsTab";
import OtherTab from "../components/OtherTab";
import Blob from "../components/Blob";
import MusicPlayer from "../components/MusicPlayer";
import track from "../materials/tracks/Studio 2020 - Quincas Moreira.mp3"


const Community = () => {
    
    const [ musiciansClass, setMusiciansClass ] = useState("activeTab")

    const activateMusicians = () => {
        setMusiciansClass("activeTab")
        setBandsClass('inactiveTab')
        setOthersClass('inactiveTab')
    }
    
    const [ bandsClass, setBandsClass ] = useState("inactiveTab")

    const activateBands = () => {
        setMusiciansClass('inactiveTab')
        setBandsClass("activeTab")
        setOthersClass('inactiveTab')
    }
    
    const [ othersClass, setOthersClass ] = useState("inactiveTab")

    const activateOthers = () => {
        setMusiciansClass('inactiveTab')
        setBandsClass('inactiveTab')
        setOthersClass("activeTab")
    }


    return(
        <div className="community">
            <Blob class = "blob__orange" />
            <MusicPlayer />
            <audio controls src= {track}></audio>
            <h1>Community</h1>
            <div className="tittle-container">
                <button>
                    <h2 onClick={ activateMusicians } >Musicians</h2>
                </button>
                <button>
                    <h2 onClick={ activateBands }>Bands</h2>
                </button>
                <button>
                    <h2 onClick={ activateOthers }>Other</h2>
                </button>
            </div>
            <div className="tabs-container">
                <MusiciansTab class = { musiciansClass } />
                <BandsTab  class = { bandsClass } />
                <OtherTab  class = { othersClass }/>
            </div>
        </div>
    )
}

export default Community