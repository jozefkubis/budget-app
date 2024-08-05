import { useBudged } from "../contexts/ContextBudged"

function Income() {
  const { income } = useBudged()

  return (
    <div className="income">
      <h4>Income🤑</h4>
      <h1>${income}</h1>
    </div>
  )
}

export default Income
