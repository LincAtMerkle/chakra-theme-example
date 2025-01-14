import {
  Box, 
  BoxProps,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { data } from './data'
import { NavAccordion } from './NavAccordion'
import { NavLayout } from './NavLayout'
import { ReactNode } from 'react';

  export type AppProps = BoxProps & {
    children: ReactNode
  }
  
  export function App({
    className,
    children,
    ...rest
    }: AppProps) {
      const { isOpen, onOpen, onClose } = useDisclosure()
      const menuButtonRef = React.useRef<HTMLButtonElement>(null)
    return (
      <Box 
      className={className} minH="100vh" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface" boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <NavLayout onClickMenu={onOpen} isMenuOpen={isOpen} />
        <Drawer
          placement="left"
          initialFocusRef={menuButtonRef}
          isOpen={isOpen}
          onClose={onClose}
          size="full"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader padding="0">
              <NavLayout onClickMenu={onClose} isMenuOpen={isOpen} menuButtonRef={menuButtonRef} />
            </DrawerHeader>
            <DrawerBody>
              <NavAccordion data={data} />
              <HStack mt="6">
                <Button
                  flex="1"
                  colorScheme="pink"
                  variant="outline"
                  color="accent"
                  fontWeight="semibold"
                >
                  Sign in
                </Button>
                <Button flex="1" colorScheme="pink" fontWeight="semibold">
                  Get started
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </Box>
  )
}
