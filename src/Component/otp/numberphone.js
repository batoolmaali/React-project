import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { Navigate, useNavigate, Link } from "react-router-dom";
import firebase from "../../firebase";
import "../Register/projects.css"
import PhoneInput from 'react-phone-number-input'


function PhoneNumber() {
    const navigate = useNavigate();

    const [number, setNumber] = useState('');
    const [otp, setotp] = useState('');

    const handle1 = (e) => {
        setNumber(e.target.value)
    }
    const handle2 = (e) => {
        setotp(e.target.value)
    }
    // console.log(number, otp);
    const ConfigureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
                console.log('recaptca varified');
            },
            defaultCountry: "JOR"
        })
    }
    const onSignInSubmit = (e) => {
        e.preventDefault();
        ConfigureCaptcha();
        const phoneNumber = "+962" + number;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;


        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log("otp has been sent");
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                console.log(error);
                console.log("SMS not sent");
            });
        // navigate("/verify", { replace: true })
    }

    const submitOTP = (e) => {
        e.preventDefault();
        const code = otp;
        console.log(code);
        window.confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            // ...
            console.log(JSON.stringify(user));
            alert('user is verified')
        }).catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
        });
    }

    // const handleClick = () => {
    //     navigate("/verify", { replace: true });
    // }

    return (
        <>
            <div className="container">

                <div className="image-bg" style={{
                    background: `url('${process.env.PUBLIC_URL}/images/background.png')`,
                    backgroundRepeat: "no-repeat", backgroundSize: "cover"
                }}>
                </div>
                <div className="content">
                    <div className="head">
                        <div className="logo"></div>
                        <Link to="/login" className="back">
                            <a className="back" > <HiOutlineArrowNarrowLeft />Back</a>
                        </Link>
                    </div>
                    <div className="body">




                        <div className="main">
                            <div className="new-password">
                                <div className="note-phone">
                                    <h3>Verify Your Identity</h3>
                                    <p>Enter Your Phone Number And We Will Send You A (OTP) To Verify Your Identity To Reset Your Password.</p>

                                </div>



                                <div className="form-content" style={{ paddingTop: "20px" }}>


                                    <label style={{ marginBottom: "10px" }}>Enter your Phone Number</label>
                                    <form onSubmit={onSignInSubmit}>
                                        <div id="sign-in-button"></div>
                                        {/* <PhoneInput className="phone"
                                            placeholder="Enter phone number"

                                            onChange={(e) => setNumber(e.target.value)} /> */}
                                        <input type={number} value={number} onChange={handle1} placeholder="enter mopile" />


                                        <div className="reg-btn">
                                            <button className="login-button">
                                                continue
                                            </button>





                                        </div>

                                    </form>
                                </div>

                                <form onSubmit={submitOTP}>
                                    <input type={number} value={otp} onChange={handle2} placeholder="enter otp" />
                                    <button type="submit">submit</button>
                                </form>

                            </div>
                        </div>


                    </div>


                </div>
            </div >

        </>

    );
}

export default PhoneNumber;

