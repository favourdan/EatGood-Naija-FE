import React, { useState } from "react";
import './login.css'
import FoodImg from '../../assets/FoodImg.png'
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidEnvelope } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import apiPost from "../Register/axios";
import { ToastContainer } from 'react-toastify';
import { notifyWarning, notifySuccess, notifyError } from "../../notification/Toastify";
import LoadingSpin from "react-loading-spin";

const Login = () => {

    const loginData = {
        email: '',
        password: '',

        isEmailValid: false,
        isPasswordValid: false,

        isEmailEmpty: true,
        isPasswordEmpty: true
    }

    const [login, setLogin] = useState(loginData);
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLoginChange = (e, valid) => {
        const value = e.target.value;
        switch (valid) {
            case "email":
                if (value.length === 0) return setLogin({ ...login, email: value, isEmailValid: true, isEmailEmpty: true })
                if (value.length > 1) return setLogin({ ...login, email: value, isEmailValid: true, isEmailEmpty: false })
                return setLogin({ ...login, email: value, isEmailValid: false, isEmailEmpty: false })

            case "password":
                if (value.length === 0) return setLogin({ ...login, password: value, isPasswordValid: true, isEmailEmpty: true })
                if (value.length > 1) return setLogin({ ...login, password: value, isEmailValid: true, isEmailEmpty: false })
                return setLogin({ ...login, password: value, isPasswordValid: false, isPasswordEmpty: false })
            
            
                default: return login

        }

    }
    const { email, password, isEmailEmpty, isPasswordEmpty, isEmailValid, isPasswordValid } = login

    const fieldsValidation = isEmailValid && !isEmailEmpty
        && isPasswordValid && !isPasswordEmpty

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoading("Loadind oo", true)
        apiPost("auth/login", {
            email: email,
            password: password
        })
            .then(res => {
                console.log("email:", email)
                console.log("password:", password)
                console.log(res);
                setLoading("Not Loading", false)
                setLogin({
                    email: '',
                    password: ''
                })
                if (res.data.status === 200) {
                    notifySuccess("login successful")
                    setTimeout(() => {
                        navigate("/token", { replace: true });
                    }, 1000);
                } else {
                    notifyWarning("Invalid email or password");
                }
            })
            .catch(error => {
                console.log(error)
                setLoading("Not Loading", false)
                setLogin({
                    email: '',
                    password: ''
                })
                notifyError("Internal Server Error. Registration Failed!")
            })

    }
    return (
        <div className='register-section-login'>

            <div className='left-register-section-login'>
                <img src={FoodImg} alt="Food Image" width="72" height="72" />
            </div>

            <div className='right-register-section-login'>
                <div className='first-div-login'>
                    <ToastContainer />
                    <h1 className='title-login'>Eat Good Najia</h1>
                    <h2 className='second-title-login'>Welcome back to Decagon</h2>
                    <button className="transparent-btn btn-signup-login">
                        <img src='https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png'
                            alt='google-img' /> Sign in with Google</button>
                </div>

                <div className="div-option-login">
                    <div className="VI-login"></div> OR <div className="VI-login"></div>
                </div>
                <form onSubmit={handleLoginSubmit} >
                    <label htmlFor="fullName" className="register-form-login">Email
                        <div className="input-container-login">
                            <span className="icon-login"><BiSolidEnvelope /></span>
                            <input type="text" name="email" value={email} onChange={(e) => handleLoginChange(e, "email")} placeholder="SuccessMomodu@gmail.com" />
                            { isEmailValid || (!isEmailEmpty && <p className="sentence-registration">Email does not match the required format</p>)}

                        </div>
                    </label>

                    <label htmlFor="fullName" className="register-form-login">Password
                        <div className="input-container-login">
                            <span className="icon-login"><RiLockPasswordFill /></span>
                            <input type="text" name="password" value={password} onChange={(e) => handleLoginChange(e , "password")} placeholder="********* " />
                            { isPasswordValid || (!isPasswordEmpty && <p className="sentence-registration">Password length should be greater than seven</p>)}

                        </div>
                    </label>


                    <button type="submit" className={fieldsValidation ? "login-button-login": "login-button-login" }>
                        {loading ? <LoadingSpin size="40px" color="white" numberOfRotationsInAnimation={3} /> :
                        <h4>Login</h4>}
                    </button>
                </form>
                <div className="sign-in-link-login">
                    <p>Don't have an account? <Link className='link-login' to="/register">Sign Up here</Link></p>

                </div>

            </div>

        </div>

    );
}
export default Login; 
