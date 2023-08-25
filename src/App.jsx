import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import CompletedList from "./components/CompletedList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TodoForm />} />
        <Route path="/completed-list" element={<CompletedList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
