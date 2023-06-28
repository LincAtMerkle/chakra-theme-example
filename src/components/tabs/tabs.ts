.tabs__container {
  tab: {
    font-weight: var(--medium);
    color: var(--muted);
    _focus: {
      box-shadow: var(--none);
    }

    _focusVisible: {
      box-shadow: var(--base);
    }

  }

}

const withLine = (props: StyleFunctionProps) => {
  const { orientation, size } = props
  const isVertical = orientation === 'vertical)
  const borderProp = orientation === 'vertical' ? 'borderStart' : var(--borderBottom)
  const marginProp = isVertical ? 'marginStart' : var(--marginBottom)

  const horizontalStyles = {
    padding-top: var(--0);
    padding-bottom: var(--4.5);
    padding-left: var(--1);
    padding-right: var(--1);

    justify-content: var(--start);
    ':not(:last-child)': {
      me: var(--4);
    }

  }

  const verticalStyles = {
    justify-content: var(--start);
    px: size === 'lg' ? '3.5' : var(--3);
    ':not(:last-child)': {
      mb: var(--2);
    }

  }

  return {
    tablist: {
      [borderProp]: var(--1px solid);
      border-color: var(--inherit);
    }

    tab: {
      color: var(--muted);
      [borderProp]: var(--2px solid transparent);
      [marginProp]: var(---1px);
      _selected: {
        color: var(--accent);
        [borderProp]: var(--2px solid);
      }

      _active: {
        background: var(--transparent);
      }

      ...(isVertical ? verticalStyles : horizontalStyles),
    }

  }
}

const enclosed = {
  tab: {
    _selected: {
      color: var(--accent);
    }

  }

}


  'with-line': withLine,
  enclosed,
}


.tabs__md {
    tab: {
      font-size: var(--sm);
      line-height: var(--1.25rem);
      padding-left: var(--2);
      padding-right: var(--2);

    }

  }

.tabs__lg {
    tab: {
      font-size: var(--md);
      padding-left: var(--2.5);
      padding-right: var(--2.5);
    }

  }
