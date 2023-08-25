/* eslint-disable react/prop-types */
export default function List(props) {
  // const task = props.data;
  const { data, editTask, deleteTask, checkTask } = props;
  // console.log(task);
  // console.log(data.check);
  return (
    <div>
      <p>{data.text}</p>
      <button onClick={() => deleteTask(data.id)}>Delete</button>
      <button onClick={() => editTask(data.id)}>Edit</button>
      <input
        type="checkbox"
        onChange={() => {}}
        checked={data.check}
        onClick={() => checkTask(data.id)}
      />
    </div>
  );
}
