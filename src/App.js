import { useState } from "react"

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
        <h4>Balance</h4>
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
      <h4>Income</h4>
      <h1>$0.00</h1>
    </div>
  )
}

function Expense() {
  return (
    <div className="expense">
      <h4>Expense</h4>
      <h1>$0.00</h1>
    </div>
  )
}

function Today() {
  return (
    <div className="today">
      <h2 className="today-total">
        Today <span>- $0.00</span>
      </h2>
      <div className="transactions-today">
        <p>
          Food <span>- $0.00</span>
        </p>
        <p>
          Coffee <span>- $0.00</span>
        </p>
        <p>
          Food <span>- $0.00</span>
        </p>
      </div>
    </div>
  )
}

function Monthly() {
  return (
    <div className="monthly">
      <h2 className="monthly-total">
        Monthly <span>- $0.00</span>
      </h2>
      <div className="transactions-monthly">
        <p>
          Food <span>- $0.00</span>
        </p>
        <p>
          Coffee <span>- $0.00</span>
        </p>
        <p>
          Food <span>- $0.00</span>
        </p>
      </div>
    </div>
  )
}

function Add() {
  return (
    <div className="add">
      <h2>
        Add new transaction <span>+</span>
      </h2>
    </div>
  )
}
