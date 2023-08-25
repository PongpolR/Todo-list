import "./App.css";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import CompletedList from "./components/CompletedList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoForm />} />
        <Route path="/completed-list" element={<CompletedList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
