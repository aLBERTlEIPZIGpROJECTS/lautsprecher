import { useEffect, useState } from "react"
import Button from "../components/Button"
import EventsNow from "../components/EventsNow"
import ArticlePreview from "../components/ArticlePreview"
import Blob from "../components/Blob"

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
        <div className="landing-page">
            <Blob class = "blob__orange" />
            <h1>Lautsprecher</h1>
            <EventsNow className = "landing-events" />
           
            <div className="content-main">
                {
                    articleSnippet &&
                <ArticlePreview title = { articleSnippet.title } body = { articleSnippet.body } link = "https://www.youtube.com/watch?v=1edQB4JuqUE"  />
                }
                <div className="content-main__item community-preview" >
                    <h2 className="content-main__title">Community</h2>
                    <Button txt = "Finde einen Musikern" link = "/musicians" className="button__red"/>
                </div>
            </div>
           
            <div className="content-sec">
                <Button txt = "Hi there" linkName = "Hi there"  link = "/" className ="content-sec__btn button__lightblue" />
                <Button txt = "About us" linkName = "About us"  link = "/about" className ="content-sec__btn button__lightgreen"  />
            </div>
        </div>
    )
}

export default Home