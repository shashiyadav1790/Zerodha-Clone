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
import "./login.css";



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
        openLinkInNewTab("zerodha-dashboard-alpha.vercel.app")
      }
    } catch (error) {
          // Extract and set a meaningful error message
    if (error.response && error.response.data && error.response.data.message) {
      setErrorMessage(error.response.data.message); // Server-provided error
    } else {
      setErrorMessage("Login failed. Please try again."); // Fallback for other errors
    }
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-8 mt-5">
          <img src="/assets/landing.46a77378 (1).png" alt="Landing" />
        </div>
        <div className="col-4 mt-5 ">
          <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc" }}>
            <div className="container bg-white" >
              <h4 style={{fontWeight: "bold"}}>Login</h4>
              <p>Please fill in this form to log in.</p>
              <hr />

              <label htmlFor="email">
                <b>username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                required
              />

              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                required
              />

              {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}

              <label>
                <input type="checkbox" className="me-2" /> Remember me
              </label>

              {/* <p>
                By logging in, you agree to our{" "}
                <a href="#" style={{ color: "dodgerblue" }}>
                  Terms & Privacy
                </a>
                .
              </p> */}

              <div className="clearfix">
                <button type="button" className="btn btn-secondary me-2">
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
