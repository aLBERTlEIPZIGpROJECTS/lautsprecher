import TeamCard from "../components/TeamCard"
import { useState, useEffect } from "react"

const About = () => {
    
    const [team, setTeam] = useState(null)

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
            
            <h1>About Us</h1>
            <div className="mission">
                <h2>Mission</h2>
                <blockquote>Lorem ipsum dolor sit amet.</blockquote>
            </div>
            <div className="objectives">
                <h2>Objectives</h2>
                <p>First Objective Lorem Ipsum</p>
                <p>Second Objective Lorem Ipsum</p>
                <p>Third Objective Lorem Ipsum</p>
                <p>Fourth Objective Lorem Ipsum</p>
            </div>

                 <div className="team">
                 {
                    team && team.map((person) => (
                        <TeamCard fname = { person.fname } lname = { person.lname } rol = { person.rol } id = { person.id } img = { person.img } key = { person.id }/>
                    ))}       
                </div>
        </div>
    )
}


export default About