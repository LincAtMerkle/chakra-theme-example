// import { Rating } from '@chakra-ui-pro/rating/src/Rating'
import {
  Box, 
  BoxProps,
  Button,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { ReviewItem } from './ReviewItem'
import { reviews } from './_data'
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
    <Box className={className}
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack spacing="12">
      <Stack spacing={{ base: '8' }}>
        <Heading
          fontSize={{ base: '1.25rem', md: '1.5rem' }}
          fontWeight="semibold"
          color={useColorModeValue('black', 'white')}
        >
          Customer reviews
        </Heading>
        <Stack spacing="5" direction="row" alignItems="center" shouldWrapChildren>
          <Text fontSize="4xl" fontWeight="medium" lineHeight="1">
            4.3
          </Text>
          <Stack spacing="1">
            {/* <Rating defaultValue={4} size="sm" /> */}
            <Text lineHeight="1" color={useColorModeValue('gray.600', 'gray.400')}>
              Based on 12 reviews
            </Text>
          </Stack>
        </Stack>
        <HStack spacing="4">
          <Button size="lg" variant="outline" alignSelf="center">
            See all reviews
          </Button>
          <Button size="lg" colorScheme="pink">
            Write a review
          </Button>
        </HStack>
      </Stack>
      <SimpleGrid columns={{ base: 1, md: 2 }} columnGap="12" rowGap={{ base: '10', md: '12' }}>
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
)
}