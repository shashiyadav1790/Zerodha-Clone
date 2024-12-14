function CreateTicket() {
    return (
        <div className="container p-5">
          <div className="row ">
            <p className="mb-5 fs-4 mt-5" style={{color: '#424242'}}>To create a ticket, select a relevant topic</p>
            <div className="col ">
             <h3><a href="#" style={{textDecoration: "none",color: "#222",fontSize: "1rem",fontWeight: '400'}}><i className="fa-solid fa-circle-plus"></i> &nbsp;Account Openning</a></h3> 
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Getting start</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Onlin</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Ofline</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Charges</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Company</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Resident Charges</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Rules relugation</a></span><br/>

            </div>
            <div className="col">
              <h3><a href="#" style={{textDecoration: "none",color: "#222",fontSize: "1rem",fontWeight: '400'}}><i className="fa-solid fa-user"></i>&nbsp;Your Zerodha Account</a></h3>
              <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Your profile</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Nomination</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Transfer</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Your account</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Account modification</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>CMR</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Ud</a></span><br/>
            </div>
            <div className="col" >
             <h3><a href="#" style={{textDecoration: "none",color: "#222",fontSize: "1rem",fontWeight: '400'}}><i className="fa-solid fa-chart-simple"></i> &nbsp;Trading & markets</a></h3>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Kite</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Margins</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Features</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Corprate</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Action</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Product</a></span><br/>
             <span><a href="#" style={{textDecoration: "none",color: "#222"}}>Order Types</a></span> 
            </div>
          </div>
        </div>
      );
}

export default CreateTicket;