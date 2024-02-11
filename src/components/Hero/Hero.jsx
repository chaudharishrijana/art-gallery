import React from 'react'
import './Hero.css';
// import background from './background.png';
import Footers from '../Footer/Footers';
import Product from '../Product/Product';


const Hero = () => {
  
  return (


    <div >
     
     
    <div className='hero' >
      <div className="hero-left">
      <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>
      
     
        <div className="hero-text-wrapper">
          <div className='hero-content'>

        
          <h2>Discover Art You Love</h2>

          <p className='hero-subtitle'>
            From the World's Leading Online Gallery
          </p> 
          </div>
         

          
        </div> 
        <div className='website-introduction'>
        <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>
         <p >
            Welcome to our online gallery where you can explore a diverse collection of beautiful artworks.
            </p>
            <p> Whether you're a seasoned art enthusiast or a newcomer, we have something special for everyone.
          </p> 
        </div>

        <div className='product-image'>
        <Product/>
        
        <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>
         </div>
        <div className="hero-hand-icon">
          {/* Your hand icon content goes here */}
        </div>
      </div>

      <div className="hero-latest-btn">
        {/* Your button content goes here */}
      </div>

      <div className="hero-right">
        {/* Content for the right side goes here */}

       
                
                
        <Footers/>

        </div>
      </div>
    </div>
  ); 
};

export default Hero;
