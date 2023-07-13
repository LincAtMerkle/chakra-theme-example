




const baseStyleContainer = defineStyle({
  border-topWidth: "1px",
  border-color: "inherit",
  &:last-of-type: {
    border-bottomWidth: "1px",
  },
})

const baseStyleButton = defineStyle({
  transitionProperty: "common",
  transitionDuration: "normal",
  font-size: "md",
 &:focus-visible {
    box-shadow: "outline",
  },
 &:hover: {
    bg: "blackAlpha.50",
  },
 &:disabled {
    opacity: 0.4,
    cursor: "not-allowed",
  },
 padding-inline-start: "4",
padding-inline-end: "4",
 padding-top: "2",
padding-bottom: "2",
})

const baseStylePanel = defineStyle({
 padding-top: "2",
 padding-inline-start: "4",
padding-inline-end: "4",
 padding-bottom: "5",
})

const baseStyleIcon = defineStyle({
  font-size: "1.25em",
})


  
  
  
  
})


