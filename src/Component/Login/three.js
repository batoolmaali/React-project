import React, { useState } from "react";
import "../password/password.css"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Navigate, useNavigate, Link } from "react-router-dom";
import axios from "axios";
function Three({ setPasswordData, PasswordData, Errorpass, Confirm, setConfirm, Error }) {
  const navigate = useNavigate();



  let id = localStorage.getItem('userid');
  console.log(id);
  // const handlSubmit = (e) => {
  //   e.preventDefault()

  //   axios.post("https://arcace.ca/Arciace/api/users/updateUserInfo", {
  //     id,
  //     password
  //   })
  //     .then((response) => {

  //       if (response) {
  //         console.log(response.data.data);
  //         console.log(response);
  //         localStorage.setItem("userInfo", JSON.stringify(response.data.data))

  //       }

  //     })
  //     .catch((error) => {
  //       // throw error;
  //       console.log(error);

  //     });
  //   navigate("/Reset", { replace: true })

  // }

  return (
    <>

      <div className="main">
        <div className="new-password">
          <div className="note-phone">
            <h3>Create A New Password</h3>
            <p>In Order To Protect Your Account, Make Sure You Password:</p>
            {(PasswordData.length >= 8 || PasswordData.length == 0) ?

              <p >Must Be 8 Characters and Numbers</p>
              :

              <p style={{ color: "#E21E00" }}>Must Be 8 Characters and Numbers</p>

            }
          </div>
          <div className="form-content" style={{ paddingTop: "20px" }}>

            <label>password</label>
            <input type="password" placeholder="New password" onChange={(e) => setPasswordData(e.target.value)} value={PasswordData} />

            <label>confirm password</label>
            <input type="password" placeholder="confirm password" onChange={(e) => setConfirm(e.target.value)} value={Confirm} />
            {Error && Error ? <div style={{ marginBottom: "10px", color: "#E21E00", fontWeight: "normal", }}> Password not match</div> : ""}
            {Errorpass && Errorpass ? <div style={{ marginBottom: "10px", color: "#E21E00", fontWeight: "normal", }}>  Please Enter the password correctly </div> : ""}
            {/* <div className="continue">
              <button onClick={handlSubmit}>continue</button>
            </div> */}

          </div>




        </div>
      </div>



    </>

  );
}

export default Three;

