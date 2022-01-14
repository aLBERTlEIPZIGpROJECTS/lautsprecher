import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <h1>Community</h1>
            <div className="tittle-container">
                <h2 onClick={ activateMusicians } >Musicians</h2>
                <h2 onClick={ activateBands }>Bands</h2>
                <h2 onClick={ activateOthers }>Other</h2>
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