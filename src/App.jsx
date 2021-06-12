import React from 'react'
import { SimpleGrid, Box } from '@chakra-ui/layout'
import { BrowserRouter as Router } from 'react-router-dom'

import AppRouter from './routes/AppRouter'
import { Navbar, Sidebar } from './components'

const App = () => {
  return (
    <Router>
      <SimpleGrid templateColumns="260px minmax(0, 1fr)">
        <Sidebar />
        <Box bg="bgGray" p={5} maxH="100vh" overflow="auto">
          <Navbar />
          <AppRouter />
        </Box>
      </SimpleGrid>
    </Router>
  )
}

export default App
