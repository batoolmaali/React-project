import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import './image.css'
import { useRef } from "react";

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

import axios from "axios";
import OtpInput from "react-otp-input";
import { FaCoins } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { BsShare, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';

import { FacebookShareButton } from "react-share";
import {
    FacebookShareCount, FacebookIcon
} from "react-share";

import dateFormat from 'dateformat';
const now = new Date();

const LightBox = (id) => {
    // onst[count, setcount] = useState(0);
    // const percentage2 = 15;
    // const percentage = 66;

    // const inc = () => {
    //     if (count >= 10) {
    //         return 10;
    //     }
    //     setcount(count + 1)
    // }
    // const dec = () => {
    //     if (count <= 0) {
    //         return 0;
    //     }
    //     setcount(count - 1)
    // }
    let boxRef2 = useRef();


    const handle2 = (id) => {
        // console.log(e.currentTarget.id);
        // let c = e.currentTarget.id;
        // boxRef2.current = e.currentTarget.i;
        //  boxRef2 = document.getElementById(i)
        const el = document.getElementById(id);
        console.log(el);
        console.log(boxRef2.current.id);
        arr[0].type1.map((item, index) => {

            if (index == boxRef2.current.id) {
                console.log("yse");

                boxRef2.current.classList.toggle("active")
            }
        })

        // boxRef2.current.classList.toggle("active")
    }

    const [search, setsearch] = useState("");
    const [compatitions, setcompatitions] = useState([]);
    let recently = compatitions.slice(-4);
    // console.log("recently", recently);

    useEffect(() => {
        axios.get("https://arcace.ca/Arciace/api/compatitions/getAllCompatitions")
            .then((response) => {
                if (response.data.data) {
                    // console.log(response.data.data);
                    setcompatitions(response.data.data)
                }
            })

    }, [])

    // console.log(compatitions);


    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 3;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(compatitions.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(compatitions.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, compatitions]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % compatitions.length;
        setItemOffset(newOffset);
    };
    // let type = ["type1", "type2", "type3"]
    // let arr = [{
    //     type1: ["batool", "maram", "deyaa", "mohammed"],
    //     type2: ["batool2", "maram2", "deyaa2", "mohammed2"]
    // }
    // ]






    const [queryValue, setValue] = useState("");
    const [select, setselect] = useState("");
    const [value1, setvalue] = useState([]);

    // const handleTextChange = async (e) => {
    //     await setValue(e.target.value)
    //     filteredData()
    // }
    // const handleSelect = async (e) => {
    //     await setselect(e.target.value)
    //     filteredData()
    // }
    // const filteredData = (e) => {
    //     if (queryValue == " ") {
    //         return arr;

    //     } else {
    //         const itemSeach = arr.filter((d, i) => {
    //             return d == queryValue && d == select;
    //         })
    //         console.log("drst", itemSeach)
    //         setvalue(itemSeach)
    //     }
    // }

    // console.log(queryValue);
    // console.log(select);
    // console.log(value1);


    // console.log(queryValue, select);

    // const [isActive, setActive] = useState("false");

    // const ToggleClass = (e) => {
    //     if (e.target.className === "active") {
    //         e.target.className = "";
    //     }
    //     else {
    //         e.target.className = "active"
    //     }

    // };
    let type = ["type1", "type2", "type3"]
    let arr = [{
        type1: ["batool", "maram", "deyaa", "mohammed"],
        type2: ["batool2", "maram2", "deyaa2", "mohammed2"]
    }
    ]
    const style = {
        color: "transparent"
    }
    return (
        <>

            <div className="home-container" style={{

                marginTop: "50px", width: "50%"
            }}>
                <input type="text" placeholder='search' onChange={(e) => setsearch(e.target.value)} />
                <select onClick={(e) => setselect(e.target.value)}>
                    <option value="">all</option>
                    {type.map((item) => {
                        return <>
                            <option value={item}>{item}</option></>
                    })}</select>

                {arr[0].type1.filter((val) => {
                    if (search == "" && select == "") {
                        return val
                    } else if (val.includes(search.toLocaleLowerCase())
                        && (select.includes("type1"))) {
                        return val
                    }
                }).map((item, i) => {

                    return (
                        <>
                            <div key={i} style={{ width: "100%" }} id={i} onClick={(e) => handle2(document.getElementById(id))}>{item}
                                <span key={i} id={i} style={{ marginLeft: "30px" }} ref={boxRef2} >h</span>
                            </div>
                            <br />





                        </>)
                })
                }

                {arr[0].type2.filter((val) => {
                    if (search == "" && select == "") {
                        return val
                    } else if (val.includes(search.toLocaleLowerCase())
                        && (select.includes("type2"))) {
                        return val
                    }
                }).map((item, i) => {
                    return (
                        <>
                            <div key={i} style={{ width: "100%" }}>{item}</div>
                            <br />



                        </>)
                })
                }

            </div>
            <FacebookShareButton url='https://www.facebook.com/'
                quote='share my project'
                style={style}>
                <FacebookIcon iconFillColor="white" round={true} bgStyle={{
                    fill: "black"

                }} style={{ border: " 1px solid red", borderRadius: "50%" }}>

                </FacebookIcon>
            </FacebookShareButton>
            {/* <input type="text" placeholder='search' value={queryValue} onChange={handleTextChange} />
                <select onClick={(e) => handleSelect(e)}>
                    {arr.map((item) => {
                        return <option value={item}>{item}</option>
                    })}

                </select>
            </div>
            <div>
                {value1.map(val => {
                    return <div>{val}</div>
                })}
            </div> */}
            {/* <div className="home-container">
                <div className="main-flex">
                    {currentItems.map((item, i) => {
                        const { id } = item;
                        return <div className="card-competitions">

                            <div class="img">
                                <img src="https://images.exoticestates.com/files/presets/propertypreview/property/1455/gallery/telluride_colorado_luxury_villa_vacation_home_35.jpg" />
                                <div className="card-competitions-share "><BsShare /></div>
                                <span>New Competitions</span>
                            </div>

                            <div class="content">
                                <h4 class="name">{item.name}</h4>
                                <div class="publish">
                                    <div class="stars">
                                        <p>Published In:</p>

                                    </div>
                                    <span>{dateFormat(item.created_at, "mmmm dS, yyyy")}</span>
                                </div>
                                <div class="publish">
                                    <div class="stars">
                                        <p>Registration Deadline:</p>

                                    </div>
                                    <span>September 29, 2022</span>
                                </div>
                                <hr />
                                <div class="publish">
                                    <p><div className="active"></div>   Active</p>

                                    <Link to={"/details"} state={{ projectId: id }}>
                                        <button className="card-btn">See Details</button>
                                    </Link>
                                </div>
                            </div>



                        </div>
                    })
                    }





                </div>
            </div> */}

            {/* <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="page-num"
                previousLinkClassName="page-num"
                nextLinkClassName="page-num"
                activeLinkClassName="active"
            /> */}

        </>
    );
};

export default LightBox;

 // const [resentlty, setresentlty] = useState([]);
    // setresentlty(compatitions.slice(-4))
    // console.log("rr", resentlty);