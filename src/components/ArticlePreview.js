import { Link } from "react-router-dom"

import Button from "./Button"

const ArticlePreview = (props) => {


    return(
        <div className="content-main__item  article-preview card-shadow">
            <h2 className = "content-main__title">{ props.title }</h2>
            <p className="article-preview__txt">{ props.body.slice(0, 100) }</p>
            <Link to = "/single-article/0" >
                <Button txt = "Zum Artikel" link = { props.link } className="button__purple"  />            
            </Link>
        </div>
    )
}

export default ArticlePreview