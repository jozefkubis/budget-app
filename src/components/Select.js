import { useBudged } from "../contexts/ContextBudged"

function Select() {
  const { sortBy, dispatch } = useBudged()

  return (
    <select
      value={sortBy}
      onChange={(e) => dispatch({ type: "setSortBy", payload: e.target.value })}
      className="select"
    >
      <option value="">Select category...</option>
      <option value="food">Food 🍔</option>
      <option value="coffee">Coffee ☕</option>
      <option value="rent">Rent 🏠</option>
      <option value="entertainment">Entertainment 🎭</option>
      <option value="taxes">Taxes 🏦</option>
      <option value="health">Health 💊</option>
      <option value="education">Education 📚</option>
      <option value="insurance">Insurance 💰</option>
      <option value="other">Other 🤷‍♂️</option>
      <option value="income">Income 🤑</option>
    </select>
  )
}

export default Select
