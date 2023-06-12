import { Outlet } from "react-router-dom";
import "./loginlayout.css";

export default function LoginLayout() {
  return (
    <div className="layout">
      <Outlet></Outlet>
    </div>
  );
}
