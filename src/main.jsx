
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./landingPage/home/Homepage.jsx";

import AboutPage from "./landingPage/about/AboutPage.jsx";
import PricingPage from "./landingPage/pricing/PricingPage.jsx";
import SupportPage from "./landingPage/support/Supportpage.jsx";
import Productpage from "./landingPage/products/ProductsPage.jsx";
import "./index.css";
import Navbar from "./landingPage/Navbar.jsx";
import Footer from "./landingPage/Footer.jsx";
import NotFound from "./landingPage/Notfound.jsx";
import Login from "./landingPage/loginPage/Logins.jsx";
import SignUp from "./landingPage/signup/Signup.jsx";




    // const data = await Response.json();
    // if(data.success == true){
    //    navigate("/");
    // }


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
  
      <Route path="/" element={<Homepage />}></Route>
    
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/pricing" element={<PricingPage/>}></Route>

      <Route path="/product" element={<Productpage />}></Route>
      <Route path="/support" element={<SupportPage />}></Route>
      <Route path="*" element={<NotFound />}></Route>

    </Routes>
    <Footer/>
  </BrowserRouter>
);
