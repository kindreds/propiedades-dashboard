import React from 'react'

import { Flex, HStack } from '@chakra-ui/layout'
import { AiOutlineSearch } from 'react-icons/ai'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

import UserMenu from './UserMenu'
import PopNotification from './PopNotification'

const Navbar = () => {
  return (
    <Box
      py={3}
      w="full"
      bg="white"
      rounded="lg"
      borderWidth={1}
      overflow="hidden"
      borderColor="border"
      px={{ base: 2, sm: 4 }}
    >
      <Flex alignItems="center" mx="auto">
        <HStack spacing={3} alignItems="center">
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <AiOutlineSearch />
            </InputLeftElement>
            <Input type="tel" placeholder="Buscar..." />
          </InputGroup>
        </HStack>
        <Flex ml="auto">
          <PopNotification />
          <UserMenu />
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar
