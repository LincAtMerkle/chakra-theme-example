import { cardAnatomy as parts } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers, cssVar } from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const $background= cssVar("card-bg")
const $padding = cssVar("card-padding")
const $shadow = cssVar("card-shadow")
const $radius = cssVar("card-radius")
const $border = cssVar("card-border-width", "0")
const $border-color = cssVar("card-border-color")

const baseStyle = definePartsStyle({
  container: {
    [$bg.variable]: "colors.chakra-body-bg",
    backgroundColor: $bg.reference,
    box-shadow: $shadow.reference,
    border-radius: $radius.reference,
    color: "chakra-body-text",
    border-width: $border.reference,
    border-color: $border-color.reference,
  },
  body: {
    padding: $padding.reference,
    flex: "1 1 0%",
  },
  header: {
    padding: $padding.reference,
  },
  footer: {
    padding: $padding.reference,
  },
})

const sizes = {
  sm: definePartsStyle({
    container: {
      [$radius.variable]: "radii.base",
      [$padding.variable]: "space.3",
    },
  }),
  md: definePartsStyle({
    container: {
      [$radius.variable]: "radii.md",
      [$padding.variable]: "space.5",
    },
  }),
  lg: definePartsStyle({
    container: {
      [$radius.variable]: "radii.xl",
      [$padding.variable]: "space.7",
    },
  }),
}

const variants = {
  elevated: definePartsStyle({
    container: {
      [$shadow.variable]: "shadows.base",
      .chakra-ui-dark &: {
        [$bg.variable]: "colors.gray.700",
      },
    },
  }),
  outline: definePartsStyle({
    container: {
      [$border.variable]: "1px",
      [$border-color.variable]: "colors.chakra-border-color",
    },
  }),
  filled: definePartsStyle({
    container: {
      [$bg.variable]: "colors.chakra-subtle-bg",
    },
  }),
  unstyled: {
    body: {
      [$padding.variable]: 0,
    },
    header: {
      [$padding.variable]: 0,
    },
    footer: {
      [$padding.variable]: 0,
    },
  },
}

export const cardTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: "elevated",
    size: "md",
  },
})
