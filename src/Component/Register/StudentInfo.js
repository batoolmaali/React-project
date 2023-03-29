import React, { useEffect, useState } from "react";
import "./projects.css";
import axios, * as others from 'axios';

const StudentInfo = ({ formData, setFormData, page, setPage, FormTitles }) => {

  const [Error, setError] = useState(false);
  const [userType1, setUserType] = useState([]);
  const [selecttype, setselectType] = useState("");
  const [allUser, setallUser] = useState([]);
  const [UserEmail, setUserEmail] = useState("");
  const [ErrorEmail, setErrorEmail] = useState(false);
  const handleSubmit = () => {

    if (UserEmail.includes(formData.email)) {
      setErrorEmail(true)
      return;
    }

    if ((formData.name.length == 0 || formData.phoneNumber.length == 0 || formData.email.length == 0 ||
      formData.birthday == "" || formData.city.length == 0 || formData.country.length == 0 ||
      formData.userType1 == "" || formData.gender == "")) {
      setError(true);
    }
    else {
      if (page === FormTitles.length - 1) {

      } else {
        setPage((currPage) => currPage + 1);
      }

    }
  }

  // -------------------------all users---------------------------------------
  useEffect(() => {
    axios.get("https://arcace.ca/Arciace/api/users/getAllUsers")
      .then((response) => {
        if (response.data.data) {
          // console.log(response.data.data);
          setallUser(response.data.data)
          let email = response.data.data.map((user) => {
            return user.email
          })

          setUserEmail(email)

        }
      });

  }, [])



  // -------------------------users types---------------------------------------
  useEffect(() => {
    axios.get("https://arcace.ca/Arciace/api/users/getUserTypes?page=User")
      .then((response) => {
        if (response.data.data) {
          setselectType(response.data.data[0].id)
          setUserType(response.data.data);
        }
      })

  }, [])

  // -------------------------aproval---------------------------------------
  useEffect(() => {
    setFormData({ ...formData, userType: selecttype })
  }, [selecttype])

  const Approval = (e) => {
    setselectType(e.target.value);

    if (e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.toLowerCase() == "student") {

      setFormData({ ...formData, approval: 0 })
    }
    else {

      setFormData({ ...formData, approval: 1 })
    }

  }


  return (
    <>

      <div className="main">
        <form>
          <div className="form-content" style={{ marginTop: "15px" }}>
            <label> I am</label>
            <div className="container-sel">
              <div className="select-inp">

                <select onChange={Approval} value={selecttype} id="select-res">
                  {userType1 && userType1.map((type) => {
                    return <>
                      <option key={type.id} value={type.id} name={type.type}>{type.type}</option>
                    </>
                  })}

                </select>
              </div>
            </div>
            <label>Full name</label>
            <input type="text" placeholder="Enter your Full Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} value={formData.name} />

            <label>email</label>
            <input type="email" placeholder="Enter your Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} />

            <label>phone number</label>
            <input type="text" placeholder="Enter your Phone number" onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} value={formData.phoneNumber} />
            <div className="select-form">

              <div className="items">
                <label>gender</label>
                <div className="select-inp">
                  <select onChange={(e) => setFormData({ ...formData, gender: e.target.value })} value={formData.gender}>
                    <option>Choose</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div className="items">
                <label>birthday</label>
                <input type="date" placeholder="Birthday" onChange={(e) => setFormData({ ...formData, birthday: e.target.value })} value={formData.birthday} />
              </div>
              <div className="items">
                <label>Country</label>
                <input type="text" placeholder="Country" onChange={(e) => setFormData({ ...formData, country: e.target.value })} value={formData.country} />
              </div>
              <div className="items">
                <label>City</label>
                <input type="text" placeholder="City" onChange={(e) => setFormData({ ...formData, city: e.target.value })} value={formData.city} />
              </div>
            </div>
            {Error && Error ? <div style={{ color: "#E21E00", fontWeight: "normal", textAlign: "center" }}>  Please Fill in All Fields</div> : ""}
            {ErrorEmail && ErrorEmail ? <div style={{ color: "#E21E00", fontWeight: "normal", textAlign: "center" }}>  Email Already Exists</div> : ""}

          </div>

        </form>
      </div >
      <div className="footer">

        <button
          className="button"
          onClick={handleSubmit}>
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>


      </div>


    </>

  );
}

export default StudentInfo;