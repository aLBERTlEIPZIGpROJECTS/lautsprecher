import { Link } from "react-router-dom"
import ArticleCard from "../components/ArticleCard"
import { useState, useEffect } from "react"
import Blob from "../components/Blob"

        
const Articles = () => {
    

    const [ data, setData ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState (null)
    
    useEffect(() => {
        fetch( "http://localhost:8000/articles" )
            .then(res => {
                if (!res.ok){
                    throw Error("something's funky in here")
                }
                return res.json()
            })
            .then(data => {
                setData(data)
                setIsLoading(false)
                setError(null)
            })
            .catch(err=> {
                setIsLoading(false)
                setError(err.message)
            })
        }, [])
     
    return (
        <div className="articles_container content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            
           <Blob class = "blob__purple" /> 
            <h1>Alle Artikel</h1>
            {
                data && data.map((article) => (
                    
                    <Link to = {`/single-article/${article.id}`} >
                        <ArticleCard title = { article.title} id = { article.id } key = { article.id } />
                    </Link>
                    
                ))
            }
        </div>
    )
}

export default Articles