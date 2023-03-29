
import { React, useEffect, useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { FaCoins } from "react-icons/fa";
import { BsShare, BsSearch } from "react-icons/bs";
import { FcOk } from "react-icons/fc";
import { useRef } from "react";

import dateFormat from 'dateformat';
const now = new Date();


function MainHome() {
    const [search, setsearch] = useState("");
    const [select, setselect] = useState("");
    const [compatitionsType, setcompatitionsType] = useState([]);
    const [HomeCards, setHomeCards] = useState([]);

    const boxRef2 = useRef();

    const handle2 = () => {
        boxRef2.current.classList.toggle("box2-active")
    }

    // ----------------------------get All CompatitionTypes-------------------------------------
    useEffect(() => {
        axios.get("https://arcace.ca/Arciace/api/compatitions/getAllCompatitionTypes")
            .then((response) => {
                if (response.data.data) {
                    console.log(response.data.data);
                    setcompatitionsType([...response.data.data, { id: "123", type: 'projects' }])
                }
            })

    }, [])
    // ----------------------------get All getHomeCards-------------------------------------
    useEffect(() => {
        axios.get("https://arcace.ca/Arciace/api/compatitions/getHomeCards")
            .then((response) => {
                if (response.data.data) {
                    console.log(response.data.data);
                    setHomeCards(response.data.data);

                }

            })




    }, [])

    // var com = HomeCards.length ? HomeCards[0] : [];
    console.log(HomeCards[0]);


    return (

        // -----------------------------new compition----------------------------------------
        <>


            {HomeCards.length ?
                <>
                    <div className="background">
                        <div className="overlay">
                            <div className="background-head">
                                <div className="week">
                                    <p>Competitions Of The Week</p>
                                    <p>{dateFormat(HomeCards[0].compatitions.created_at, "mmmm dS, yyyy")}</p>
                                </div>
                                <div className="background-share">

                                    <BsShare size={20} /></div>
                            </div>
                            <div className="background-content">

                                <div className="background-content-inner">
                                    <h1>{HomeCards[0].compatitions.name}</h1>
                                    <p>{HomeCards[0].compatitions.brief}</p>

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
                                <div className="Prize">Prize :{HomeCards[0].compatitions.prize}$</div>

                                <div className="background-button">
                                    {/* state={{ projectId: id, userID: owner.id }} */}
                                    < Link to={"/formPayment"} >
                                        <button className="btn-1">REGISTER NOW</button>
                                    </Link>
                                    <button className="btn-2">Download Details</button>


                                </div>
                                <div className="price">
                                    <p><FaCoins />  Designers :{HomeCards[0].compatitions.paypal_arch_price}$</p>
                                    <p><FaCoins />  Students: {HomeCards[0].compatitions.paypal_student_price}$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                : ""}


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

            {HomeCards.length ?
                // ----------------------------- compition----------------------------------------
                <>

                    <div className="home-container">
                        <div className="main-flex">

                            <div className="home-title">
                                <h4>Competitions</h4>
                                <h3>{HomeCards[0].compatitions.name}</h3>
                            </div>
                            {HomeCards[0].compatitions.projects.filter((val) => {
                                console.log("select", select)
                                console.log("search", search)
                                console.log("val", val)

                                if (search == "" || select == "") {
                                    return val
                                } else if (val.name?.toLocaleLowerCase() == search.toLocaleLowerCase()
                                    && (select.includes("Compatition"))) {
                                    return val
                                }
                            }).map((comp, i) => {
                                const { id } = comp;
                                return <>



                                    <div className="main-card">

                                        <div className="main-card-image">

                                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                                        </div>

                                        <div className="main-card-content">
                                            <h3>{comp.name}</h3>
                                            <div className="site">
                                                <p> From India</p>
                                                <p>{dateFormat(comp.created_at, "mmmm dS, yyyy")}</p>
                                            </div>
                                            <div className="vote">
                                                <h3>vote now</h3>
                                                <button>see details</button>
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
                                                <div className="active"></div>   <p >  Active</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })

                            }





                        </div>
                    </div>

                    {/* ------------------------------spotlights--------------------------------------------- */}
                    {/* <div className="home-container">

                        <div className="main-flex">
                            {HomeCards[0].spotlights.slice(-1).map((spot, i) => {
                                return <>
                                    <div className="home-title2">
                                        <h4>Open Call Spotlight</h4>
                                        <h3>name</h3>
                                    </div>


                                    <div className="main-card">
                                        <div className="main-card-image">

                                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                                        </div>

                                        <div className="main-card-content">
                                            <h3>{spot.name}</h3>
                                            <div className="site">
                                                <p> From India</p>
                                                <p>{dateFormat(spot.created_at, "mmmm dS, yyyy")}</p>
                                            </div>
                                            <div className="vote">
                                                <h3>vote now</h3>
                                                <button>see details</button>
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
                                                <div className="active"></div>   <p >  Active</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })
                            }
                        </div>
                    </div> */}


                    {/* ------------------------------projects--------------------------------------------- */}
                    <div className="home-container">
                        <div className="home-title3">
                            <h4>Projects</h4>
                        </div>
                        <div className="main-flex">
                            {HomeCards[0].projects.filter((val) => {
                                // console.log("select", select)
                                // console.log("search", search)
                                // console.log("val project", val)

                                if (search == "" || select == "") {
                                    return val
                                } else if (val.name?.toLocaleLowerCase() == search.toLocaleLowerCase()
                                    && (select.includes("projects"))) {
                                    return val
                                }
                            }).slice(0, 4).map((proj, i) => {
                                return <>



                                    <div className="main-card">
                                        <div className="main-card-image">

                                            <img src={proj.sheet1} />
                                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                                        </div>

                                        <div className="main-card-content">
                                            <h3>{proj.name}</h3>
                                            <div className="site">
                                                <p> From {proj.owner_user.country}</p>
                                                <p> <p>{dateFormat(proj.created_at, "mmmm dS, yyyy")}</p></p>
                                            </div>
                                            <div className="vote">
                                                <h3>vote now</h3>
                                                <button>see details</button>
                                            </div>

                                        </div>
                                        <hr />
                                        <div className="main-card-bottom">
                                            <div className="active">
                                                <img src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />

                                                <p>
                                                    <span>BY </span>
                                                    {proj.owner_user.name}</p>
                                            </div>
                                            <div className="active-icon">
                                                <div className="active"></div>   <p >  Active</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            })}



                        </div>
                    </div>
                </> : ""}

        </>


    );
}

export default MainHome;