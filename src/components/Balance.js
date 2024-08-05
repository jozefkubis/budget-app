import { useBudged } from "../contexts/ContextBudged"
import Income from "./Income"
import Expense from "./Expense"

function Balance() {
  const { balance, income, expense } = useBudged()

  let totalBalance = balance + income - expense

  return (
    <div className="balance-container">
      <div
        className="balance"
        style={{
          backgroundColor:
            (totalBalance < 0 && "red") ||
            (totalBalance === 0 && "transparent") ||
            (totalBalance > 0 && "green"),
          color: totalBalance === 0 ? "black" : "white",
        }}
      >
        <h4>Balance💳</h4>
        <h1>${totalBalance}</h1>
      </div>
      <div className="income-expense">
        <Income />
        <Expense />
      </div>
    </div>
  )
}

export default Balance
