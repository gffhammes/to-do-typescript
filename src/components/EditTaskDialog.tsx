import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ITask } from '../interfaces/Task';
import TaskForm from './TaskForm';

interface IEditTaskDialogProps {
  open: boolean;
  handleClose(): void;
  task: ITask;
}

export default function EditTaskDialog({ open, handleClose, task }: IEditTaskDialogProps) {
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
        <TaskForm handleSubmit={() => {}} initialValues={task} />
      </DialogContent>
    </Dialog>
  );
}
