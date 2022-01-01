import TeamCard from "../components/TeamCard"

const About = () => {
    return(
        <div className="about">
            <h1>About Us</h1>
            <div className="mission">
                <h2>Mission</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="objectives">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="team">
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </div>
    )
}

export default About