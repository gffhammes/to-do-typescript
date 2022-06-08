import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ITask } from '../../interfaces/Task';
import TaskForm from './TaskForm';

interface IEditTaskDialogProps {
  open: boolean;
  handleClose(): void;
  handleEdit(newTask: ITask): void;
  task: ITask;
}

export default function EditTaskDialog({ open, handleClose, task, handleEdit }: IEditTaskDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Editar tarefa
      </DialogTitle>
      <DialogContent>
        <TaskForm handleSubmit={(task) => {handleEdit(task);handleClose()}} initialValues={task} buttonText='Editar' />
      </DialogContent>
    </Dialog>
  );
}
