import "./App.css"
import React, { useState } from "react"
import { Typography, Stack, Box } from "@mui/material"
import MapChart from "./components/MapChart/MapChart"
import { MapLegend } from "../src/components/MapChart/MapLegend"
import ReactTooltip from "react-tooltip"
import { GitHub } from "@mui/icons-material"
import { FlightLinks, CountryBanLink } from "./components/link/Links"

function App() {
  const [tooltipContent, setTooltipContent] = useState("")
  const [flightBanLinks, setFlightBanLinks] = useState([])
  const [countryBanLink, setCountryBanLink] = useState("")
  return (
    <Box className="App">
      <header className="App-header">
        <Typography variant={"h1"} fontWeight={500} fontSize={"1.5rem"}>
          Hong Kong Inbound Travel Restrictions Map
        </Typography>
        <Typography fontSize={"1rem"}>
          Updated at 2022/03/14 11:00 GMT+8
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
      <div
        style={{
          cursor: "pointer",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <ReactTooltip>{tooltipContent}</ReactTooltip>
        <MapChart
          setTooltipContent={setTooltipContent}
          setFlightBanLinks={setFlightBanLinks}
          flightBanLinks={flightBanLinks}
          setCountryBanLink={setCountryBanLink}
        />
        <FlightLinks externalLinks={flightBanLinks} />
        <CountryBanLink externalLink={countryBanLink} />
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
