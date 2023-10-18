import React from 'react';

function TaskList(props) {
  const handleTaskCheckbox = (index) => {
    props.onTaskComplete(index);
  };

  return (
    <ul>
      {props.tasks.map((task, index) => (
        <li key={index}>
          <input
            type="checkbox"
            onChange={() => handleTaskCheckbox(index)}
          />
          <div>
            <strong>
              {task.name} {/* Muestra el nombre de la tarea */}
            </strong>
          </div>
          <div>
            {task.description && (
              <p>{task.description}</p> /* Muestra la descripción si está presente */
            )}
          </div>
          <button onClick={() => props.onDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;