import React from 'react';
import Itemcard from './Itemcard';
import data from "./data";

const Gallery = () => { 
 

  return (
    <> 
   
    <h1 className ="text-center mt-3" style={{ fontFamily:'initial'}}>Original Artworks for Sale</h1>
         <p>&nbsp;</p>
        <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>
            <div className="text-center" style={{ display:'flex',flexDirection:'column',alignItems:'center',   fontFamily:'serif'}}>
             <p> Whether you are looking for an original painting or a high quality art, </p>
              <p>Artistry Hub has many original paintings for sale from emerging artists around the world.</p>
               </div>
               <hr style={{width:'1400px',margin :'auto',marginBottom:'20px'}}/>
               <section className='py-4 container'>
                  <div className='row justify-content-center'>
                    {data.productData &&  data.productData.map((item)=>{
                      return(
             <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} style={item.style} key={item.id}/>
            )
         }
         )}
           <Itemcard img="" title="title" desc="desc"/>
       
        </div>
    </section>
    
    </>
  )
}
export default Gallery;