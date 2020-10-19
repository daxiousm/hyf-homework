import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

const todos = [
  {
    description: "Get out of bed",
    deadline: "wed sep 13 2017"
  },
   {
    description: "brush teeth",
    deadline: "Thu Sep 14 2017"
  },
   {
    description: "eat breakfast",
    deadline: "Fri Sep 15 2017"
  },
];

function App() {
  return (
    <div className="App">
      {todos.map((todo) => {
        return (
          <Todo descriptions={todo.descriptions} deadlines={todo.deadlines} />
        );
      })}

    </div>
  );
}

export default App;
