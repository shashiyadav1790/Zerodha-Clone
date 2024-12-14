function Rc({image,productName,productDescription,tryDemo,learnMore,googleplay,appleplay}) {
    return (
        <div className="container">
              <div className="row p-3 ">
                <div className="col-6 mt-5 p-5">
                  <h2>{productName}</h2>
                  <p>{productDescription}</p>
                </div>
                <div className="col-6">
                    <img src={image} alt="console.png" style={{height: "70%"}}/>
                </div>
              </div>
        </div>
    );
}

export default Rc;