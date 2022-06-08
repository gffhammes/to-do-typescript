import React from 'react'
import { Box, Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box bgcolor='primary.main'>
      <Container sx={{ py: 10 }}>
        <Typography textAlign='center'>Projeto desenvolvido com o intuito de aprofundar o conhecimento em TypeScript</Typography>
        <Typography textAlign='center'>Guilherme Hammes @ 2022</Typography>
      </Container>
    </Box>
  )
}

export default Footer