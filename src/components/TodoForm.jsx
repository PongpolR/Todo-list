/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AddForm from "./AddForm";
import List from "./List";
export default function TodoForm() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState();
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  // const []
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    // call when state task re render
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  function addList(e) {
    e.preventDefault();
    if (edit) {
      console.log("yes");
      let item = list.map((item) => {
        if (item.id == parseInt(editId))
          return (item = {
            ...item,
            text: input,
          });
        return (item = {
          ...item,
        });
      });
      console.log(input);
      console.log(item);
      setList(item);
      setEdit(false);
      setInput("");
    } else if (!input) {
      alert("type your task");
    } else {
      let newTask = {
        text: input,
        id: Math.floor(Math.random() * 1000),
        check: false,
      };
      setTask(newTask);
      setList([newTask, ...list]);
      setInput("");
    }
  }

  function deleteTask(id) {
    const updateList = list.filter((item) => item.id !== id);
    setList(updateList);
  }

  function editTask(id) {
    console.log(id);
    let task = list.find((item) => item.id === id);
    console.log(task);
    setInput(task.text);
    setEdit(true);
    setEditId(id);
    console.log(edit);
  }

  function checkTask(id) {
    // console.log(id);
    let task = list.map((item) => {
      if (item.id === id) {
        let checked = item.check;
        item = {
          ...item,
          check: !checked,
        };
      }
      return (item = {
        ...item,
      });
    });
    setList(task);
    console.log(task);
  }

  return (
    <>
      <AddForm
        addList={addList}
        input={input}
        setInput={setInput}
        editTask={editTask}
        edit={edit}
      />
      {list.length !== 0 &&
        list.map((data, id) => {
          return (
            <List
              key={id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
              checkTask={checkTask}
            />
          );
        })}
    </>
  );
}
