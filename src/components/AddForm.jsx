/* eslint-disable react/prop-types */
export default function AddForm(props) {
  const { addList, input, setInput, edit } = props;

  return (
    <>
      <form onSubmit={addList}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">{!edit ? "Add" : "Update"}</button>
      </form>
    </>
  );
}
