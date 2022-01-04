import Button from "../components/Button"
import EventsNow from "../components/EventsNov"
import ArticleCard from "../components/ArticleCard"

const Home = () => {
    return(
        <div className="landingPage">
            <h1>Lautsprecher</h1>
            <EventsNow />
            <div className="content">
                <ArticleCard title = "Article Titel" body = "lorem ipsum tralarum lapsumlorem ipsum tralarum lapsumlorem ipsum tralarum lapsumlorem ipsum tralarum lapsum"/>
                    <Button />
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