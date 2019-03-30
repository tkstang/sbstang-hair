import React from "react"
import ReactBreakpoints from 'react-breakpoints'

const breakpoints = {
  xs: 425,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const wrapRootElement = ({ element }) => {
  return (
    <ReactBreakpoints breakpoints={breakpoints}>
      {element}
    </ReactBreakpoints>
  )
}
