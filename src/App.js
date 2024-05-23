import { useState, useEffect } from "react"
import { MdAddCircleOutline } from "react-icons/md"

//MARK: App
export default function App() {
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)
  const [categories, setCategories] = useState({
    food: 0,
    coffee: 0,
    rent: 0,
    entertainment: 0,
    taxes: 0,
    health: 0,
    insurance: 0,
    education: 0,
    other: 0,
  })

  const [cost, setCost] = useState("")
  const [sortBy, setSortBy] = useState("")
  // const [date, setDate] = useState("")

  //MARK: useEffect
  useEffect(() => {
    const loadLocalStorage = () => {
      const storedIncome = localStorage.getItem("income")
      const storedExpense = localStorage.getItem("expense")
      const storedCategories = JSON.parse(localStorage.getItem("categories"))

      storedIncome && setIncome(Number(storedIncome))
      storedExpense && setExpense(Number(storedExpense))
      storedCategories && setCategories(storedCategories)
    }
    loadLocalStorage()
  }, [])

  //MARK: handleOnClick
  function handleOnClick() {
    let newIncome = income
    let newExpense = expense
    const newCategories = { ...categories }

    if (sortBy === "income") {
      newIncome += Number(cost)
      setIncome(newIncome)
    } else {
      newExpense += Number(cost)
      setExpense(newExpense)
    }

    sortBy === "" && alert("Please select a category")

    setCost("")

    localStorage.setItem("income", JSON.stringify(newIncome))
    localStorage.setItem("expense", JSON.stringify(newExpense))
    localStorage.setItem("categories", JSON.stringify(newCategories))
  }

  return (
    <div className="app">
      <Balance balance={balance} income={income} expense={expense} />
      <Today categories={categories} />
      <Add
        cost={cost}
        setCost={setCost}
        onClick={handleOnClick}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setIncome={setIncome}
        setExpense={setExpense}
        setBalance={setBalance}
        setCategories={setCategories}
      />
    </div>
  )
}

//MARK: Components

//MARK: Balance
function Balance({ balance, income, expense }) {
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
          color: totalBalance < 0 ? "white" : "black",
        }}
      >
        <h4>Balance💳</h4>
        <h1>${totalBalance}</h1>
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
      <h1>-${expense}</h1>
    </div>
  )
}

//MARK: Today
function Today({ categories }) {
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

  return (
    <div className="today">
      <div className="today-total">
        <h4>{day}</h4>
        <span>- ${total}</span>
      </div>
      <div className="transactions-today">
        {Object.entries(categories).map(([key, value]) => (
          <div key={key}>
            <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
            <span>- ${value}</span>
          </div>
        ))}
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
  setCategories,
}) {
  //MARK: handleDelete
  function handleDelete() {
    setIncome(0)
    setExpense(0)
    setBalance(0)
    setCategories({
      food: 0,
      coffee: 0,
      rent: 0,
      entertainment: 0,
      taxes: 0,
      health: 0,
      insurance: 0,
      education: 0,
      other: 0,
    })
    setSortBy("")

    localStorage.clear()
  }

  return (
    <>
      <div className="addInput">
        <h3>Transaction</h3>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value=""></option>
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
        <input
          type="number"
          placeholder="0"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
        />
        <div className="add">
          <h4>Add new transaction</h4>
          <span onClick={onClick}>
            <MdAddCircleOutline />
          </span>
        </div>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  )
}
