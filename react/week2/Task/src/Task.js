import React from 'react'

const Task = ({ task, index, completeTask, removeTask }) => {
    return (
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.description}

            <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            <button onClick={() => completeTask(index)}onClick={() => completeTask(index)}>Complete</button>

        </div>
    );
}
export default Task