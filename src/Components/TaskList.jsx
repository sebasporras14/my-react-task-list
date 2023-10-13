
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
            style={{ textDecoration: props.completedTasks.includes(index) ? 'line-through' : 'none' }}
          >
            {task}
          </span>
          <button onClick={() => props.onDeleteTask(index)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;