import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

const parts = ['control', 'label', 'icon']

const baseStyle = (props: StyleFunctionProps) => ({
  control: {
    background: 'checkbox-unselected-default-background-color',
    borderColor: 'checkbox-unselected-default-border-color',
    _checked: {
      background: 'checkbox-selected-default-background-color',
      borderColor: 'checkbox-selected-default-border-color',
      _hover: {
        background: 'checkbox-selected-hover-background-color',
        borderColor: 'checkbox-selected-hover-border-color'
      }
    },
    _indeterminate: {
      background: 'purple'
    },
    _invalid: {
      borderColor: 'checkbox-unselected-disabled-border-color',
      background: 'checkbox-unselected-disabled-background-color'
    },
    _focusVisible: {}
  },
  label: {
    color: 'semantic-fg-default'
  },
  icon: {
    color: 'checkbox-checkmark-selected-default-icon-color',
    _checked: {
      _hover: {
      color: 'checkbox-checkmark-selected-hover-icon-color'
    }
  }
  }
})

const sizes = {
  sm: {
    control: {
      height: 'checkbox-sm-height',
      width: 'checkbox-sm-height'
    },
    label: {
      fontSize: '12px'
    },
    icon: {
      fontSize: 'checkbox-sm-checkmark-width'
    }
  },
  md: {
    control: {
      height: 'checkbox-md-height',
      width: 'checkbox-md-height'
    },
    label: {
      fontSize: '16px'
    },
    icon: {
      fontSize: 'checkbox-md-checkmark-width'
    }
  },
  lg: {
    control: {
      height: 'checkbox-lg-heightx',
      width: 'checkbox-lg-height'
    },
    label: {
      fontSize: '18px'
    },
    icon: {
      fontSize: 'checkbox-lg-checkmark-width'
    }
  }
}

const variants = {
  bold: {
    control: {
      // these 4 are from the tokens json just wanted to make sure tokens work too
      background: 'color-rose-700',
      borderColor: 'color-rose-900',
      _checked: {
        background: 'semantic-warning-fg',
        borderColor: 'semantic-warning-emphasised',
        _hover: {}
      },
      _indeterminate: {},
      _invalid: {},
      _focusVisible: {}
    },
    label: {
      color: 'blue'
    },
    icon: {}
  },
  colorful: {
    control: {},
    label: {},
    icon: {}
  }
}

const defaultProps = {
  size: 'md'
}

export default {
  baseStyle,
  sizes,
  variants,
  defaultProps,
}
