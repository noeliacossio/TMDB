import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import useInput  from "../utils/custom-hooks";
import { UserContext } from "../index";


const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const email = useInput("");
  const password = useInput("");


   const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(email);
     axios
     .post("/api/login", {
        email: email.value,
        password: password.value,
      })
      .then((res)=> res.data)
      .then((data)=>{setUser(data) 
        return data})
      .then((result) => window.localStorage.setItem('user', JSON.stringify(result.name)))
    navigate("/")
    }
 


  return (
    <div className="container">
      <div className="container-form">
        <div>
          <h2>
            Sign in to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <input className="input-form"
                aria-label="Email address"
                type="text"
                required
                placeholder="Email address"
                {...email}
              />
            </div>
            <div>
              <input className="input-form"
                aria-label="Password"
                type="password"
                required
                placeholder="Password"
                {...password}
              />
            </div>
          </div>

          <div >
            <button className="button-style" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login