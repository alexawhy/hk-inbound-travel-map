import React, { memo } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps"
import {
  aPlusCountriesList,
  bannedCountriesList,
  toBeAPlusCountriesList,
} from "./data/a_plus_country_list"
import { aCountriesList, toBeACountriesList } from "./data/a_country_list"
import { countryToISOMapping } from "./data/country_to_ISO_mapping"
import {
  AToAPlusPatternLines,
  BannedFlight,
  BToAPatternLines,
} from "./MapLegend"
import { bannedFlights } from "./data/banned_flights"

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-50m.json"

const bannedCountryCodes = bannedCountriesList.map(
  (country) => countryToISOMapping[country]
)

const aPlusCountryCodes = aPlusCountriesList.map(
  (country) => countryToISOMapping[country]
)
const toBeAPlusCountryCodesAndDates = toBeAPlusCountriesList.reduce(
  (acc, { countryName, date }) => {
    const iso = countryToISOMapping[countryName]
    return {
      ...acc,
      [iso]: { country: iso, date },
    }
  },
  {}
)
const aCountryCodes = aCountriesList.map(
  (country) => countryToISOMapping[country]
)
const toBeACountryCodesAndDates = toBeACountriesList.reduce(
  (acc, { countryName, date }) => {
    const iso = countryToISOMapping[countryName]
    return {
      ...acc,
      [iso]: { country: iso, date },
    }
  },
  {}
)
const chinaTaiwanCountryCodes = ["CHN", "TWN"]
const cCountryCodes = []

const MapChart = ({ setTooltipContent, setExternalLinks, externalLinks }) => {
  return (
    <ComposableMap data-tip="" projection="geoEqualEarth" width={1000}>
      <ZoomableGroup>
        <AToAPlusPatternLines // A to A+
          id="to-be-a-plus-lines"
          height={6}
          width={6}
          stroke="#000000"
          strokeWidth={2}
          background="#FFD166"
          orientation={["diagonal"]}
        />
        <BToAPatternLines // B to A
          id="to-be-a-lines"
          height={6}
          width={6}
          stroke="#06D6A0"
          strokeWidth={10}
          background="#FFD166"
          orientation={["diagonal"]}
        />
        <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const iso = geo.properties.ISO_A3
              const isBannedCountry = bannedCountryCodes.indexOf(iso) !== -1
              const isAPlusCountry = aPlusCountryCodes.indexOf(iso) !== -1
              const isToBeAPlusCountry =
                toBeAPlusCountryCodesAndDates[iso] !== undefined
              const isACountry = aCountryCodes.indexOf(iso) !== -1
              const isToBeACountry =
                toBeACountryCodesAndDates[iso] !== undefined
              const isChinaOrTaiwan =
                chinaTaiwanCountryCodes.indexOf(iso) !== -1
              const isCCountry = cCountryCodes.indexOf(iso) !== -1

              const countryClass = isBannedCountry
                ? "Flights and passengers banned 2022/01/08-2022/02/04"
                : isAPlusCountry
                ? "A+"
                : isToBeAPlusCountry
                ? "A to be A+"
                : isACountry
                ? "A"
                : isToBeACountry
                ? "B to be A"
                : isChinaOrTaiwan
                ? "China and Taiwan"
                : isCCountry
                ? "C"
                : "B"
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    isBannedCountry ? "url('#banned-lines')":
                    isAPlusCountry
                      ? "#EF476F" // A+
                      : isToBeAPlusCountry
                      ? "url('#to-be-a-plus-lines')" // A to be A+
                      : isACountry
                      ? "#FFD166" // A
                      : isToBeACountry
                      ? "url('#to-be-a-lines')" // B to be A
                      : isChinaOrTaiwan
                      ? "#073B4C" // China or Taiwan
                      : isCCountry
                      ? "#118AB2" // C
                      : "#06D6A0" // B
                  }
                  onMouseEnter={() => {
                    const { NAME } = geo.properties
                    setTooltipContent(
                      `${NAME} - ${countryClass}${
                        isToBeAPlusCountry
                          ? `: ${toBeAPlusCountryCodesAndDates[iso].date}`
                          : isToBeACountry
                          ? `: ${toBeACountryCodesAndDates[iso].date}`
                          : ""
                      }`
                    )
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("")
                  }}
                />
              )
            })
          }
        </Geographies>
        {bannedFlights.map(({ name, coordinates, flightAndDate, links }) => (
          <Marker
            key={name}
            coordinates={coordinates}
            onMouseEnter={() => {
              setTooltipContent(`${name} | ${flightAndDate}`)
            }}
            onMouseLeave={() => {
              setTooltipContent("")
            }}
            onClick={() => {
              setExternalLinks(links)
            }}
          >
            <BannedFlight />
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  )
}

export default memo(MapChart)
