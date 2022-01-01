import ArrowRight from "../materials/icons/arrow-right.png"

const ArticleEntryCard = () => {
    return(
        <div className="article-entry-card">
            <p className="article__title">Title</p>
            <img src={ ArrowRight } alt="" className="icon" />
        </div>
    )
}

export default ArticleEntryCard