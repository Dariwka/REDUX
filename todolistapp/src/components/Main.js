import React, { useState } from "react";
import InputTodo from "./InputTodo";
import ListTodo from "./ListTodo";
import "../components/css/Main.css";

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState({ value: "" });

  const inputValueHandler = (event) => {
    setTodos({
      value: event.target.value,
    });
  };

  const addTodosHandler = (e) => {
    e.preventDefauls();
    setTodos([
      ...todos,
      { note: input.value, id: Date.now(), completed: false },
    ]);
  };

  return (
    <main>
      <InputTodo input={inputValueHandler} submit={addTodosHandler} />
      <ListTodo />
    </main>
  );
};

export default Main;
