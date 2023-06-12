import "./post.css";
import "boxicons";

function approve(pid, subr) {
  fetch("/api/posts/approve", {
    method: "POST",
    headers: { pid: pid, subr: subr },
  });
}

function reject(pid, subr) {
  fetch("/api/posts/reject", {
    method: "POST",
    headers: { pid: pid, subr: subr },
  });
}

function pick(pid, subr, username) {
  fetch("/api/posts/pick", {
    method: "POST",
    headers: { pid: pid, subr: subr, username: username },
  });
}

function finish(pid, subr) {
  fetch("/api/posts/finish", {
    method: "POST",
    headers: { pid: pid, subr: subr },
  });
}

function Pick() {
  return (
    <div className="options">
      <div
        onClick={(e) => {
          let post = e.currentTarget.parentElement.parentElement;
          let pid = post.id;
          let subr = post.getAttribute("subr");
          let username = localStorage.getItem("user");
          pick(pid, subr, username);
          post.remove();
        }}
        className="option"
      >
        <box-icon name="edit"></box-icon>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="options">
      <div
        onClick={(e) => {
          let post = e.currentTarget.parentElement.parentElement;
          let pid = post.id;
          let subr = post.getAttribute("subr");
          approve(pid, subr);
          post.remove();
        }}
        className="option"
      >
        <box-icon name="check"></box-icon>
      </div>
      <div
        onClick={(e) => {
          let post = e.currentTarget.parentElement.parentElement;
          let pid = post.id;
          let subr = post.getAttribute("subr");
          reject(pid, subr);
          post.remove();
        }}
        className="option"
      >
        <box-icon name="x"></box-icon>
      </div>
    </div>
  );
}

function Finish() {
  return (
    <div className="options">
      <div
        onClick={(e) => {
          let post = e.currentTarget.parentElement.parentElement;
          let pid = post.id;
          let subr = post.getAttribute("subr");
          finish(pid, subr);
          post.remove();
        }}
        className="option"
      >
        <box-icon name="check-double"></box-icon>
      </div>
    </div>
  );
}

export default function Post(props) {
  return (
    <div className="post" id={props.pid} subr={props.subr}>
      <div className="content">
        <p className="title">{props.title}</p>
        <p className="text">{props.text}</p>
      </div>
      {props.status === 0 ? Options() : <></>}
      {props.status === 1 ? Pick() : <></>}
      {props.status === 4 ? Finish() : <></>}
    </div>
  );
}
