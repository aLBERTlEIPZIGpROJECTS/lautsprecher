import Button from "./Button"
const NextArticleBtn = (props) => {

    return(
        <Button className = "button__orange" txt = "next article" link = {`${props.link}/${ props.newId }`} />
    )
}

export default NextArticleBtn