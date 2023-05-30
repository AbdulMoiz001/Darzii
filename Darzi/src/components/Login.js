import React, { useContext, useState } from 'react';
import './Login.css';
import { login } from "../context/authContext/apiCalls.jsx"
import { AuthContext } from "../context/authContext/AuthContext.jsx"


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { dispatch } = useContext(AuthContext);




  const handleLogin = async (event) => {

    event.preventDefault();


    const formData = {
      email,
      password,
    };

    try {
      await login(formData, dispatch);
      console.log()
    } catch (error) {
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
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
