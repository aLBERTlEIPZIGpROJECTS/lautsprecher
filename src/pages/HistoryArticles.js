import ArticleCard from "../components/ArticleCard"
import { useState, useEffect } from "react"



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
        <div className="articles__container">
            <h1>Alle History Article</h1>
            <div className="articles__cards">
                {
                    articles.map((article) => (
                        <ArticleCard title = { article.title } id = { article.id } author = { article.author } />
                    ))
                }
        </div>
    </div>
    )
}

export default HistoryArticles