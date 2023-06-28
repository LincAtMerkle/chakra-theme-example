.progress__container {
  border-width: var(--1px);
  border-radius: var(--lg);
  p: var(--4);
  background: var(--bg-surface);
  transition-property: var(--common);
  transition-duration: var(--normal);
  _hover: { border-color: mode('gray.300', 'gray.600')(props) }

  _checked: {
    border-color: mode('brand.500', 'brand.200')(props),
    box-shadow: mode(
      `0px 0px 0px 1px ${transparentize(`brand.500`, 1.0)(props.theme)}`,
      `0px 0px 0px 1px ${transparentize(`brand.200`, 1.0)(props.theme)}`,
    )(props)
  }


}

