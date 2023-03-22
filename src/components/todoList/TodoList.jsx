import { useState } from "react";
import TodoItem from "../todoItem";
import TodoAdd from "../todoAdd";
import list from "../../mock/list";
import "./index.css";

const TodoList = () => {
  const [value, setValue] = useState("");

  const localStorageTodo = JSON.parse(localStorage.getItem("todo"));
  const [arr, setArr] = useState(
    localStorageTodo || localStorage.setItem("todo", JSON.stringify([...list]))
  );

  const pushArray = (e) => {
    e.preventDefault();
    if (
      value != "" &&
      !arr.find((item) => item.text.toLowerCase() === value.toLowerCase())
    ) {
      const localStorageTodo = JSON.parse(localStorage.getItem("todo"));
      const newObj = {
        id: Date.now(),
        text: value.charAt(0).toUpperCase() + value.slice(1),
      };
      localStorage.setItem(
        "todo",
        JSON.stringify([newObj, ...localStorageTodo])
      );
      setArr([newObj, ...arr]);
    } else alert("Todo already present!");

    setValue("");
  };

  return (
    <div className="TodoList">
      <h1>TodoList</h1>
      <TodoAdd callback={pushArray} value={value} setValue={setValue} />
      {arr.map((todo) => (
        <TodoItem arr={arr} setArr={setArr} todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
