import { useBudged } from "../contexts/ContextBudged"
import { MdAddCircleOutline } from "react-icons/md"

function Add() {
  const { cost, sortBy, dispatch, handleOnClick } = useBudged()

  //MARK: handleDelete
  function handleDelete() {
    dispatch({ type: "DELETE" })

    localStorage.clear()
  }

  return (
    <>
      <div className="addInput">
        <h3>Transaction</h3>
        <select
          value={sortBy}
          onChange={(e) =>
            dispatch({ type: "setSortBy", payload: e.target.value })
          }
        >
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
          onChange={(e) =>
            dispatch({ type: "setCost", payload: e.target.value })
          }
        />
        <div className="add">
          <h4>Add new transaction</h4>
          <span onClick={handleOnClick}>
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

export default Add
