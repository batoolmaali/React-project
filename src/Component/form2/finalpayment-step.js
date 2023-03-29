import React, { useState } from "react";


import './form-data.css';
import { Link } from "react-router-dom";

function Finalpayment() {
  const [page, setPage] = useState(0);


  const FormTitles = [""];




  return (
    <>
      <div className="top">
        <p>Logout</p>
      </div>
      <div className="top-2">

        <div className="top-items" style={{ marginLeft: "10px" }}>
          <img width={160} src="arcace-logo.png" />
        </div>


        <div className="profile-number">

          <Link className="profile-number" to="/home" style={{ width: "100%" }}>
            <img src="https://th.bing.com/th/id/OIP.KHzfwtKwyDFfIPUkM26VAAHaHa?w=184&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            <div className="name">
              <p>batool maali</p>
              {/* <small style={{ fontSize: "14px" }}> Amman , Jordan</small> */}


            </div>
          </Link>
        </div>

      </div>
      <div className="formbody">


        <div className="form-container">

          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">

            <div className="final" >
              <h4>Payment completed successfully</h4></div>
          </div>
          <div className="footer" style={{ display: "flex", justifyContent: "center" }}>


            <Link to="/home">
              <button


              >

                {page === FormTitles.length - 1 ? "Home" : "Next"}


              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Finalpayment;