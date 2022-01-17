import TeamCard from "../components/TeamCard"
import { useState, useEffect } from "react"
import CommunityCard from "../components/CommunityCard"
import Blob from "../components/Blob";

const About = () => {
    
    const [team, setTeam] = useState(null)

    const today = new Date()
    const weekday = today.getDay()
    console.log(weekday)

    useEffect(() => {
        fetch("http://localhost:8000/team")
            .then(res => {
                return res.json()
            })
            .then (data => {
                setTeam(data)
            })
    }, [])


    return(
        <div className="about">
            <Blob class = "blob__blue blob-high"/>
            <h1>About Us</h1>
            <div className="mission">
                <h2>Mission</h2>
                <blockquote>Lorem ipsum dolor sit amet.</blockquote>
            </div>
            <div className="objective-container">
                <div className="objectives">
                    <h2>Objectives</h2>
                    <p>First Objective Lorem Ipsum</p>
                    <p>Second Objective Lorem Ipsum</p>
                    <p>Third Objective Lorem Ipsum</p>
                    <p>Fourth Objective Lorem Ipsum</p>
                </div>
            </div>

                 <div className="team">
                     <h2>Team</h2>
                 {
                    team && team.map((person) => (
                        <CommunityCard fname = { person.fname } lname = { person.lname } rol = { person.rol } id = { person.id } img = { person.img } key = { person.id }/>
                    ))}       
                </div>
        </div>
    )
}


export default About