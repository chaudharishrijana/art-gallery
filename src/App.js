
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  LoginSignup  from './components/LoginSingnup/LoginSignup';
import  Signup from './components/Signup/Signup';
import Home from './pages/Home';
 import Product from './components/Product/Product';
//  import 'react-bootstrap/dist/css/bootstrap.min.css'; 
import Gallery from './Gallery';


function App() { 
  

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        
          
        <Route path='/' element={<Home/>}/>
       
       
      <Route path='/Gallery' element={<Gallery/>}/>
     
        <Route path='/Product' element={<Product/>}/>
       
        <Route path='/background' element={<background/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/loginascustomer' element={<LoginSignup/>}/>
       
        <Route path='/signupascustomer' element={<Signup/>}/>
       
        
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
