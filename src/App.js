import { useState, useEffect } from "react"
import { MdAddCircleOutline } from "react-icons/md"

//MARK: App
export default function App() {
  const [month, setMonth] = useState("january")
  const [balance, setBalance] = useState(0)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  const [food, setFood] = useState(0)
  const [coffee, setCoffee] = useState(0)
  const [rent, setRent] = useState(0)
  const [entertainment, setEntertainment] = useState(0)
  const [taxes, setTaxes] = useState(0)
  const [health, setHealth] = useState(0)
  const [insurance, setInsurance] = useState(0)
  const [education, setEducation] = useState(0)
  const [other, setOther] = useState(0)

  const [cost, setCost] = useState("")
  const [sortBy, setSortBy] = useState("")

  const [date, setDate] = useState("")

  //MARK: useEffect
  useEffect(() => {
    const RealTime = async () => {
      const url = "http://worldtimeapi.org/api/timezone/Europe/Bratislava"

      try {
        const response = await fetch(url)
        const data = await response.json()

        setDate(data["datetime"].slice(0, 16).replace("T", " "))
      } catch (error) {
        console.error("Error fetching real-time data:", error)
        return null
      }
    }
    const loadLocalStorage = () => {
      const incomeFromLocalStorage = localStorage.getItem("income")
      const expenseFromLocalStorage = localStorage.getItem("expense")
      const foodFromLocalStorage = localStorage.getItem("food")
      const coffeeFromLocalStorage = localStorage.getItem("coffee")
      const rentFromLocalStorage = localStorage.getItem("rent")
      const educationFromLocalStorage = localStorage.getItem("education")
      const entertainmentFromLocalStorage =
        localStorage.getItem("entertainment")
      const taxesFromLocalStorage = localStorage.getItem("taxes")
      const healthFromLocalStorage = localStorage.getItem("health")
      const insuranceFromLocalStorage = localStorage.getItem("insurance")
      const otherFromLocalStorage = localStorage.getItem("other")

      incomeFromLocalStorage && setIncome(Number(incomeFromLocalStorage))
      expenseFromLocalStorage && setExpense(Number(expenseFromLocalStorage))
      foodFromLocalStorage && setFood(Number(foodFromLocalStorage))
      coffeeFromLocalStorage && setCoffee(Number(coffeeFromLocalStorage))
      rentFromLocalStorage && setRent(Number(rentFromLocalStorage))
      educationFromLocalStorage &&
        setEducation(Number(educationFromLocalStorage))
      entertainmentFromLocalStorage &&
        setEntertainment(Number(entertainmentFromLocalStorage))
      taxesFromLocalStorage && setTaxes(Number(taxesFromLocalStorage))
      healthFromLocalStorage && setHealth(Number(healthFromLocalStorage))
      insuranceFromLocalStorage &&
        setInsurance(Number(insuranceFromLocalStorage))
      otherFromLocalStorage && setOther(Number(otherFromLocalStorage))
    }
    RealTime()
    loadLocalStorage()
  }, [])

  // useEffect(() => {
  //   const loadLocalStorage = () => {
  //     const incomeFromLocalStorage = localStorage.getItem("income")
  //     const expenseFromLocalStorage = localStorage.getItem("expense")
  //     const foodFromLocalStorage = localStorage.getItem("food")
  //     const coffeeFromLocalStorage = localStorage.getItem("coffee")
  //     const rentFromLocalStorage = localStorage.getItem("rent")
  //     const educationFromLocalStorage = localStorage.getItem("education")
  //     const entertainmentFromLocalStorage =
  //       localStorage.getItem("entertainment")
  //     const taxesFromLocalStorage = localStorage.getItem("taxes")
  //     const healthFromLocalStorage = localStorage.getItem("health")
  //     const insuranceFromLocalStorage = localStorage.getItem("insurance")
  //     const otherFromLocalStorage = localStorage.getItem("other")

  //     incomeFromLocalStorage && setIncome(Number(incomeFromLocalStorage))
  //     expenseFromLocalStorage && setExpense(Number(expenseFromLocalStorage))
  //     foodFromLocalStorage && setFood(Number(foodFromLocalStorage))
  //     coffeeFromLocalStorage && setCoffee(Number(coffeeFromLocalStorage))
  //     rentFromLocalStorage && setRent(Number(rentFromLocalStorage))
  //     educationFromLocalStorage &&
  //       setEducation(Number(educationFromLocalStorage))
  //     entertainmentFromLocalStorage &&
  //       setEntertainment(Number(entertainmentFromLocalStorage))
  //     taxesFromLocalStorage && setTaxes(Number(taxesFromLocalStorage))
  //     healthFromLocalStorage && setHealth(Number(healthFromLocalStorage))
  //     insuranceFromLocalStorage &&
  //       setInsurance(Number(insuranceFromLocalStorage))
  //     otherFromLocalStorage && setOther(Number(otherFromLocalStorage))
  //   }
  //   loadLocalStorage()
  // }, [])

  //MARK: Functions

  //MARK: handleOnClick
  function handleOnClick() {
    let newIncome = income
    let newExpense = expense
    let newCoffee = coffee
    let newFood = food
    let newRent = rent
    let newEducation = education
    let newEntertainment = entertainment
    let newTaxes = taxes
    let newHealth = health
    let newInsurance = insurance
    let newOther = other

    if (sortBy === "income") {
      newIncome += Number(cost)
      setIncome(newIncome)
    } else {
      newExpense += Number(cost)
      setExpense(newExpense)
    }

    if (sortBy === "coffee") {
      newCoffee += Number(cost)
      setCoffee(newCoffee)
    } else if (sortBy === "food") {
      newFood += Number(cost)
      setFood(newFood)
    } else if (sortBy === "rent") {
      newRent += Number(cost)
      setRent(newRent)
    } else if (sortBy === "education") {
      newEducation += Number(cost)
      setEducation(newEducation)
    } else if (sortBy === "entertainment") {
      newEntertainment += Number(cost)
      setEntertainment(newEntertainment)
    } else if (sortBy === "taxes") {
      newTaxes += Number(cost)
      setTaxes(newTaxes)
    } else if (sortBy === "other") {
      newOther += Number(cost)
      setOther(newOther)
    } else if (sortBy === "health") {
      newHealth += Number(cost)
      setHealth(newHealth)
    } else if (sortBy === "insurance") {
      newInsurance += Number(cost)
      setInsurance(newInsurance)
    }
    sortBy === "" && alert("Please select a category")

    // sortBy === "income"
    //   ? setIncome((prev) => prev + Number(cost))
    //   : setExpense((prev) => prev + Number(cost))
    // sortBy === "coffee" && setCoffee((prev) => prev + Number(cost))
    // sortBy === "food" && setFood((prev) => prev + Number(cost))
    // sortBy === "rent" && setRent((prev) => prev + Number(cost))
    // sortBy === "education" && setEducation((prev) => prev + Number(cost))
    // sortBy === "entertainment" &&
    //   setEntertainment((prev) => prev + Number(cost))
    // sortBy === "taxes" && setTaxes((prev) => prev + Number(cost))
    // sortBy === "other" && setOther((prev) => prev + Number(cost))
    // sortBy === "health" && setHealth((prev) => prev + Number(cost))
    // sortBy === "insurance" && setInsurance((prev) => prev + Number(cost))

    setCost("")

    localStorage.setItem("income", JSON.stringify(newIncome))
    localStorage.setItem("expense", JSON.stringify(newExpense))
    localStorage.setItem("food", JSON.stringify(newFood))
    localStorage.setItem("coffee", JSON.stringify(newCoffee))
    localStorage.setItem("rent", JSON.stringify(newRent))
    localStorage.setItem("entertainment", JSON.stringify(newEntertainment))
    localStorage.setItem("education", JSON.stringify(newEducation))
    localStorage.setItem("taxes", JSON.stringify(newTaxes))
    localStorage.setItem("other", JSON.stringify(newOther))
    localStorage.setItem("health", JSON.stringify(newHealth))
    localStorage.setItem("insurance", JSON.stringify(newInsurance))
  }

  return (
    <div className="app">
      <Header month={month} setMonth={setMonth} date={date} />
      <Balance balance={balance} income={income} expense={expense} />
      <Today
        food={food}
        coffee={coffee}
        rent={rent}
        entertainment={entertainment}
        health={health}
        insurance={insurance}
        other={other}
        taxes={taxes}
        education={education}
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
        setFood={setFood}
        setCoffee={setCoffee}
        setRent={setRent}
        setEntertainment={setEntertainment}
        setEducation={setEducation}
        setTaxes={setTaxes}
        setOther={setOther}
        setHealth={setHealth}
        setInsurance={setInsurance}
      />
    </div>
  )
}

