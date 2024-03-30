import React, {  useState } from "react";
import { useDispatch } from "react-redux";

import {login} from "../../Store/LoginSlice.js";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const dispatch = useDispatch();
   // const { isAuthenticated ,userToken} = useSelector(
   //    (state) => state.LoginSlice
   //  );
   const handleSubmit = (e) => {
     e.preventDefault();
     dispatch(login({ email, password })).then(() => {
   
       window.location.href = "/admin";
  
     });
   };
    return (
        <>
         <div className="Login">
         <div className="login-container">
            <h2>Login</h2>
              <form onSubmit={handleSubmit}>
                 <input 
                 type="text"
                 name="username"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Username" 
                 required
                 />
                 <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  />
                 <input type="submit" />
              </form>
         </div>
         </div>
        </>
        )

}

export default Login