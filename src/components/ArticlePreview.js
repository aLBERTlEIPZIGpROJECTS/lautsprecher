import Button from "./Button"

const ArticlePreview = (props) => {
    return(
        <div className="article-preview">
            <h3>{ props.title }</h3>
            <p>{ props.body }</p>
            <Button />            
        </div>
    )
}

export default ArticlePreview