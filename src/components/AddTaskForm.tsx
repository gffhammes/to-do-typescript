import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Button, Container, Grid, Typography, TextField, Paper } from '@mui/material'
import { ITask } from '../interfaces/Task'

type Props = {}

type INewTask = Omit<ITask, 'id'>

const AddTaskForm = (props: Props) => {
  const [task, setTask] = useState<INewTask>({
    title: '',
    description: '',
    difficult: 0,
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(task))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask((current: INewTask) => {
      const newTask: INewTask = {
        ...current,
        [e.target.id]: e.target.value,
      }
      return newTask
    })
  }

  return (
    <Box>
      <Container sx={{ py: 10 }} maxWidth='sm'>
        <Typography>O que você vai fazer?</Typography>
        <Paper component='form' noValidate onSubmit={handleSubmit} elevation={10} sx={{ p: 4 }} >
          <Grid container>
            <Grid item xs={12}>
              <TextField fullWidth id='title' label='Tarefa' type='text' margin='normal' value={task.title} onChange={handleChange} />              
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id='description' label='Descrição' type='text' margin='normal' value={task.description} onChange={handleChange} />              
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id='difficult' label='Dificuldade' type='number' margin='normal' value={task.difficult} onChange={handleChange} />              
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button fullWidth type='submit' variant='contained'>Adicionar</Button>              
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

export default AddTaskForm