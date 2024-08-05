import { useBudged } from "../contexts/ContextBudged"

function Expense() {
  const { expense } = useBudged()

  return (
    <div className="expense">
      <h4>Expense💸</h4>
      <h1>-${expense}</h1>
    </div>
  )
}

export default Expense
