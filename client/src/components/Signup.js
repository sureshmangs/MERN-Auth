import React from 'react';
import { Link } from 'react-router-dom';
import './Signupin.css'
import SignupImage from '../images/signup-image.jpg'

function Signup() {
    return (
        <div className="main">
            <div className="section-container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><i className="fa fa-user"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="fa fa-envelope"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="fa fa-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password" />
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="fa fa-lock"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password" />
                            </div>

                            <div className="form-group form-button">
                                <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img src={SignupImage} alt="singup" /></figure>
                        <Link to="/login" className="signup-image-link">I am already a member</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
