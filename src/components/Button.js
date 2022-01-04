const Button = (props) => {
    return(
            <button className="button">{ props.txt }
                <a href={ props.link }></a>
            </button>
    )
}

export default Button