import React from 'react'; 

 const Itemcard = (props) => {
  return (
    
        <div class="col-l1 col-md-6 col-lg-3 mx-0 mb-4">
             <div class="card p-0 overflow-hidden h-100 shadow">
              <img src={props.img} className="card-img-top img-fluid" alt="Item"></img>
                <div className="card-body text-center">
                  <h5 className="card-title">{props.title}</h5>
                  <h5 className="card-text">$ {props.price}</h5>
                  <p className="card-text"> {props.desc}</p>
                 {/* <button className="btn btn-success">Add to Cart</button> */}
                </div>
             </div>
        </div>
        
  );
}; 
export default Itemcard;

