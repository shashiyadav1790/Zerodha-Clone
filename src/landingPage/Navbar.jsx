
import {Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  // const openLinkInNewTab = ( url ) => {
  //   const newTab = window.open(url, '_blank', 'noopener,noreferrer');
  //   if ( newTab ) newTab.opener = null;
  const [selectedMenu, setSelectedMenu] = useState(0);
  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";


 // }  
  return (
     
      <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom fixed-top ">
        <div className="container" >
          <Link className="navbar-brand" to="/">
            <img src="/assets/logo.svg" alt="zerodha" style={{width: "25%"}}/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
           
            {/* <li className="nav-item">
            <button onClick={ () => openLinkInNewTab(' http://localhost:5174/')} className="nav-link" style={{color: "#2f4f91",fontWeight: "bold"}}> Dashboard </button>
              </li> */}
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/signup" onClick={() => handleMenuClick(0)} >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Signup
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/About" onClick={() => handleMenuClick(1)} >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                About
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/product" onClick={() => handleMenuClick(2)} >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Product
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/pricing" onClick={() => handleMenuClick(3)} >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Pricing
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/support" onClick={() => handleMenuClick(4)} >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Support
              </p>
            </Link>
          </li>
            </ul>
          </div>
        </div>
      </nav>
      
  );
}

export default Navbar;
