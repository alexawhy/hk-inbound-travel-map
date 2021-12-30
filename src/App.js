import "./App.css"
import { Typography } from "@mui/material"
import MapChart from "./components/MapChart/MapChart"
import { MapLegend } from "../src/components/MapChart/MapLegend"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant={"h1"} fontWeight={500} fontSize={"3rem"}>
          Hong Kong Inbound Travel Restrictions Map
        </Typography>
        <Typography fontSize={"2rem"}>
          Updated at 2021/12/31 06:00 GMT+8
        </Typography>
        <MapLegend />
      </header>
      <MapChart />
    </div>
  )
}

export default App
