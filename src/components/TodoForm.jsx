/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import AddForm from "./AddForm";
import List from "./List";
export default function TodoForm(props) {
  const { completedList } = props;
  // console.log(completedList);

  const [input, setInput] = useState("");
  const [task, setTask] = useState();
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState("");
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );
  const [listComplete, setListComplete] = useState(
    JSON.parse(localStorage.getItem("listComplete")) || []
  );

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("listComplete", JSON.stringify(listComplete));
  }, [list, listComplete]);

  function editItem(list) {
    let editList = list.map((item) => {
      if (item.id == parseInt(editId))
        return (item = {
          ...item,
          text: input,
        });
      return (item = {
        ...item,
      });
    });
    return editList;
  }

  function addList(e) {
    e.preventDefault();
    if (edit) {
      let item = editItem(list);
      let itemComplete = editItem(listComplete);
      // let item = list.map((item) => {
      //   if (item.id == parseInt(editId))
      //     return (item = {
      //       ...item,
      //       text: input,
      //     });
      //   return (item = {
      //     ...item,
      //   });
      // });
      // let itemComplete = listComplete.map((item) => {
      //   if (item.id == parseInt(editId))
      //     return (item = {
      //       ...item,
      //       text: input,
      //     });
      //   return (item = {
      //     ...item,
      //   });
      // });
      console.log(input);
      console.log(item);
      console.log(itemComplete);
      setList(item);
      setListComplete(itemComplete);
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
    const updateListComplete = listComplete.filter((item) => item.id !== id);
    setList(updateList);
    setListComplete(updateListComplete);
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
        if (item.check == true) {
          setListComplete([item, ...listComplete]);
        } else if (item.check == false) {
          let checkId = listComplete.filter((item) => {
            return item.id !== id;
          });
          console.log(checkId);
          setListComplete(checkId);
        }
      }
      return (item = {
        ...item,
      });
    });

    setList(task);

    console.log(task);
    console.log(listComplete);
  }

  return (
    <>
      {!completedList ? (
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
      ) : (
        <>
          {listComplete.length !== 0 &&
            listComplete.map((data, id) => {
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
      )}
    </>
  );
}
