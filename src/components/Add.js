import { useBudged } from "../contexts/ContextBudged"
import Select from "./Select"

function Add() {
  const { cost, dispatch, handleOnClick, handleKeyDown, handleDelete } =
    useBudged()

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
          onKeyDown={handleKeyDown}
        />
        <button className="add" onClick={handleOnClick}>
          Add ➕
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete ➖
        </button>
      </div>
    </>
  )
}

export default Add
