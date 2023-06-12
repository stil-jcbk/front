import "./posts.css"
import Post from "../../components/post/post"
import useFetch from "react-fetch-hook"

export default function Posts(){

  const {isLoading, error, data} = useFetch("/api/posts")
  if(isLoading) return <></>;

  const posts = data.map((post) => (
    <Post
      pid={post.pid}
      subr={post.subr}
      title={post.title}
      text={post.text}
      status={0}
    />
  ))

  return(<div className="posts">
    {posts}
  </div>)
}