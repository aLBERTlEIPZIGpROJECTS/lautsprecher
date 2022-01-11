import { Link } from "react-router-dom"
const Button = (props) => {
    return(
        <div className="button">
             {/* <Link to= {props.link} >{ props.linkName }</Link> */}
            <button className={props.className}  >{ props.txt } </button>
        </div>
    )
}

export default Button