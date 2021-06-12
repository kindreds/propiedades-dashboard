import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import './styles/index.css'
import App from './App'

import { theme } from './theme'

ReactDOM.render(
  <ChakraProvider resetCSS theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
