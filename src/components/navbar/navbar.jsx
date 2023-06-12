import "./navbar.css";

function logout() {
  localStorage.removeItem("user");
}

export default function NavBar() {
  return (
    <div className="navbar">
      <p className="hero">REDDIT</p>
      <div className="nav">
        <a href="/posts">posts</a>
        <a href="/approved">approved</a>
        <a href="/picked">picked</a>
        <a href="/scan">scan</a>
        <a
          href="/login"
          onClick={() => {
            logout();
          }}
        >
          logout
        </a>
      </div>
    </div>
  );
}
