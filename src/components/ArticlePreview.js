import Button from "./Button"

const ArticlePreview = (props) => {
    return(
        <div className="content-main__item  article-preview">
            <h2 className = "content-main__title">{ props.title }</h2>
            <p className="article-preview__txt">{ props.body.slice(0, 100) }</p>
            <Button txt = "Zum Artikel" link = { props.link } className="button__purple"  />            
        </div>
    )
}

export default ArticlePreview