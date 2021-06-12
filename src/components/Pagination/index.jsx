import React from 'react'
import { Button, Flex } from '@chakra-ui/react'

/* eslint-disable */

const PagButton = (props) => {
  return (
    <Button mx={1} px={4} py={2} rounded="md" colorScheme="brand" {...props}>
      {props.children}
    </Button>
  )
}

const Pagination = () => {
  return (
    <Flex p={5} w="full" alignItems="center" justifyContent="center">
      <Flex>
        <PagButton disabled>Anterior</PagButton>
        <PagButton>1</PagButton>
        <PagButton>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>Siguiente</PagButton>
      </Flex>
    </Flex>
  )
}

export default Pagination
