

function Pricing() {
    return (
       <div className="container mt-5">
        <div className="row">
            <div className="col-4 ">
                <h2 className='mb-3 fs-2' style={{color: "#424242"}}>Unbeatable pricing</h2>
                <p>We pointerd the concept of discount broking and price transprancy in india. flat fees and no hidden charges</p>
                <a href='#' className='fs-5' style={{textDecoration: "none"}}>See pricing &#8594;</a>
            </div>
            <div className="col-2"></div>
            <div className="col-6"> 
                <div className="row text-center">
                    <div className='col-6 border p-3'>
                    <h1>&#8377;0</h1>
                    <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='col-6 border p-3'>
                    <h1>&#8377;0</h1>
                    <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
      );
}

export default Pricing;