
import Hero from './Hero';
import Education from './Education';
import Pricing from './Pricing';
import Stats from './Stats';
import Award from './Award';

import OpenAccount from '../OpenAccount';



 function HomePage(){
    return ( 
        <>
       
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
     
        </>
     );
}

export default HomePage;