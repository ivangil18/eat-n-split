import { useState } from "react";
import Button from "../Button";

export default function AddFriend({ onSetFriend, onToggleIsAddFriendOpen }) {
  const [friendName, setFriendName] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (friendName === "") return;

    const newFriend = {
      id: Date.now(),
      friendName,
      imgUrl,
      debt: 0,
    };

    onSetFriend(newFriend);
    setFriendName("");
    setImgUrl("");
    onToggleIsAddFriendOpen();
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">👫 Friend name</label>
        <input
          type="text"
          value={friendName}
          id="name"
          required
          onChange={(e) => setFriendName(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="url">🌄 Image URL</label>
        <input
          type="text"
          id="url"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
        ></input>
      </div>
      <div className="action">
        <Button className="btn-end">Add</Button>
      </div>
    </form>
  );
}
