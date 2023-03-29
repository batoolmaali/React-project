import React, { useState } from "react";

import "../password/password.css"
import PhoneInput from 'react-phone-number-input';

import { HiOutlineArrowNarrowLeft } from "react-icons/hi"


function Phone(page, setPage, F) {

    const [value, setValue] = useState()
    return (
        <>

            <div className="main">
                <div className="new-password">
                    <div className="note">
                        <h3>Verify Your Identity</h3>
                        <p>Enter Your Phone Number And We Will Send You A (OTP) To Verify Your Identity To Reset Your Password.</p>

                    </div>
                    <div className="form-content" style={{ paddingTop: "20px" }}>


                        <label>Enter your Phone Number</label>
                        <PhoneInput className="phone"
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue} />



                        <div className="continue">

                            <button
                                onClick={() => {
                                    if (page === F.length - 1) {
                                        // alert("FORM SUBMITTED");


                                    } else {
                                        setPage((currPage) => currPage + 1);
                                    }
                                }}
                            >
                                {page === F.length - 1 ? "Submit" : "Next"}
                            </button>


                        </div>

                    </div>




                </div>
            </div>



        </>

    );
}
export default Phone;