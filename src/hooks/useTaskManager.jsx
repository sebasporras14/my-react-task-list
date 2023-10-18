import { useState } from 'react';

function useTaskManager() {
  const [tasks, setTasks] = useState([]);

  // Función para crear una nueva tarea
  const createTask = (text) => {
    const newTask = { text, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Función para borrar una tarea por índice
  const deleteTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks.splice(index, 1);
      return newTasks;
    });
  };

  // Función para actualizar una tarea por índice
  const updateTask = (index, updatedTask) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index] = updatedTask;
      return newTasks;
    });
  };

  return { tasks, createTask, deleteTask, updateTask };
}

export default useTaskManager;