import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FirstImg from "../materials/img/articles-history/firstImage.jpg"
import Button from "../components/Button"
import Blob from "../components/Blob"
import useFetch from "../useFetch"

const SingleArticle = (props) => {

    const { id } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:8000/articles/${id}`)

    return(
        <div className="single-article">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__purple blob-low" />

            {
                data && (
                    <article >
                        <h1>{data.title}</h1>
                        <div className="article__infos">
                            <p className="article__txt">{data.author}</p>
                            <p className="article__txt"> - </p>
                            <p className="article__txt">{data.date}</p>
                        </div>
                        <img src={ FirstImg } alt="" className="img__article" />
                        <div className="article-btn-container">
                            <p className="article__txt"> {data.body} </p>
                            {/* 
                <Button className = "button__orange" txt = "next article" />
                <Button className = "button__purple" txt = "article library" /> 
                 */}
                        </div>
                    </article>
                )
            }
            </div>
    )
}

export default SingleArticle