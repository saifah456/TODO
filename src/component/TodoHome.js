import TodoEdit from "./TodoEdit"
import TodoAdd from "./TodoAdd";
import TodoDelete from "./TodoDelete";
import { useState } from "react";
function generateUniqueId() {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000);
  const uniqueId = `${timestamp}${random}`;
  return uniqueId;
}

export default function TodoHome() {
  const [todo, setTodo] = useState([
    {
      id: generateUniqueId(),
      title: "",
    }
  ]);
  return (
    <>
      <h2>Amazing Todo List!!</h2>
      <TodoAdd updateTodo={setTodo} generateUniqueId={generateUniqueId} />
      {todo.length !== 0 ? todo.map((data) => (
        <li key={data.id}>
          {data.id} :{data.title}
          <TodoDelete itemid={data.id} updateTodo={setTodo} />
          {/* <TodoEdit itemid={data.id} updateTodo={setTodo.todo}/> */}
        </li>
      )) : <h2>Todo list is empty</h2>}
    </>
  );
}