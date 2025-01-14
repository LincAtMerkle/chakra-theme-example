import {
  Box, 
  BoxProps,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { ProductBreadcrumb } from './ProductBreadcrumb'
import { SortbySelect } from './SortBySelect'
import {
  CheckboxFilterPopover,
  ColorFilterPopover,
  PriceFilterPopover,
  SizeFilterPopover,
} from './Filter'
import { MobileFilter } from './MobileFilter'
import { breadcrumbData } from './_data'
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
    <ProductBreadcrumb data={breadcrumbData} />
    <Heading size="lg" mt={{ base: '6', md: '10' }} mb="8">
      Men&apos;s Watches
    </Heading>

    <Flex justify="space-between" align="center" display={{ base: 'none', md: 'flex' }}>
      <HStack spacing="6">
        <Text color={mode('gray.600', 'gray.400')} fontWeight="medium" fontSize="sm">
          Filter by
        </Text>
        <SimpleGrid display="inline-grid" spacing="4" columns={4}>
          <SizeFilterPopover />
          <PriceFilterPopover />
          <ColorFilterPopover />
          <CheckboxFilterPopover />
        </SimpleGrid>
      </HStack>

      <HStack flexShrink={0}>
        <Text
          as="label"
          htmlFor="sort-by"
          color={mode('gray.600', 'gray.400')}
          fontWeight="medium"
          fontSize="sm"
          whiteSpace="nowrap"
        >
          Sort by
        </Text>
        <SortbySelect />
      </HStack>
    </Flex>

    <MobileFilter />

    <Box
      mt={{ base: '6', md: '10' }}
      minH="50vh"
      width="full"
      borderWidth="3px"
      rounded="lg"
      borderStyle="dashed"
    />
  </Box>
)
}