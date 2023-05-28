import React from 'react'
import './Login.css'
import {FaEnvelope,FaLock} from 'react-icons/fa'
const Login = () => {
  return (
    <div className="container-fluid page">
    <div className='centralize'>
                <div className="wrapper ">
                    <div className="form-box login">
                        <h2>
                            Darzii Express
                        </h2>
                        <form action="#" method="post" className='login-form'>
                            <div className="input-box">
                                <span className="icon"><FaEnvelope/></span>
                                <input type="text" name="" id="" required />
                                <label >Email</label>
                            </div>

                            <div className="input-box">
                                <span className="icon">
                                    <FaLock/>
                                </span>
                                <input type="password" name="" id="" required />
                                <label >password</label>
                            </div>
                            <div className="remember-forgot">
                                {/* <label >
                                    <input type="checkbox" name="" id="" />
                                    Remember me
                                </label> */}
                                <a href="#">Forget Password?</a>
                            </div>
                            <div className="d-grid gap-2">
                                <button class="login-btn" type="button">Login</button>
                            </div>
                            <div className="login-register">
                                <p>
                                    <span>
                                        or <a href="#" className='register-link'> Register</a>
                                    </span> 
                                    
                                </p>
                            </div>


                        </form>
                    </div>
                </div>

            </div>
    </div>
    
  )
}

export default Login