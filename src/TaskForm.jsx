import React, { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleAddTask = () => {
    if (taskName.length >= 3) {
      // Validar que el nombre tenga al menos 3 caracteres
      onAddTask({ name: taskName, description: taskDescription });
      // Reiniciar los campos del formulario
      setTaskName('');
      setTaskDescription('');
    } else {
      alert('El nombre de la tarea debe tener al menos 3 caracteres.');
    }
  };

  return (
    <div>
      <h2>Agregar Tarea</h2>
      <div>
        <label>Nombre de la Tarea:</label>
        <input
          type="text"
          value={taskName}
          onChange={handleTaskNameChange}
        />
      </div>
      <div>
        <label>Descripción de la Tarea:</label>
        <textarea
          value={taskDescription}
          onChange={handleTaskDescriptionChange}
        />
      </div>
      <button onClick={handleAddTask}>Guardar Tarea</button>
    </div>
  );
}

export default TaskForm;
