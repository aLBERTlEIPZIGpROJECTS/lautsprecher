import ArrowRight from "../materials/icons/arrow-right.png"

const ArticleCard = (props) => {
    return(
        <div className="article-entry-card">
            <p className="article__title">{ props.title }</p>
            <p>{ props.body }</p>
            <img src={ ArrowRight } alt="" className="iconSmall" />
        </div>
    )
}

export default ArticleCard