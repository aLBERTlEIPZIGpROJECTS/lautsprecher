import Button from "../components/Button"
import EventsNow from "../components/EventsNov"
import ArticlePreview from "../components/ArticlePreview"

const Home = () => {
    return(
        <div className="landingPage">
            <h1>Lautsprecher</h1>
            <EventsNow />
            <div className="content">
                <ArticlePreview title = "Article Preview" body = "lorem ipsum tralarum lapsumlorem ipsum tralarum lapsumlorem ipsum tralarum lapsumlorem ipsum tralarum lapsum"/>
                    <Button txt = "Zum Artikel" />
                <div className="community">
                    <h2>Community</h2>
                    <Button txt = "Finde einen Musikern" />
                </div>
            </div>
            <div className="content-sec">
                <Button txt = "Hi there" link = "https://www.youtube.com/" />
                <Button txt = "About us" link = "https://www.youtube.com/"  />
            </div>
        </div>
    )
}

export default Home