import { useState } from "react"
import { MdAddCircleOutline } from "react-icons/md"

//MARK: App
export default function App() {
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  const [today, setToday] = useState(0)
  const [monthly, setMonthly] = useState(0)
  const [food, setFood] = useState(0)
  const [coffee, setCoffee] = useState(0)
  const [rent, setRent] = useState(0)

  const [cost, setCost] = useState("")
  const [sortBy, setSortBy] = useState("income")

  //MARK: Functions

  //MARK: handleOnClick
  function handleOnClick() {
    if (sortBy === "income") {
      setIncome((prev) => prev + Number(cost))
    } else {
      setExpense((prev) => prev + Number(cost))
      setToday((prev) => prev + Number(cost))
      setMonthly((prev) => prev + Number(cost))
    }

    sortBy === "coffee" && setCoffee((prev) => prev + Number(cost))
    sortBy === "food" && setFood((prev) => prev + Number(cost))
    sortBy === "rent" && setRent((prev) => prev + Number(cost))
    setCost("")
  }

  return (
    <div className="app">
      <Header />
      <Balnce balance={balance} income={income} expense={expense} />
      <Today
        today={today}
        monthly={monthly}
        food={food}
        coffee={coffee}
        rent={rent}
      />
      <Monthly
        today={today}
        monthly={monthly}
        food={food}
        coffee={coffee}
        rent={rent}
      />
      <Add
        cost={cost}
        setCost={setCost}
        onClick={handleOnClick}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setIncome={setIncome}
        setExpense={setExpense}
        setBalance={setBalance}
      />
    </div>
  )
}

//MARK: Components

//MARK: Header
function Header() {
  return (
    <div className="header">
      <select>
        <option value="january">JANUARY</option>
        <option value="february">FEBRUARY</option>
        <option value="march">MARCH</option>
        <option value="april">APRIL</option>
        <option value="may">MAY</option>
        <option value="june">JUNE</option>
        <option value="july">JULY</option>
        <option value="august">AUGUST</option>
        <option value="september">SEPTEMBER</option>
        <option value="october">OCTOBER</option>
        <option value="november">NOVEMBER</option>
        <option value="december">DECEMBER</option>
      </select>
    </div>
  )
}

//MARK: Balnce
function Balnce({ balance, income, expense }) {
  return (
    <div className="balance-container">
      <div className="balance">
        <h4>Balance💳</h4>
        <h1>${balance + income - expense}</h1>
      </div>

      <div className="income-expense">
        <Income income={income} />
        <Expense expense={expense} />
      </div>
    </div>
  )
}

//MARK: Income
function Income({ income }) {
  return (
    <div className="income">
      <h4>Income🤑</h4>
      <h1>${income}</h1>
    </div>
  )
}

//MARK: Expense
function Expense({ expense }) {
  return (
    <div className="expense">
      <h4>Expense💸</h4>
      <h1>${expense}</h1>
    </div>
  )
}

//MARK: Today
function Today({ today, monthly, food, coffee, rent }) {
  return (
    <div className="today">
      <div className="today-total">
        <h4>Today</h4> <span>- ${today}</span>
      </div>
      <div className="transactions-today">
        <div>
          <p>🍔Food</p> <span>- ${food}</span>
        </div>
        <div>
          <p>☕Coffee</p> <span>- ${coffee}</span>
        </div>
        <div>
          <p>🏠Rent</p> <span>- ${rent}</span>
        </div>
      </div>
    </div>
  )
}

//MARK: Monthly
function Monthly({ monthly, food, coffee, rent }) {
  return (
    <div className="monthly">
      <div className="monthly-total">
        <h4>Monthly </h4> <span>- ${monthly}</span>
      </div>
      <div className="transactions-monthly">
        <div>
          <p>🍔Food</p> <span>- ${food}</span>
        </div>
        <div>
          <p>☕Coffee</p> <span>- ${coffee}</span>
        </div>
        <div>
          <p>🏠Rent</p> <span>- ${rent}</span>
        </div>
      </div>
    </div>
  )
}

//MARK: Add
function Add({
  cost,
  setCost,
  onClick,
  sortBy,
  setSortBy,
  setIncome,
  setExpense,
  setBalance,
}) {
  // const [sortBy, setSortBy] = useState("ChooseOne")

  function handleDelete() {
    setIncome(0)
    setExpense(0)
    setBalance(0)
  }

  return (
    <>
      <div className="addInput">
        <h3>Transaction</h3>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="food">Food 🍔</option>
          <option value="coffee">Coffee ☕</option>
          <option value="rent">Rent 🏠</option>
          <option value="income">Income 🤑</option>
        </select>
        <input
          type="number"
          placeholder="0"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
        />

        <div className="add">
          <h4>Add new transaction </h4>
          <span onClick={() => onClick()}>
            <MdAddCircleOutline />
          </span>
        </div>
        <button className="delete" onClick={() => handleDelete()}>
          Delete
        </button>
      </div>
    </>
  )
}
