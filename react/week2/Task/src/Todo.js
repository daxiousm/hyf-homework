import React, { useState } from 'react';
import './Todo.css';
import Task from './Task'



 const Todo = () => {
    
    const [tasks, setTasks] = useState([
        {
            description: "Get out of bed",
            completed: false
        },
        {
            description: " brush teeth",
            completed: false
        },
        {
            description: "eat breakfast",
            completed: false
        }
    ]);

   


    const addTask = () => {
        const getRandomTask = tasks[Math.floor(Math.random() * tasks.length)];
        const newTasks = [...tasks, { description:getRandomTask.description, completed: false }];
        setTasks(newTasks);
    };

    const handleClick = () => {
         addTask();
  };

    const completeTask = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    };

    const toggleComplete = (index) => {
    setTasks((prev) =>
      prev.map((task, taskIndex) =>
        taskIndex === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        
        <div className="todo-container">
            <button onClick={handleClick}>
                AddTask
            </button>
            
            <div className="tasks">
                {tasks.map((task, index) => (
                    <Task
                    task={task}
                    index={index}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    toggleComplete={toggleComplete}
                    key={index}
                    />
                ))}
            </div>
            
        </div>
    );
}

export default Todo;