import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

import "../Register/projects.css";


const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);


  const handlSubmit = (e) => {
    e.preventDefault()

    axios.get(`https://arcace.ca/Arciace/api/users/login?email=${Email}&password=${Password}`)
      .then((response) => {

        if (response?.data?.status) {
          console.log(response.data.data);
          localStorage.setItem("userid", response.data.data.id);
          localStorage.setItem("userData", response.data.data.name)
          localStorage.setItem("userInfo", JSON.stringify(response.data.data));
          console.log(localStorage.getItem("userInfo"));
          window.location = "/home"

        }
        else {
          console.log(response?.data?.error)
          console.log(response);
          setError(response?.data?.error)
        }
      })
      .catch((error) => {

        console.log(error);

      });

  }

  const ToRegister = () => {
    navigate("/register", { replace: true })
  }
  const forget = () => {
    navigate("/forget", { replace: true })
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
            <div className="logo">

            </div>
            <Link to="/home" className="back">
              <a className="back" > <HiOutlineArrowNarrowLeft size={22} />Back</a>
            </Link>
          </div>


          <div className="body">
            <div className="main">
              <div className="form-content">

                <div className="form-login">
                  <label>Email</label>
                  <input type="text" placeholder="Enter your email" required value={Email} onChange={(e) => setEmail(e.target.value)} />

                  <div className="forget-pass">
                    <label>password</label>
                    <input type="password" placeholder="New password" className="" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    <p onClick={forget}>Forget Your Password?</p>
                  </div>

                </div>
                {Error && Error ? <div style={{ marginBottom: "10px", color: "#E21E00", fontWeight: "normal" }}> {Error}</div> : ""}

                <div className="reg-btn">
                  <button className="login-button" onClick={handlSubmit}>login</button>
                  <a onClick={ToRegister} style={{ marginTop: "50px" }}>Register Now</a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>

  );
}

export default Login;

