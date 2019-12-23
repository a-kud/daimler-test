import React from 'react'
import { Container, Box } from '@material-ui/core'
import Header from './components/Header'
import MooviesTable from './components/MooviesTable'

function App () {
  return (
    <Container>
      <Box display='flex' flexDirection='column'>
        <Header />
        <MooviesTable />
      </Box>
    </Container>
  )
}

export default App
