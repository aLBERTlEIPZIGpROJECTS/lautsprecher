import Button from "./Button"

const ArticlePreview = (props) => {
    return(
        <div className="article-preview">
            <h2>{ props.title }</h2>
            <p>{ props.body }</p>
            <Button txt = "Zum Artikel" link = { props.link }  />            
        </div>
    )
}

export default ArticlePreview