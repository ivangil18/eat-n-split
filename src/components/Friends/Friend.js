import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button";

export default function Friend({ friend }) {
  return (
    <li className="friendItem">
      <div className="info">
        <div className="avatar-image">
          {friend.imgUrl ? (
            <img src={friend.imgUrl} alt={friend.friendName}></img>
          ) : (
            <FontAwesomeIcon className="icon" icon={faUser} />
          )}
        </div>

        <div>
          <h4>{friend.friendName}</h4>
          <p>{friend.history}</p>
        </div>
      </div>
      <Button className="btn-end">Select</Button>
    </li>
  );
}
