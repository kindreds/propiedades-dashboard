import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    50: '#e2f6ff',
    100: '#c2dfed',
    200: '#a0c8de',
    300: '#7cb2cf',
    400: '#599cc0',
    500: '#4183a7',
    600: '#306683',
    700: '#1f495e',
    800: '#0e2c3b',
    900: '#001119'
  },
  border: '#ebe9f1',
  bgGray: '#F8F8F8'
}

export const theme = extendTheme({ colors })
