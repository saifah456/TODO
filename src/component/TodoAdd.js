import { useState } from "react";
export default function TodoAdd(props) {
  const [input, setInput] = useState("");

  const itemHandler = (event) => {
    event.preventDefault();
    input &&
      props.updateTodo((oldValue) => {
        return [...oldValue, { id: props.generateUniqueId(), title: input }];
      });
    setInput("");
  };

  const inputHandler = (event) => {
    setInput(event.target.value);
  };

  return (
    <>
     
      <form>
        <input value={input} onChange={inputHandler} required />
        <button onClick={itemHandler}>Add Items</button>
      </form>
    </>
  );
}
