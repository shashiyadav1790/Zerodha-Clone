function Univers() {
  return (
    <div className="container text-center mt-5">
          <p className="mb-5">
          Want to know more about our technology stack? Check out the
          <a style={{ textDecoration: "none" }} href="#">
            Zerodha.tech blog.
          </a>{" "}
        </p>
        <h2 className="mt-5" style={{color: "#424242"}}>The Zerodha Universe</h2>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      <div className="row text-center p-5 mt-5">
      
        <div className="col-4 ">
          <img
            src="/assets/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{ height: "30%" }}
          />
          <p className="mt-3 text-muted text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="/assets/sensibullLogo.svg"
            alt="zerodhaFundhouse"
            style={{ height: "20%" }}
          />
          <p className="mt-3 text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="/assets/smallcaseLogo.png"
            alt="zerodhaFundhouse"
            style={{ height: "30%" }}
          />
          <p className="mt-3 text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
      </div>

      <div className="row text-center p-5">
      
        <div className="col-4 ">
          <img
            src="/assets/tijori.svg"
            alt="zerodhaFundhouse"
            style={{ width: "40%" }}
          />
          <p className="mt-3 text-muted text-small">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="/assets/dittoLogo.png"
            alt="zerodhaFundhouse"
            style={{ width: "40%" }}
          />
          <p className="mt-3 text-muted text-small">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 ">
          <img
            src="/assets/streakLogo.png"
            alt="zerodhaFundhouse"
            style={{ width: "40%" }}
          />
          <p className="mt-3 text-muted text-small">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <a href="#" className="btn  fs-6 text-center mt-5" style={{width: "15%",margin: "0 auto",backgroundColor: "#387ed1",color: "white"}}>Sign up for free</a>
      </div>
     
      </div>
  );
}

export default Univers;
