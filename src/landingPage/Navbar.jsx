
import {Link } from "react-router-dom";

function Navbar() {
  const openLinkInNewTab = ( url ) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if ( newTab ) newTab.opener = null;
  }  
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
           
            <li className="nav-item">
            <button onClick={ () => openLinkInNewTab(' http://localhost:5173/')} className="nav-link" style={{color: "#2f4f91",fontWeight: "bold"}}> Dashboard </button>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/signup">
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/pricing" >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
  );
}

export default Navbar;
