/* eslint-disable react/prop-types */
import "../styles/Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
export default function List(props) {
  // const task = props.data;
  const { data, editTask, deleteTask, checkTask } = props;
  // console.log(task);
  // console.log(data.check);
  return (
    <div className="list">
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => {}}
        checked={data.check}
        onClick={() => checkTask(data.id)}
      />
      <div className="description">
        <p className="text-des">{data.text}</p>
        <p className="text-date">{data.date}</p>
      </div>
      <div className="crud-btn">
        <div className="icon">
          <div className="delete-icon">
            <FontAwesomeIcon
              onClick={() => deleteTask(data.id)}
              icon={faTrashCan}
            />
          </div>
          <div className="edit-icon">
            <FontAwesomeIcon
              icon={faPenToSquare}
              onClick={() => editTask(data.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
