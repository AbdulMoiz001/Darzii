import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { login } from "../context/authContext/apiCalls.jsx"
import { AuthContext } from "../context/authContext/AuthContext.jsx"


const Login = ({ setLoginStatus, setUsername }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);




  const handleLogin = async (event) => {

    const formData = {
      userId,
      password,
    };

    try {
      await login(formData, dispatch);
      navigate('/');
    } catch (error) {
      // Handle login failure
      alert('Wrong Credentials. Please try again!');
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login">
            <div className='login-title'> Welcome,
              <h1>Darzi</h1>
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="User ID"
                className='login__input'
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className='login__input'
              />
            </div>
            <button className="button login__submit" onClick={handleLogin}>
              <span className="button__text">Log In</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
