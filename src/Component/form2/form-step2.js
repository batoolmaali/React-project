import React, { useState } from "react";
import { BsImages } from 'react-icons/bs';
import './form-data.css';

import Resizer from "react-image-file-resizer";
const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      "JPEG",
      5,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
function FormStep2({ formData, setFormData, Error1 }) {


  const [selectImages, setSelectImage] = useState(null);
  const [ImageUrlOne, setImageOneUrl] = useState("");
  const [ImageUrlTwo, setImageTwoUrl] = useState("");
  const [ImageUrlThree, setImageThreeUrl] = useState("");
  const [ImageUrlFour, setImageFourUrl] = useState("");
  const [Error, setError] = useState(false);
  // if (formData.name.length == "" || ImageUrlOne == null) {
  //   setError(true)
  // }



  return (
    <>
      <div className="about-project">
        <div className="upload-images">
          <label for="Birthday"> Project Name <span style={{ color: "#E21E00", fontSize: "20px" }}>* </span></label>
          <input onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
          />
          <div className="four-images">
            <div>
              <label className="lable-image">Upload Sheet 1 <span style={{ color: "#E21E00", fontSize: "17px" }}>* </span></label>
              <label className="area">
                {ImageUrlOne ? (
                  <img src={ImageUrlOne} />

                )

                  :
                  (

                    <div className="icon">
                      <BsImages size={30} />
                    </div>

                  )}

                <input
                  type="file"
                  hidden
                  onChange={async (e) => {
                    setSelectImage(
                      setImageOneUrl(URL.createObjectURL(e.target.files[0]))
                    );
                    const file = e.target.files[0];
                    const image = await resizeFile(file);
                    console.log(image);
                    // var blob = e.target.files[0];

                    // var reader = new FileReader();
                    // reader.readAsDataURL(blob);
                    // reader.onloadend = function () {
                    //   var base64data = reader.result;
                    //   console.log("base64", base64data);
                    setFormData({
                      ...formData,
                      sheet1: image,
                    });




                  }}

                  // onChange={(e) => setSelectImage(setImageUrl(URL.createObjectURL(e.target.files[0])))}
                  accept="images/png , images/jpeg , images/jpg"
                />
              </label></div>
            <div>
              <label className="lable-image">Upload Sheet 2</label>
              <label className="area">
                {ImageUrlTwo ? (
                  <img src={ImageUrlTwo} />)
                  :
                  (

                    <div className="icon">
                      <BsImages size={30} />
                    </div>

                  )}
                <input
                  type="file"
                  hidden
                  onChange={async (e) => {
                    setSelectImage(
                      setImageTwoUrl(URL.createObjectURL(e.target.files[0]))
                    );

                    const file = e.target.files[0];
                    const image = await resizeFile(file);
                    console.log(image);

                    // var blob = e.target.files[0];

                    // var reader = new FileReader();
                    // reader.readAsDataURL(blob);
                    // reader.onloadend = function () {
                    //   var base64data = reader.result;
                    //   console.log("base64", base64data);
                    setFormData({
                      ...formData,
                      sheet2: image,
                    });


                  }}
                  // onChange={(e) =>  setSelectImage(setImageUrl(URL.createObjectURL(e.target.files[0])))}
                  accept="images/png , images/jpeg , images/jpg"
                />
              </label></div>
            <div>
              <label className="lable-image">Upload Sheet 3</label>
              <label className="area">
                {ImageUrlThree ? (
                  <img src={ImageUrlThree} />)
                  :
                  (

                    <div className="icon">
                      <BsImages size={30} />
                    </div>

                  )}
                <input
                  type="file"
                  hidden
                  onChange={async (e) => {
                    setSelectImage(
                      setImageThreeUrl(URL.createObjectURL(e.target.files[0]))
                    );
                    const file = e.target.files[0];
                    const image = await resizeFile(file);
                    console.log(image);
                    // var blob = e.target.files[0];

                    // var reader = new FileReader();
                    // reader.readAsDataURL(blob);
                    // reader.onloadend = function () {
                    //   var base64data = reader.result;
                    //   console.log("base64", base64data);
                    setFormData({
                      ...formData,
                      sheet3: image,
                    });

                  }}
                  //
                  // onChange={(e) =>  setSelectImage(setImageUrl(URL.createObjectURL(e.target.files[0])))}
                  accept="images/png , images/jpeg , images/jpg"
                />
              </label></div>

            <div>
              <label className="lable-image">Upload Sheet 4</label>
              <label className="area">
                {ImageUrlFour ? (
                  <img src={ImageUrlFour} />)
                  :
                  (

                    <div className="icon">
                      <BsImages size={30} />
                    </div>

                  )}
                <input
                  type="file"
                  hidden
                  onChange={async (e) => {
                    setSelectImage(
                      setImageFourUrl(URL.createObjectURL(e.target.files[0]))
                    );
                    const file = e.target.files[0];
                    const image = await resizeFile(file);
                    console.log(image);
                    // var blob = e.target.files[0];

                    // var reader = new FileReader();
                    // reader.readAsDataURL(blob);
                    // reader.onloadend = function () {
                    //   var base64data = reader.result;
                    //   console.log("base64", base64data);
                    setFormData({
                      ...formData,
                      sheet4: image,
                    });

                  }}
                  // onChange={(e) =>  setSelectImage(setImageUrl(URL.createObjectURL(e.target.files[0])))}
                  accept="images/png , images/jpeg , images/jpg"
                />
              </label></div>

          </div>
          {Error1 && Error1 ? <div style={{ marginTop: "10px", color: "#E21E00", padding: "6px", fontWeight: "normal" }}> Please fill  requerd Filed </div> : ""}


        </div>
        <div className="description">
          <label for="Birthday">Brief Description Of The Concept</label>
          <textarea onChange={(e) => setFormData({ ...formData, brief: e.target.value })}></textarea>
        </div>
      </div>
    </>
  );
}

export default FormStep2;
