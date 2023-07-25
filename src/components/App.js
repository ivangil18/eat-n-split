import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Friends from "./Friends/Friends";

export default function App() {
  return (
    <div className="container">
      <Friends />
      <SplitBillCalculator />
    </div>
  );
}

function SplitBillCalculator() {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  // const [friendExpense, setFriendExpense] = useState("");
  const [payer, setPayer] = useState("You");

  function handleSplitBill(e) {
    e.preventDefault();
  }

  const friendExpense = bill - yourExpense;

  return (
    <div>
      <form className="calculator" onSubmit={handleSplitBill}>
        <h2>Split a bill with friend</h2>
        <div>
          <label>💰 Bill value</label>
          <input
            type="text"
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
          ></input>
        </div>
        <div>
          <label>🧍 Your expense</label>
          <input
            type="text"
            value={yourExpense}
            onChange={(e) => setYourExpense(Number(e.target.value))}
          ></input>
        </div>
        <div>
          <label>👫 Friend's expense</label>
          <input
            style={{ backgroundColor: " #ebe5d8" }}
            type="text"
            value={friendExpense}
            readOnly
            // onChange={(e) => setFriendExpense(e.target.value)}
          ></input>
        </div>
        <div>
          <label>🤑 Who is paying the bill?</label>
          <select value={payer} onChange={(e) => setPayer(e.target.value)}>
            <option>You</option>
            <option>Friend</option>
            <option>Both</option>
          </select>
        </div>
        <Button>Split bill</Button>
      </form>
    </div>
  );
}

// function SplitBillCalculator() {
//   const [bill, setBill] = useState("");
//   const [yourExpense, setYourExpense] = useState("");
//   const [friendExpense, setFriendExpense] = useState("");
//   const [payer, setPayer] = useState("");
//   return (
//     <div>
//       <form className="calculator">
//         <h2>Split a bill with friend</h2>
//         <Expense>💰 Bill value</Expense>
//         <Expense>🧍 Your expense</Expense>
//         <Expense>👫 Friend's expense</Expense>
//         <PayingBill>🤑 Who is paying the bill?</PayingBill>
//         <Button>Split bill</Button>
//       </form>
//     </div>
//   );
// }

// function Expense({ children }) {
//   return (
//     <div className="expense">
//       <label>{children}</label>
//       <input type="text"></input>
//     </div>
//   );
// }

// function PayingBill({ children }) {
//   return (
//     <div>
//       <label>{children}</label>
//       <select>
//         <option>You</option>
//         <option>Friend</option>
//       </select>
//     </div>
//   );
// }
