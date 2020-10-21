import React from "react";
import "./App.css";
import Counter from './Counter'
import Todo from "./Todo";

function App () {
  return(
    <div className="app">
      <Counter />
      <h1>What shall i do today</h1>
      <Todo />
    </div>
  )
}



export default App;
