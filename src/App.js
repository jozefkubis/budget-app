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
  const [inputBalance, setInputBalance] = useState(0)

  //MARK: useEffect
  useEffect(() => {
    const loadLocalStorage = () => {
      const storedIncome = localStorage.getItem("income")
      const storedExpense = localStorage.getItem("expense")
      const storedCategories = localStorage.getItem("categories")

      // console.log(storedCategories)

      if (storedIncome) {
        setIncome(Number(JSON.parse(storedIncome)))
      }
      if (storedExpense) {
        setExpense(Number(JSON.parse(storedExpense)))
      }
      if (storedCategories) {
        setCategories(JSON.parse(storedCategories))
      }
    }

    console.log(categories)

    loadLocalStorage()
  }, [])

  //MARK: handleOnClick
  function handleOnClick() {
    const costNumber = Number(cost)
    if (!costNumber) {
      alert("Please enter a valid number")
      return
    }

    const newIncome = sortBy === "income" ? income + costNumber : income
    const newExpense = sortBy !== "income" ? expense + costNumber : expense
    const newCategories = {
      ...categories,
      [sortBy]: (categories[sortBy] || 0) + costNumber,
    }

    setIncome(newIncome)
    setExpense(newExpense)
    sortBy !== "income" && setCategories(newCategories)
    setCost("")

    localStorage.setItem("income", JSON.stringify(newIncome))
    localStorage.setItem("expense", JSON.stringify(newExpense))
    localStorage.setItem("categories", JSON.stringify(newCategories))
  }

  return (
    <div className="container" style={{ display: "flex" }}>
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
      <Ranges
        inputBalance={inputBalance}
        setInputBalance={setInputBalance}
        setIncome={setIncome}
        setExpense={setExpense}
        balance={balance}
        income={income}
        expense={expense}
        categories={categories}
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
          color: totalBalance === 0 ? "black" : "white",
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
            {/* {console.log(key, value)} */}
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

function Ranges({
  setIncome,
  setExpense,
  balance,
  income,
  expense,
  categories,
}) {
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
          onChange={(e) => setIncome(e.target.value)}
          style={{
            accentColor:
              (income > 0 && "green") || (income === 0 && "rgb(102, 99, 99)"),
          }}
        />
      </div>
      <div className="range-expanse">
        Expanse
        <input
          type="range"
          min={0}
          max={5000}
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
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
          {/* {console.log(key, value)} */}
          {key.charAt(0).toUpperCase() + key.slice(1)}
          <input
            type="range"
            min={0}
            max={2000}
            value={value}
            onChange={() => {}}
            style={{
              accentColor:
                (value >= 1000 && "red") || (value === 0 && "rgb(102, 99, 99)"),
            }}
          />
        </div>
      ))}
    </div>
  )
}

//MARK: Object.entries
// const objekt = {
//   meno: "Bob",
//   vek: 30,
//   adresa: "123 Main Street",
// }

// const poleDvojic = Object.entries(objekt).map(([key, value]) => {
//   return key + ": " + value alebo `${key}: ${value}`;
// })

// console.log(poleDvojic)
