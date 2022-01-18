import ArrowUp from "../materials/icons/arrow-up.svg"

const GoTopBtn = () => {
    return(
        <div className="go-top__container">
            <button className="go-top__btn" >
                <a href="#header">
                    <img src={ ArrowUp } alt="" className="go-top__icon" />
                </a>
            </button>
        </div>
    )
}

export default GoTopBtn