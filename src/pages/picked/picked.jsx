import Post from "../../components/post/post";
import useFetch from "react-fetch-hook";

export default function Picked() {
  const username = localStorage.getItem("user");
  const { isLoading, error, data } = useFetch("/api/posts/picked", {
    headers: { username: username },
  });
  if (isLoading) return <></>;

  const posts = data.map((post) => (
    <Post
      pid={post.pid}
      subr={post.subr}
      title={post.title}
      text={post.text}
      status={4}
    />
  ));

  return <div className="posts">{posts}</div>;
}
