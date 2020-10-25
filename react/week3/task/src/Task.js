import React, { useState} from 'react'
import TodoForm from './TodoForm'

const Task = ({ task, id, completeTask, removeTask,updateTask}) => {
    
    const [edit, setEdit] = useState({
        id:null,
        value:''
    })
    
    const submitUpdate = value => {
        updateTask(edit.id,value)
        setEdit({
            id:null,
            value:''
        })
      
    }
     if(edit.id){
         return <TodoForm edit={edit} onSubmit={submitUpdate} />
     }
    
    
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.description}

            <button style={{ background: "red" }} onClick={() => removeTask(id)}>x</button>
            <button onClick={() => completeTask(id)}>Complete</button>

            <button onClick={() => setEdit({ id: task.id, value: task.description })}></button>

        </div>
    );
}
export default Task