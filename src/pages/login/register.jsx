import "./login.css";
import { useNavigate } from "react-router-dom";

function send(username, pin, navigator) {
  // console.log(username)
  fetch("/api/user/register", {
    headers: { username: username, pin: pin },
  }).then((response) => {
    let status = response.status;
    if (status === 200) {
      localStorage.setItem("user", username);
      navigator("/posts");
      return;
    }
    alert("Wrong credentials");
    return;
  });
}

export default function Register() {
  const navigator = useNavigate();

  return (
    <div className="login">
      <p>username:</p>
      <input id="username" maxLength={15} type="text" />
      <p>pin:</p>
      <input
        id="pin"
        maxLength={4}
        type="text"
        inputMode="numeric"
        pattern="[0-9]+"
      />
      <button
        onClick={() => {
          send(
            document.getElementById("username").value,
            document.getElementById("pin").value,
            navigator
          );
        }}
        className="btn"
      >
        REGISTER
      </button>
      <a className="switch" href="/login">
        login
      </a>
    </div>
  );
}
