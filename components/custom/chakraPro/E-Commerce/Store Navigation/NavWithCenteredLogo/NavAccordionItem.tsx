import {
  AccordionButton,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  Box,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'

interface NavAccordionItemProps extends AccordionItemProps {
  label: string
  children?: React.ReactNode
}

export const NavAccordionItem = (props: NavAccordionItemProps) => {
  const { label, children, ...rest } = props
  return (
    <AccordionItem border="0" _last={{ border: '0' }} {...rest}>
      {({ isExpanded }) => (
        <>
          <AccordionButton border="0" _expanded={{ color: mode('pink.500', 'pink.200') }}>
            <Box flex="1" textAlign="left" fontWeight="semibold">
              {label}
            </Box>
            <Box fontSize="2xl" as={isExpanded ? FiMinus : FiPlus} />
          </AccordionButton>
          <AccordionPanel border="0">{children}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
