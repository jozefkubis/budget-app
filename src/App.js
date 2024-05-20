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
      <h1>Expense Tracker</h1>
    </div>
  )
}

function Balnce() {
  return (
    <div className="balance">
      <Income />
      <Expense />
    </div>
  )
}

function Income() {
  return (
    <div className="income">
      <h2>Income</h2>
    </div>
  )
}

function Expense() {
  return (
    <div className="expense">
      <h2>Expense</h2>
    </div>
  )
}

function Today() {
  return (
    <div className="today">
      <h2>Today</h2>
    </div>
  )
}

function Monthly() {
  return (
    <div className="monthly">
      <h2>Monthly</h2>
    </div>
  )
}

function Add() {
  return (
    <div className="add">
      <h2>Add new transaction</h2>
    </div>
  )
}
