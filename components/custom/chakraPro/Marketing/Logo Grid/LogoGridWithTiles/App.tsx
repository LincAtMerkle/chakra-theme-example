import {
  Center,
  Container,
  ContainerProps,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import * as logos from './Logos'
import { ReactNode } from 'react';

export type AppProps = ContainerProps & {
  children: ReactNode
}

export function App({
  className,
  children,
  ...rest
  }: AppProps) {
  return (
    <Container 
    className={className} py={{ base: '12', md: '16' }}>
    <Stack spacing="8">
      <Text
        fontSize={{ base: 'md', md: 'lg' }}
        fontWeight="medium"
        color="muted"
        textAlign="center"
      >
        These and other companies trust us
      </Text>
      <SimpleGrid gap={{ base: '4', md: '6' }} columns={{ base: 2, md: 3 }}>
        {Object.entries(logos).map(([name, Logo]) => (
          <Center
            key={name}
            bg="bg-surface"
            py={{ base: '4', md: '8' }}
            boxShadow={mode('sm', 'sm-dark')}
            borderRadius="lg"
          >
            <Logo h={{ base: '8', md: '10' }} maxW="180px" fill="emphasized" />
          </Center>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)
        }