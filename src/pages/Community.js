import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MusiciansTab from "../components/MusiciansTab";
import BandsTab from "../components/BandsTab";
import OtherTab from "../components/OtherTab";
import Blob from "../components/Blob";
import MusicPlayer from "../components/MusicPlayer";
import track from "../materials/tracks/Studio 2020 - Quincas Moreira.mp3"
import GoTopBtn from "../components/GoTopBtn"


const Community = () => {
    
    const [ activeTab, setActiveTab ] = useState ("musicians")
    
    const activateMusicians = () => {
        setActiveTab("musicians")
    }
    
    const activateBands = () => {
        setActiveTab("bands")
    }
    
    const activateOthers = () => {
        setActiveTab("others")
    }
    
    return(
        <div className="community">
            <Blob class = "blob__orange blob-high" />
            {/* <MusicPlayer /> */}
            <h1>Community</h1>
            <div className="tittle-container">
                <h2 onClick={ activateMusicians } >Musicians</h2>
                <h2 onClick={ activateBands }>Bands</h2>
                <h2 onClick={ activateOthers }>Other</h2>
            </div>
            <div className="tabs-container">
                { activeTab === "musicians" &&
                    <MusiciansTab class = "activeTab" />
                    }
                { activeTab === "bands" && <BandsTab  class = "activeTab"/> }
                { activeTab === "others" && <OtherTab  class = "activeTab"/> }
            </div>
            <GoTopBtn />
        </div>
    )
}

export default Community