import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/login";
import PageLayout from "./pages/pagelayout/pagelayout";
import Posts from "./pages/posts/posts";
import Approved from "./pages/approved/approved";
import Picked from "./pages/picked/picked";
import "./App.css";
import LoginLayout from "./pages/loginlayout/loginlayout";
import Register from "./pages/login/register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/">
              <Route path="/posts" element={<Posts />} />
              <Route path="/approved" element={<Approved />} />
              <Route path="/picked" element={<Picked />} />
            </Route>
          </Route>
          <Route element={<LoginLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path={"*"} element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
