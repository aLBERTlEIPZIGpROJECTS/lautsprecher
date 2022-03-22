import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import useFetch from "../useFetch"
import ArticleCard from "../components/ArticleCard"
import Blob from "../components/Blob"
import GoTopBtn from "../components/GoTopBtn"


const HistoryArticles = () => {

    const url = "http://localhost:5000/api/historyarticle"

    const { data, isLoading, error } = useFetch(url)

    return(
        <div className="articles__container content">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}

            <Blob class = "blob__lightblue blob-high" />
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