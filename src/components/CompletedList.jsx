import TodoForm from "./TodoForm";
export default function CompletedList() {
  return (
    <>
      <TodoForm completedList={true} />
    </>
  );
}
