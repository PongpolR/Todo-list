import { Link } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <Link to={"/"}>
        <h3>To-Do List</h3>
      </Link>
      <Link to={"/completed-list"}>รายการที่ทำเสร็จ</Link>
      <hr />
    </nav>
  );
}
