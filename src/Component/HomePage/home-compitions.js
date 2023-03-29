
import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./footer";
import { useRef } from "react";
import { FaCoins } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { BsShare, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import './navbar.css';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import ReactPaginate from 'react-paginate';
import { FacebookShareButton, LinkedinShareButton, } from "react-share";
import {
    FacebookIcon, LinkedinIcon
} from "react-share";

import dateFormat from 'dateformat';
const now = new Date();


function CompitionsHome() {
    const [search, setsearch] = useState("");
    const [select, setselect] = useState("");
    const boxRef2 = useRef();
    // boxRef2 = useRef(document.getElementById(e.currentTarget.id));

    const handle2 = (e) => {

        console.log(boxRef2);
        // console.log(e.currentTarget.id);
        // c= e.currentTarget.id;
        // boxRef2.current = e.currentTarget.item.id
        boxRef2.current.classList.toggle("box2-active")
    }


    const [compatitionsType, setcompatitionsType] = useState([]);
    const [compatitions, setcompatitions] = useState([]);
    console.log(compatitions);

    {/* ------------------------------get all CompatitionTypes--------------------------------------------- */ }
    useEffect(() => {
        axios.get("https://arcace.ca/Arciace/api/compatitions/getAllCompatitionTypes")
            .then((response) => {
                if (response.data.data) {
                    console.log(response.data.data);
                    setcompatitionsType(response.data.data)
                }
            })

    }, [])

    {/* ------------------------------get all Compatition--------------------------------------------- */ }


    useEffect(() => {
        axios.get("https://arcace.ca/Arciace/api/compatitions/getCompatitionsCards")
            .then((response) => {
                if (response.data.data) {
                    console.log(response.data.data);
                    setcompatitions(response.data.data)
                }
            })

    }, [])

    {/* ------------------------------paginate--------------------------------------------- */ }
    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(compatitions.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(compatitions.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, compatitions]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % compatitions.length;
        setItemOffset(newOffset);
    };

    {/* ------------------------------end paginate--------------------------------------------- */ }
    return (
        <>
            <div className="background">
                <div className="overlay">
                    <div className="background-head">
                        <div className="week">
                            <p>Competitions Of The Week</p>
                            <p>October 1, 2022</p>
                        </div>
                        <div className="background-share">

                            <BsShare size={20} /></div>
                    </div>
                    <div className="background-content">

                        <div className="background-content-inner">
                            <h1>Tiny House Community</h1>
                            <p>We would like to find better ideas and mechanisms to take sustainable living steps further through designing ultra-small living houses, minimalist lifestyle, self -sustained off grid communities. These communities ( villages) are to be seeds like, injected into our urban design for a better future.

                                <br /> <br /> We sincerely look forward to your participation in this mind-set changing design, so we can pass on with you a better city to future generations.</p>

                        </div>
                    </div>
                    <div className="background-footer">
                        <div className="Evaluation-Criteria"><h3>Evaluation Criteria</h3></div>
                        <div className="Evaluation">
                            <div className="one">site respecting</div>
                            <div className="two">site respecting</div>
                            <div className="three">site respecting</div>
                            <div className="four">site respecting</div>
                            <div className="five">site respecting</div>
                        </div>
                        <div className="Prize">Prize :200$</div>
                        <div className="background-button">
                            <button className="btn-1">REGISTER NOW</button>
                            <button className="btn-2">Download Details</button>


                        </div>
                        <div className="price">
                            <p><FaCoins />  Designers :25$</p>
                            <p><FaCoins />  Students:10$</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="search">
                <div className="searchbox">
                    <div className="inputfeild">
                        <input type="text" placeholder="Search" className="input" onChange={(e) => setsearch(e.target.value)} />
                        <BsSearch className="search-icons" />
                    </div>
                    <div className='dropdown' >

                        <select onClick={(e) => setselect(e.target.value)}>
                            <option value="">All</option>
                            {compatitionsType && compatitionsType.map((types, i) => {

                                return <option value={types.type}>{types.type}</option>
                            })}

                        </select>
                    </div>
                </div>
            </div>

            <div className="home-container" style={{ marginTop: "50px" }}>
                <div className="comptitions-title">
                    <h2>Recently Published</h2>
                </div>
            </div>
            {compatitions.length ?
                <>

                    {/* ------------------------------recently--------------------------------------------- */}
                    <div className="home-container">
                        <div className="main-flex">
                            {compatitions[0].recently.map((items) => {
                                const { id } = items;
                                return (
                                    <div className="card-competitions">

                                        <div class="img">
                                            <img src="https://images.exoticestates.com/files/presets/propertypreview/property/1455/gallery/telluride_colorado_luxury_villa_vacation_home_35.jpg" />
                                            <div className='fab2' id={items.id} onClick={(e) => handle2(id)}>
                                                <BsShare />
                                            </div>
                                            <div className='box2' ref={boxRef2} id={items.id}>
                                                <a className='item22 item1'>
                                                    <FacebookShareButton url='https://www.facebook.com/'
                                                        quote='share my project'
                                                    >
                                                        <FacebookIcon iconFillColor="white" size={40} round={true} bgStyle={{
                                                            fill: "transparent"


                                                        }} style={{ borderRadius: "50%" }}>

                                                        </FacebookIcon>
                                                    </FacebookShareButton>

                                                </a>
                                                <a className='item22 item2'>
                                                    < LinkedinShareButton url='https://www.facebook.com/'
                                                        quote='share my project'
                                                    >
                                                        < LinkedinIcon iconFillColor="white" size={40} round={true} bgStyle={{
                                                            fill: "transparent"


                                                        }} style={{ borderRadius: "50%" }}>

                                                        </ LinkedinIcon>
                                                    </  LinkedinShareButton>
                                                </a>
                                                <a className='item22 item3'><FaLinkedinIn /></a>


                                            </div>
                                            <span className="spot">New Open Call Spotlight</span>
                                        </div>

                                        <div class="content">
                                            <h4 class="name">{items.name}</h4>
                                            <div class="publish">
                                                <div class="stars">
                                                    <p>Published In:</p>

                                                </div>
                                                <span>{dateFormat(items.created_at, "mmmm dS, yyyy")}</span>
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
                                )
                            })}
                            {/* <div className="card-competitions">

                        <div class="img">
                            <img src="https://images.exoticestates.com/files/presets/propertypreview/property/1455/gallery/telluride_colorado_luxury_villa_vacation_home_35.jpg" />
                            <div className="card-competitions-share "><BsShare /></div>
                            <span>New Competitions</span>
                        </div>

                        <div class="content">
                            <h4 class="name">Product Name</h4>
                            <div class="publish">
                                <div class="stars">
                                    <p>Published In:</p>

                                </div>
                                <span>September 20, 2022</span>
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
                                <button className="card-btn">See Details</button>
                            </div>
                        </div>



                    </div>
                    <div className="card-competitions">

                        <div class="img">
                            <img src="https://images.exoticestates.com/files/presets/propertypreview/property/1455/gallery/telluride_colorado_luxury_villa_vacation_home_35.jpg" />
                            <div className="card-competitions-share "><BsShare /></div>
                            <span>New Competitions</span>
                        </div>

                        <div class="content">
                            <h4 class="name">Product Name</h4>
                            <div class="publish">
                                <div class="stars">
                                    <p>Published In:</p>

                                </div>
                                <span>September 20, 2022</span>
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
                                <button className="card-btn">See Details</button>
                            </div>
                        </div>



                    </div>
                    <div className="card-competitions">

                        <div class="img">
                            <img src="https://images.exoticestates.com/files/presets/propertypreview/property/1455/gallery/telluride_colorado_luxury_villa_vacation_home_35.jpg" />
                            <div className="card-competitions-share "><BsShare /></div>
                            <span>New Competitions</span>
                        </div>

                        <div class="content">
                            <h4 class="name">Product Name</h4>
                            <div class="publish">
                                <div class="stars">
                                    <p>Published In:</p>

                                </div>
                                <span>September 20, 2022</span>
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
                                <button className="card-btn">See Details</button>
                            </div>
                        </div>



                    </div> */}



                        </div>
                    </div>
                    <div className="home-container">
                        <hr className="compitions-hr" />
                    </div>
                    {/* ------------------------------All Published--------------------------------------------- */}
                    {/* <div className="home-container">
                        <div className="comptitions-title">
                            <h2>All Published</h2>
                        </div>
                    </div> */}
                    {compatitions.length ?
                        <>
                            {/* <>
                                <div className="home-container">
                                    <div className="main-flex">

                                        {currentItems[0].all.filter((val) => {
                                            console.log("select", select)
                                            console.log("search", search)
                                            console.log("val", val)

                                            if (search == "" || select == "") {
                                                return val
                                            } else if (val.name?.toLocaleLowerCase() == search.toLocaleLowerCase()
                                                && (val.types.type == select)) {
                                                return val
                                            }
                                        }).map((item, i) => {
                                            const { id } = item;
                                            return <div className="card-competitions">

                                                <div class="img">
                                                    <img src="https://images.exoticestates.com/files/presets/propertypreview/property/1455/gallery/telluride_colorado_luxury_villa_vacation_home_35.jpg" />
                                                    <div className="card-competitions-share " id={item.id} onClick={(e) => handle2(id)}><BsShare /></div>

                                                    <div className='box2' ref={boxRef2} id={item.id}>
                                                        <a className='item22 item1'><FaFacebookF /></a>
                                                        <a className='item22 item2'><BsInstagram /></a>
                                                        <a className='item22 item3'><FaLinkedinIn /></a>


                                                    </div>
                                                    {item.types.type == "Compatition" ?
                                                        <span>{item.types.type}</span> :
                                                        <span className="spot">{item.types.type}</span>
                                                    }

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
                                </div>
                            </> */}
                        </> : ""}
                    {/* ------------------------------paginate--------------------------------------------- */}
                    <div className="home-container">
                        <ReactPaginate
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
                        />
                    </div>
                </>

                : ""}
            <Footer />
        </>

    );
}

export default CompitionsHome;

