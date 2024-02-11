import  { useState } from "react";

import { Navigate } from "react-router-dom";
import "./LoginSignup.css";

const Loginascustomer = ({ setIsUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirects, setRedirects] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.ok) {
      console.log("Login Success");
      setRedirects(true);
    } else {
      console.error("Login failed");
    }
  };

  if (redirects) {
    return <Navigate replace to="/" />;
  }

  return (
    <>
      <div className="container">
        <form
          onSubmit={submit}
          className="form "
        >
          <h2 className="h3 mb-3 "> Login Form</h2>
          <input
            type="email"
            className="input"
            placeholder="Email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type={showPass ? "text" : "password"}
            className="input"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              value={showPass}
              onChange={() => {
                setShowPass(!showPass);
              }}
            />
            Show password
          </label>
          <button
            className="button"
            type="submit"
          >
            Login
          </button>
        
        {/* <p className="loginasartist-link">
          Not a customer?{" "}
          <Link
           to="/loginasartist"
            className="loginartist-link a"
          >
            Login
          </Link>  */}
          <p className="signup-link">
          Not a member?{" "}
          <a
            href="/signupascustomer"
            className="signup-link a"
          >
            Register 
            
          </a>
          </p>
          
        
        </form>
      </div>
    </>
  );
};

export default Loginascustomer;