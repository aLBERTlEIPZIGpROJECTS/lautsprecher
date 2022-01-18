import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import useFetch from "../useFetch"
import ArticleCard from "../components/ArticleCard"
import Blob from "../components/Blob"
import GoTopBtn from "../components/GoTopBtn"


const HistoryArticles = () => {


    const { data, isLoading, error } = useFetch("http://localhost:8000/historyarticles")

    return(
        <div className="articles__container content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <Blob class = "blob__lightblue" />
            <h1>Alle History Article</h1>
                {
                   data && data.map((article) => (

                    <Link to = {`/history-single-article/${article.id}`}>
                        <ArticleCard title = { article.title } id = { article.id } key = { article.id } />
                    </Link>
                    ))
                }
                <GoTopBtn />
        </div>
    )
}

export default HistoryArticles