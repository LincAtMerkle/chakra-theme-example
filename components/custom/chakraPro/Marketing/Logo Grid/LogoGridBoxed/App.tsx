import {
  Box,
  Center,
  Container,
  ContainerProps,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
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
    className={className} py={{ base: '4', md: '8' }}>
    <Box
      bg="bg-surface"
      py={{ base: '12', md: '16' }}
      px={{ base: '6', md: '16' }}
      borderRadius="lg"
      boxShadow={useColorModeValue('sm', 'sm-dark')}
    >
      <Stack spacing="8">
        <Text
          fontWeight="medium"
          fontSize={{ base: 'md', md: 'lg' }}
          color="muted"
          textAlign="center"
        >
          These and other companies trust us
        </Text>
        <SimpleGrid gap={{ base: '4', md: '8' }} columns={{ base: 2, md: 3, lg: 5 }}>
          {Object.entries(logos).map(([name, Logo]) => (
            <Center key={name}>
              <Logo h={{ base: '8', md: '10' }} maxW="10rem" fill="emphasized" />
            </Center>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  </Container>
)
          }