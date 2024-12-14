function Lc({image,productName,productDescription,tryDemo,learnMore,googleplay,appleplay}) {
    return (
        <div className="container">
             <div className="row">
                <div className="col-8 p-5 ">
                   <img src={image} alt="Kite"/>
                </div>
                <div className="col-4 p-5 mt-5">
                  <h2 style={{color: "#424242",marginBottom: "1rem"}}>{productName}</h2>
                  <p className="" style={{lineHeight: "1.5"}}>{productDescription}</p>
                  <a href="#" style={{textDecoration: "none"}}>{tryDemo}&#8594;</a> &nbsp; &nbsp;
                  <a href="#" style={{textDecoration: 'none'}}>{learnMore} 	&#8594;</a>
                  <div className="row mt-3">
                     <img src={googleplay} alt="google play button" style={{width: "50%"}}/>
                     <img src={appleplay}alt="apple play button" style={{width: "50%"}}/>
                  </div>
                </div>
            </div>

       

        </div>
    );
}

export default Lc;