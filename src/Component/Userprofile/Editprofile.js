import React, { useState, useContext } from "react";
import { DataContext } from "../Context";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LZString, Base64String } from 'lz-string';
import { compress, decompress } from 'lz-string'
import axios from "axios";
function EditProfile() {
    const [name, setName] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [breif, setBreif] = useState('');
    const [facebook, setfacebook] = useState('');
    const [cardPhoto, setCardphoto] = useState('');
    const [instagram, setinstagram] = useState('');
    const [linkedin, setlinkedin] = useState('');
    const [work_experiance, setexperiance] = useState("");
    const [selectImages, setSelectImage] = useState(null);
    const [profile_pic, setmageURL] = useState(null);
    const [universityName, setuniversityName] = useState('');
    const [universitySpecialization, setuniversitySpecialization] = useState('');
    const [year, setyear] = useState('');
    const [educations, setEducations] = useState([])
    console.log(educations);
    console.log(profile_pic);
    let id = localStorage.getItem('userid');
    console.log(id);
    let userdata = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userdata);
    const handleUniversty = (e) => {

        let univ = {
            universityName: universityName,
            universitySpecialization: universitySpecialization,
            year: year
        }

        setEducations([...educations, univ])

        setuniversityName("")
        setuniversitySpecialization("")
        setyear("")
    }
    const handleSubmit = (e) => {


        const req = {
            id,
            name,
            phoneNumber,
            password,
            profile_pic,
            email,
            birthday,
            gender,
            educations,
            city,
            country,
            breif,
            work_experiance,
            cardPhoto,
            facebook,
            instagram,
            linkedin
        }
            ;

        console.log("request", req)

        e.preventDefault();

        axios
            .post("https://arcace.ca/Arciace/api/users/updateUserInfo",
                {
                    id,
                    name,
                    phoneNumber,
                    password,
                    profile_pic,
                    email,
                    birthday,
                    gender,
                    educations,
                    city,
                    country,
                    breif,
                    work_experiance,
                    cardPhoto,
                    facebook,
                    instagram,
                    linkedin
                }
            )
            .then((response) => {
                console.log("back", response.data.data);
                localStorage.setItem("userInfo", JSON.stringify(response.data.data))
            })
            .catch((error) => {
                throw error;
            });



    }

    const Info = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(Info);


    return (
        <>
            <div className="main-profile1">


                <div className='navbar'>

                    <div className="navbar-left">
                        <a href=''></a>
                        <a href=''></a>
                        <a href=''></a>
                    </div>


                    {Info ?
                        <div className="navbar-right">
                            {Info.approval == 1 ?
                                <p style={{ color: "#000000" }}>Profile NO. {Info.profile_no} </p>
                                :
                                <Tippy placement='bottom' interactive={true} arrow={false}
                                    content={<h4 style={{ fontWeight: "normal" }}>Wait for the Administrator To Activate Your Account, The Process Can Take A Maximum Of 3 Days</h4>} >
                                    <p style={{ color: "#7A7A00" }}>Your Account Needs Activation</p>
                                </Tippy>
                            }
                        </div>

                        : ""}
                    {/* 
                        <Tippy placement='bottom' interactive={true} arrow={false}
                            content={<h4 style={{ fontWeight: "normal" }}>Wait for the Administrator To Activate Your Account, The Process Can Take A Maximum Of 3 Days</h4>} >
                            <p style={{ color: "#000000" }}>Profile NO. 01/000003</p>
                        </Tippy> */}




                </div>
                {userdata ? <>
                    <div className="nn">
                        <main>
                            <div className='main-container'>
                                <div className="main-edit">
                                    <div className="main-title ">
                                        <h3>Edit Profile</h3>
                                        <button className="save" onClick={handleSubmit}  >save</button>
                                    </div>
                                    <div className="edit-info" >
                                        <div className="edit-image" >
                                            <label >
                                                {selectImages ? (
                                                    <img src={selectImages} />)
                                                    :
                                                    (
                                                        <img src={Info.profile_pic} />

                                                    )}
                                                <input
                                                    type="file" className="input-hiddin"
                                                    // value={ImageURL}
                                                    hidden

                                                    onChange={(e) => {
                                                        setSelectImage(
                                                            URL.createObjectURL(e.target.files[0])
                                                        );
                                                        // console.log(selectImages);
                                                        // var blob = e.target.files[0];

                                                        // var reader = new FileReader();
                                                        // reader.readAsDataURL(blob);
                                                        // reader.onloadend = function () {
                                                        //     var base64data = reader.result;
                                                        //     console.log("base64", base64data);



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
                                                            setmageURL(
                                                                string
                                                            );
                                                        }

                                                        // }
                                                    }}
                                                    // onChange={(e) => setSelectImage(setImageUrl(URL.createObjectURL(e.target.files[0])))}
                                                    accept="images/png , images/jpeg , images/jpg"
                                                />



                                                <h3>Profile Picture</h3>
                                                <small style={{ color: "#007A10", cursor: "pointer" }}>Change or upload</small>
                                            </label>
                                        </div>
                                        <div className="edit-General-info">
                                            <h3>General Info</h3>
                                            <form>

                                                <div className="row">
                                                    <div className="column-edit">
                                                        <label>Full Name</label>
                                                        <br />
                                                        <input type="text" placeholder="Full name" onChange={(e) => setName(e.target.value)}
                                                            defaultValue={userdata.name} />
                                                    </div>
                                                    <div className="column-edit">
                                                        <label>Password</label>
                                                        <br />
                                                        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                                    </div>
                                                </div>


                                                <div className="edit-form">

                                                    <div className="items">
                                                        <label style={{ marginBottom: "10px" }}>Gender</label>
                                                        <div className="select-inp">
                                                            <select onChange={(e) => setGender(e.target.value)} defaultValue={userdata.gender}>
                                                                <option>Choose</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="items">
                                                        <label>Birthday</label>
                                                        <input type="date" defaultValue={userdata.birthday} placeholder="Birthday" onChange={(e) => setBirthday(e.target.value)} />
                                                    </div>

                                                </div>




                                                <div className="edit-form">
                                                    <div className="items">
                                                        <label>Country</label>
                                                        <input type="text" placeholder="Country" defaultValue={userdata.country} onChange={(e) => setCountry(e.target.value)} />
                                                    </div>
                                                    <div className="items">
                                                        <label>City</label>
                                                        <input type="text" placeholder="City" defaultValue={userdata.city} onChange={(e) => setCity(e.target.value)} />
                                                    </div>
                                                </div>






                                            </form>
                                        </div>

                                    </div>
                                    <div className="section-edit">
                                        <h3>Contact Info</h3>
                                    </div>
                                    <div className="edit-info2">
                                        <div className="edit-column1">
                                            <div className="contact-edit">

                                                <label>Email</label>
                                                <br />
                                                <input type="text" placeholder="Email" defaultValue={userdata.email} onChange={(e) => { setEmail(e.target.value) }} />
                                                <label>Phone</label>
                                                <br />
                                                <input type="text" placeholder="Phone" defaultValue={userdata.phone} onChange={(e) => setPhone(e.target.value)} />
                                                <h4> Social media</h4>
                                                <br />
                                                <div className="inputwithIcon">
                                                    <input type="text" placeholder="facebook" defaultValue={userdata.facebook} onChange={(e) => setfacebook(e.target.value)} />
                                                    <span className="icons"><FaFacebookF /></span>
                                                </div>
                                                <div className="inputwithIcon">
                                                    <input type="text" placeholder="linkedin" defaultValue={userdata.linkedin} onChange={(e) => setlinkedin(e.target.value)} />
                                                    <span className="icons"><FaLinkedinIn /></span>
                                                </div>
                                                <div className="inputwithIcon">
                                                    <input type="text" placeholder="instgram" defaultValue={userdata.instagram} onChange={(e) => setinstagram(e.target.value)} />
                                                    <span className="icons"><BsInstagram /></span>
                                                </div>



                                            </div>
                                            {Info.approval == 0 ?
                                                // {/* {Info.types.type.toLowerCase() === 'student' ? */}
                                                <>
                                                    <div className="section-edit">
                                                        <h3>Student Info</h3>

                                                    </div>
                                                    <br />
                                                    {/* userdata.types.type.toLowerCase() === 'student'  */}


                                                    < div className="contact-edit">
                                                        <h4 style={{ marginBottom: "10px" }}>University Name:</h4>

                                                        <p>{userdata.universityName}</p>

                                                        <br />
                                                        <h4 style={{ marginBottom: "10px" }}>University Website:</h4>

                                                        <p>{userdata.universityWebsite}</p>
                                                        <br />
                                                        <h4 style={{ marginBottom: "10px" }}>University Contact Person Email:</h4>


                                                        <p>{userdata.universityEmail}</p>
                                                        <div className="contact-image">
                                                            <img src={userdata.cardPhoto} />
                                                        </div>
                                                    </div>
                                                </> : ""}

                                        </div>

                                        <div className="edit-column2">
                                            <div className="edit-breif"><h3>Brief Bio:</h3>
                                                <textarea defaultValue={userdata.breif} onChange={(e) => setBreif(e.target.value)} ></textarea>
                                            </div>
                                            <div className="education">
                                                <div className="section-edit"><h3>Education Info</h3></div>

                                                {educations.map((item) => {
                                                    return <div className="education-card card1">
                                                        <p className="bold">{item.universityName}</p>

                                                        <p>{item.universitySpecialization}</p>
                                                        <p >{item.year}</p>
                                                    </div>
                                                })}
                                                {educations.map((item) => {
                                                    return <div className="education-card card2">

                                                        <p className="bold">{item.universityName}</p>
                                                        <div>
                                                            <p>{item.universitySpecialization}</p>
                                                            <p>{item.year}</p>
                                                        </div>
                                                    </div>
                                                })}




                                                <div className="education-card card-input">

                                                    <input placeholder="University Specialization" value={universityName} onChange={(e) => setuniversityName(e.target.value)} />
                                                    <input placeholder="University Name" value={universitySpecialization} onChange={(e) => setuniversitySpecialization(e.target.value)} />
                                                    <input placeholder="year: ---- / ----" value={year} onChange={(e) => setyear(e.target.value)} />
                                                    <button className="add" onClick={handleUniversty}>ADD</button>
                                                </div>



                                            </div>
                                            <div className="experience">
                                                <div className="exp-card">
                                                    <h4>Work Experience:</h4>
                                                    <textarea defaultValue={userdata.work_experiance} onChange={(e) => setexperiance(e.target.value)}></textarea>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div >
                </> : ""
                }
            </div >

        </>
    );
}

export default EditProfile;