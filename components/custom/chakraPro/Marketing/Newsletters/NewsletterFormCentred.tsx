import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Heading,
  Input,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'

export const App = () => (
  <Container py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '8', md: '10' }} align="center" maxW="3xl" mx="auto">
      <Stack spacing={{ base: '4', md: '5' }} textAlign="center">
        <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
          Not found what you are looking for?
        </Heading>
        <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
          We will contact you when there are new components to discover.
        </Text>
      </Stack>
      <Stack direction={{ base: 'column', md: 'row' }} width="full" maxW={{ md: 'lg' }} spacing="4">
        <FormControl flex="1">
          <Input type="email" size="lg" placeholder="Enter your email" />
          <FormHelperText color="subtle">We send you at most one mail per month</FormHelperText>
        </FormControl>
        <Button variant="primary" size="lg">
          Subscribe
        </Button>
      </Stack>
    </Stack>
  </Container>
)