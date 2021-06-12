import React from 'react'

import { Select, useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Search2Icon, AddIcon } from '@chakra-ui/icons'
import { Box, SimpleGrid, Flex } from '@chakra-ui/layout'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/input'

import AsesoresTable from './AsesoresTable'
import Pagination from '../../components/Pagination'
import NewAsesor from '../../components/Drawers/NewAsesor'

const Asesores = () => {
  const HDrawer = useDisclosure()
  return (
    <>
      <Box mt={3}>
        <Box p={3} bg="white" rounded="lg" borderWidth={1} borderColor="border">
          <SimpleGrid gap={5} templateColumns="repeat(3, minmax(0, 1fr)) 100px">
            <Select placeholder="Departamento"></Select>
            <Select placeholder="Provincia"></Select>
            <Select placeholder="Distrito"></Select>
            <Button
              variant="outline"
              colorScheme="brand"
              leftIcon={<Search2Icon />}
            >
              Buscar
            </Button>
          </SimpleGrid>
        </Box>
        <Box
          p={3}
          mt={3}
          bg="white"
          rounded="lg"
          borderWidth={1}
          borderColor="border"
        >
          <Box flex={1}>
            <Flex>
              <InputGroup mr={5}>
                <InputLeftElement
                  pointerEvents="none"
                  children={<Search2Icon color="gray.300" />}
                />
                <Input type="tel" placeholder="Buscar por nombre" />
              </InputGroup>
              <Button
                mb={2}
                colorScheme="brand"
                leftIcon={<AddIcon />}
                onClick={HDrawer.onOpen}
              >
                Nuevo asesor
              </Button>
            </Flex>
            <AsesoresTable />
          </Box>

          <Pagination />
        </Box>
      </Box>
      <NewAsesor {...{ ...HDrawer }} />
    </>
  )
}

export default Asesores
