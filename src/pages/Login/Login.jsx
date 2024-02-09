import React from "react";
import './login.css'
import FoodImg from '../../assets/FoodImg.png'
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidEnvelope } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Login = () =>{
    return(
<div className='register-section'>

<div className='left-register-section'>
    <img src={FoodImg} alt="Food Image" width="72" height="72" />

</div>

<div className='right-register-section'>
    <div className='first-div'>
        <h1 className='title'>Eat Good Najia</h1>
        <h2 className='second-title'>Welcome back to Decagon</h2>
        <button className="transparent-btn btn-signup">
            <img src='https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png'
                alt='google-img' /> Sign in with Google</button>
    </div>

    <div className="div-option">
        <div className="VI"></div> OR <div className="VI"></div>
    </div>
    <form>
    
        <label htmlFor="fullName" className="register-form">Email
            <div className="input-container">
                <span className="icon"><BiSolidEnvelope /></span>
                <input type="text"  name="full name" placeholder="SuccessMomodu@gmail.com" />
            </div>
        </label>

        <label htmlFor="fullName" className="register-form">Password
            <div className="input-container">
                <span className="icon"><RiLockPasswordFill /></span>
                <input type="text"  name="full name" placeholder="********* " />
            </div>
        </label>


        <button type="submit" className="login-button">
            <h4>Login</h4>
        </button>
    </form>
    <div className="sign-in-link">
        <p>Don't have an account? <Link className='link' to="/login">Sign Up here</Link></p>


    </div>

</div>

</div>

    );
}
export default Login; 
