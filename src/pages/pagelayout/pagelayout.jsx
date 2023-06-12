import { Outlet } from "react-router-dom";
import NavBar from "../../components/navbar/navbar";
import useFetch from "react-fetch-hook";
import { useNavigate } from "react-router-dom";


export default function PageLayout() {
  const navigator = useNavigate() 
  const user = localStorage.getItem("user")
  const {isLoading, error, data} = useFetch("/api/user", {headers: {user: user}})
  if(isLoading) return(
    <div>
      <NavBar/>
    </div>
  )
  
  if(!data){
    navigator("/login")
  }

  return (
    <div>
      <NavBar/>
      <Outlet />
    </div>
  );
}
