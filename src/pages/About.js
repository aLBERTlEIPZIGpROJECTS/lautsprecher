import TeamCard from "../components/TeamCard"

const About = () => {
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
                <TeamCard fname = "Johann Sebastian" lname = "Bach" position = "il putto amo" />
                <TeamCard fname = "Antonio" lname = "Vivaldi" position = "il prette Rosso" />
                <TeamCard fname = "G. P. " lname = "Teleman" position = "life's too short" />
                <TeamCard fname = "G. F." lname = "Händel" position = "agent and musician" />
                <TeamCard fname = "Arcangelo" lname = "Corelli" position = "life's too unfair" />
            </div>
        </div>
    )
}

export default About