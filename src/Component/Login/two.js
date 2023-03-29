import React, { useState } from "react";
import "../password/password.css"
import app from "../../firebase";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import OtpInput from "react-otp-input";

function Two({ page, setPage, FormTitles }) {
  const [value, setValue] = useState();
  const [OTP, setOtp] = useState();
  const [error, setError] = useState(false);


  const setUpRecaptcha = () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    }, auth);

  }

  const getOTP = (e) => {
    e.preventDefault();
    setUpRecaptcha()
    // if (value === "" || value === undefined) {
    //   return setError(true)
    // }
    const phoneNumber = value;
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...
      });


  }

  const verifyOTP = (e) => {
    e.preventDefault();
    if (OTP === "" || OTP === null) {
      return setError(true)
    }
    const code = OTP;
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  return (
    <>

      <div className="main">
        <div className="new-password">
          <div className="note-phone">
            <h3>Verify Your Identity</h3>
            <p >Please Enter The One-Time Password (OTP) To Verify Your Account</p>
            <p>A One-Time Password (OTP) Has Been Sent To <span style={{ color: "#2699FB" }}>5009005</span></p>
          </div>
          <div className="form-content" style={{ paddingTop: "20px", textAlign: "center" }}>

            {/* <div className="verify">
              <input
                type="email"

              />
              <input
                type="email"

              />
              <input
                type="email"

              />
              <input
                type="email"

              />
              <input
                type="email"

              />
              <input
                type="email"

              />
           
            </div> */}
            <form onSubmit={verifyOTP} style={{
              display: "flex", flexDirection: "column",
              justifyContent: "center", alignItems: "center", gap: "5px"
            }}>
              {/* <input type="number" value={otp} onChange={handle2} placeholder="enter otp" /> */}
              {/* <button type="submit">submit</button> */}
              {/* <OtpInput
                value={otp}
                onChange={handle2}
                numInputs={6}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                autoFocus={false}
                inputStyle={{
                  border: "1px solid  transparent",
                  borderBottom: "1px solid black",
                  focus: "none",
                  width: "54px",
                  height: "54px",
                  fontSize: "12px",
                  color: "#000",
                  fontWeight: "400",
                  caretColor: "blue",
                  background: "#f0f0f0",
                  borderRadius: "0px"
                }} /> */}

              <input type="text" onChange={(e) => setOtp(e.target.value)} placeholder="enter otp" />

              <div className="continue" >
                {Error && Error ? <p className="invalid">Invalid (OTP) Password</p> : ""}
                <button type="submit" >validate</button>
                <p className="wrong" style={{ fontWeight: "bold" }}> Resend one-time password (OTP)</p>
                <p className="wrong"> Entered a wrong number ?</p>


              </div>
            </form>

            {/* <div className="continue">
              <p className="invalid">Invalid (OTP) Password</p>
              <button >validate</button>
              <p className="wrong" style={{ fontWeight: "bold" }}> Resend one-time password (OTP)</p>
              <p className="wrong"> Entered a wrong number ?</p>
            </div> */}

          </div>




        </div>


      </div>





    </>

  );
}

export default Two;

