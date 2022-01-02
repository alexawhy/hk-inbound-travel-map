import "./App.css"
import React, { useState } from "react"
import { Typography, Stack, Box, AppBar } from "@mui/material"
import MapChart from "./components/MapChart/MapChart"
import { MapLegend } from "../src/components/MapChart/MapLegend"
import ReactTooltip from "react-tooltip"
import { GitHub } from "@mui/icons-material"

function App() {
  const [content, setContent] = useState("")
  return (
    <Box className="App">
      <header className="App-header">
        <Typography variant={"h1"} fontWeight={500} fontSize={"1.5rem"}>
          Hong Kong Inbound Travel Restrictions Map
        </Typography>
        <Typography fontSize={"1rem"}>
          Updated at 2021/12/03 02:45 GMT+8
        </Typography>
        <Typography fontSize={"1rem"} marginBottom={"1rem"}>
          All data based on the{" "}
          <a
            href="https://www.coronavirus.gov.hk/eng/inbound-travel.html"
            target="_blank"
          >
            official website
          </a>
          .
        </Typography>
        <MapLegend />
      </header>
      <div style={{ cursor: "pointer", marginTop: "1.5rem" }}>
        <ReactTooltip>{content}</ReactTooltip>
        <MapChart setTooltipContent={setContent} />
      </div>
      <Stack className="footer">
        <a href="https://github.com/alexawhy">
          <GitHub sx={{ color: "white" }} fontSize={"large"} />
        </a>
        <Typography color={"white"} fontSize={"small"}>
          By using this site, you agree that this service offered comes with no
          warranty whatsoever on the accuracy of information produced - this
          information is provided on a best efforts basis.
        </Typography>{" "}
        <Typography color={"white"} fontSize={"small"}>
          You agree to indemnify us of any and all liability resulting from the
          use of this website.
        </Typography>{" "}
      </Stack>
    </Box>
  )
}

export default App
