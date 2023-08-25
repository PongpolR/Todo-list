/* eslint-disable react/prop-types */
import { useState } from "react";
import AddForm from "./AddForm";
import List from "./List";
export default function TodoForm() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState();
  const [list, setList] = useState([]);

  function addList(e) {
    e.preventDefault();
    let newTask = {
      text: input,
      id: Math.floor(Math.random() * 1000),
      check: false,
    };
    setTask(newTask);
    setList([newTask, ...list]);
    setInput("");
  }
  return (
    <>
      <AddForm addList={addList} input={input} setInput={setInput} />
      {list.map((data, id) => {
        return <List key={id} data={data} />;
      })}
    </>
  );
}
