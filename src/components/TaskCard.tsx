import React from 'react'
import { Box, IconButton, Paper, Stack, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask } from '../interfaces/Task';

type Props = {
  task: ITask;
  handleDelete(taskId: number): void;
  handleOpenDialog(): void;
}

const TaskCard = ({ task, handleDelete, handleOpenDialog }: Props) => {
  return (
    <Stack component={Paper} direction='row' elevation={5} sx={{ p: 4, pr: 2 }} alignItems='center' justifyContent='space-between'>
      <Box>        
        <Typography variant='h4'>{task.title}</Typography>
        <Typography>{task.description}</Typography>
        <Typography>Dificuldade: {task.difficult}</Typography>
      </Box>
      <Box sx={{ fontSize: 30 }}>
        <IconButton onClick={() => handleOpenDialog()} sx={{ fontSize: 'inherit' }}>
          <EditIcon fontSize='inherit' />
        </IconButton>
        <IconButton onClick={() => handleDelete(task.id)} sx={{ fontSize: 'inherit' }}>
          <DeleteIcon fontSize='inherit' />
        </IconButton>
      </Box>
    </Stack>
  )
}

export default TaskCard