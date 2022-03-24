import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="btn__basic">
      <button className={`${props.className} btn__basic`}

        onClick = {props.onClick}
      
      >
          {props.txt}
        {/*                 <Link to = {`${props.link}`}>{ props.txt }</Link> */}
      </button>
    </div>
  );
};

export default Button;
