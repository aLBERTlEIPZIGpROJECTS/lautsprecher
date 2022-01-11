import ArrowRight from "../materials/icons/arrow-right.png"

const ArticleCard = (props) => {
    return(
        <div className="article-card">
            <h3 className="article-card__title">{ props.title }</h3>
            <p>{ props.body }</p>
            <img src={ ArrowRight } alt="" className="iconSmall" />
        </div>
    )
}

export default ArticleCard