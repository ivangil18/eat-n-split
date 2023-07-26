import { useState } from "react";
import Button from "../Button";
import AddFriend from "./AddFriend";
import FriendList from "./FriendList";
import SplitBillCalculator from "../SplitBillCalculator";

export default function Friends() {
  const [friendSelected, setFriendSelected] = useState("");
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [friends, setFriends] = useState([]);
  const [isAddFriendOpen, seAddFriendOpen] = useState(false);

  function handleSetFriends(newFriend) {
    console.log(newFriend);
    setFriends((friends) => [...friends, newFriend]);
  }

  function handleIsAddFriendOpen() {
    seAddFriendOpen(() => !isAddFriendOpen);
  }

  function updateDebt(friendDebt, debtAmount) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === friendDebt.id ? { ...friend, debt: debtAmount } : friend
      )
    );
  }

  return (
    <div className="container">
      <div className="friends">
        {friends.length === 0 && (
          <p className="msg">Please add a friend to get started...</p>
        )}
        <FriendList
          friends={friends}
          friendSelected={friendSelected}
          setFriendSelected={setFriendSelected}
          isCalculatorOpen={isCalculatorOpen}
          setIsCalculatorOpen={setIsCalculatorOpen}
        />
        {isAddFriendOpen && (
          <AddFriend
            onSetFriend={handleSetFriends}
            onToggleIsAddFriendOpen={handleIsAddFriendOpen}
          />
        )}
        <Button onClick={handleIsAddFriendOpen}>
          {isAddFriendOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      <div>
        {isCalculatorOpen && (
          <SplitBillCalculator
            friendSelected={friendSelected}
            onUpdateDebt={updateDebt}
            onToggle={setIsCalculatorOpen}
          />
        )}
      </div>
    </div>
  );
}
