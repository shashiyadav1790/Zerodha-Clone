function Team() {
    return ( 
        <div className="container ">
            <div className="row text-center team p-5"  >
                <div className="col-4">
                    <img src="/assets/Nikhil.jpg" alt="Team"style={{height: "55%",borderRadius: "50%"}}/>
                    <h5 >Venu Madhav</h5>  
                    <p>COO</p>
                </div>
                <div className="col-4">
                <img src="/assets/Seema.jpg" alt="Team"style={{height: "55%",borderRadius: "50%"}}/>
                <h5>Nikhil Kamath
                </h5>  
                    <p>Co-founder & CFO</p>
                </div>
                <div className="col-4">
                <img src="/assets/Venu.jpg" alt="Team"style={{height: "55%",borderRadius: "50%"}}/>
                <h5>Dr. Kailash Nadh</h5>  
                    <p>CTO</p>
                </div>
            </div>
           
            <div className="row text-center teamb p-5">
            <div className="col-4">
                <img src="/assets/Hanan.jpg" alt="Team"style={{height: "55%",borderRadius: "50%"}}/>
                <h5>Hanan Delvi</h5>  
                    <p>CCO</p>
                </div>
                <div className="col-4">
                <img src="/assets/Kailash.jpg" alt="Team"style={{height: "55%",borderRadius: "50%"}}/>
                <h5>Seema Patil</h5>  
                    <p>Director</p>
                </div>
                <div className="col-4">
                <img src="/assets/karthik.jpg" alt="Team"style={{height: "55%",borderRadius: "50%"}}/>
                <h5>Karthik Rangappa</h5>  
                    <p>Chief of Education</p>
                </div>
            </div>
         </div>
    
    );
}

export default Team;