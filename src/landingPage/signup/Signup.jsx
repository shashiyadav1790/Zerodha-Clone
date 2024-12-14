import { useState } from "react";
import axios from "axios";

function Signup() {

    const [username,setusername] = useState("shashi");
    const [password,setpassword] = useState("4kljsdlfj");
    const [email,setemail] = useState("shash@gmail.com");

    const formsubmit = ()=>{
        axios.post("http://localhost:8080/signup",{
            username: username,
            password: password,
            email: email,
        })
    }
    return (  
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 mt-5">
                    <img src="/assets/landing.46a77378 (1).png" style={{width: "95%"}}></img>
                </div>
                <div className="col-6 mt-5">
                    
                    <form className="mt-4 needs-validations " noValidate style={{marginLeft: "20%"}}>
   
                               <h2 className="mt-5">Signup Now</h2>
                               <span className="mt-5">Or track your existing application.</span>
                                <div className="mb-5">
                                <label htmlFor="exampleInputEmail1" className="form-label mt-3">Email address</label>
                                <input type="text" name="username" className="form-control"  onChange={(e)=>{setusername(e.target.value)}} value={username}  style={{width: "50%"}}/>
                                <input type="email" name="email" className="form-control"  onChange={(e)=>{setemail(e.target.value)}} value={email}  style={{width: "50%"}}/>
                                <input type="password" name="password" className="form-control"  onChange={(e)=>{setpassword(e.target.value)}} value={password}  style={{width: "50%"}}/>
                                <p id="emailHelp" className="form-text">ll never share your email with anyone else. </p>
                            </div>
                                <button className="btn btn-primary" onClick={formsubmit}>Continue</button>
                    </form>
                
             
                </div>
            </div>
        </div>
    );
}

export default Signup;