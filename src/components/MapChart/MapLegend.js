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
          gap: "1rem"
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
      </Box>
      <Typography fontSize={"0.8rem"} color={"#FFFFFF"}>
        Scroll to zoom. Drag to pan.
      </Typography>
    </Box>
  )
}
