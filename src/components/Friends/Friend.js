import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Button from "../Button";

export default function Friend({
  friend,
  friendSelected,
  setFriendSelected,
  isCalculatorOpen,
  setIsCalculatorOpen,
}) {
  function handleSelect() {
    if (isCalculatorOpen && friend.id === friendSelected.id) {
      setIsCalculatorOpen(false);
      setFriendSelected("");
      return;
    }
    setFriendSelected(friend);
    setIsCalculatorOpen(true);
  }

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
      <Button className="btn-end" onClick={handleSelect}>
        {friend.id === friendSelected.id ? "Close" : "Select"}
      </Button>
    </li>
  );
}
