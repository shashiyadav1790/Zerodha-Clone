function Hero() {
    return (
         <div className="container-fluid support">
          <div className="row p-5">
              <div className="col-6 p-5" style={{color: 'white',}} >
                <h3 href="#" className="mb-5 " style={{color: 'white',textDecoration: "none"}}>Support portal</h3>
                <p className="fs-4">Search for an answer or browse help topics to create a ticket</p>
                <input className="mb-5" type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected.... " style={{width: "30rem",height: "3rem",borderRadius: "5px", border: "white"}}></input>
                
                  <a href="#" className="fs-5" style={{color: 'white',textDecoration: "none"}}>Track account opening</a>&nbsp; &nbsp;
                  <a href="#" className="fs-5" style={{color: 'white',textDecoration: "none"}}> Track segment activation</a>
                  <a href="#" className="fs-5" style={{color: 'white',textDecoration: "none"}}> Intraday margins</a>
                  <a href="#" className="fs-5"  style={{color: 'white',textDecoration: "none"}}>Kite user manual</a>
                
              </div>
              <div className="col-6 p-5" style={{color: 'white'}}>
                <h3><a href="#" style={{color: "white"}} className="ms-auto mb-5" >Track tickets</a></h3>
                <h5 className="mt-5 mb-3">Features</h5>
                <ol>
                  <li><a href="#" style={{color: "white"}}>Suspension of trading - IDFC Limited</a></li>
                  <br/>
                  <li><a href="#" style={{color: "white"}}>Rights Entitlements listing in October 2024</a></li>
                </ol>
              </div>
          </div>
         </div>
      );
}

export default Hero;