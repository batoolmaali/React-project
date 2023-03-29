import React, { useState, useContext, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './profile.css';
// import arcace from '../assets/arcace.png';
import { Link, Outlet, NavLink } from "react-router-dom";
import { HiUsers, HiHome } from "react-icons/hi";
import { MdSend, MdLogout } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { DataContext } from "../Context";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const Sidebar = () => {
    const navstyle = ({ isActive }) => {
        return {
            color: isActive ? "#00E21E" : "#cacaca",
            opacity: isActive ? "100% " : "70%",
        }
    }

    const [userData, setuserData] = useState({})
    // const info = localStorage.getItem("userInfo");
    // console.log(info);
    const { logout } = useContext(DataContext);
    console.log(userData);
    useEffect(() => {
        setuserData(JSON.parse(localStorage.getItem("userInfo")))

    }, [localStorage.getItem("userInfo")])

    return (
        <>
            <input type="checkbox" id="menu" />
            <nav className="nav">
                <label><img width={150} src={`${process.env.PUBLIC_URL}/images/arcace-logo.png`} /></label>
                <ul>
                    <li><a onClick={logout}> Logout</a></li>
                </ul>
                <label for="menu" className="menu-bar"><FaBars size={30} /></label>
            </nav>
            <div className="side-menu" >
                <div className="nav-light">
                    <img width={170} src={`${process.env.PUBLIC_URL}/images/arcace-logo.png`} />

                </div>
                <center>

                    <div className="user">
                        {userData.profile_pic && userData.profile_pic ?
                            <img width={70} src={userData.profile_pic
                            } /> :
                            <img width={70} src="https://th.bing.com/th/id/R.f6ac239e660006f1adbfe5be67c69ba2?rik=KLitQSKHfFtHmA&riu=http%3a%2f%2fvtc3pl.esy.es%2fimages1%2fprofile.png%3f1&ehk=X0FA75SYYsXX6ZHnjGUP%2bwv8wQtpmTPhtjaOpJd9N5o%3d&risl=&pid=ImgRaw&r=0" />
                        }
                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                            <h3>{userData.name}</h3>
                            <small>{userData.country}, {userData.city}</small>
                        </div>
                    </div>
                    <NavLink style={navstyle} to="Editprofile" className="useredit" >
                        <div  >Edit profile</div>
                    </NavLink>
                </center>
                <br />
                <NavLink to="userprofile" className="link" style={navstyle}>
                    <a> <HiUsers className="i" /><span>My Profile</span></a>

                </NavLink>
                <NavLink to="/home" className="link" style={navstyle}>
                    <a><HiHome className="i" /><span>Website</span></a>
                </NavLink>
                <NavLink to="usercompetitions" className="link" style={navstyle}>
                    <a><MdSend className="i" /><span>My Competitions</span></a>
                </NavLink>
                <NavLink to="userProject" className="link" style={navstyle}>
                    <a><AiFillStar className="i" /><span>My Project</span></a>
                </NavLink>

                <a className="logout" onClick={logout}><MdLogout className="i" /><span>logout</span></a>

            </div >
            <Outlet />
        </>
    );
}

export default Sidebar;

