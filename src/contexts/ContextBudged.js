import { createContext, useContext, useReducer, useEffect } from "react"
// import Error from "../components/Error"

const BudgedContext = createContext()

const initialState = {
  balance: 0,
  income: 0,
  expense: 0,
  categories: {
    food: 0,
    coffee: 0,
    rent: 0,
    entertainment: 0,
    taxes: 0,
    health: 0,
    insurance: 0,
    education: 0,
    other: 0,
  },
  cost: "",
  sortBy: "",
  inputBalance: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "setBalance":
      return { ...state, balance: action.payload }
    case "setIncome":
      return { ...state, income: action.payload }
    case "setExpense":
      return { ...state, expense: action.payload }
    case "setCategories":
      return {
        ...state,
        categories: { ...state.categories, ...action.payload },
      }
    case "setCost":
      return { ...state, cost: action.payload }
    case "setSortBy":
      return { ...state, sortBy: action.payload }
    case "setInputBalance":
      return { ...state, inputBalance: action.payload }
    case "DELETE":
      return initialState
    default:
      throw new Error("Invalid action type")
  }
}

function BudgedProvider({ children }) {
  const [
    { balance, income, expense, categories, cost, sortBy, inputBalance },
    dispatch,
  ] = useReducer(reducer, initialState)

  //MARK: useEffect
  useEffect(() => {
    const loadLocalStorage = () => {
      const storedIncome = localStorage.getItem("income")
      const storedExpense = localStorage.getItem("expense")
      const storedCategories = localStorage.getItem("categories")

      if (storedIncome) {
        dispatch({
          type: "setIncome",
          payload: Number(JSON.parse(storedIncome)),
        })
      }
      if (storedExpense) {
        dispatch({
          type: "setExpense",
          payload: Number(JSON.parse(storedExpense)),
        })
      }
      if (storedCategories) {
        dispatch({
          type: "setCategories",
          payload: JSON.parse(storedCategories),
        })
      }
    }

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

    dispatch({ type: "setIncome", payload: newIncome })
    dispatch({ type: "setExpense", payload: newExpense })
    dispatch({ type: "setCost", payload: "" })
    sortBy !== "income" &&
      dispatch({ type: "setCategories", payload: newCategories })

    localStorage.setItem("income", JSON.stringify(newIncome))
    localStorage.setItem("expense", JSON.stringify(newExpense))
    localStorage.setItem("categories", JSON.stringify(newCategories))
  }

  //MARK: handleToggle
  function handleToggle() {
    document.querySelector(".sliders").classList.toggle("showHide")
  }

  return (
    <BudgedContext.Provider
      value={{
        balance,
        income,
        expense,
        categories,
        cost,
        sortBy,
        inputBalance,
        handleOnClick,
        handleToggle,
        dispatch,
      }}
    >
      {children}
    </BudgedContext.Provider>
  )
}

function useBudged() {
  const context = useContext(BudgedContext)
  if (context === undefined) {
    throw new Error("useBudged must be used within a BudgedProvider")
  }
  return context
}

export { useBudged, BudgedProvider }
