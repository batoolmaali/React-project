import React, { useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import "../Register/projects.css"
import firebase from "../../firebase";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

function OTP() {
    const navigate = useNavigate();
    const [number, setNumber] = useState('');
    const [otp, setotp] = useState('');
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
        navigate("/verify", { replace: true })
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

    // const handleClick = () => {
    //     navigate("/newpassword", { replace: true });
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
                        <Link to="/phone" className="back">
                            <a className="back" > <HiOutlineArrowNarrowLeft />Back</a>
                        </Link>
                    </div>
                    <div className="body">
                        <div className="main">
                            <div className="new-password">
                                <div className="note-phone">
                                    <h3>Verify Your Identity</h3>
                                    <p >Please Enter The One-Time Password (OTP) To Verify Your Account</p>
                                    <p>A One-Time Password (OTP) Has Been Sent To <span style={{ color: "#2699FB" }}>5009005</span></p>
                                </div>
                                <div className="form-content" style={{ paddingTop: "20px" }}>

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
                                    <form onSubmit={submitOTP}>
                                        <input type="number" value={otp} onChange={handle2} placeholder="enter otp" />
                                        {/* <button type="submit">submit</button> */}


                                        <div className="continue">
                                            <p className="invalid">Invalid (OTP) Password</p>
                                            <button type="submit">validate</button>
                                            <p className="wrong" style={{ fontWeight: "bold" }}> Resend one-time password (OTP)</p>
                                            <p className="wrong"> Entered a wrong number ?</p>
                                        </div>
                                    </form>
                                </div>




                            </div>


                        </div>

                    </div>


                </div>
            </div>




        </>

    );
}

export default OTP;