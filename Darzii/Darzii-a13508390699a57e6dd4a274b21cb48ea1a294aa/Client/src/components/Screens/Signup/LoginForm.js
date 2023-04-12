import React, { useContext, useState } from "react";
import "./Main.css";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/authContext/AuthContext";
import { login } from "../../../context/authContext/apiCalls";

function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const formData = {
      email,
      password,
    };
    event.preventDefault();
    await login(formData, dispatch);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="loginCard">
      <h2 className="title">
        Login to Darzii <span className="tagline">Or instead</span>{" "}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="group">
              <label className="formLabel">Email</label>
              <input
                className="inputStyle"
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="group">
              <label className="formLabel">Password</label>
              <input
                className="inputStyle"
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <button className="btn-form changeColor" type="submit" >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
