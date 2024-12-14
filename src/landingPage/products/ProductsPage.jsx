


import Hero from './Hero.jsx';
import Lc from "./Lc";
import Rc from "./Rc";

import Universe from './Univers';

function ProductPage() {
    return ( 
        <>
       
        <Hero/>
         <Lc 
           image="/assets/kite.png"
           productName="Kite"
           productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
           tryDemo="Try Demo"
           learnMore="Learn more"
           googleplay="/assets/googlePlayBadge.svg"
           appleplay="/assets/appstoreBadge.svg"
           />
        <Rc
            image="/assets/console.png"
            productName="Console"
            productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
            tryDemo="Try Demo"
            learnMore="Learn more"
            googleplay="/assets/googlePlayBadge.svg"
            appleplay="/assets/appstoreBadge.svg"
        />
           <Lc 
           image="/assets/coin.png"
           productName="Coin"
           productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
           tryDemo="Coin"
           learnMore="learn more"
           googleplay="/assets/googlePlayBadge.svg"
           appleplay="/assets/appstoreBadge.svg"
           />
              <Rc
            image="/assets/kite.png"
            productName="Kite Connect API"
            productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
            tryDemo="Kite Connect"
            learnMore=""
            googleplay=""
            appleplay=""
        />
             <Lc 
           image="/assets/varsity.png"
           productName="Varsity Mobile"
           productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
           tryDemo=""
           learnMore=""
           googleplay="/assets/googlePlayBadge.svg"
           appleplay="/assets/appstoreBadge.svg"
           />

        <Universe/>

       
        </>
     );
}

export default ProductPage;