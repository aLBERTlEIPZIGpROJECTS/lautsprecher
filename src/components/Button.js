import { Link } from "react-router-dom"
const Button = (props) => {
    return(
        <div>
             {/* <Link to= {props.link} >{ props.linkName }</Link> */}
            <button className={`${props.className} btn__basic`}  >{ props.txt } </button>
        </div>
    )
}

export default Button