import React from 'react';
import logo from './logo.svg';
import './index.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import { createTheme, ThemeProvider } from '@mui/material'
import AddTaskForm from './components/AddTaskForm';
import ToDoList from './components/ToDoList';

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
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main style={{ minHeight: '100vh' }}>
        <AddTaskForm />
        <ToDoList />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
