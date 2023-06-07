import {React} from 'react'
import { useNavigate } from "react-router-dom";



const Home = () => {

  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
  }

    return (
        <div>
          <h1>Home</h1>
          <button onClick={() => {navigate("/signup")}}>signUp</button>
          <button onClick={() => {navigate("/login")}}>Login</button>
          <button onClick={logout}>Logout</button>
        </div>
      );
}
 
export default Home;