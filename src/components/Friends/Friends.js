import { useState } from "react";
import Button from "../Button";
import AddFriend from "./AddFriend";
import FriendList from "./FriendList";

export default function Friends() {
  const [friends, setFriends] = useState([]);
  const [isAddFriendOpen, seAddFriendOpen] = useState(false);

  function handleSetFriends(newFriend) {
    console.log(newFriend);
    setFriends((friends) => [...friends, newFriend]);
  }

  function handleIsAddFriendOpen() {
    seAddFriendOpen(() => !isAddFriendOpen);
  }

  return (
    <div className="friends">
      {friends.length === 0 && (
        <p className="msg">Please add a friend to get started...</p>
      )}
      <FriendList data={friends} onSetFriend={handleSetFriends} />
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
  );
}
