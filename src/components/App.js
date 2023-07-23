import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const friends = [
  {
    id: 1,
    avatar: "./avatars/friend1.jpeg",
    name: "Pepe",
    history: "You owe Pepe $10",
  },
  { id: 2, avatar: "", name: "Cuco", history: "Cuco owes you $5" },
  { id: 3, avatar: "", name: "Lola", history: "You and Lola are even" },
];

export default function App() {
  return <FriendList data={friends} />;
}

function FriendList({ data }) {
  return (
    <ul className="friends">
      {data.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
      <AddFriend />
      <Button>Add Friend</Button>
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li className="friendItem">
      <div className="info">
        <div className="avatar-image">
          {friend.avatar ? (
            <img src={friend.avatar} alt={friend.name}></img>
          ) : (
            <FontAwesomeIcon className="icon" icon={faUser} />
          )}
        </div>

        <div>
          <h3>{friend.name}</h3>
          <p>{friend.history}</p>
        </div>
      </div>
      <Button className="btn-end">Select</Button>
    </li>
  );
}

function AddFriend() {
  return (
    <form className="addForm">
      <div>
        <lable>👫 Friend name</lable>
        <input type="text"></input>
      </div>
      <div>
        <lable>🌄 Image URL</lable>
        <input type="text"></input>
      </div>
      <Button>Add</Button>
    </form>
  );
}

function Button({ children }) {
  return <button className="btn">{children}</button>;
}
