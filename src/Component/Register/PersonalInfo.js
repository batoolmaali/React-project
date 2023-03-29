import React, { useState } from "react";
import "./projects.css";
import { BsImages } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LZString, Base64String } from 'lz-string';
import { compress, decompress } from 'lz-string'
import Resizer from "react-image-file-resizer";
const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

function PersonalInfo({ formData, setFormData, page, setPage, FormTitles, ImageUrl, setImageUrl }) {


  const [selectImages, setSelectImage] = useState(null);
  const navigate = useNavigate();
  const [Error, setError] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.universityWebsite.length == 0 || formData.universityName.length == 0 ||
      formData.universityEmail.length == 0 || ImageUrl == null) {
      setError(true)

    } else {
      console.log("form data", formData)
      axios
        .post("https://arcace.ca/Arciace/api/users/addUser", formData)
        .then((response) => {

          console.log(response.data.data);
          localStorage.setItem("userid", response.data.data.id)
          localStorage.setItem("userInfo", JSON.stringify(response.data.data))

          console.log(localStorage.getItem("userid"));
        })
        .catch((error) => {
          throw error;
        });


      if (page === FormTitles.length - 1) {
        e.preventDefault();

        // window.location = "/profile/userprofile"
        navigate("/profile/userprofile", { replace: true, state: { id: localStorage.getItem("userid") } });
      } else {
        setPage((currPage) => currPage + 1);
      }
    }


  }


  return (
    <>

      <div className="main">

        <div className="form-content">

          <div className="note-phone">
            <h2>Student Info</h2>
          </div>

          <label>University Name</label>
          <input type="text" placeholder="University Name" onChange={(e) => setFormData({ ...formData, universityName: e.target.value })} value={formData.universityName} />

          <label>University Website</label>
          <input type="text" placeholder="University Website" onChange={(e) => setFormData({ ...formData, universityWebsite: e.target.value })} value={formData.universityWebsite} />

          <label>University Email</label>
          <input type="text" placeholder="University Email" onChange={(e) => setFormData({ ...formData, universityEmail: e.target.value })} value={formData.universityEmail} />

          <div className="image-input">
            <label className="area">
              {ImageUrl ? (
                <img src={ImageUrl} />)
                :
                (
                  <>
                    <div className="icon">
                      <BsImages size={30} />
                    </div>
                    <span className="card-photo">Student Card Photo</span>
                  </>
                )}


              <input type="file" className="input-hiddin" value={formData.ImageUrl} hidden accept="images/png , images/jpeg , images/jpg"
                onChange={async (e) => {
                  setSelectImage(
                    setImageUrl(URL.createObjectURL(e.target.files[0]))
                  );
                  const file = e.target.files[0];
                  const image = await resizeFile(file);
                  // console.log(image);
                  // ///////////////////////////////////////////////////////////////
                  console.log(selectImages);
                  var blob = e.target.files[0];

                  var reader = new FileReader();
                  reader.readAsDataURL(blob);
                  reader.onloadend = function () {
                    var base64data = reader.result;
                    var string = base64data;
                    console.log(string);
                    console.log("aa", LZString)
                    console.log("Size of sample is: " + string.length);
                    var compressed = compress(string);
                    console.log("Size of compressed sample is: " + compressed.length);
                    string = decompress(compressed);
                    console.log("Sample is: " + string);
                    setFormData({
                      ...formData,
                      cardPhoto: string,
                    })
                  }

                  // }
                }}

              // ///////////////////////////////////////////////////////////////


              />
            </label>
          </div>
          {Error && Error ? <div style={{ margin: "10px ", color: "#E21E00", fontWeight: "normal", textAlign: "center" }}>  Please Fill in All Fields</div> : ""}

        </div>


      </div>

      <div className="footer">
        <button
          className="button"
          onClickCapture={handleSubmit}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>

    </>

  );
}

export default PersonalInfo;