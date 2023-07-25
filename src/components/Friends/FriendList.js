import Friend from "./Friend";

export default function FriendList({
  friends,
  friendSelected,
  setFriendSelected,
  isCalculatorOpen,
  setIsCalculatorOpen,
}) {
  return (
    <div>
      <ul className="friends-list">
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            friendSelected={friendSelected}
            setFriendSelected={setFriendSelected}
            isCalculatorOpen={isCalculatorOpen}
            setIsCalculatorOpen={setIsCalculatorOpen}
          />
        ))}
      </ul>
    </div>
  );
}
