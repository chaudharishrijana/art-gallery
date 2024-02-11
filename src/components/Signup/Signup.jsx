import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Signup.css";
import axios from 'axios';

const Signup = ({ setIsUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [redirects, setRedirects] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    

    const response = await axios.post("http://localhost:3000/user/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        role,
      }),
    });

    if (response.ok) {
      setRedirects(true);
    } else {
      console.error("Signup failed");
    }
  };

  if (redirects) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <div className="container">
        <form onSubmit={submit} className="form">
          <h2 className="h3 mb-3">Register Form</h2>
          
          <input
            type="text"
            className="input"
            placeholder="First Name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            className="input"
            placeholder="Last Name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />

         
          <input
            type="email"
            className="input"
            placeholder="Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          
          />
          <input
            type="tel"
            className="input"
            placeholder="Phone Number"
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />


      

  
  
 

 
          

          <input
            type={showPass ? "text" : "password"}
            className="input"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          



<select
  className="input"
  placeholder="select role"
  required
  value={role}
  onChange={(e) => setRole(e.target.value)}
> 
  <option value="customer">Customer</option>
  <option value="artist">Artist</option>
</select>

<label className="label">
  <input
    type="checkbox"
    value={showPass}
    onChange={() => {
      setShowPass(!showPass);
    }}
  />
  Show password
</label>

<button className="button" type="submit">
  Register
</button>

{/* <p className="signup-link">
  Not a {role === "customer" ? "customer" : "artist"}?{" "}
  <a
    href={role === "customer" ? "/signup" : "/signup"} */}
    {/* className="signup-link a"
  > */}
    {/* Signup as {role === "customer" ? "artist" : "customer"}
  </a>
</p> */}
<p className="signup-link">
  Already a member?{" "}
  <a
    href={role === "customer" ? "/login" : "/login"}
    className="signup-link a"
  >
    Login
  </a>
</p>




{/* 
          {/* New input for the role */}
          
          {/* <select
            className="input"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="artist">Artist</option>
          </select>  */} 

          {/* <label className="label">
            <input
              type="checkbox"
              value={showPass}
              onChange={() => {
                setShowPass(!showPass);
              }}
            />
            Show password
          </label>

          <button className="button" type="submit">
            Signup
          </button> */}

          {/* <p className="signup-link">
            Not a {role === "customer" ? "customer" : "artist"}?{" "}
            <a
              href={role === "customer" ? "/signupasartist" : "/signupascustomer"}
              className="signup-link a"
            >
              Signup as {role === "customer" ? "artist" : "customer"}
            </a>
          </p>
          <p className="signup-link">
            Already a member?{" "}
            <a
              href={role === "customer" ? "/loginascustomer" : "/loginasartist"}
              className="signup-link a"
            >
              Login
            </a>
          </p> */}
        </form>
      </div>
    </>
  );
};

export default Signup;
