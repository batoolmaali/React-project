import React, { useState, useContext, useEffect } from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn, FaCoins } from "react-icons/fa";
import { BsInstagram, BsArrowRight, BsShare, BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './navbar.css';
import { DataContext } from "../Context";
import { Link, NavLink, Outlet } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    const { user } = useContext(DataContext);
    const [userData, setuserData] = useState({})

    console.log(userData);
    useEffect(() => {
        setuserData(JSON.parse(localStorage.getItem("userInfo")))

    }, [localStorage.getItem("userInfo")])
    const navRef = useRef();
    const ShowNavbar = () => {
        console.log("hi");
        navRef.current.classList.toggle("responsive-nav")
    }
    const navstyle = ({ isActive }) => {
        return {
            color: isActive ? "green" : "#000000"
        }
    }
    const ToProfile = () => {
        navigate("/profile/userprofile", { replace: true });
    }
    return (
        <>
            <div className="head-top">
                <div className="social-head">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <BsInstagram />
                </div>
                <NavLink to="/home" >
                    <div className="To-website">

                        <p>To Main Website </p> <BsArrowRight size={20} />

                    </div>
                </NavLink>

            </div>
            <header>
                <div className="head-left">
                    <h3 className="header-logo">  <img width={160} src={`${process.env.PUBLIC_URL}/images/arcace-logo.png`} /></h3>


                    <nav ref={navRef}>

                        {userData ?
                            <div className="none2" onClick={ToProfile} >
                                <div className="image" >
                                    {userData.profile_pic && userData.profile_pic ?
                                        <img src={userData.profile_pic
                                        } /> :
                                        <img src="https://th.bing.com/th/id/R.f6ac239e660006f1adbfe5be67c69ba2?rik=KLitQSKHfFtHmA&riu=http%3a%2f%2fvtc3pl.esy.es%2fimages1%2fprofile.png%3f1&ehk=X0FA75SYYsXX6ZHnjGUP%2bwv8wQtpmTPhtjaOpJd9N5o%3d&risl=&pid=ImgRaw&r=0" />
                                    }
                                </div>
                                <div className="name">
                                    <p>{userData.name}</p>
                                    <small> {userData.city},{userData.country}</small>
                                </div>


                            </div>
                            :
                            <div className="none" >
                                <NavLink to="login" style={navstyle}>
                                    <a> Login</a>
                                </NavLink>
                                <NavLink to="register" style={navstyle}>
                                    <a> Register</a>
                                </NavLink>
                            </div>


                        }
                        <NavLink to="home" style={navstyle}>
                            <a>Home</a>
                        </NavLink>
                        <NavLink to="project" style={navstyle}>
                            <a>Projects</a>
                        </NavLink>
                        <NavLink to="compitions" style={navstyle}>
                            <a>Competitions</a>
                        </NavLink>
                        <NavLink to="winners" style={navstyle}>
                            <a>Winners</a>
                        </NavLink>



                        <button className="nav-btn nav-close" onClick={ShowNavbar}>
                            <FaTimes />
                        </button>

                    </nav>
                </div>
                {
                    user ? (

                        <div className="login-reg" onClick={ToProfile}>
                            {userData.profile_pic && userData.profile_pic ?
                                <img src={userData.profile_pic
                                } /> :
                                <img src="https://th.bing.com/th/id/R.f6ac239e660006f1adbfe5be67c69ba2?rik=KLitQSKHfFtHmA&riu=http%3a%2f%2fvtc3pl.esy.es%2fimages1%2fprofile.png%3f1&ehk=X0FA75SYYsXX6ZHnjGUP%2bwv8wQtpmTPhtjaOpJd9N5o%3d&risl=&pid=ImgRaw&r=0" />
                            }
                            <div className="name">
                                <p>{userData.name}</p>
                                <small style={{ fontSize: "14px" }}> {userData.city},{userData.country}</small>
                            </div>

                        </div>

                    ) :
                        <div className="login-reg">
                            <Link to="register">  <a style={{ color: "#FFFFFF", marginRight: "5px" }}>REGISTER</a> </Link> <span> / </span>   <Link to="login"> <a style={{ color: "#FFFFFF", marginLeft: "5px" }}>LOG IN</a></Link>
                        </div>
                }
                <button className="nav-btn" onClick={ShowNavbar}><FaBars /></button>
            </header >


            <Outlet />
        </>

    );
}

export default Navbar;