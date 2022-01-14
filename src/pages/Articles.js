import ArticleCard from "../components/ArticleCard"
import { useState, useEffect } from "react"

        
const Articles = (props) => {
    const [articles, setArticles ] = useState(null)

    useEffect(() => {
        fetch( props.url )
        .then(res => {
                return res.json()
            })
            .then(data => {
                setArticles(data)
            })
    }, [])
     
    return (
        <div className="articles_container content">
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