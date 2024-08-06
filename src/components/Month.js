import { useBudged } from "../contexts/ContextBudged"

function Month() {
  const { categories } = useBudged()

  const monthOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const month = monthOfYear[new Date().getMonth()]

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
    <div className="month">
      <div className="month-total">
        <h4>{month}</h4>
        <span style={{ fontWeight: "bold" }}>- ${total}</span>
      </div>
      <div className="transactions-month">
        {Object.keys(categories).map((key) => (
          <div key={key}>
            <p>
              {categoryEmojis[key]} {key.charAt(0).toUpperCase() + key.slice(1)}
            </p>
            <span>- ${categories[key]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Month
