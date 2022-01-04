import React from "react"
import { PatternLines } from "@vx/pattern"
import { Box, Typography } from "@mui/material"
import { Stack } from "@mui/material"

const APlusLegend = () => {
  return (
    <svg width={"1.5rem"} height={"1.5rem"}>
      <rect fill="#EF476F" x={0} y={0} width={"1.5rem"} height={"1.5rem"} />
    </svg>
  )
}

export const AToAPlusPatternLines = () => {
  return (
    <PatternLines // A to A+
      id="to-be-a-plus-lines"
      height={6}
      width={6}
      stroke="#EF476F"
      strokeWidth={2}
      background="#FFD166"
      orientation={["diagonal"]}
    />
  )
}

const AToAPlusLegend = () => {
  return (
    <svg width={"1.5rem"} height={"1.5rem"}>
      <AToAPlusPatternLines />
      <rect
        fill="url('#to-be-a-plus-lines')"
        x={0}
        y={0}
        width={"1.5rem"}
        height={"1.5rem"}
      />
    </svg>
  )
}

const ALegend = () => {
  return (
    <svg width={"1.5rem"} height={"1.5rem"}>
      <rect fill="#FFD166" x={0} y={0} width={"1.5rem"} height={"1.5rem"} />
    </svg>
  )
}

export const BToAPatternLines = () => {
  return (
    <PatternLines // B to A
      id="to-be-a-lines"
      height={6}
      width={6}
      stroke="#06D6A0"
      strokeWidth={2}
      background="#FFD166"
      orientation={["diagonal"]}
    />
  )
}

const BToALegend = () => {
  return (
    <svg width={"1.5rem"} height={"1.5rem"}>
      <BToAPatternLines />
      <rect
        fill="url('#to-be-a-lines')"
        x={0}
        y={0}
        width={"1.5rem"}
        height={"1.5rem"}
      />
    </svg>
  )
}

const BLegend = () => {
  return (
    <svg width={"1.5rem"} height={"1.5rem"}>
      <rect fill="#06D6A0" x={0} y={0} width={"1.5rem"} height={"1.5rem"} />
    </svg>
  )
}

const CLegend = () => {
  return (
    <svg width={"1.5rem"} height={"1.5rem"}>
      <rect fill="#118AB2" x={0} y={0} width={"1.5rem"} height={"1.5rem"} />
    </svg>
  )
}

const CHNTWNLegend = () => {
  return (
    <svg width={"1.5rem"} height={"1.5rem"}>
      <rect fill="#073B4C" x={0} y={0} width={"1.5rem"} height={"1.5rem"} />
    </svg>
  )
}

export const BannedFlight = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 10 10"
        overflow="visible"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      >
        <line x1="-5" y1="-5" x2="5" y2="5" />
        <line x1="5" y1="-5" x2="-5" y2="5" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 10 10"
        overflow="visible"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line x1="-5" y1="-5" x2="5" y2="5" />
        <line x1="5" y1="-5" x2="-5" y2="5" />
      </svg>
    </>
  )
}

const BannedFlightLegend = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 329.26933 329" width="20px" stroke={"white"} strokeWidth={8}><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
  )
}

export const MapLegend = () => {
  return (
    <Box>
      <Box
        marginTop={"1rem"}
        marginBottom={"0.5rem"}
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Stack direction={"row"} spacing={1}>
          <APlusLegend />
          <Typography fontSize={"1rem"} color={"#FFFFFF"}>
            A+
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <AToAPlusLegend />
          <Typography fontSize={"1rem"} color={"#FFFFFF"}>
            A to be A+
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <ALegend />
          <Typography fontSize={"1rem"} color={"#FFFFFF"}>
            A
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <BToALegend />
          <Typography fontSize={"1rem"} color={"#FFFFFF"}>
            B to be A
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <BLegend />
          <Typography fontSize={"1rem"} color={"#FFFFFF"}>
            B
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <CLegend />
          <Typography fontSize={"1rem"} color={"#FFFFFF"}>
            C
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <CHNTWNLegend />
          <Typography fontSize={"1rem"} color={"#FFFFFF"}>
            China and Taiwan
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <BannedFlightLegend />
          <Typography fontSize={"1rem"} color={"#FFFFFF"}>
            Banned Flights
          </Typography>
        </Stack>
      </Box>
      <Typography fontSize={"0.8rem"} color={"#FFFFFF"}>
        Click to see source. Scroll to zoom. Drag to pan.
      </Typography>
    </Box>
  )
}
