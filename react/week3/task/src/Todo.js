import React, { useEffect, useState } from 'react';
import './Todo.css';
import Task from './Task'
import TodoForm from './TodoForm'


 const Todo = () => {

    const [tasks, setTasks] = useState([]);
    
    useEffect(() =>{
        
        fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
        .then(results => results.json())
        .then(data => {
            setTasks(data)
        })
    }, [setTasks])




    const addTask = task => {
    if (!task.description || /^\s*$/.test(task.description)) {
      return;
    }

    const newTasks = [task, ...tasks];

    setTasks(newTasks);
    console.log(...tasks);
  };

    const handleClick = () => {
         addTask();
  };

  const updateTask = (taskId,newValue) => {
      if((!newValue.description) || /^\s*$/.test(newValue.description)){
          return
      }
      setTasks(prev =>prev.map(tasks.id === taskId ? newValue:tasks))
  }

    const completeTask = id => {
        const newTasks = [...tasks];
        newTasks[id].completed = true;
        setTasks(newTasks);
    };

    const removeTask = id => {
        const newTasks = [...tasks];
        newTasks.splice(id, 1);
        setTasks(newTasks);
    };

    return (

        <div className="todo-container">
            <button onClick={handleClick}>
                AddTask
            </button>
           < TodoForm onSubmit={addTask} />
            <div className="tasks">
                {setTasks.map((setTask, id) => (
                    <Task
                    description={setTask.description}
                    deadline={setTask.deadline}
                    setTask={setTask}
                    completeTask={completeTask}
                    removeTask={removeTask}
                    updateTask={updateTask}
                    key={id}
                    />
                
                ))}
            </div>
            
        </div>
    );
}


export default Todo