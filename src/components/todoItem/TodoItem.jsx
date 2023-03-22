import { useState } from "react";
import { FiCircle, FiX } from "react-icons/fi";

import "./index.css";

const TodoItem = ({ arr, setArr, todo }) => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [newArr, setNewArr] = useState([]);

  const onHandleClick = () => {
    setIsEmpty((prev) => !prev);
    const arrCopy = Array.from(arr);
    const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === todo.id);
    const objSelected = arrCopy.find((obj) => obj.id === todo.id);
    arrCopy.splice(objWithIdIndex, 1);
    arrCopy.push(objSelected);
    setArr(arrCopy);
  };

  const deleteFunc = () => {
    const arrCopy = Array.from(arr);
    const objWithIdIndex = arrCopy.findIndex((obj) => obj.id === todo.id);
    arrCopy.splice(objWithIdIndex, 1);
    setArr(arrCopy);

    const localStorageTodoList = JSON.parse(localStorage.getItem("todo")) || [];

    for (let i = 0; i < localStorageTodoList.length; i++) {
      if (localStorageTodoList[i].id === todo.id)
        localStorageTodoList.splice(i, 1);
    }
    localStorage.setItem("todo", JSON.stringify([...localStorageTodoList]));
  };

  return (
    <div className="TodoItem">
      <div className="TodoItem_content">
        <FiCircle
          onClick={onHandleClick}
          className={`TodoItem_emptyCircle ${isEmpty && "fill"}`}
        />
        <p className={isEmpty && "done_element"}>{todo.text}</p>
      </div>
      <FiX onClick={deleteFunc} className="TodoItem_deleteButton" />
    </div>
  );
};

export default TodoItem;
