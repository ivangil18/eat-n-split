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
          {friend.debt !== 0 ? (
            friend.debt > 0 ? (
              <p style={{ color: "limegreen" }}>
                {friend.friendName} owes you ${friend.debt}
              </p>
            ) : (
              <p style={{ color: "red" }}>
                You owe ${Math.abs(friend.debt)} to {friend.friendName}
              </p>
            )
          ) : (
            <p>You and {friend.friendName} are even</p>
          )}
        </div>
      </div>
      <Button className="btn-end" onClick={handleSelect}>
        {friend.id === friendSelected.id && isCalculatorOpen
          ? "Close"
          : "Select"}
      </Button>
    </li>
  );
}
