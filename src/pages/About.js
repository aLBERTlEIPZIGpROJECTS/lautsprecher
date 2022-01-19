import TeamCard from "../components/TeamCard"
import { useState, useEffect } from "react"
import CommunityCard from "../components/CommunityCard"
import Blob from "../components/Blob";
import GoTopBtn from "../components/GoTopBtn"

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
                <blockquote>Musiker und Musikliebhaber in Leipzig verbinden</blockquote>
            </div>
            <div className="objective-container">
                <div className="objectives">
                    <h2>Ziele</h2>
                    <p>Platz für alle Stimme beschaffen</p>
                    <p>Musikveranstaltungen aller Art bekann machen</p>
                    <p>Das reiche Kulturlebens der Stadt aktivieren und ins Licht bringen</p>
                    <p>Die Musiktradition der Stadt im Gegenwart und Zukunft bringen</p>
                    <p>Die Gesellschaft stärken</p>
                </div>
            </div>

                 <div className="team">
                     <h2>Team</h2>
                 {
                    team && team.map((person) => (
                        <CommunityCard fname = { person.fname } lname = { person.lname } rol = { person.rol } id = { person.id } img = { person.img } key = { person.id }/>
                    ))}       
                </div>
            <GoTopBtn />
        </div>
    )
}


export default About