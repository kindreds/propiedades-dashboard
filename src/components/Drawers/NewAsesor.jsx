import React from 'react'
import {
  Drawer,
  Select,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Textarea } from '@chakra-ui/textarea'
import { Stack, Box } from '@chakra-ui/layout'
import { FormLabel } from '@chakra-ui/form-control'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input'

const NewAsesor = ({ isOpen, onClose }) => {
  const firstField = React.useRef()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        initialFocusRef={firstField}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Nuevo asesor</DrawerHeader>

          <DrawerBody>
            <Stack spacing={4}>
              <Box>
                <FormLabel htmlFor="username">Nombre</FormLabel>
                <Input
                  id="username"
                  ref={firstField}
                  placeholder="Ingrese nombre del asesor"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Correo</FormLabel>
                <Input
                  id="username"
                  ref={firstField}
                  placeholder="Ingrese correo del asesor"
                />
              </Box>
              <Box>
                <FormLabel htmlFor="username">Teléfono</FormLabel>
                <Input
                  id="username"
                  ref={firstField}
                  placeholder="Ingrese teléfono del asesor"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Pagina web</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input type="url" id="url" placeholder="example.com" />
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Descripción</FormLabel>
                <Textarea id="desc" />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="brand">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default NewAsesor
