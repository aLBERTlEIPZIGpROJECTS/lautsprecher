import ArticleCard from "../components/ArticleEntryCard"
import { useState, useEffect } from "react"

/* fetch("http://localhost:4000/musicians")
    .then(res => res.json())
    .then(json => 
        json.map(data => {
            <ArticleCard title = {data.bandName}/>
        })) */
        
        
const Articles = () => {
    
    useEffect(() => {
        fetch("http://localhost:4000/musicians")
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
    
    }, [])

    return(
        <div className="articles_container">
            <h1>Alle Artikel</h1>

          
           <ArticleCard title = {"hello"} />
            <ArticleCard title = {"bye"} />
            <ArticleCard title = {"today"} />
            <ArticleCard title = {"hello"} />
            <ArticleCard title = {"hello"} />
            <ArticleCard title = {"hello"} />
            <ArticleCard title = {"hello"} />
        </div>
    )
}

export default Articles