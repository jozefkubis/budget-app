import { useBudged } from "../contexts/ContextBudged"
import { MdAddCircleOutline } from "react-icons/md"
import Select from "./Select"

function Add() {
  const { cost, dispatch, handleOnClick } = useBudged()

  //MARK: handleDelete
  function handleDelete() {
    dispatch({ type: "DELETE" })
    localStorage.clear()
  }

  return (
    <>
      <div className="addInput">
        <h3>Transaction</h3>
        <Select />
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
