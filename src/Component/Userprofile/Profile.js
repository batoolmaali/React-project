import React, { useState, useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useEffect } from "react";
import { DataContext } from "../Context";

import axios from "axios";
function Profile() {
    const [Info, setInfo] = useState(null);
    const { user, setUser } = useContext(DataContext);
    console.log("prof", user);
    let id = user;
    console.log("id", id);
    const idFromLocation = useLocation();

    useEffect(() => {



        // console.log("inside", `https://arcace.ca/Arciace/api/users/getUserById?id=${id}`)
        axios.get(`https://arcace.ca/Arciace/api/users/getUserById?id=${localStorage.getItem('userid')}`).then((response) => {
            console.log(response.data.data);
            setInfo(response.data.data)

        })
    }, [localStorage.getItem('userid')]);
    console.log(user);
    // useEffect(() => {



    //     // console.log("inside", `https://arcace.ca/Arciace/api/users/getUserById?id=${id}`)
    //     axios.get(`https://arcace.ca/Arciace/api/users/getUserById?id=${id}`).then((response) => {
    //         console.log(response.data.data);
    //         setInfo(response.data.data)

    //     })
    // }, [id]);

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

                </div>

                <div className="nn">
                    <main>
                        <div className='main-container'>
                            <div className="main-profile">
                                {Info ?
                                    <>
                                        <div className="column1">
                                            <div className="image-info">
                                                <div className="image-card">
                                                    <div className="circle-image">
                                                        {Info.profile_pic && Info.profile_pic ?
                                                            <img src={Info.profile_pic
                                                            } /> :
                                                            <img src="https://th.bing.com/th/id/R.f6ac239e660006f1adbfe5be67c69ba2?rik=KLitQSKHfFtHmA&riu=http%3a%2f%2fvtc3pl.esy.es%2fimages1%2fprofile.png%3f1&ehk=X0FA75SYYsXX6ZHnjGUP%2bwv8wQtpmTPhtjaOpJd9N5o%3d&risl=&pid=ImgRaw&r=0" />
                                                        }
                                                        <h3> {Info.name}</h3>
                                                        <small style={{ fontSize: "14px" }}>{Info.country}, {Info.city}</small>
                                                    </div>
                                                    <div className="user-type">
                                                        <h3 style={{ color: "#7A7A00" }}>{Info.types.type}</h3>
                                                    </div>

                                                </div>
                                            </div>
                                            <p className="card-title" style={{ marginLeft: "10px" }}>  Contact Info</p>
                                            <div className="user-info ">
                                                <div className="contact-div">
                                                    <div className="image-card ">
                                                        <div className="contact">
                                                            <div className="con"><b style={{ marginRight: "10px" }}><MdEmail size={18} /> Email: </b> {Info.email}</div>
                                                            <div className="con"><b style={{ marginRight: "10px" }}><FaPhoneAlt /> Phone: </b> {Info.phone}</div>
                                                            <div className="con"><b style={{ marginRight: "10px" }}><MdLocationOn /> Location: </b> {Info.country}, {Info.city}</div>
                                                        </div>
                                                        <div className="contact">
                                                            <h3>Social Media</h3>
                                                            <div className="media">

                                                                <FaFacebookF />
                                                                <FaLinkedinIn />
                                                                <BsInstagram />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                {Info.types.type.toLowerCase() === 'student' ?

                                                    <div style={{ marginTop: "20px" }}>
                                                        <div className="card-photo" >

                                                            <h4>University Name:</h4>
                                                            <br />
                                                            <p>{Info.universityName}</p>
                                                            <br />
                                                            <h4>University Website:</h4>
                                                            <br />
                                                            <p>{Info.universityWebsite}</p>
                                                            <br />
                                                            <h4>University Contact Person Email:</h4>
                                                            <br />
                                                            <p>{Info.universityEmail}</p>


                                                            <div className="card-photoImage">
                                                                <img src={Info.cardPhoto} />

                                                            </div>

                                                        </div>
                                                    </div> : ""}
                                            </div>



                                        </div>
                                        <div className="column2">
                                            <div className="brief">
                                                <div className="brief-card">
                                                    <h4>Brief Bio:</h4>
                                                    <br />
                                                    <p>{Info.breif}</p>
                                                </div>
                                            </div>
                                            <div className="education">
                                                <p className="card-title">Education Info</p>
                                                {Info.educations.length ?
                                                    <>
                                                        {Info.educations.map((item, i) =>
                                                            <div className="education-card card1">
                                                                <p className="bold">{item.universityName}</p>

                                                                <p>{item.universitySpecialization}</p>
                                                                <p >{item.year}</p>
                                                            </div>
                                                        )}
                                                    </>


                                                    :

                                                    <div className="education-card">

                                                        <p>There is no Information to be viewed</p>
                                                    </div>
                                                }

                                                {Info.educations.map((item) => {
                                                    return <div className="education-card card2">

                                                        <p className="bold">{item.universityName}</p>
                                                        <div>
                                                            <p>{item.universitySpecialization}</p>
                                                            <p>{item.year}</p>
                                                        </div>
                                                    </div>
                                                })}


                                            </div>
                                            <div className="experience">
                                                <div className="exp-card">
                                                    <h4>Work Experience:</h4>
                                                    <br />
                                                    <p>{Info.work_experiance}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    : ""}
                            </div>
                        </div>
                    </main>
                </div>
            </div >
        </>
    );
}

export default Profile;