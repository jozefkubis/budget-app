import { useBudged } from "../contexts/ContextBudged"
import { IoStatsChart } from "react-icons/io5"

function StatsChart() {
  const { handleToggle } = useBudged()

  return (
    <div className="toggle" onClick={handleToggle}>
      Check range chart ➡ ➡ ➡ ➡ <IoStatsChart />
    </div>
  )
}

export default StatsChart
