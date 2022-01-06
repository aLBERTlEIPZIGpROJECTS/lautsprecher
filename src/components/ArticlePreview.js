import Button from "./Button"

const ArticlePreview = (props) => {
    return(
        <div className="article-preview">
            <h3>{ props.title }</h3>
            <p>{ props.body }</p>
            <Button txt = "Zum Artikel"  />            
        </div>
    )
}

export default ArticlePreview