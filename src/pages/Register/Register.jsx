/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import FoodImg from "../../assets/FoodImg.png";
import { RiLockPasswordFill } from "react-icons/ri";
import { BiSolidEnvelope } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import apiPost from "./axios";
import "./register.css";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {
  notifyError,
  notifySuccess,
  notifyWarning,
} from "../../notification/Toastify";
import LoadingSpin from "react-loading-spin";

const Register = () => {
  const navigate = useNavigate();
  const [regData, setRegData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",

    firstNameValid: false,
    lastNameValid: false,
    emailValid: false,
    genderValid: false,
    phoneNumberValid: false,
    passwordValid: false,

    firstNameEmpty: true,
    lastNameEmpty: true,
    emailEmpty: true,
    phoneNumberEmpty: true,
    passwordEmpty: true,
  });
  const [loading, setLoading] = useState(false);
  const emailvalidation = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const genderOptions = ["FEMALE", "MALE"];

  const HandleGenderChange = (e) => {
    const selectedGender = e.target.value;
    setRegData({
      ...regData,
      gender: selectedGender,
      genderValid: selectedGender !== "",
    });
  };

  const handleRegData = (e, validations) => {
    const value = e.target.value;
    switch (validations) {
      case "firstName":
        if (value.length === 0)
          return setRegData({
            ...regData,
            firstName: value,
            firstNameValid: true,
            firstNameEmpty: true,
          });
        if (value.length > 1)
          return setRegData({
            ...regData,
            firstName: value,
            firstNameValid: true,
            firstNameEmpty: false,
          });
        return setRegData({
          ...regData,
          firstName: value,
          firstNameValid: false,
          firstNameEmpty: false,
        });

      case "lastName":
        if (value.length === 0)
          return setRegData({
            ...regData,
            lastName: value,
            lastNameValid: true,
            lastNameEmpty: true,
          });
        if (value.length > 1)
          return setRegData({
            ...regData,
            lastName: value,
            lastNameValid: true,
            lastNameEmpty: false,
          });
        return setRegData({
          ...regData,
          lastName: value,
          lastNameValid: false,
          lastNameEmpty: false,
        });

      case "email":
        if (value.length === 0)
          return setRegData({
            ...regData,
            email: value,
            emailValid: true,
            emailEmpty: true,
          });
        if (value.match(emailvalidation))
          return setRegData({
            ...regData,
            email: value,
            emailValid: true,
            emailEmpty: false,
          });
        return setRegData({
          ...regData,
          email: value,
          emailValid: false,
          emailEmpty: false,
        });

      case "phoneNumber":
        if (value.length === 0)
          return setRegData({
            ...regData,
            phoneNumber: value,
            phoneNumberValid: true,
            phoneNumberEmpty: true,
          });
        if (value.length > 10)
          return setRegData({
            ...regData,
            phoneNumber: value,
            phoneNumberValid: true,
            phoneNumberEmpty: false,
          });
        return setRegData({
          ...regData,
          phoneNumber: value,
          phoneNumberValid: false,
          phoneNumberEmpty: false,
        });

      case "password":
        if (value.length === 0)
          return setRegData({
            ...regData,
            password: value,
            passwordValid: true,
            passwordEmpty: true,
          });
        if (value.length > 7)
          return setRegData({
            ...regData,
            password: value,
            passwordValid: true,
            passwordEmpty: false,
          });
        return setRegData({
          ...regData,
          password: value,
          passwordValid: false,
          passwordEmpty: false,
        });

      default:
        return regData;
    }
  };

  const allFieldsValid =
    regData.firstNameValid &&
    !regData.firstNameEmpty &&
    regData.lastNameValid &&
    !regData.lastNameEmpty &&
    regData.emailValid &&
    !regData.emailEmpty &&
    regData.phoneNumberValid &&
    !regData.phoneNumberEmpty &&
    regData.passwordValid &&
    !regData.passwordEmpty &&
    regData.genderValid;

  const handleSubmitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    apiPost("auth/registerCustomer", {
      firstName: regData.firstName,
      lastName: regData.lastName,
      gender: regData.gender,
      email: regData.email,
      phoneNumber: regData.phoneNumber,
      password: regData.password,
    })
      .then((result) => {
        console.log(result);
        setLoading(false);
        setRegData({
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phoneNumber: "",
          password: "",
        });
        if (result.data.status === 200) {
          notifySuccess("Registration successful!");
          setTimeout(() => {
            navigate("/token", { replace: true });
          }, 1000);
        } else {
          notifyWarning(result.data.message);
          setTimeout(() => {
            navigate("/login", { replace: true });
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setRegData({
          firstName: "",
          lastName: "",
          gender: "",
          email: "",
          phoneNumber: "",
          password: "",
        });
        notifyError("Internal Server Error. Registration Failed!");
      });
  };

  return (
    <div className="register-section">
      <div className="left-register-section">
        <img src={FoodImg} alt="Food Image" width="72" height="72" />
      </div>

      <div className="right-register-section">
        <div className="first-div">
          <ToastContainer />
          <h1 className="title">Eat Good Najia</h1>
          <h2 className="second-title">Create a new account</h2>
          <button className="transparent-btn btn-signup">
            <img
              src="https://www.shareicon.net/data/2016/07/10/119930_google_512x512.png"
              alt="google-img"
            />{" "}
            Sign up with Google
          </button>
        </div>

        <div className="div-option">
          <div className="VI"></div> OR <div className="VI"></div>
        </div>
        <form onSubmit={handleSubmitData}>
          <label htmlFor="firstName" className="register-form">
            First name
            <div className="input-container">
              <span className="icon">
                <IoPersonOutline />
              </span>
              <input
                type="text"
                name="firstName"
                value={regData.firstName}
                onChange={(e) => handleRegData(e, "firstName")}
                placeholder="Success Momodu "
              />
              {regData.firstNameValid ||
                (!regData.firstNameEmpty && (
                  <p className="register-sentence">
                    Only names above two characters are required
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="lastName" className="register-form">
            Last name
            <div className="input-container">
              <span className="icon">
                <BiSolidEnvelope />
              </span>
              <input
                type="text"
                name="lastName"
                value={regData.lastName}
                onChange={(e) => handleRegData(e, "lastName")}
                placeholder="SuccessMomodu@gmail.com"
              />
              {regData.lastNameValid ||
                (!regData.lastNameEmpty && (
                  <p className="register-sentence">
                    Only names above two characters are required
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="email" className="register-form">
            Email
            <div className="input-container">
              <span className="icon">
                <IoPersonOutline />
              </span>
              <input
                type="text"
                name="email"
                value={regData.email}
                onChange={(e) => handleRegData(e, "email")}
                placeholder="+44 70342467"
              />
              {regData.emailValid ||
                (!regData.emailEmpty && (
                  <p className="register-sentence">
                    Email does not match the required format
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="phoneNumber" className="register-form">
            Phone number
            <div className="input-container">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input
                type="text"
                name="phoneNumber"
                value={regData.phoneNumber}
                onChange={(e) => handleRegData(e, "phoneNumber")}
                placeholder="********* "
              />
              {regData.phoneNumberValid ||
                (!regData.phoneNumberEmpty && (
                  <p className="register-sentence">
                    Input the complete phoneNumber
                  </p>
                ))}
            </div>
          </label>
          <label htmlFor="password" className="register-form">
            Password
            <div className="input-container">
              <span className="icon">
                <RiLockPasswordFill />
              </span>
              <input
                type="text"
                name="password"
                value={regData.password}
                onChange={(e) => handleRegData(e, "password")}
                placeholder="*********"
              />
              {regData.passwordValid ||
                (!regData.passwordEmpty && (
                  <p className="register-sentence">
                    Password length should be greater than seven
                  </p>
                ))}
            </div>
          </label>

          <label htmlFor="password" id="radio-btn" className="register-form ">
            Gender
            {genderOptions.map((genders, index) => {
              return (
                <div key={index} className="input-container check-box">
                  <input
                    className="input-radio"
                    type="radio"
                    value={genders}
                    name="gender"
                    checked={regData.gender === genders}
                    onChange={HandleGenderChange}
                  />
                  <div>{genders}</div>
                </div>
              );
            })}
          </label>

          <button
            type="submit"
            className={allFieldsValid ? "login-button" : "login-button"}
          >
            {loading ? (
              <LoadingSpin
                size="40px"
                color="white"
                numberOfRotationsInAnimation={3}
              />
            ) : (
              <h4>Sign Up</h4>
            )}
          </button>
        </form>
        <div className="sign-in-link">
          <p>
            Already a member ? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
