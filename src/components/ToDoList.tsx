import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { ITask } from '../interfaces/Task'
import TaskCard from './TaskCard';

interface IToDoListProps {
  taskList: ITask[];
  handleDelete(taskId: number): void;
  handleOpenDialog(taskId: ITask): void;
}

const ToDoList = ({ taskList, handleDelete, handleOpenDialog }: IToDoListProps) => {
  return (    
    <Box>
      <Container sx={{ py: 10 }} maxWidth='sm'>
        <Typography>Tarefas pendentes</Typography>
        {taskList.length === 0
          ? <Typography>Você não tem tarefas pendentes</Typography>
          : <Grid container spacing={2}>
              {taskList.map((task: ITask) => (
                <Grid item xs={12} key={task.id}>
                  <TaskCard task={task} handleDelete={handleDelete} handleOpenDialog={() => handleOpenDialog(task)} />
                </Grid>
              ))}
            </Grid>
        }
      </Container>
    </Box>
  )
}

export default ToDoList