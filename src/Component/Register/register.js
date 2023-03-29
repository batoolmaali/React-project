import React, { useState } from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import StudentInfo from "./StudentInfo";
import PasswordInfo from "./PasswordInfo";
import PersonalInfo from "./PersonalInfo";
import { Link } from "react-router-dom";
function Register() {

  const [page, setPage] = useState(0);
  const [ImageURL, setmageURL] = useState(null);



  //state for form data
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    userType: "",
    profile_pic: "",
    profileNo: "",
    email: "",
    secEmail: "",
    birthday: "",
    gender: "",
    city: "",
    country: "",
    approval: "",
    universityName: "",
    universityEmail: "",
    universityWebsite: "",
    breif: "",
    work_experiance: "",
    cardPhoto: ImageURL,
    facebook: "",
    instagram: "",
    linkedin: ""

  });


  const FormTitles = ["step1", "step2", "step3"];

  const PageDisplay = () => {
    if (page === 0) {
      return <StudentInfo formData={formData} setFormData={setFormData} FormTitles={FormTitles} page={page} setPage={setPage} />;
    }
    else if (page === 1) {
      return <PasswordInfo formData={formData} setFormData={setFormData} FormTitles={FormTitles} page={page} setPage={setPage} />;
    } else {
      return <PersonalInfo formData={formData} setFormData={setFormData} FormTitles={FormTitles} page={page} ssetPage={setPage} ImageUrl={ImageURL}
        setImageUrl={setmageURL} />;
    }
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
            <Link to="/login" className="back">
              <a className="back"

                disabled={page == 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              > <HiOutlineArrowNarrowLeft size={22} />Back</a>
            </Link>
          </div>

          <div className="body">
            {PageDisplay()}

          </div>
        </div>
      </div>
    </>

  );
}

export default Register;