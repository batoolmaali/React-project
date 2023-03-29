import React, { useState } from "react";
import "./projects.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PasswordInfo({ formData, setFormData, page, setPage, FormTitles }) {

  const navigate = useNavigate();
  const [Error, setError] = useState(false);
  const [Errorpass, setErrorpass] = useState(false);
  const [Confirm, setConfirm] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== Confirm) {
      setError(true)
    } else if (formData.password.length == 0 || formData.password.length < 8) {
      setErrorpass(true)
    }
    else {
      if (formData.approval !== 0) {
        axios
          .post("https://arcace.ca/Arciace/api/users/addUser", formData)
          .then((response) => {
            console.log(response.data);
            localStorage.setItem("userid", response.data.data.id);
            localStorage.setItem("userInfo", JSON.stringify(response.data.data))
          })
          .catch((error) => {
            throw error;
          });
        navigate("/profile/userprofile", { replace: true });
      }

      if (page === FormTitles.length - 1) {
        alert("FORM SUBMITTED");
        console.log(formData);
      } else {
        setPage((currPage) => currPage + 1);

      }
    }
  }

  return (
    <>

      <div className="main">

        {(formData.password.length >= 8 || formData.password.length == 0) ?
          <div className="note-phone">
            <p >Must Be 8 Characters and Numbers</p>
          </div> :
          <div className="note-phone">
            <p style={{ color: "#E21E00" }}>Must Be 8 Characters and Numbers</p>
          </div>
        }

        <div className="form-content" style={{ paddingTop: "15px" }}>
          <label>password</label>
          <input type="password" placeholder="New password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} />

          <label>Confirm password</label>
          <input type="password" placeholder="Confirm password" onChange={(e) => setConfirm(e.target.value)} value={Confirm} />

          {Error && Error ? <div style={{ marginBottom: "10px", color: "#E21E00", fontWeight: "normal", }}> Password not match</div> : ""}
          {Errorpass && Errorpass ? <div style={{ marginBottom: "10px", color: "#E21E00", fontWeight: "normal", }}>  Please Enter password correctly </div> : ""}

          <label style={{ textAlign: "center", marginTop: "100px ", marginBottom: "20px", fontSize: "20px", textAlign: "center" }}>How did hear about us</label>
          <div className="select-inp">

            <select>
              <option>Social Media</option>
              <option>Friends</option>
              <option>Search Engines</option>
            </select>
          </div>

        </div>
      </div>
      <div className="footer">
        <button
          className="button"
          onClick={handleSubmit}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}

        </button>
      </div>


    </>

  );
}

export default PasswordInfo;