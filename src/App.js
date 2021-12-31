import "./App.css"
import React, { useState } from "react"
import { Typography, Stack } from "@mui/material"
import MapChart from "./components/MapChart/MapChart"
import { MapLegend } from "../src/components/MapChart/MapLegend"
import ReactTooltip from "react-tooltip"
import { GitHub } from "@mui/icons-material"

function App() {
  const [content, setContent] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant={"h1"} fontWeight={500} fontSize={"3rem"}>
          Hong Kong Inbound Travel Restrictions Map
        </Typography>
        <Typography fontSize={"2rem"} marginBottom={"1rem"}>
          Updated at 2021/12/31 09:00 GMT+8
        </Typography>
        <MapLegend />
      </header>
      <div style={{ cursor: "pointer", marginTop: "1.5rem" }}>
        <ReactTooltip>{content}</ReactTooltip>
        <MapChart setTooltipContent={setContent} />
      </div>
      <Stack className="footer" >
        <a href="https://github.com/alexawhy">
          <GitHub sx={{ color: "white" }} fontSize={"large"} />
        </a>
        <Typography color={"white"}>
          By using this site, you agree that this service offered comes with no
          warranty whatsoever on the accuracy of information produced - this
          information is provided on a best efforts basis.
        </Typography>{" "}
        <Typography color={"white"}>
          You agree to indemnify us of any and all liability resulting from the
          use of this website.
        </Typography>{" "}
      </Stack>
    </div>
  )
}

export default App
