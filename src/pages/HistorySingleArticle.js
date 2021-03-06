import { useParams } from "react-router-dom"
import Button from "../components/Button"
import Blob from "../components/Blob"
import useFetch from "../useFetch"
import GoTopBtn from "../components/GoTopBtn"
import NextArticleBtn from "../components/NextArticleBtn"


const HistorySingleArticle = (props) => {

    const { id } = useParams()
    const newId = parseInt(id[Object.keys(id)[0]]) + 1
    const { data, isLoading, error } = useFetch(`http://localhost:8000/historyarticles/${id}`)

    return(
        <div className="history-single-article">
            { error && <div>{ error }</div>}
            { isLoading && <div>Loading...</div>}
            <Blob class = "blob__light blue blob-low" />
            
            {
                data && (
                    <article>
                        <h1>{data.title}</h1>
                        <div className="article__infos">
                        <p className="article__txt">{ data.author }</p>
                        <p className="article__txt"> - </p>
                        <p className="article__txt">{ data.date }</p>
                        </div>
                        <img src={ data.img } alt="" className="img__article" />
                        <p className="article__txt">{ data.body }</p>
                        <div className="article-btn-container">
                        <Button className = "button__purple" txt = "history article library" link = "/history-articles" />
                        <NextArticleBtn link = "/history-single-article" newId = { newId }/>
                    </div>
                </article>
                )
            }
            <GoTopBtn />
        </div>
    )
}

export default HistorySingleArticle
