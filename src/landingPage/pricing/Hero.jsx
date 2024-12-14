function Hero() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row text-center mt-5">
                <h1 style={{color: "#424242",fontWeight: "500"}}className="mt-5" >Charges</h1>
                <p className="mt-3 mb-5 text-muted" style={{fontSize: "1.25rem",fontWeight: "400",marginTop: "10px"}}>List of all charges and taxes</p>
                <div className="col-4">
                    <img src="/assets/pricing-eq.svg" alt="pricing-eq"/>
                    <h5>Free equity delivery</h5>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage</p>
                </div>
                <div className="col-4">
                    <img src="/assets/other-trades.svg" alt="trades"/>
                    <h5>Intraday and F&O trades</h5>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4">
                    <img src="/assets/pricing-eq1.svg" alt="pricing-eq2"/>
                    <h5>Free direct MF</h5>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
        </div>
    );
}

export default Hero;