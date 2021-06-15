import React from 'react';
import { Link } from 'react-router-dom';

import './Signupin.css'
import LoginImage from '../images/signin-image.jpg'

function Login() {
    return (
        <div className="main">


            <div className="section-container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={LoginImage} alt="signin" /></figure>
                        <Link to="/signup" className="signup-image-link">Create an account</Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><i className="fa fa-user"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="fa fa-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password" />
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
