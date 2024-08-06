// import { MdAddCircleOutline } from "react-icons/md"
// import { IoStatsChart } from "react-icons/io5"
import { BudgedProvider } from "./contexts/ContextBudged"
import Balance from "./components/Balance"
import Add from "./components/Add"
import Ranges from "./components/Ranges"
import Month from "./components/Month"
import StatsChart from "./components/IoStatsChart"

//MARK: App.................................................................................................
export default function App() {
  return (
    <div className="container" style={{ display: "flex" }}>
      <BudgedProvider>
        <div className="app">
          <Balance />
          <Month />
          <Add />
          <StatsChart />
        </div>
        <Ranges />
      </BudgedProvider>
    </div>
  )
}

// const objekt = {
//   meno: "Bob",
//   vek: 30,
//   adresa: "123 Main Street",
// }

// const poleDvojic = Object.entries(objekt).map(([key, value]) => {
//   return key + ": " + value alebo `${key}: ${value}`;
// })

// console.log(poleDvojic)
