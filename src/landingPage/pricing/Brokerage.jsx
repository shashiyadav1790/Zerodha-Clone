function Brokerage() {
    return ( 
        <div className="container">
            <div className="row">
                <h2 style={{color: "#424242"}} className="mb-5">Charge explained</h2>
                <div className="col-6 p-3" >
                    <p style={{fontSize: "1rem"}}>Securities/Commodities transaction tax</p>
                    <p style={{fontSize: ".75rem"}}>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p style={{fontSize: ".75rem"}}>When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                    <p style={{fontSize: "1rem"}}>Transaction/Turnover Charges</p>
                    <p style={{fontSize: ".75rem"}}>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p style={{fontSize: ".75rem"}}>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                </div>
                <div className="col-6 p-3">
                    <p style={{fontSize: "1rem"}}>GST</p>
                    <p style={{fontSize: ".75rem"}}>Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>
                    <p style={{fontSize: "1rem"}}>SEBI Charges</p>
                    <p style={{fontSize: ".75rem"}}>Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
                    <p style={{fontSize: "1rem"}}>DP (Depository participant) charges</p>
                    <p style={{fontSize: ".75rem"}}>₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;