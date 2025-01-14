import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Container,
  ContainerProps,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { members } from './data'
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
    className={className} py={{ base: '16', md: '24' }}>
    <Stack spacing={{ base: '12', md: '16' }}>
      <Stack spacing={{ base: '8', md: '10' }}>
        <Stack spacing="3" align="center" textAlign="center">
          <Text fontSize={{ base: 'sm', md: 'md' }} color="accent" fontWeight="semibold">
            {/* We're hiring */}
          </Text>
          <Stack spacing={{ base: '4', md: '5' }}>
            <Heading size={useBreakpointValue({ base: 'sm', md: 'md' })}>Meet our team</Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} color="muted">
              Chupa chups pudding marzipan cake chocolate shortbread macaroon oat cake.
            </Text>
          </Stack>
        </Stack>
        <Stack direction={{ base: 'column-reverse', md: 'row' }} spacing="3" justify="center">
          <Button variant="secondary" size="lg">
            Contact us
          </Button>
          <Button variant="primary" size="lg">
            Join our team
          </Button>
        </Stack>
      </Stack>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        columnGap="8"
        rowGap={{ base: '6', md: '8', lg: '16' }}
      >
        {members.map((member) => (
          <Box
            key={member.name}
            bg="bg-surface"
            p="6"
            boxShadow={mode('sm', 'sm-dark')}
            borderRadius="md"
          >
            <Stack spacing="4" align="center" textAlign="center">
              <Stack>
                <Stack spacing={{ base: '4', md: '5' }} align="center">
                  <Avatar src={member.image} boxSize={{ base: '16', md: '20' }} />
                  <Box>
                    <Text fontWeight="medium" fontSize="lg">
                      {member.name}
                    </Text>
                    <Text color="accent">{member.role}</Text>
                  </Box>
                </Stack>
                <Text color="muted">{member.description}</Text>
              </Stack>
              <HStack spacing="4" color="subtle">
                {[FaGithub, FaLinkedin, FaTwitter].map((item, id) => (
                  <Link href="#" key={id}>
                    <Icon as={item} boxSize="5" />
                  </Link>
                ))}
              </HStack>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  </Container>
)
}