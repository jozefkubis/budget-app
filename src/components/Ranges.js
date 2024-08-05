import { useBudged } from "../contexts/ContextBudged"

function Ranges() {
  const { balance, income, expense, categories, dispatch } = useBudged()

  let totalBalance = balance + income - expense
  let balanceLimit = totalBalance / 3

  return (
    <div className="sliders">
      <div className="range-balance">
        Balance
        <input
          type="range"
          min={-5000}
          max={15000}
          value={totalBalance}
          onChange={() => {}}
          style={{
            accentColor:
              (totalBalance < 0 && "red") ||
              (totalBalance === 0 && "rgb(102, 99, 99)") ||
              (totalBalance > 0 && "green"),
          }}
        />
      </div>
      <div className="range-income">
        Income
        <input
          type="range"
          min={0}
          max={15000}
          value={income}
          onChange={(e) =>
            dispatch({ type: "setIncome", payload: Number(e.target.value) })
          }
          style={{
            accentColor:
              (income > 0 && "green") || (income === 0 && "rgb(102, 99, 99)"),
          }}
        />
      </div>
      <div className="range-expanse">
        Expense
        <input
          type="range"
          min={0}
          max={5000}
          value={expense}
          onChange={(e) =>
            dispatch({ type: "setExpense", payload: Number(e.target.value) })
          }
          style={{
            accentColor:
              (expense < 0 && "red") ||
              (expense === 0 && "rgb(102, 99, 99)") ||
              (expense >= balanceLimit && "red") ||
              (expense < balanceLimit && "green"),
          }}
        />
      </div>
      {Object.entries(categories).map(([key, value]) => (
        <div key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}
          <input
            type="range"
            min={0}
            max={1000}
            value={value}
            onChange={() => {}}
            style={{
              accentColor:
                (value >= 500 && "red") || (value === 0 && "rgb(102, 99, 99)"),
            }}
          />
        </div>
      ))}
    </div>
  )
}

export default Ranges
