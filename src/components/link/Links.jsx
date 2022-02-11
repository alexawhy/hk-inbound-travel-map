import React from "react"
import { Typography, Box } from "@mui/material"

export const FlightLinks = ({ externalLinks }) => {
  return (
    <Box>
      {externalLinks.map((content) => {
        const { flight, link, isPressRelease } = content
        return (
          <Typography fontSize={"medium"}>
            <a href={link} target="_blank">
              {isPressRelease
                ? `${flight} Press release`
                : `${flight} in CHP List of flights taken by positive cases`}
            </a>
          </Typography>
        )
      })}
    </Box>
  )
}

export const CountryBanLink = ({ externalLink }) => {
  if (!externalLink) return <></>
  return (
    <Box>
      <Typography fontSize={"medium"}>
        <a href={externalLink} target="_blank">
          Place-specific flight suspension mechanism Press release
        </a>
      </Typography>
    </Box>
  )
}
