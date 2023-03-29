import React, { useState, useContext } from "react";
import axios from "axios";
import FormStep1 from "./form-step1";
import FormStep2 from "./form-step2";
import FormStep3 from "./form-step3";
import { DataContext } from "../Context";
import './form-data.css';
import { MdPayment } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
function FormDataWithPayment() {


  const navigate = useNavigate();
  const { user, userData } = useContext(DataContext);
  const [page, setPage] = useState(0);
  const [Error2, setError2] = useState(false);
  const [Error1, setError1] = useState(false);
  const [active, setActive] = useState()
  const owner1 = localStorage.getItem('userid');

  const [formData, setFormData] = useState({
    name: "",
    brief: "",
    sheet1: "",
    sheet2: "",
    sheet3: "",
    sheet4: "",
    CompitionId: "",
    team_name: "",
    teamMembers: [localStorage.getItem('userid')],
    owner: owner1
  });

  const FormTitles = ["Project Team", "About Project", "Payment"];


  const PageDisplay = () => {
    if (page === 0) {
      return <FormStep1 formData={formData} setFormData={setFormData} Error2={Error2} setError2={setError2} />;
    } else if (page === 1) {
      return <FormStep2 formData={formData} setFormData={setFormData} Error1={Error1} />;
    } else if (page === 2) {
      return <FormStep3 formData={formData} setFormData={setFormData} />;
    }

  };

  return (
    <>
      <div className="top">
        <p>Log out</p>
      </div>
      <div className="top-2">

        <div className="top-items" style={{ marginLeft: "20px" }}>
          <img width={178} src={`${process.env.PUBLIC_URL}/images/arcace-logo.png`} />
        </div>

        {user ?
          <div className="profile-number">
            <Link className="profile-number" to="/home" style={{ width: "100%" }}>
              {userData.profile_pic && userData.profile_pic ?
                <img src={userData.profile_pic
                } /> :
                <img src="https://th.bing.com/th/id/R.f6ac239e660006f1adbfe5be67c69ba2?rik=KLitQSKHfFtHmA&riu=http%3a%2f%2fvtc3pl.esy.es%2fimages1%2fprofile.png%3f1&ehk=X0FA75SYYsXX6ZHnjGUP%2bwv8wQtpmTPhtjaOpJd9N5o%3d&risl=&pid=ImgRaw&r=0" />
              }
              <div className="name">
                <p>{userData.name}</p>
                <small style={{ fontSize: "14px" }}> {userData.city},{userData.country}</small>
              </div>
            </Link>

          </div>

          : ""}
      </div>
      <div className="formbody">

        <div className="progressbar2">
          <div
            style={{ width: page === 0 ? "0%" : page == 1 ? "50%" : "100%" }}
          ></div>
          <ul className="list-ul2">
            <p style={{ width: "110px" }}>
              <li style={{ border: page >= 0 ? "4px solid #27B53A" : "" }}><FaUserFriends size={30} />
              </li>
              <p style={{ marginTop: "10px" }}>project team</p>
            </p>
            <p style={{ width: "100px", }}>
              <li style={{ border: page >= 1 ? "4px solid #27B53A" : "" }}><RiSendPlaneFill size={30} />
              </li>
              <p style={{ marginTop: "10px" }}>project team</p>
            </p>
            <p style={{ width: "97px", textAlign: "right" }}>
              <li className="left" style={{ border: page >= 2 ? "4px solid #27B53A" : "" }}><MdPayment size={30} /></li>
              <p style={{ marginTop: "10px", textAlign: "right" }}>project team</p>
            </p>

            {/* <li style={{ border: page >= 2 ? "2px solid #27B53A" : "" }}><MdPayment size={30} /></li> */}
          </ul>
        </div>

        <div className="form-container">

          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            {page == 0 ? <button style={{ visibility: "hidden" }}></button> :
              <button className="prev"
                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Back
              </button>
            }
            <button
              onClick={() => {
                if (formData.team_name.length == 0) {
                  setError2(true)
                } else if (page == 1 && (formData.name == 0 || formData.sheet1 == "")) {
                  console.log("sdf");
                  setError1(true)
                }
                else {
                  axios
                    .post("https://arcace.ca/Arciace/api/compatitions/addProject", formData)
                    .then((response) => {

                      console.log(response.data.data);

                    })
                    .catch((error) => {
                      throw error;
                    });
                  if (page === FormTitles.length - 1) {

                    navigate("/finalpayment", { replace: true });

                  } else {
                    setPage((currPage) => currPage + 1);
                  }
                }
              }}

            >

              {page === FormTitles.length - 1 ? "Submit" : "Next"}


            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormDataWithPayment;