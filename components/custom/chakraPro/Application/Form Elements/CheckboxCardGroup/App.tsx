import { Box, BoxProps, Container, Text } from '@chakra-ui/react'
import * as React from 'react'
import { CheckboxCard, CheckboxCardGroup } from './CheckboxCardGroup'
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
    className={className} as="section" bg="bg-surface" py={{ base: '4', md: '8' }}>
    <Container maxW="lg">
      <CheckboxCardGroup defaultValue={['one', 'two']} spacing="3">
        {['one', 'two', 'three'].map((option) => (
          <CheckboxCard key={option} value={option}>
            <Text color="emphasized" fontWeight="medium" fontSize="sm">
              Option {option}
            </Text>
            <Text color="muted" fontSize="sm">
              Jelly biscuit muffin icing dessert powder macaroon.
            </Text>
          </CheckboxCard>
        ))}
      </CheckboxCardGroup>
    </Container>
  </Box>
)
}