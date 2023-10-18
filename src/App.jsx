import React, { useEffect } from 'react';
import SearchBar from './Components/SearchBar';
import TaskList from './Components/TaskList';
import useTaskManager from './hooks/useTaskManager';

function App() {
  const { tasks, createTask, deleteTask, updateTask } = useTaskManager();

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks);
      // Actualizar las tareas con las tareas almacenadas
      parsedTasks.forEach((task, index) => {
        updateTask(index, task);
      });
    }
  }, [updateTask]);

  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <SearchBar onAddTask={createTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} onToggleTask={updateTask} />
      <div>
        <p>Tareas restantes: {remainingTasks}</p>
      </div>
    </div>
  );
}

export default App;