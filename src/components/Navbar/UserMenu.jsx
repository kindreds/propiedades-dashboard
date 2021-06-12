import React from 'react'
import {
  Menu,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuButton,
  MenuDivider
} from '@chakra-ui/menu'
import { Portal, useDisclosure } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { SiLastpass } from 'react-icons/si'
import { ArrowUpDownIcon } from '@chakra-ui/icons'
import { BiPowerOff, BiUser } from 'react-icons/bi'

const UserMenu = () => {
  const { isOpen, onOpen } = useDisclosure()

  return (
    <Menu isLazy lazyBehavior="unmount" onOpen={onOpen}>
      <MenuButton
        w="150px"
        as={Button}
        rightIcon={<ArrowUpDownIcon fontSize="14px" />}
      >
        John Doe
      </MenuButton>
      <Portal>
        {isOpen && (
          <MenuList>
            <MenuGroup title="Perfil">
              <MenuItem icon={<BiUser fontSize="20px" />}>Mi Cuenta</MenuItem>
              <MenuItem icon={<SiLastpass fontSize="20px" />}>
                Cambiar contraseña
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Cuenta">
              <MenuItem icon={<BiPowerOff fontSize="20px" />}>
                Cerrar sesión
              </MenuItem>
            </MenuGroup>
          </MenuList>
        )}
      </Portal>
    </Menu>
  )
}

export default UserMenu
