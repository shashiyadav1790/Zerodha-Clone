

function Awards() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <img src='/assets/largestBroker.svg' alt='largestBroker'/>
                </div>
                <div className="col-6 p-5 mt-5">
                    <h2 className=''>Largest stock broker in India</h2>
                    <p className='mb-5'>2+ million Zerodha client contribute to over 15% of all retail order volumes in india daily by trading and investing in</p>
                        <div className="row">
                            <div className="col-6">
                             <ul>
                                <li>Future and options</li>
                                <li>Commodity derivatives</li>
                                <li>currency derivatives</li>
                            </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                <li>Stock & IPO</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and goverment</li>
                                </ul>
                            </div>
                        </div>
                        <img src='/assets/pressLogos.png' alt='pressLogos'style={{width: "90%"}}/>
                </div>
            </div>
        </div>
    );
}

export default Awards;