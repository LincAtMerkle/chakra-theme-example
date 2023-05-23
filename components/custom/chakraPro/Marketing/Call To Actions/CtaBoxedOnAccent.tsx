import { Box, Button, Container, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Box
      bg="bg-accent"
      color="on-accent"
      borderRadius="xl"
      px={{ base: '6', lg: '16' }}
      py={{ base: '10', lg: '16' }}
    >
      <Stack spacing="8" direction={{ base: 'column', lg: 'row' }} justify="space-between">
        <Stack spacing="4" maxW="2xl">
          <Heading size="sm">Ready to Grow?</Heading>
          <Text color="on-accent-muted" fontSize={useBreakpointValue({ base: 'lg', lg: 'xl' })}>
            With this beautiful and responsive React components you will realize your next project
            in no time.
          </Text>
        </Stack>
        <Stack spacing="3" direction={{ base: 'column', sm: 'row' }} justify={{ base: 'start' }}>
          <Button variant="secondary-on-accent" size="lg">
            Learn more
          </Button>
          <Button variant="primary-on-accent" size="lg">
            Start Free Trial
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Container>
)
