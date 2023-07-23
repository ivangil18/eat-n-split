import "./App.css";

const friends = [
  { id: 1, avatar: "", name: "Pepe", history: "You owe Pepe $10" },
  { id: 2, avatar: "", name: "Cuco", history: "Cuco owes you $5" },
  { id: 3, avatar: "", name: "Lola", history: "You and Lola are even" },
];

export default function App() {
  return <FriendList data={friends} />;
}

function FriendList({ data }) {
  return (
    <div className="friends">
      {data.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
      <AddFriend />
      <Button>Add Friend</Button>
    </div>
  );
}

function Friend({ friend }) {
  return (
    <div>
      <img src={friend.avatar} alt={friend.name}></img>
      <div>
        <h3>{friend.name}</h3>
        <p>{friend.history}</p>
      </div>
      <Button>Select</Button>
    </div>
  );
}

function AddFriend() {
  return (
    <div>
      <form>
        <lable>👫 Friend name</lable>
        <input type="text"></input>
        <lable>🌄 Image URL</lable>
        <input type="text"></input>
        <Button>Add</Button>
      </form>
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}
