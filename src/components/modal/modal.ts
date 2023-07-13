

  defineStyle,

import { runIfFn } from "../utils/run-if-fn"

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $background= cssVar("modal-bg")
const $shadow = cssVar("modal-shadow")

const baseStyleOverlay = defineStyle({
  bg: "blackAlpha.600",
  z-index: "modal",
})

const baseStyleDialogContainer = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props

  return {
    display: "flex",
    z-index: "modal",
    justify-content: "center",
    align-items: isCentered ? "center" : "flex-start",
    overflow: scrollBehavior === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none",
  }
})

const baseStyleDialog = defineStyle((props) => {
  const { isCentered, scrollBehavior } = props

  return {
    border-radius: "md",
    color: "inherit",
    my: isCentered ? "auto" : "16",
    mx: isCentered ? "auto" : undefined,
    z-index: "modal",
    max-height: scrollBehavior === "inside" ? "calc(100% - 7.5rem)" : undefined,
    [$bg.variable]: "colors.white",
    [$shadow.variable]: "shadows.lg",
    .chakra-ui-dark &: {
      [$bg.variable]: "colors.gray.700",
      [$shadow.variable]: "shadows.dark-lg",
    },
    background: $bg.reference,
    box-shadow: $shadow.reference,
  }
})

const baseStyleHeader = defineStyle({
 padding-inline-start: "6",
padding-inline-end: "6",
 padding-top: "4",
padding-bottom: "4",
  font-size: "xl",
  font-weight: "semibold",
})

const baseStyleCloseButton = defineStyle({
  position: "absolute",
  top: "2",
  insetEnd: "3",
})

const baseStyleBody = defineStyle((props) => {
  const { scrollBehavior } = props
  return {
   padding-inline-start: "6",
padding-inline-end: "6",
   padding-top: "2",
padding-bottom: "2",
    flex: "1",
    overflow: scrollBehavior === "inside" ? "auto" : undefined,
  }
})

const baseStyleFooter = defineStyle({
 padding-inline-start: "6",
padding-inline-end: "6",
 padding-top: "4",
padding-bottom: "4",
})

const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialogContainer: runIfFn(baseStyleDialogContainer, props),
  dialog: runIfFn(baseStyleDialog, props),
  header: baseStyleHeader,
  closeButton: baseStyleCloseButton,
  body: runIfFn(baseStyleBody, props),
  footer: baseStyleFooter,
}))

/**
 * Since the `max-width` prop references theme.sizes internally,
 * we can leverage that to size our modals.
 */
function getSize(value: string) {
  if (value === "full") {
    return definePartsStyle({
      dialog: {
        max-width: "100vw",

        margin-top: "0",
        margin-bottom: "0",
        border-radius: "0",
      },
    })
  }
  return definePartsStyle({
    dialog: { max-width: value },
  })
}

const sizes = {
  xs: getSize("xs"),
  sm: getSize("sm"),
  md: getSize("md"),
  lg: getSize("lg"),
  xl: getSize("xl"),
  "2xl": getSize("2xl"),
  "3xl": getSize("3xl"),
  "4xl": getSize("4xl"),
  "5xl": getSize("5xl"),
  "6xl": getSize("6xl"),
  full: getSize("full"),
}

    sizes,
   size: "md" },
})
