import { useEffect, useState } from "react"
import Button from "../components/Button"
import EventsNow from "../components/EventsNow"
import ArticlePreview from "../components/ArticlePreview"

const Home = () => {

    const [articleSnippet, setArticleSnippet] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/articles")
            .then(res => {
                console.log(res)
                return res.json()
            })
            .then(data => {
                setArticleSnippet(data[0])
            })
    }, [])

    return(
        <div className="landingPage">
            <h1>Lautsprecher</h1>
            <EventsNow className = "landingEvents" />
            <div className="content-main">
                {
                    articleSnippet &&
                <ArticlePreview title = { articleSnippet.title } body = { articleSnippet.body } link = "https://www.youtube.com/watch?v=1edQB4JuqUE" />
                }
                <div className="community">
                    <h2>Community</h2>
                    <Button txt = "Finde einen Musikern" link = "/musicians" />
                </div>
            </div>
            <div className="content-sec">
                <Button txt = "Hi there" linkName = "Hi there"  link = "/" className ="content-sec__btn" />
                <Button txt = "About us" linkName = "About us"  link = "/about" className ="content-sec__btn"  />
            </div>
        </div>
    )
}

export default Home