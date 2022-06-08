import React, { useState } from 'react';
import './index.scss'
import Header from './components/Commons/Header'
import Footer from './components/Commons/Footer'
import { createTheme, ThemeProvider } from '@mui/material'
import AddTaskForm from './components/Forms/AddTaskForm';
import ToDoList from './components/ToDoList';
import { ITask } from './interfaces/Task';
import EditTaskDialog from './components/Forms/EditTaskDialog';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '4rem',
  fontWeight: 'normal',
};

theme.typography.h2 = {
  fontSize: '1rem',
  fontWeight: 'bold',
};

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [selectedTask, setSelectedTask] = useState<ITask>({
    id: 0,
    title: '',
    description: '',
    difficult: 0,
  })

  const handleAddTask = (newTask: ITask) => {
    setTaskList(taskList => [ ...taskList, newTask ]);
  }

  const handleOpenDialog = (task: ITask) => {
    setSelectedTask(task)
    setOpenDialog(true)
  }
  const handleCloseDialog = () => setOpenDialog(false)

  const handleDelete = (taskId: number) => {
    setTaskList(taskList => taskList.filter(task => task.id !== taskId))
  }

  const handleEdit = (newTask: ITask) => {
    setTaskList(taskList => taskList.map(task => task.id === newTask.id ? newTask : task))
  }

  return (
    <ThemeProvider theme={theme}>
      <EditTaskDialog open={openDialog} handleClose={handleCloseDialog} task={selectedTask} handleEdit={handleEdit} />
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <AddTaskForm handleAddTask={handleAddTask} />
        <ToDoList taskList={taskList} handleDelete={handleDelete} handleOpenDialog={handleOpenDialog} />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
