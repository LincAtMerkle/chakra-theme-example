import {
  Badge,
  Button,
  Heading,
  HStack,
  Stack,
  Table,
  TableProps,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
} from '@chakra-ui/react'
import * as React from 'react'
import { Product } from './data'

interface ProductOverviewTableProps extends TableProps {
  products: Product[]
}

export const ProductOverviewTable = (props: ProductOverviewTableProps) => {
  const { products, ...tableProps } = props
  return (
    <Table sx={{ tableLayout: 'fixed' }} {...tableProps}>
      <Thead>
        <Tr>
          {products.length > 1 && <Td />}
          {products.map((product, id) => (
            <Td key={id} fontSize="xl" fontWeight="semibold">
              <HStack>
                <Text>{product.name}</Text>
                {product.isPopular && <Badge colorScheme="pink">Popular</Badge>}
              </HStack>
            </Td>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          {products.length > 1 && <Td borderBottomWidth="0px" />}
          {products.map((product, id) => (
            <Td key={id} whiteSpace="normal" borderBottomWidth="0px">
              <Stack spacing="6">
                <Stack spacing="4">
                  <Stack direction="row" align="baseline" spacing="1">
                    <Heading size="lg" color="default">
                      {product.price}
                    </Heading>
                    <Text fontWeight="medium" fontSize="medium" color="muted">
                      /mo
                    </Text>
                  </Stack>

                  <Text color="muted" fontSize="sm" whiteSpace="normal">
                    {product.description}
                  </Text>
                </Stack>
                <Button variant="primary">Buy now</Button>
              </Stack>
            </Td>
          ))}
        </Tr>
      </Tbody>
    </Table>
  )
}
