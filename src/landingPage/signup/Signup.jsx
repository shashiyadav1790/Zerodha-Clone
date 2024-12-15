
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'; 

function Signup() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    const navigate = useNavigate(); 

    const formsubmit = async (e) => {
        e.preventDefault();

        try {
         
            const response = await axios.post("http://localhost:8080/signup", {
                username: username,
                password: password,
                email: email,
            });

         
            if (response.status === 200) {
                console.log("Signup successful!");
                navigate("/");
            } else {
                console.log("Signup failed!");
            }
        } catch (err) {
            console.error("Error during signup:", err);
        }
    };

    return (  
        <div className="container mt-5">
            <div className="row">
                <div className="col-8 mt-5">
                    <img src="/assets/landing.46a77378 (1).png" alt="Landing" />
                </div>
                <div className="col-4 mt-5">
                    <form className="mt-4 needs-validation" noValidate>
                        <h2>Signup Now</h2>
                        <span className="mt-5">Or track your existing application.</span>
                        <div className="mb-5">
                            <label htmlFor="username" className="form-label mt-3">Enter your username</label>
                            <input 
                                type="text" 
                                name="username" 
                                className="form-control" 
                                onChange={(e) => setusername(e.target.value)} 
                                value={username} 
                                style={{ width: "70%" }} 
                            />
                            <label htmlFor="email" className="form-label mt-3">Enter your email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                onChange={(e) => setemail(e.target.value)} 
                                value={email} 
                                style={{ width: "70%" }} 
                            />
                            <label htmlFor="password" className="form-label mt-3">Set your password</label>
                            <input 
                                type="password" 
                                name="password" 
                                className="form-control" 
                                onChange={(e) => setpassword(e.target.value)} 
                                value={password} 
                                style={{ width: "70%" }} 
                            />
                            <p id="emailHelp" className="form-text">We'll never share your email with anyone else.</p>
                            <button 
                                type="button" 
                                className="btn btn-primary" 
                                onClick={formsubmit}>
                                Continue
                            </button>
                            <p className="mt-3 mb-5">
                                Already have an account?{' '}
                                <Link to="/login">Login here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
