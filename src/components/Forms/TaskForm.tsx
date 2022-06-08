import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Grid, TextField, TextFieldProps } from '@mui/material'
import { ITask } from '../../interfaces/Task'

interface ITaskFormProps {
  initialValues: ITask;
  handleSubmit(task: ITask): void;
  buttonText: string;
}

const TaskForm = ({ initialValues, handleSubmit, buttonText }: ITaskFormProps) => {
  const [task, setTask] = useState<ITask>(initialValues)

  const clearInputs = () => {
    setTask(initialValues)
  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(current => {
      const newTask: ITask = {
        ...current,
        [e.target.id]: e.target.value,
      }
      return newTask
    })
  }

  const handleInternalSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSubmit(task)
    clearInputs();
  }

  const textFieldCommonProps: TextFieldProps = {
    fullWidth: true,
    margin: 'normal',
    onChange: handleChange,
  }

  return (
    <form onSubmit={handleInternalSubmit}>
      <Grid container>
        <Grid item xs={12}>
          <TextField {...textFieldCommonProps} required id='title' label='Tarefa' type='text' value={task.title} />              
        </Grid>
        <Grid item xs={12}>
          <TextField {...textFieldCommonProps} id='description' label='Descrição' type='text' value={task.description} />              
        </Grid>
        <Grid item xs={12}>
          <TextField {...textFieldCommonProps} required id='difficult' label='Dificuldade' type='number' value={task.difficult} />              
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <Button fullWidth type='submit' variant='contained'>{buttonText}</Button>              
        </Grid>
      </Grid>
    </form>
  )
}

export default TaskForm