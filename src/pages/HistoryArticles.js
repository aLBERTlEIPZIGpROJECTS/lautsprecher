import ArticleCard from "../components/ArticleCard"
import { useState, useEffect } from "react"
import Blob from "../components/Blob"


const HistoryArticles = () => {

    const [articles, setArticles] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8000/historyarticles")
            .then( res =>{
                return res.json();
            })    
            .then(data => {
                setArticles(data)
            })
    }, [])
    return(
        <div className="articles__container content">
            <Blob class = "blob__lightblue" />
            <h1>Alle History Article</h1>
                {
                   articles && articles.map((article) => (
                        <ArticleCard title = { article.title } id = { article.id } key = { article.id } />
                    ))
                }
    </div>
    )
}

export default HistoryArticles