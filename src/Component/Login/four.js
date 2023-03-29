import React, { useState } from "react";
import "../password/password.css"
import { Navigate, useNavigate, Link } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"

function Reset() {

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

              <div className="form-content">
                <p style={{ textAlign: "center", marginTop: "50px", fontWeight: "normal", fontSize: "30px" }}> Password Reset</p>

              </div>


            </div>





          </div>


        </div>
      </div>
    </>

  );
}

export default Reset;


