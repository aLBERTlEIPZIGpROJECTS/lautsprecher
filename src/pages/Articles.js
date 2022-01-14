import ArticleCard from "../components/ArticleCard"
import { useState, useEffect } from "react"
import Blob from "../components/Blob"

        
const Articles = () => {
    
    const [articles, setArticles ] = useState(null)

    useEffect(() => {
        fetch( "http://localhost:8000/articles" )
        .then(res => {
            return res.json()
        })
        .then(data => {
                setArticles(data)
            })
    }, [])
     
    return (
        <div className="articles_container content">
           <Blob class = "blob__purple" /> 
            <h1>Alle Artikel</h1>
            {
                articles && articles.map((article) => (
                    
                    <ArticleCard title = { article.title} id = { article.id } key = { article. id } />
                    
                ))
            }
        </div>
    )
}

export default Articles