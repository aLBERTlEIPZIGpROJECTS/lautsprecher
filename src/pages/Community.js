import { useState, useEffect } from "react";
import CommunityTab from "../components/CommunityTab";
import MusiciansTab from "../components/MusiciansTab";
import BandsTab from "../components/BandsTab";
import OtherTab from "../components/OtherTab";



const Community = () => {
    const [tabs, setTabs] = useState(null)
    
    useEffect(() => {
        fetch("http://localhost:8000/tabs")
            .then(res => {
                return res.json()
            })
            .then(data => {
                setTabs(data)
            })
    })
    return(
        <div className="community">
            <h1>Community</h1>
            <MusiciansTab />
            <BandsTab />
            <OtherTab />
        </div>
    )
}

export default Community