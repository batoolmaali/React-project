import React, { useState } from "react";
import firebase from "../../firebase";
import "../password/password.css"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import app from "../../firebase";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function One({ page, setPage, FormTitles }) {
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
        console.log(error);
        // ...
      });


  }
  return (
    <>

      <div className="main">
        <div className="new-password">
          <div className="note-phone">
            <h3>Verify Your Identity</h3>
            <p>Enter Your Phone Number And We Will Send You A (OTP) To Verify Your Identity To Reset Your Password.</p>

          </div>


          <div className="form-content" style={{ paddingTop: "10px", marginTop: "20px" }}>


            <label>Enter your Phone Number</label>
            {/* <PhoneInput className="phone"
              placeholder="Enter phone number"

              onChange={(e) => setnumber(e.target.value)} /> */}

            <form onSubmit={getOTP} style={{ width: "100%" }}>
              <div id="sign-in-button"></div>

              {/* <input type={number} value={number} onChange={handle1} placeholder="enter mopile" /> */}
              <div style={{ width: "100%", display: "flex", justifyContent: "space-around", margin: "0 auto" }}>


                <PhoneInput
                  defaultCountry="JO"
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue} />
                <div id="recaptcha-container"></div>
              </div>
              {error && error ? <div style={{ color: "#E21E00", fontWeight: "normal", textAlign: "center" }}>  Please Fill in All Fields</div> : ""}

              <div className="reg-btn">
                <button className="login-button">
                  Submit
                </button>





              </div>

            </form>



          </div>
        </div>

      </div>



    </>

  );
}

export default One;

