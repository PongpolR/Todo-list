import TodoForm from "./TodoForm";
import "../styles/Form.css";
export default function CompletedList() {
  return (
    <>
      <TodoForm completedList={true} />
    </>
  );
}
