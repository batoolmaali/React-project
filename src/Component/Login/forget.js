import React, { useState } from "react";
import "../Register/projects.css";
import One from "./one";
import Two from "./two";
import Three from "./three";
import Four from "./four";
import axios from "axios";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import { Navigate, useNavigate } from "react-router-dom";
let id = localStorage.getItem('userid');
function Forget() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [Error, setError] = useState(false);
  const [Errorpass, setErrorpass] = useState(false);
  const [PasswordData, setPasswordData] = useState("")
  const [Confirm, setConfirm] = useState("");
  const FormTitles = ["Step one", "Step Two", "Step Three"];
  const PageDisplay = () => {
    if (page === 0) {
      return <One PasswordData={PasswordData} setPasswordData={setPasswordData}
        FormTitles={FormTitles} page={page} setPage={setPage} />;
    }
    else if (page === 1) {
      return <Two PasswordData={PasswordData} setPasswordData={setPasswordData}
        FormTitles={FormTitles} page={page} setPage={setPage} />

    } else if (page === 2) {
      return <Three PasswordData={PasswordData} setPasswordData={setPasswordData}

        FormTitles={FormTitles} page={page} setPage={setPage} Error={Error} Errorpass={Errorpass}
        Confirm={Confirm} setConfirm={setConfirm}
      />
    }


    // else {
    //   return <Four PasswordData={PasswordData} setPasswordDataa={setPasswordData} FormTitles={FormTitles} page={page} setPage={setPage} />
    // }


  };
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

            <a className="back"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}



            > <HiOutlineArrowNarrowLeft />Back</a>

          </div>
          <div className="body">
            {PageDisplay()}

            <div className="footer1">
              <button
                onClick={() => {
                  if (page === FormTitles.length - 1) {
                    // if (PasswordData.password !== Confirm) {
                    //   setError(true)
                    // } else

                    // if (page == 2 && PasswordData.length == 0 || PasswordData.length < 8) {
                    //   setErrorpass(true)
                    // }
                    // else if (page == 2 && (PasswordData !== Confirm)) {

                    //   setError(true)
                    // }
                  }

                  else {
                    axios.post("https://arcace.ca/Arciace/api/users/updateUserInfo", {
                      id,
                      PasswordData
                    })
                      .then((response) => {

                        if (response) {
                          console.log(response.data.data);
                          console.log(response);
                          localStorage.setItem("userInfo", JSON.stringify(response.data.data))

                        }

                      })
                      .catch((error) => {
                        // throw error;
                        console.log(error);

                      });
                    if (page === FormTitles.length - 1) {

                      alert("FORM SUBMITTED");
                      navigate("/Reset", { replace: true })

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
      </div>
    </>

  );
}

export default Forget;

