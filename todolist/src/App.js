import "./App.css";

import React from "react";
import AddTodo from "./container/AddTodo";
import TodoList from "./container/TodoList";
import Header from "./container/Header";

function App() {
  return (
    <div>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
