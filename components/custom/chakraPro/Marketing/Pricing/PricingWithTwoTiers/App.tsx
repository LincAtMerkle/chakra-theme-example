import {
  Box, 
  BoxProps,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { products } from './data'
import { PricingCard } from './PricingCard'
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
    className={className}  as="section">
    <Container py={{ base: '16', md: '24' }}>
      <Stack spacing={{ base: '12', md: '16' }} direction={{ base: 'column', lg: 'row' }}>
        <Stack spacing={{ base: '4', md: '5' }} maxW="md">
          <Stack spacing="3">
            <Text color="accent" fontWeight="semibold">
              Pricing
            </Text>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>
              Get lifetime access
            </Heading>
          </Stack>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted" maxW="3xl">
            Choose from over 210+ beautiful and responsive components.
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2 }} columnGap="8" rowGap="6" flex="1">
          {products.map((product, id) => (
            <PricingCard key={id} product={product} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)
          }