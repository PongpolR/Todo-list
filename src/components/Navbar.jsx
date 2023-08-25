import { Link } from "react-router-dom";
import "../styles/Navbar.css";
export default function Navbar() {
  return (
    <nav className="header">
      <Link to={"/"}>
        <h1 style={{ color: "white" }}>To-Do List</h1>
      </Link>
      <div className="menu">
        <Link to={"/"}>
          <h1>เพิ่มรายการ</h1>
        </Link>
        <Link to={"/completed-list"}>
          <h1>รายการที่ทำเสร็จ</h1>
        </Link>
      </div>
    </nav>
  );
}
