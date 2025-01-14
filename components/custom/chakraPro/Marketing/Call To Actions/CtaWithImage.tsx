import {
  Box, 
  BoxProps,
  Button,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { ReactNode } from 'react';

export type AppProps = BoxProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
  return (
    <Box 
    className={className} bg="bg-surface">
    <Container py={{ base: '16', md: '24' }}>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '12', lg: '16' }}>
        <Stack spacing={{ base: '8', md: '10' }} width="full" justify="center">
          <Stack spacing={{ base: '4', md: '6' }}>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'lg' })}>
              Ready for your free trial?
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
              No credit card is required. you&apos;ll be ready to go within a few minutes. Let's go.
            </Text>
          </Stack>
          <Stack direction={{ base: 'column-reverse', md: 'row' }} spacing="3">
            <Button variant="secondary" size="lg">
              Learn more
            </Button>
            <Button variant="primary" size="lg">
              Start free trial
            </Button>
          </Stack>
        </Stack>
        <Image
          width="full"
          height={{ base: 'auto', md: 'lg' }}
          objectFit="cover"
          src="https://images.unsplash.com/photo-1600188769045-bc6026bfc8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />
      </Stack>
    </Container>
  </Box>
)
  }