import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import FirstImg from "../materials/img/articles-history/firstImage.jpg"
import Button from "../components/Button"
import Blob from "../components/Blob"

const SingleArticle = (props) => {
    
    const { id } = useParams()

    const [article, setArticle ] = useState(null)

    useEffect(() => {
        fetch( "http://localhost:8000/articles" )
        .then(res => {
            return res.json()
        })
        .then(data => {
                setArticle(data)
            })
    }, [])


    return(
        <div className="single-article">
            <Blob class = "blob__purple" />

            {
                article && (
                    <article >
                        <h1>Hello</h1>
                        <div className="article__infos">
                            <p className="article__txt">{props.author}</p>
                            <p className="article__txt"> - </p>
                            <p className="article__txt">{props.date}</p>
                        </div>
                        <img src={ FirstImg } alt="" className="img__article" />
                        <div className="article-btn-container">
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