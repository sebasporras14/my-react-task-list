import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import TaskList from './Components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
 
  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskComplete = (index) => {
    if (completedTasks.includes(index)) {
      const updatedCompletedTasks = completedTasks.filter((item) => item !== index);
      setCompletedTasks(updatedCompletedTasks);
    } else {
      setCompletedTasks([...completedTasks, index]);
    }
  };

  const remainingTasks = tasks.length - completedTasks.length;

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <SearchBar onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        completedTasks={completedTasks}
        onDeleteTask={deleteTask}
        onTaskComplete={handleTaskComplete}
      />
      <p>Tareas restantes: {remainingTasks}</p>
    </div>
    
  );
}

export default App;