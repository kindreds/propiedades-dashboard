import React from 'react'
import { Tr, Th, Td, Table, Thead, Tbody } from '@chakra-ui/table'
import { EditIcon } from '@chakra-ui/icons'
import { IconButton, Badge } from '@chakra-ui/react'

import { users } from '../../data/fakeUsers'

const AsesoresTable = () => {
  const color = (key) => {
    switch (key) {
      case 0:
        return 'yellow'
      case 1:
        return 'green'
      case 2:
        return 'red'

      default:
        return 'red'
    }
  }
  const msg = (key) => {
    switch (key) {
      case 0:
        return 'No validado'
      case 1:
        return 'Validado'
      case 2:
        return 'Deshabilitado'

      default:
        return 'Deshabilitado'
    }
  }

  return (
    <Table variant="simple" size="sm" colorScheme="brand">
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Username</Th>
          <Th>Asesor</Th>
          <Th>Correo</Th>
          <Th isNumeric>Propiedades</Th>
          <Th>Estatus</Th>
          <Th>Detalles</Th>
        </Tr>
      </Thead>
      <Tbody>
        {users.map((item) => (
          <Tr key={item.id}>
            <Td>{item.id}</Td>
            <Td>{item.username}</Td>
            <Td>{item.nombre}</Td>
            <Td>{item.correo}</Td>
            <Td isNumeric>{item.propiedades}</Td>
            <Td>
              <Badge colorScheme={color(item.estatus)}>
                {msg(item.estatus)}
              </Badge>
            </Td>
            <Td>
              <IconButton variant="ghost" icon={<EditIcon />} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default AsesoresTable
