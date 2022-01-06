import TeamCard from "../components/TeamCard"
import { useState } from "react"

const About = () => {
    
    const [team, setTeam] = useState([
        {
            id: 0,
            fname: "Carl",
            lname: "Sagan",
            position: "er liegt",
            links: "https://www.youtube.com/"
          },
          {
            id: 1,
            fname: "Isaac",
            lname: "Asimov",
            position: "er lacht",
            links: "https://www.youtube.com/"
          },
          {
            id: 2,
            fname: "Isaac",
            lname: "Newton",
            position: "er schaut",
            links: "https://www.youtube.com/"
          },
          {
            id: 3,
            fname: "P. K.",
            lname: "Dick",
            position: "er cchweigt",
            links: "https://www.youtube.com/"
          }
    ])

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
                    team.map((person) => (
                        <TeamCard fname = { person.fname } lname = { person.lname } position = { person.position } id = { person.id } />
                    ))}       
            </div>
        </div>
    )
}


export default About