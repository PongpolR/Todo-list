/* eslint-disable react/prop-types */
export default function List(props) {
  const task = props.data;
  console.log(task);
  return (
    <div>
      <p>{task.text}</p>
    </div>
  );
}
