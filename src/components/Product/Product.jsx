import React from 'react';
import art from './art.png';
import painting from './painting.png';
import './Product.css';

const Product =() =>{
    return (
        <div className='container_product' >
          <div className='product' >
            <div className='top_card'>
                
            <div className='bottom_card'>
            <img className='art' src={art} width={150} alt='null'></img>
            <div className='product_description'>
                    <p>The most renown painting for the </p>
                </div>
                <button type="button" className='cta_add_to_cart' >Add To Cart</button>
                </div>
                  
                   <span className='product_price'>$ 120</span>

            </div>
             <div className='product_top_card'>
              <div className='product_bottom_card'>

             
              <img className='painting' src={painting} width={370} alt='null'></img>
</div></div>
            <div className='product_description'>
                    <p>Monalisa Painting</p>
                </div>
                <button type="button" className='cta_add_to_cart' >Add To Cart</button>
                </div>
                  
                   <span className='product_price'>$ 1700</span>

            </div>
           

              

      
        
    )
}
export default Product;