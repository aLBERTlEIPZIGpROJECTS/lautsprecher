import Button from "../components/Button"
import EventCard from "../components/EventCard"
const Home = () => {
    return(
        <div className="landingPage">
            <h1>Lautsprecher</h1>
            <div className="homeRightNow">
                <h2>Right Now</h2>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
            </div>
            <div className="content">
                <div className="article-preview">
                    <h2>Artikel Tittel</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat itaque error voluptatibus quae inventore.</p>
                    <Button />
                </div>
                <div className="community">
                    <h2>Community</h2>
                    <Button />
                </div>
            </div>
            <div className="content-sec">
                <Button />
                <Button />
            </div>
        </div>
    )
}

export default Home