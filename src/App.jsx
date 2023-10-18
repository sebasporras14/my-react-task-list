import React, { useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import TaskList from './Components/TaskList';
import useTaskManager from './hooks/useTaskManager';
import { useState } from 'react';
import TaskForm from './TaskForm';

export function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}


