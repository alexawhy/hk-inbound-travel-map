import React from "react"
import { Typography, Box } from "@mui/material"

export const Link = ({ externalLinks }) => {
  return (
    <Box>
      {externalLinks.map((content) => {
        const { flight, link, isPressRelease } = content
        return (
          <Typography fontSize={"medium"}>
            <a href={link} target="_blank">
              {isPressRelease ? `${flight} Press release` : `${flight} in CHP List of flights taken by positive cases`}
            </a>
          </Typography>
        )
      })}
    </Box>
  )
}
