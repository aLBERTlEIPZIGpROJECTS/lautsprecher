import ArrowRight from "../materials/icons/arrow-right.png"

const ArticleCard = (props) => {
    return(
        <div className="article-card">
            <h3 className="article-card__title">{ props.articleTitle }</h3>
            <img src={ ArrowRight } alt="" className="iconSmall" />
        </div>
    )
}

export default ArticleCard