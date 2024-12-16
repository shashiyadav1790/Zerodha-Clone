// import {useState} from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";


// function Login() {
//     const [username,setusername] = useState("");
//     const [password,setpassword] = useState("");

//     const navigate = useNavigate();

//     const formSubmit = async(e)=>{
//             e.preventDefault();
//             try{
//                 const response = await axios.post("http://localhost:8080/login",{
                
//                     username: username,
//                     password: password,
//                 })
    
//                 if(response.status == 200){
//                     console.log("login successful");
//                     navigate("/");
//                 }else{
//                     console.log("signup failed");
//                 }
//             }catch(error){
//                 console.log("error: during signup",error);
//             }
            
// }


//     return ( 
//         <div className="container">
//             <div className="row mt-5">
//                 <div className="col-8">
//                 <img src="/assets/landing.46a77378 (1).png" ></img>
//                 </div>
//                 <div className="col-4">
//                        <form className="mt-4 needs-validations mt-5 " noValidate >
//                             <h2 className="mt-5">Login Now</h2>
//                             <label className="form-label mt-3">Username</label>
//                             <input type="text" name="username" className="form-control" value={username} onChange={(e)=>setusername(e.target.value)} placeholder="enter your username"/>
//                             <label className="form-label mt-3">Password</label>
//                             <input type="password" name="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} value={password} placeholder="enter your password"/>
//                             <button className="btn btn-success mt-3" type="submit" onClick={formSubmit}>Continue</button>
//                        </form>
//                 </div>
//             </div>
//         </div>
//      );
// }

// export default Login;

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const openLinkInNewTab = ( url ) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if ( newTab ) newTab.opener = null;
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://zerodhabackend-r6a5.onrender.com/login", {
        username,
        password,
      });

      if (response.status === 200) {
        openLinkInNewTab('zerodha-dashboard-alpha.vercel.app/')
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-8">
            <img src="/assets/landing.46a77378 (1).png" ></img>
            </div>
            <div className="col-4">
                        <h2 className="mt-5">Login</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    </div>
                    {errorMessage && <p className="text-danger">{errorMessage}</p>}
                    <button type="submit" className="btn btn-primary">
                    Login
                    </button>
                </form>
            </div>
        </div>
     
    </div>
  );
}

export default Login;

