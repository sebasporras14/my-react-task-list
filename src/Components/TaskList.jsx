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
          <span
            style={{
              textDecoration: Array.isArray(props.completedTasks) && props.completedTasks.includes(index)
                ? 'line-through'
                : 'none',
            }}
          >
            {task.text} {/* Accede a la propiedad 'text' del objeto 'task' */}
          </span>
          <button onClick={() => props.onDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;