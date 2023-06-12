import Post from "../../components/post/post";
import useFetch from "react-fetch-hook";

export default function Approved(){

  const {isLoading, error, data} = useFetch("/api/posts/approved")
  if(isLoading) return <></>;

  const posts = data.map((post) => (
    <Post
      pid={post.pid}
      subr={post.subr}
      title={post.title}
      text={post.text}
      status={1}
    />
  ))

  return(<div className="posts">
    {posts}
  </div>)
}