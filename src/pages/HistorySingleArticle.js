import { useParams } from "react-router-dom"
import FirstImg from "../materials/img/articles-history/firstImage.jpg"
import Button from "../components/Button"
import Blob from "../components/Blob"
import useFetch from "../useFetch"


const HistorySingleArticle = (props) => {

    const { id } = useParams()
    const { data, isLoading, error } = useFetch(`http://localhost:8000/historyarticles/${id}`)
    
    return(
        <div className="history-single-article">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__lightblue blob-low" />
            
            {
                data && (
                    <article>
                        <h1>Hello</h1>
                        {/* 
                        <h1>{data.title}</h1>
                        <div className="article__infos">
                        <p className="article__txt">{ data.author }</p>
                        <p className="article__txt"> - </p>
                        <p className="article__txt">{ data.date }</p>
                        </div>
                        <img src={ FirstImg } alt="" className="img__article" />
                        <p>{ data.body }</p>
                        <div className="article-btn-container">
                        <Button className = "button__orange" txt = "next article" />
                    <Button className = "button__purple" txt = "article library" />
                    </div>
                */}
                </article>
                )
            }
        </div>
    )
}

export default HistorySingleArticle