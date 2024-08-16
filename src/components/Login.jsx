import { useState,useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser({username, password});
        setUsername("");
        setPassword("");
    }

    return ( 
        <div>
            <h2>Login Page</h2>
            <input type="text" placeholder="UserName"
            value={username} onChange={(e)=> setUsername(e.target.value)} required />
            &#160;
            <input type="password" placeholder="Password"
            value={password} onChange={(e)=> setPassword(e.target.value)} required />
            <button onClick={handleSubmit}>Submit</button>
        </div>
     );
}

export default Login;
    
    