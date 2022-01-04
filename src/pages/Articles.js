import ArticleCard from "../components/ArticleCard"
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
        <div className="articles_container content">
            <h1>Alle Artikel</h1>
            <ArticleCard title = {"First Article"} body = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"} />
            <ArticleCard title = {"Second Article"} body = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"} />
            <ArticleCard title = {"Third Article"} body = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"} />
            <ArticleCard title = {"Fourth Article"} body = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"} />
            <ArticleCard title = {"Fifth Article"} body = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"} />
            <ArticleCard title = {"Sixth Article"} body = {"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit delectus similique culpa?"} />
        </div>
    )
}

export default Articles