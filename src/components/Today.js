import { useBudged } from "../contexts/ContextBudged"

function Today() {
  const { categories } = useBudged()

  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const day = dayOfWeek[new Date().getDay()]

  const total = Object.values(categories).reduce((acc, value) => acc + value, 0)

  const categoryEmojis = {
    food: "🍔",
    coffee: "☕",
    rent: "🏠",
    entertainment: "🎭",
    taxes: "🏦",
    health: "💊",
    insurance: "💰",
    education: "📚",
    other: "🤷‍♂️",
    income: "🤑",
  }

  return (
    <div className="today">
      <div className="today-total">
        <h4>{day}</h4>
        <span style={{ fontWeight: "bold" }}>- ${total}</span>
      </div>
      <div className="transactions-today">
        {Object.entries(categories).map(([key, value]) => (
          <div key={key}>
            <p>
              {categoryEmojis[key]} {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
            <span>- ${value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Today
