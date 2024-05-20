import { useState } from "react"
import { MdAddCircleOutline } from "react-icons/md"

export default function App() {
  return (
    <div className="app">
      <Header />
      <Balnce />
      <Today />
      <Monthly />
      <Add />
    </div>
  )
}

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

function Balnce() {
  return (
    <div className="balance-container">
      <div className="balance">
        <h4>Balance💳</h4>
        <h1>$0.00</h1>
      </div>

      <div className="income-expense">
        <Income />
        <Expense />
      </div>
    </div>
  )
}

function Income() {
  return (
    <div className="income">
      <h4>Income🤑</h4>
      <h1>$0.00</h1>
    </div>
  )
}

function Expense() {
  return (
    <div className="expense">
      <h4>Expense💸</h4>
      <h1>$0.00</h1>
    </div>
  )
}

function Today() {
  return (
    <div className="today">
      <div className="today-total">
        <h4>Today</h4> <span>- $0.00</span>
      </div>
      <div className="transactions-today">
        <div>
          <p>🍔Food</p> <span>- $0.00</span>
        </div>
        <div>
          <p>☕Coffee</p> <span>- $0.00</span>
        </div>
        <div>
          <p>🏠Rent</p> <span>- $0.00</span>
        </div>
      </div>
    </div>
  )
}

function Monthly() {
  return (
    <div className="monthly">
      <div className="monthly-total">
        <h4>Monthly </h4> <span>- $0.00</span>
      </div>
      <div className="transactions-monthly">
        <div>
          <p>🍔Food</p> <span>- $0.00</span>
        </div>
        <div>
          <p>☕Coffee</p> <span>- $0.00</span>
        </div>
        <div>
          <p>🏠Rent</p> <span>- $0.00</span>
        </div>
      </div>
    </div>
  )
}

function Add() {
  return (
    <div className="add">
      <h4>Add new transaction </h4>
      <span>
        <MdAddCircleOutline />
      </span>
    </div>
  )
}
