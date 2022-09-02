import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useInput from "../utils/custom-hooks";
import "../styles/styles.css"

const Register = () => {
  const navigate = useNavigate();
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST user credentials
    axios
      .post("/api/register", {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data);
    // Redirect to login!
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="container-form">
        <div>
          <h2>Create your account</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
          <div>
              <input className="input-form"
                aria-label="Name"
                type="text"
                required
                placeholder="Username"
                {...name}
              />
            </div>
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

          <div>
            <button className="button-style" type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
