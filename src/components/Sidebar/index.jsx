import React from 'react'
import { Icon } from '@chakra-ui/icon'
import { Button } from '@chakra-ui/button'
import { useHistory } from 'react-router-dom'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout'

/* ICONS */
import { BiHomeAlt } from 'react-icons/bi'
import { FiUsers, FiSettings } from 'react-icons/fi'
import { BsBuilding, BsCreditCard } from 'react-icons/bs'

import { Logo } from '../../SVGS'

const Sidebar = () => {
  const history = useHistory()

  const bussinesItems = [
    { name: 'Clientes', path: '/', icon: FiUsers },
    { name: 'Asesores', path: '/asesores', icon: FiUsers },
    { name: 'Propiedades', path: '/propiedades', icon: BsBuilding },
    { name: 'Transacciones', path: '/', icon: BsCreditCard }
  ]
  const configItems = [{ name: 'Configuración', icon: FiSettings }]

  return (
    <Box
      p={5}
      h="100vh"
      bg="bgGray"
      maxW="260px"
      maxH="100vh"
      overflowY="auto"
      borderColor="border"
      borderWidth={1}
    >
      {/* Header */}
      <Flex align="center" mb={4}>
        <Icon as={Logo} w={7} h={7} mr={4} />
        <Heading as="h3" color="brand.300" fontSize="2xl" userSelect="none">
          Dashboard
        </Heading>
      </Flex>

      <Button
        w="full"
        size="lg"
        variant="ghost"
        colorScheme="brand"
        leftIcon={<BiHomeAlt />}
        justifyContent="flex-start"
      >
        Inicio
      </Button>

      <Text userSelect="none" fontWeight="semibold" color="gray.500" my={4}>
        Negocio
      </Text>

      {/* Routes */}
      <Stack>
        {bussinesItems.map(({ name, path, icon: Icon }, i) => (
          <Button
            key={i}
            size="lg"
            variant="ghost"
            colorScheme="brand"
            leftIcon={<Icon />}
            justifyContent="flex-start"
            onClick={() => history.push(path)}
          >
            {name}
          </Button>
        ))}
      </Stack>

      <Text userSelect="none" fontWeight="semibold" color="gray.500" my={4}>
        Cuenta
      </Text>

      <Stack>
        {configItems.map(({ name, icon: Icon }, i) => (
          <Button
            key={i}
            size="lg"
            variant="ghost"
            colorScheme="brand"
            leftIcon={<Icon />}
            justifyContent="flex-start"
          >
            {name}
          </Button>
        ))}
      </Stack>
    </Box>
  )
}

export default Sidebar
