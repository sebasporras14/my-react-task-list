import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const addTask = (newTask) => {
    const newTasks = [...tasks, { text: newTask, completed: false }];
    updateTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    updateTasks(newTasks);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    updateTasks(newTasks);
  };

  const remainingTasks = tasks.filter(task => !task.completed).length;

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <SearchBar onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={toggleTask} />
      <div>
        <p>Tareas restantes: {remainingTasks}</p>
      </div>
    </div>
  );
}

export default App;