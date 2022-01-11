import { useState, useEffect } from "react";
import CommunityTab from "../components/CommunityTab";

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
            <div className="tabs-container">
                <CommunityTab url = "http://localhost:8000/musicians" title = "Musicians" />
                <CommunityTab url = "http://localhost:8000/bands" title = "Bands" />
                <CommunityTab url = "http://localhost:8000/veranstaltungsorte" title = "Other" />
            </div>
        </div>
    )
}

export default Community