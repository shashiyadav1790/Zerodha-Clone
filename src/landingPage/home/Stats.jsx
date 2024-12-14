

function Stats() {
    return ( 
        <div className="container ">
            <div className="row">
                <div className="col-6 p-3">
                    <h2 className='mb-5 mt-3' style={{color: "#424242"}}>Trust with confidence</h2>
                    <div className='mb-3'>
                        <h4 className="fs-4 mb-3" style={{color: "#424242"}}>Customer-first always</h4>
                        <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div className='mb-3'>
                        <h4 className="fs-4 mb-3" style={{color: "#424242"}}>No spam or gimmicks</h4>
                        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    </div>
                    <div className='mb-3'>
                        <h4 className="fs-4 mb-3" style={{color: "#424242"}}>The Zerodha universe</h4>
                        <p className='text-muted' >Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div className='mb-3'>
                        <h4 className="fs-4 mb-3" style={{color: "#424242"}}>Do better with money</h4>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money</p>
                    </div>
                

                </div>
                <div className="col-6 p-5 text-center">
                    <img src='/assets/ecosystem.png' alt='ecosystem' style={{width: "95%"}}/>
                
                    <p className='mt-3 fs-5' ><a href='#' style={{textDecoration: "none"}}>Explore our Products &#8594;</a> &nbsp; &nbsp; &nbsp; <a href='$' style={{textDecoration: "none"}}>Try Kit demo &#8594;</a></p>
                
                </div>
               
            </div>
        </div>
     );
}

export default Stats;