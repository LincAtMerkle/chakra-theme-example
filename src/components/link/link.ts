import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"

const baseStyle = defineStyle({
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  text-decoration: "none",
  outline: "none",
  color: "inherit",
 &:hover: {
    text-decoration: "underline",
  },
 &:focus-visible {
    box-shadow: "outline",
  },
})

export const linkTheme = defineStyleConfig({
  baseStyle,
})
