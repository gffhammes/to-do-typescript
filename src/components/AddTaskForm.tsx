import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Box, Container, Typography, Paper, TextFieldProps } from '@mui/material'
import { ITask } from '../interfaces/Task'
import TaskForm from './TaskForm';

type Props = {
  handleAddTask(newTask: ITask): void;
}

const taskInitialValues = {
  id: 0,
  title: '',
  description: '',
  difficult: 0,
}

const AddTaskForm = (props: Props) => {

  const handleSubmit = (task: ITask) => {
    const id: number = Date.now()
    task.id = id;

    props.handleAddTask(task);
  }

  return (
    <Box>
      <Container sx={{ py: 10 }} maxWidth='sm'>
        <Typography>O que você vai fazer?</Typography>
        <Paper elevation={10} sx={{ p: 4 }} >
          <TaskForm handleSubmit={handleSubmit} initialValues={taskInitialValues} />
        </Paper>
      </Container>
    </Box>
  )
}

export default AddTaskForm