/* eslint-disable react/prop-types */
export default function List(props) {
  // const task = props.data;
  const { data, editTask, deleteTask } = props;
  // console.log(task);
  return (
    <div>
      <p>{data.text}</p>
      <button onClick={() => deleteTask(data.id)}>Delete</button>
      <button onClick={() => editTask(data.id)}>Edit</button>
    </div>
  );
}
