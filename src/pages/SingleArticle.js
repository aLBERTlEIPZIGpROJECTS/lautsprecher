import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Button from "../components/Button"
import Blob from "../components/Blob"
import useFetch from "../useFetch"
import GoTopBtn from "../components/GoTopBtn"
import { Link } from "react-router-dom"
import NextArticleBtn from "../components/NextArticleBtn"

const SingleArticle = (props) => {

    const { id } = useParams()
    const newId = parseInt(id[Object.keys(id)[0]]) + 1
    const { data, isLoading, error } = useFetch(`http://localhost:8000/articles/${id}`)

    return(
        <div className="single-article">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__purple blob-up" />

            {
                data && (
                    <article >
                        <h1>{data.title}</h1>
                        <div className="article__infos">
                            <p className="article__txt">{data.author}</p>
                            <p className="article__txt"> - </p>
                            <p className="article__txt">{data.date}</p>
                        </div>
                        <img src={ data.img } alt="" className="img__article" />
                        <p className="article__txt"> {data.body} </p>
                        <div className="article-btn-container">
                            <Button className = "button__purple" txt = "article library" link = "/articles" /> 
                            <NextArticleBtn link = "/single-article" newId = { newId }/>
                        </div>
                    </article>
                )
            }
            <GoTopBtn />
            </div>
    )
}

export default SingleArticle