import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import { PatternLines } from "@vx/pattern"
import {
  aPlusCountriesList,
  toBeAPlusCountriesList,
} from "./data/a_plus_country_list"
import { aCountriesList, toBeACountriesList } from "./data/a_country_list"
import { countryToISOMapping } from "./data/country_to_ISO_mapping"

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"

const aPlusCountryCodes = aPlusCountriesList.map(
  (country) => countryToISOMapping[country]
)
const toBeAPlusCountryCodes = toBeAPlusCountriesList.map(
  (country) => countryToISOMapping[country]
)
const aCountryCodes = aCountriesList.map(
  (country) => countryToISOMapping[country]
)
const toBeACountryCodes = toBeACountriesList.map(
  (country) => countryToISOMapping[country]
)
const chinaTaiwanCountryCodes = ["CHN", "TWN"]
const cCountryCodes = []

const MapChart = () => {
  return (
    <ComposableMap projection="geoEqualEarth" width={1100}>
      <PatternLines // A to A+
        id="to-be-a-plus-lines"
        height={6}
        width={6}
        stroke="#EF476F"
        strokeWidth={1}
        background="#FFD166"
        orientation={["diagonal"]}
      />
      <PatternLines // B to A
        id="to-be-a-lines"
        height={6}
        width={6}
        stroke="#06D6A0"
        strokeWidth={1}
        background="#FFD166"
        orientation={["diagonal"]}
      />
      <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const isAPlusCountry =
              aPlusCountryCodes.indexOf(geo.properties.ISO_A3) !== -1
            const isToBeAPlusCountry =
              toBeAPlusCountryCodes.indexOf(geo.properties.ISO_A3) !== -1
            const isACountry =
              aCountryCodes.indexOf(geo.properties.ISO_A3) !== -1
            const isToBeACountryCodes =
              toBeACountryCodes.indexOf(geo.properties.ISO_A3) !== -1
            const isChinaOrTaiwan =
              chinaTaiwanCountryCodes.indexOf(geo.properties.ISO_A3) !== -1
            const isCCountry =
              cCountryCodes.indexOf(geo.properties.ISO_A3) !== -1
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={
                  isAPlusCountry
                    ? "#EF476F" // A+
                    : isToBeAPlusCountry
                    ? "url('#to-be-a-plus-lines')" // A to A+
                    : isACountry
                    ? "#FFD166" // A
                    : isToBeACountryCodes
                    ? "url('#to-be-a-lines')" // B to A
                    : isChinaOrTaiwan
                    ? "#073B4C" // China or Taiwan
                    : isCCountry
                    ? "#118AB2" // C
                    : "#06D6A0" // B
                }
                onClick={() => console.log(geo.properties.ISO_A3)}
              />
            )
          })
        }
      </Geographies>
    </ComposableMap>
  )
}

export default MapChart
