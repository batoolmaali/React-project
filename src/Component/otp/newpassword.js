import React, { useState } from "react";
import "../password/password.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

function Newpassword() {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate("/Reset", { replace: true });
    }
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
                        <Link to="/verify" className="back">
                            <a className="back" > <HiOutlineArrowNarrowLeft />Back</a>
                        </Link>
                    </div>
                    <div className="body">
                        <div className="main">
                            <div className="new-password">
                                <div className="note-phone">
                                    <h3>Create A New Password</h3>
                                    <p>In Order To Protect Your Account, Make Sure You Password:</p>
                                </div>
                                <div className="form-content" style={{ paddingTop: "20px" }}>

                                    <label>password</label>
                                    <input type="text" placeholder="New password" />

                                    <label>confirm password</label>
                                    <input type="text" placeholder="Fconfirm password" />

                                    <div className="continue">
                                        <button onClick={handleClick} >continue</button>
                                    </div>

                                </div>


                                <div className="note-phone">
                                    <p>Must Be 8 Characters In Length With 1 Uppercase And Lowercase Letter, 1 Number And 1 Special Character</p>
                                </div>

                            </div>
                        </div>


                    </div>


                </div>
            </div>


        </>

    );
}

export default Newpassword;

