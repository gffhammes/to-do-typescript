import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const Header = () => {
  return (
    <Box bgcolor='primary.main' component='header'>
      <Container sx={{ py: 4 }}>
        <Typography variant='h1' textAlign='center'>TO DO LIST</Typography>
        <Typography variant='h2' textAlign='center'>REACT + TYPESCRIPT</Typography>
      </Container>
    </Box>
  )
}

export default Header