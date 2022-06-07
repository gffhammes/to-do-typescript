import React from 'react'
import { Box, Container, Typography } from '@mui/material'

type Props = {}

const ToDoList = (props: Props) => {
  return (    
    <Box>
      <Container sx={{ py: 10 }}>
        <Typography>Tarefas pendentes</Typography>
      </Container>
    </Box>
  )
}

export default ToDoList