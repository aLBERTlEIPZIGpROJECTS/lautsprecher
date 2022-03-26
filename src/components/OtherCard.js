import { Link } from "react-router-dom";
import SocialMedia from "../components/SocialMedia"
import webIcon from "../materials/icons/web-icon.svg"
import mailIcon from "../materials/icons/mailIcon.svg"

const OtherCard = (props) => {
  return (
    <div className="community-card" key={props.key}>
      <img src={props.image} alt={props.businessName} className="img__band" />

      <div className="community-card__txt">
        <h3>{props.businessName}</h3>
        <div className="community-card__content">
          <p>{props.street}{props.number}{props.PLZ}</p>
          <p>{props.phone}</p>
          <p>{props.website}</p>
          <p>{props.mail}</p>
        </div>
        <SocialMedia socialMedia = {props.socialMedia} />
        <Link to={`/other/${props.id}`}>
          <p>+ Info</p>
        </Link>
      </div>
    </div>
  );
};

export default OtherCard;
