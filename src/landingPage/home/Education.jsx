


function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row p-3">
                <div className="col-6">
                      <img src='/assets/education.svg' alt='education'/>
                </div>
                <div className="col-6 p-3">
                 <h2 className='mb-3 fs-3'>Free and open market education</h2>

                 <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                 <a style={{textDecoration: "none"}}  href='#'>Varsity &#8594;</a>


                 <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                 <a style={{textDecoration: "none"}} href='#'>Trading Q&A &#8594;</a>

                </div>
            </div>
        </div>
     );
}

export default Education;