function People() {
    return (  
        <div className="container">
            <div className="row">
                <h2 className="text-center" style={{color: '#424242'}}>People</h2>
                <div className="col-6 text-center p-5">
                   <img src="/assets/nithinKamath.jpg" alt="people" style={{borderRadius: "50%",height: "60%"}}/>
                   <h5 className="mt-3">Nitin Kamnath</h5>
                   <p>Founder, CEO</p>
                </div>
                <div className="col-6 p-5 mt-4" style={{fontSize: "1rem",lineHeight:'1.8rem',}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage<a href="#" style={{textDecoration: "none"}}> / TradingQnA / Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default People;