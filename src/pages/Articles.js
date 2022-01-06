import ArticleCard from "../components/ArticleCard"
import { useState, useEffect } from "react"

        
const Articles = () => {

    const [articles, setArticles ] = useState([
        {
            id : 0,
            title : "First Article",
            body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"
        },
        {
            id : 1,
            title : "First Article",
            body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"
        },
        {
            id : 2,
            title : "First Article",
            body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"
        },
        {
            id : 3,
            title : "First Article",
            body : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"
        }
    ])

    return (
        <div className="articles_container content">
            <h1>Alle Artikel</h1>
            {
                articles.map((article) => (
                    <ArticleCard title = { article.title} id = { article.id } body = { article.body } />
                ))
            }
        </div>
    )
}

export default Articles