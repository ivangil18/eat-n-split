import Friend from "./Friend";

export default function FriendList({ data }) {
  return (
    <div>
      <ul className="friends-list">
        {data.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}
