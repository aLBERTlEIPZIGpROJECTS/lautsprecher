import TeamCard from "../components/TeamCard"
import { useState, useEffect } from "react"
import useFetch from "../useFetch";
import CommunityCard from "../components/CommunityCard"
import Blob from "../components/Blob";
import GoTopBtn from "../components/GoTopBtn"

const About = () => {
    
    const [team, setTeam] = useState(null)

    const url = "http://localhost:5000/api/team"

    const { data, isLoading, error } = useFetch(url)

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
                    data && data.map((person) => (
                        <TeamCard fName = { person.fName } lName = { person.lName } role = { person.role } id = { person.id } image = { person.image } key = { person.id }/>
                    ))}       
                </div>
            <GoTopBtn />
        </div>
    )
}


export default About