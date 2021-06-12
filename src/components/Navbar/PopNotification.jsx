import React, { useRef } from 'react'
import {
  Popover,
  PopoverBody,
  PopoverArrow,
  PopoverHeader,
  PopoverFooter,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton
} from '@chakra-ui/popover'
import { Box } from '@chakra-ui/layout'
import { Portal, useDisclosure } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'
import { Button, IconButton } from '@chakra-ui/button'

const PopNotification = () => {
  const ref = useRef()
  const { isOpen, onOpen } = useDisclosure()

  return (
    <Popover
      onOpen={onOpen}
      initialFocusRef={ref}
      placement="bottom"
      closeOnBlur
    >
      <PopoverTrigger>
        <IconButton
          mr={2}
          variant="ghost"
          icon={<BellIcon fontSize="20px" />}
        />
      </PopoverTrigger>
      <Portal>
        {isOpen && (
          <PopoverContent borderColor="border">
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              Notificaciones
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </PopoverBody>
            <PopoverFooter
              pb={4}
              d="flex"
              border="0"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box fontSize="sm" fontWeight="semibold">
                2 de 4
              </Box>
              <Button size="sm" colorScheme="blue" ref={ref}>
                Siguiente
              </Button>
            </PopoverFooter>
          </PopoverContent>
        )}
      </Portal>
    </Popover>
  )
}

export default PopNotification
