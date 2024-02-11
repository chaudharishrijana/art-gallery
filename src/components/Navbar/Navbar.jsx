import React, { useState } from 'react'
import './Navbar.css'
import  cart  from './cart.png'
import { Link } from 'react-router-dom'


export const Navbar = () => {

  const [menu,setMenu]= useState("home");
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
   
    console.log('Searching for:', searchQuery);
  };

  return (

    <nav>
      <u1>
        
      
    
    <div className='Navbar'>
        <div className="Nav-logo">
               
            
            <p>ARtistryHub</p>
            </div> 
            <u1 className="nav-menu">
                <li onclick={()=>{setMenu("Home")}} ><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onclick={()=>{setMenu("Gallery")}}><Link style={{ textDecoration: 'none'}}  to='/Gallery'>Gallery</Link>{menu==="gallery"?<hr/>:<></>}</li>
                {/* <li onclick={()=>{setMenu("Favourties")}}><Link style={{ textDecoration: 'none'}}  to='/favourties'>Favourities</Link> {menu==="favourties"?<hr/>:<></>}</li> */}
                
                
            </u1>
            <div className="nav-login-cart">
            <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Type here..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
            
              <Link to='/loginascustomer'><button>Login</button></Link>
              <Link to='/signupascustomer'><button>Register</button></Link>
             

              <img className='cart' src={cart} height={50} width={50} alt='null' />  
              <div className="nav-cart-count">0</div>
                           
            
            </div>
    </div>
  

    </u1>
    </nav>
  )
}
