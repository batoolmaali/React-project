import React, { useState } from "react";
import "../password/password.css"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

function Verify() {
    const [page, setPage] = useState(0);
    const FormTitles = ["Step one", "Step Two", "Step Three", "Step four"];
    return (
        <>

            <div className="main">
                <div className="new-password">
                    <div className="note">
                        <h3>Verify Your Identity</h3>
                        <p >Please Enter The One-Time Password (OTP) To Verify Your Account</p>
                        <p>A One-Time Password (OTP) Has Been Sent To <span style={{ color: "#2699FB" }}>5009005</span></p>
                    </div>
                    <div className="form-content" style={{ paddingTop: "20px" }}>

                        <div className="verify">
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
                            <label>
                                {/* <span>number</span> */}
                            </label>
                        </div>


                        <div className="continue">
                            <p className="invalid">Invalid (OTP) Password</p>
                            <button >validate</button>
                            <p className="wrong" style={{ fontWeight: "bold" }}> Resend one-time password (OTP)</p>
                            <p className="wrong"> Entered a wrong number ?</p>
                        </div>

                    </div>




                </div>


            </div>





        </>

    );
}

export default Verify;

