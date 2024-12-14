

function Footer() {
  return (
    <div className="container border-top ">
      <div className="row mt-5 " >
        <div className="col">
          <div className="mb-3 mt-3">
            <img
              src="/assets/logo.svg"
              alt="logo"
              style={{ width: "50%" }}
            ></img>
          </div>
          <p style={{fontSize: "0.8rem"}}>
            © 2010 - 2024, Zerodha Broking Ltd.
            All rights reserved.
          </p>
    
          <i className="fa-brands fa-instagram " style={{marginLeft: "13px"}}></i>
          <i className="fa-brands fa-facebook"  style={{marginLeft: "13px"}}></i>
          <i className="fa-brands fa-square-twitter"  style={{marginLeft: "18px"}}></i>
          <i className="fa-brands fa-linkedin"  style={{marginLeft: "13px"}}></i>
         
          <i className="fa-brands fa-facebook"  style={{marginLeft: "13px"}}></i>
          <i className="fa-brands fa-youtube"  style={{marginLeft: "13px"}}></i>

        </div>
        <div className="col" >
         
          <ul className="" style={{listStyleType: "none",lineHeight: "2" ,fontSize: "14px"}}>
          <h2 style={{fontSize: "1.125rem",color: "#424242"}} className="" >Company</h2>
            <li>About</li>
            <li>Product</li>
            <li>Pricing</li>
            <li>Refral programe</li>
            <li>Careers</li>
            <li>Zerodha. tech</li>
            <li>Press & media</li>
            <li>Zerodha carres </li>
          </ul>
        </div>
        <div className="col">
       
          <ul className="" style={{listStyleType: "none",fontSize: "14px",lineHeight: "2"}}>
          <h2 style={{fontSize: "1.125rem",color: "#424242"}} className="">Support</h2>
            <li>Contact Us</li>
            <li>Support portal</li>
            <li>Z connect-blog</li>
            <li>List of charges</li>
            <li>Donloads and resources</li>
            <li>Video </li>
            <li>Market & Overview</li>
            <li>How to fill a complaint </li>
          </ul>
        </div>
        <div className="col" >
          
          <ul className="" style={{listStyleType: "none", fontSize: '14px',lineHeight: "2"}}>
          <h2 style={{fontSize: "1.125rem",color: "#424242"}} className="">Account</h2>
            <li>Open an account</li>
            <li>Fund transfer</li>
          </ul>
        </div>
        <div className="row text-muted  mt-3" style={{fontSize: "0.65rem"}}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSe​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI
          Registration no.: INZ000038238 Registered Address: Zerodha Broking
          Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
          School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
          any complaints pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>
          <a href="#" style={{ textDecoration: "none" }}>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </a>
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing. Attention investors:
          1. Stock brokers can accept securities as margins from clients only by
          way of pledge in the depository system w.e.f September 01, 2020. 2.
          Update your e-mail and phone number with your stock broker /
          depository participant and receive OTP directly from depository on
          your e-mail and/or mobile number to create pledge. 3. Check your
          securities / MF / bonds in the consolidated account statement issued
          by NSDL/CDSL every month.
        </p>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
