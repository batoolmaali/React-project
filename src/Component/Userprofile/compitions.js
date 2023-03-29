import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { MdSend } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { GiTrophyCup } from "react-icons/gi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import { useRef } from "react";
import { BsShare, BsSearch } from "react-icons/bs";
function Competitions() {
    const [style, setStyle] = useState("");
    const [style1, setStyle1] = useState("");
    const [style2, setStyle2] = useState("");
    const boxRef2 = useRef();

    const handle2 = () => {
        boxRef2.current.classList.toggle("box2-active")
    }
    const [filtercard, setfiltercards] = useState([
        {
            img: "https://wallsdesk.com/wp-content/uploads/2017/01/Salzburg-Images.jpg",
            name: "Compitions Name",
            active: "active"
        },
        {
            img: "https://wallsdesk.com/wp-content/uploads/2017/01/Salzburg-Images.jpg",
            name: "Compitions Name",
            active: "end"
        },
        {
            img: "https://wallsdesk.com/wp-content/uploads/2017/01/Salzburg-Images.jpg",
            name: "Compitions Name",
            active: "end"
        }
    ])
    const [cards, setcards] = useState([
        {
            img: "https://wallsdesk.com/wp-content/uploads/2017/01/Salzburg-Images.jpg",
            name: "one",
            active: "active"
        },
        {
            img: "https://wallsdesk.com/wp-content/uploads/2017/01/Salzburg-Images.jpg",
            name: "two",
            active: "end"
        },
        {
            img: "https://wallsdesk.com/wp-content/uploads/2017/01/Salzburg-Images.jpg",
            name: "three",
            active: "end"
        }
    ]);
    const Active = () => {

        let cc = cards.filter((card) => {
            return card.active == "active"
        })

        console.log(cc)


        setfiltercards(cc);
        console.log(filtercard);
        setStyle("with-border");
        setStyle1("")

    }
    const End = () => {
        let dd = cards.filter((card) => {
            return card.active == "end"
        })
        setfiltercards(dd);
        setStyle1("with-border");
        setStyle("")

    }
    // const All = () => {


    //     setfiltercards(cards);
    //     setStyle2("with-border");
    //     setStyle("")
    //     setStyle1("")
    // }


    const Info = JSON.parse(localStorage.getItem("userInfo"));
    console.log(Info);
    return (
        <>
            <div className="main-profile1">

                <div className='navbar'>

                    <div className="navbar-left">


                        <a className={style} onClick={Active}  >Active competitions</a>
                        <a className={style1} onClick={End}>End competitions</a>
                        <a ></a>
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

                            <div className="section-edit2">
                                <h3>My Competitions</h3>
                                <div className="flex">
                                    <a onClick={Active}>Active competitions</a>
                                    <a onClick={End}>End competitions</a>

                                </div>
                                <input type="text" placeholder="Search" />
                            </div>

                            <hr className="hr" />
                            <div className="main-competitions">
                                {filtercard && filtercard.map((c) => {

                                    return (
                                        <div className="card-competitions">

                                            <div class="img">
                                                <img src="https://images.exoticestates.com/files/presets/propertypreview/property/1455/gallery/telluride_colorado_luxury_villa_vacation_home_35.jpg" />
                                                <div className='fab2' onClick={handle2}>
                                                    <BsShare />
                                                </div>
                                                <div className='box2' ref={boxRef2}>
                                                    <a className='item22 item1'><FaFacebookF /></a>
                                                    <a className='item22 item2'><BsInstagram /></a>
                                                    <a className='item22 item3'><FaLinkedinIn /></a>


                                                </div>
                                                <span>New Competitions</span>
                                            </div>
                                            <div class="content">
                                                <h4 class="name">{c.name}</h4>
                                                <div class="publish">
                                                    <div class="stars">
                                                        <p>Published In:</p>

                                                    </div>
                                                    <span>September 20, 2022</span>
                                                </div>
                                                <div class="publish">
                                                    <div class="stars">
                                                        <p>September 20, 2022</p>

                                                    </div>
                                                    <span>September 29, 2022</span>
                                                </div>
                                                <hr />
                                                <div class="publish">
                                                    {c.active === "active" ?
                                                        <p><div className="active"></div> {c.active}</p>
                                                        :
                                                        <p><div className="end"></div> {c.active}</p>}
                                                    <div className="pub-button">
                                                        <button className="card-btn">Project</button>
                                                        <Link to="/details">
                                                            <button className="card-btn">See Details</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>



                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Competitions;