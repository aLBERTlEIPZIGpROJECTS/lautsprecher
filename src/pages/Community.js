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
            {
                tabs && tabs.map((tab) => {
                    <CommunityTab title = {tab.title} url = { tab.url } key = { tab.id } />
                })
            }
            <CommunityTab title = "Musicians" />
            <CommunityTab title = "Bands" />
            <CommunityTab title = "Other" />
        </div>
    )
}

export default Community