import React from "react";
import "./Todo.css";

const Todo = ({ description, deadline }) => {

  return (
    <div className="tasks">
      <div className="dos">
        <strong className="desc">Description:</strong>
          <div className="description">
            <p>{props.description}</p>
          </div>
      </div>
      <div className="dos">
        <strong className="deadline">Deadline:</strong>
          <div className="deadline">
            <p>{props.deadline}</p>
          </div>
      </div>
    </div>
  );
};

export default Todo;
