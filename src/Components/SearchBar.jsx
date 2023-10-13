import React, { useState } from 'react';

function SearchBar(props) {
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      props.onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={handleTaskChange}
      />
      <button onClick={addTask}>Agregar</button>
    </div>
  );
}

export default SearchBar;
