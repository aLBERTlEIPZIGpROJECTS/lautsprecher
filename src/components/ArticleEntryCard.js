import ArrowRight from "../materials/icons/arrow-right.png"

const ArticleEntryCard = (props) => {
    return(
        <div className="article-entry-card">
            <p className="article__title">{props.title}</p>
            <img src={ ArrowRight } alt="" className="icon" />
        </div>
    )
}

export default ArticleEntryCard