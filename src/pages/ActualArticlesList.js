import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import useFetch from "../useFetch"
import ArticleCard from "../components/ArticleCard"
import Blob from "../components/Blob"
import GoTopBtn from "../components/GoTopBtn"
        
const Articles = () => {
    
    const { data, isLoading, error } = useFetch("http://localhost:8000/articles")
    const [ searchTerm, setSearchTerm ] = useState("")

    return (
        <div className="articles_container content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            
            <Blob class = "blob__purple blob-high" /> 
            <h1>Alle Artikel</h1>
            <input type="text" placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            {
                data && data.filter((val) =>{
                    if(searchTerm === "") {
                        return val
                    } else if (val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                        return val
                    }
                }).map((article) => (
                    
                    <Link to = {`/single-article/${article.id}`} >
                        <ArticleCard title = { article.title} id = { article.id } key = { article.id } />
                    </Link>
                    
                ))
            }
            <GoTopBtn />
        </div>
    )
}

export default Articles