//MARK: Components

//MARK: Header
function Header({ month, setMonth, date }) {
  return (
    <div
      className="header"
      value={month}
      onChange={(e) => setMonth(e.target.value)}
    >
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
      <h4>{date}</h4>
    </div>
  )
}

//MARK: RealTime

//MARK: Balnce
function Balance({ balance, income, expense }) {
  let totalBalance = balance + income - expense

  if (totalBalance < 0) {
    return (
      <div className="balance-container">
        <div style={{ backgroundColor: "red" }} className="balance">
          <h4 style={{ color: "white" }}>Balance💳</h4>
          <h1 style={{ color: "white" }}>${totalBalance}</h1>
        </div>
        <div className="income-expense">
          <Income income={income} />
          <Expense expense={expense} />
        </div>
      </div>
    )
  }

  return (
    <div className="balance-container">
      <div className="balance">
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
function Today({
  food,
  coffee,
  rent,
  entertainment,
  education,
  taxes,
  other,
  health,
  insurance,
  numTime,
}) {
  return (
    <div className="today">
      <div className="today-total">
        <h4>Today</h4>{" "}
        <span>
          - $
          {food +
            coffee +
            rent +
            entertainment +
            health +
            education +
            taxes +
            insurance +
            other}
        </span>
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
        <div>
          <p>🎭Entertainment</p> <span>- ${entertainment}</span>
        </div>
        <div>
          <p>🏦Taxes</p> <span>- ${taxes}</span>
        </div>
        <div>
          <p>💊Health</p> <span>- ${health}</span>
        </div>
        <div>
          <p>📚Education</p> <span>- ${education}</span>
        </div>
        <div>
          <p>💰Insurance</p> <span>- ${insurance}</span>
        </div>
        <div>
          <p>🤷‍♂️Other</p> <span>- ${other}</span>
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
  setFood,
  setCoffee,
  setRent,
  setEntertainment,
  setTaxes,
  setHealth,
  setEducation,
  setInsurance,
  setOther,
}) {
  //MARK: handleDelete
  function handleDelete() {
    setIncome(0)
    setExpense(0)
    setBalance(0)
    setFood(0)
    setCoffee(0)
    setRent(0)
    setEntertainment(0)
    setTaxes(0)
    setHealth(0)
    setEducation(0)
    setInsurance(0)
    setOther(0)
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
