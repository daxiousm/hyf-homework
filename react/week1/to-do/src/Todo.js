import React from "react";
import "./Todo.css";

const ToDos = (props) => {
  console.log(props);
  const { descriptions, deadlines } = props;

  const MyDescriptions = (props) => {
    return (
      <div className="description">
        <p>{props.description}</p>
      </div>
    );
  };

  const MyDeadLines = (props) => {
    return (
      <div>
        <p>{props.deadline}</p>
      </div>
    );
  };

  return (
    <div className="tasks">
      <div className="dos">
        <strong className="desc">Descriptions:</strong>
        {descriptions.map((description) => {
          return <MyDescriptions key={description} description={description} />;
        })}
      </div>
      <div className="dos">
        <strong className="deadline">Deadlines:</strong>
        {deadlines.map((deadline) => {
          return <MyDeadLines key={deadline} deadline={deadline} />;
        })}
      </div>
    </div>
  );
};

export default ToDos;
