/* eslint-disable react/prop-types */
import "../styles/Form.css";
export default function AddForm(props) {
  const { addList, input, setInput, edit } = props;

  return (
    <>
      <form onSubmit={addList} className="form-input">
        <input
          className="text-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          {!edit ? "Add" : "Update"}
        </button>
      </form>
    </>
  );
}
