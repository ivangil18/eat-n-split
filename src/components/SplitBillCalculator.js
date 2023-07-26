import { useState } from "react";
import Button from "./Button";

export default function SplitBillCalculator({
  friendSelected,
  onUpdateDebt,
  onToggle,
}) {
  const [bill, setBill] = useState("");
  const [yourExpense, setYourExpense] = useState("");
  const [payer, setPayer] = useState(1);

  //Automatic Calculated (Derived State)
  const friendExpense = bill - yourExpense;

  let debt;
  function handleSplitBill(e) {
    console.log(payer);
    e.preventDefault();

    payer < 0 && (debt = friendSelected.debt - yourExpense);
    payer === 1 && (debt = friendSelected.debt + friendExpense);

    onUpdateDebt(friendSelected, debt);
    resetCalculator();
    onToggle(false);
  }

  function resetCalculator() {
    setBill("");
    setYourExpense("");
    setPayer(1);
  }

  return (
    <div>
      <form className="calculator" onSubmit={() => handleSplitBill}>
        <h2>Split a bill with {friendSelected.friendName}</h2>
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
          ></input>
        </div>
        <div>
          <label>🤑 Who is paying the bill?</label>
          <select value={payer} onChange={(e) => setPayer(e.target.value)}>
            <option value={1}>You</option>
            <option value={-1}>Friend</option>
          </select>
        </div>
        <Button onClick={handleSplitBill}>Split bill</Button>
      </form>
    </div>
  );
}
