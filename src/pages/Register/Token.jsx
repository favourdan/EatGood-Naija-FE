/* eslint-disable no-unused-vars */
import { FaUnlockAlt } from "react-icons/fa";
import { React, useState } from "react";
import "./Token.css";
import apiPost from "./axios";
import { useNavigate } from "react-router-dom";
const Token = () => {
  const [verify, setVerify] = useState(" ");
  const navigate = useNavigate();

  const handleOnChangeToken = (e) => {
    setVerify(e.target.value);
  };

  const handleVerifyToken = (e) => {
    if (e.keyCode == 13) {
      handleVerifyBtn(e);
    }
  };

  const handleVerifyBtn = async (e) => {
    e.preventDefault();
    const confirmationToken = verify;
    console.log("token ", confirmationToken);
    apiPost("auth/verify/" + confirmationToken)
      .then((result) => {
        console.log(result);
        setVerify("");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.error("Verification failed:", error);
        setVerify("");
      });
  };
  return (
    <div className="Token-container">
      <div className="div-flex">
        <div className="unlock-image">
          <FaUnlockAlt />
        </div>

        <div className="verify-text">
          <h2 className="verify"> Verify Login</h2>
          <p className="token-sen">
            Enter six digit verification code sent
            <br></br>to ******@***** to continue
          </p>
        </div>

        <div className="form-div">
          <form onSubmit={handleVerifyBtn}>
            <input
              className="input-btns"
              type="text"
              onChange={handleOnChangeToken}
              onKeyDown={handleVerifyToken}
              name="verificatonCode"
              placeholder="Verification Code"
            ></input>
            <button type="submit" id="submit-btn">
              <h4>Submit</h4>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Token;
