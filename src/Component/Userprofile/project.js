import React, { useState } from "react";

import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { Navigate, useNavigate, Link } from "react-router-dom";
import { BsShare, BsSearch } from "react-icons/bs";
import { FcOk } from "react-icons/fc";

function Projects() {

    const [style, setStyle] = useState("");
    const [style1, setStyle1] = useState("");

    const navigate = useNavigate();
    const handle = () => {
        navigate("/formdata", { replace: true })
        setStyle1("with-border");
        setStyle("")
    }
    const Info = JSON.parse(localStorage.getItem("userInfo"));
    console.log(Info);

    return (
        <>
            <div className="main-profile1">

                <div className='navbar'>

                    <div className="navbar-left">
                        <a href='' >Project</a>
                        {/* <a href='' className="with-border" >Project</a> */}
                        <a href='' onClick={handle} className={style1} >Add Project</a>
                        <a href='' ></a>
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

                <main>
                    <div className='main-container'>

                        <div className="section-edit2">
                            <h3>My Project</h3>
                            <div className="flex">
                                <a href=''>Project</a>
                                <a href='' onClick={handle}>Add Project</a>


                            </div>
                            <input type="text" placeholder="Search" />
                        </div>

                        <hr className="hr" />
                        <div className="main-competitions">
                            <div className="main-card">
                                <div className="main-card-image">

                                    <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                                    <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                                </div>

                                <div className="main-card-content">
                                    <h3>Project Name</h3>
                                    <div className="site">
                                        <p> From India</p>
                                        <p>September 29, 2022</p>
                                    </div>
                                    <div className="vote">
                                        <h3>Published</h3>
                                        <Link to="/vote">
                                            <button>see details</button>
                                        </Link>
                                    </div>

                                </div>
                                <hr />
                                <div className="main-card-bottom">
                                    <div className="active">
                                        <img src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />

                                        <p>
                                            <span>BY</span>
                                            Jaffe pandera Raya</p>
                                    </div>
                                    <div className="active-icon">
                                        <FcOk />   <p >Active</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-card">
                                <div className="main-card-image">

                                    <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                                    <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                                </div>

                                <div className="main-card-content">
                                    <h3>Project Name</h3>
                                    <div className="site">
                                        <p> From India</p>
                                        <p>September 29, 2022</p>
                                    </div>
                                    <div className="vote">
                                        <h3>Published</h3>
                                        <Link to="/vote">
                                            <button>see details</button>
                                        </Link>
                                    </div>

                                </div>
                                <hr />
                                <div className="main-card-bottom">
                                    <div className="active">
                                        <img src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />

                                        <p>
                                            <span>BY</span>
                                            Jaffe pandera Raya</p>
                                    </div>
                                    <div className="active-icon">
                                        <FcOk />   <p >Active</p>
                                    </div>
                                </div>
                            </div>
                            <div className="main-card">
                                <div className="main-card-image">

                                    <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                                    <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                                </div>

                                <div className="main-card-content">
                                    <h3>Project Name</h3>
                                    <div className="site">
                                        <p> From India</p>
                                        <p>September 29, 2022</p>
                                    </div>
                                    <div className="vote">
                                        <h3>Published</h3>
                                        <Link to="/vote">
                                            <button>see details</button>
                                        </Link>
                                    </div>

                                </div>
                                <hr />
                                <div className="main-card-bottom">
                                    <div className="active">
                                        <img src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />

                                        <p>
                                            <span>BY</span>
                                            Jaffe pandera Raya</p>
                                    </div>
                                    <div className="active-icon">
                                        <FcOk />   <p >Active</p>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Projects;