import {
  Box, 
  BoxProps,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Logo } from './Logo'
import { ReactNode } from "react";

export type AppProps = BoxProps & {
  children: ReactNode;
};

export function App({ className, children, ...rest }: AppProps) {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  return (
    <Box className={className} as="section" pb={{ base: '12', md: '24' }}>
      <Box as="nav" bg="bg-surface">
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing="10" justify="space-between">
            <Logo />
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <Tabs colorScheme="pink" isFitted variant="unstyled">
                  <TabList>
                    {['Product', 'Pricing', 'Resources', 'Support'].map((item) => (
                      <Tab key={item} fontSize="md" _selected={{ color: 'accent' }}>
                        {item}
                      </Tab>
                    ))}
                  </TabList>
                  <TabIndicator mt="4" height={1} borderTopRadius="md" bg="accent" />
                </Tabs>
                <HStack spacing="3">
                  <Button variant="ghost">Sign in</Button>
                  <Button variant="primary">Sign up</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
      <Divider />
    </Box>
  )
}
