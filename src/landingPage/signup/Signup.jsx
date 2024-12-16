
import { useState } from "react";
import axios from "axios";
import { Link} from 'react-router-dom'; 
import "./login.css";

function Signup() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [error,setErrorMessage] = useState("");
    const [email, setemail] = useState("");

    const openLinkInNewTab = ( url ) => {
        const newTab = window.open(url, '_blank', 'noopener,noreferrer');
        if ( newTab ) newTab.opener = null;
      }  

    // const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
         
            const response = await axios.post("https://zerodhabackend-r6a5.onrender.com/signup", {
                username: username,
                password: password,
                email: email,
               
            });
            console.log(username);

         
            if (response.status === 200) {
               
                console.log("Signup successful!");
                // setTimeout(()=>{
                //     window.location.href("http://localhost:5174");
                // },1000)
                // openLinkInNewTab(' zerodha-dashboard-alpha.vercel.app')
                openLinkInNewTab("zerodha-dashboard-alpha.vercel.app")
            } else {
                console.log("Signup failed!");
            }
        } catch (error) {
                      // Extract and set a meaningful error message
    if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Server-provided error
      } else {
        setErrorMessage("Signup failed. Please try again."); // Fallback for other errors
      }
            
        }
        
    };



    // const navigate = useNavigate();
    // const [inputValue, setInputValue] = useState({
    //   email: "",
    //   password: "",
    //   username: "",
    // });
    // const { email, password, username } = inputValue;
    // const handleOnChange = (e) => {
    //   const { name, value } = e.target;
    //   setInputValue({
    //     ...inputValue,
    //     [name]: value,
    //   });
    // };
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   try {
    //     const { data } = await axios.post(
    //       "http://localhost:8080/signup",
    //       {
    //         ...inputValue,
    //       },
    //       { withCredentials: true }
    //     );
    //     const { success, message } = data;
    //     if (success) {
    //       setTimeout(() => {
    //         window.location.href = "http://localhost:5174/"
    //       }, 1000);
    //     } else {
    //      alert(message)
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   setInputValue({
    //     ...inputValue,
    //     email: "",
    //     password: "",
    //     username: "",
    //   });
    // };

    return (  
        <div className="container mt-5">
            <div className="row">
                <div className="col-8 mt-5">
                    <img src="/assets/landing.46a77378 (1).png" alt="Landing" />
                </div>
             
                 
        <div className="col-4">
          <form onSubmit={handleSubmit} style={{ border: "1px solid #ccc" }}>
            <div className="container">
              <h4 style={{fontWeight: "bold"}} className="mt-3">Signup Now</h4>
              <p>Please fill in this form to Signup.</p>
              <hr />

              <label htmlFor="email">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                className="form-control"
                required
              />

           <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="form-control"
                required
              />

              <label htmlFor="password" className="mt-3">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="form-control "
                required
              />

              {error && <p className="text-danger mt-2">{error}</p>}

              <label>
                <input type="checkbox" className="mt-2" /> Remember me
              </label>
              <button type="submit" className="btn btn-primary">
                  Signup Now
                </button>

              {/* <p>
                By logging in, you agree to our{" "}
                <a href="#" style={{ color: "dodgerblue" }}>
                  Terms & Privacy
                </a>
                .
              </p> */}

              <div className="clearfix">
               
                <Link to="/login">
                <button type="submit" className="btn btn-primary">
                  Log In
                </button>
                </Link>
               
              </div>
            </div>
          </form> 
                </div>
            </div>
        </div>
    );
}

export default Signup;
