import React, { useState, useEffect } from "react";
import './navbar.css';
import { FaCoins } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { BsShare, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./footer";


function Winners() {
    const [winners, setwinners] = useState([]);
    useEffect(() => {
        axios.get("https://arcace.ca/Arciace//api/compatitions/getWinners;")
            .then((response) => {
                if (response.data.data) {
                    console.log(response);
                    setwinners(response.data.data)
                }
            })

    }, [])
    console.log(winners);
    return (
        <>
            <div className="background-winners" style={{ marginBottom: "50px" }}>
                <div className="overlay">
                    <div className="auto">
                        <h1>Winners</h1>
                        <p>You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete</p>

                        <div className="search">

                            <div className="searchbox">
                                <div className="inputfeild">
                                    <input type="text" placeholder="search" className="input" />
                                    <BsSearch className="search-icons" />
                                </div>
                                <div className='dropdown' >

                                    <select>
                                        <option>ALL</option>
                                        <option>aaa</option>
                                        <option>aaa</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-container">
                <div className="home-title">
                    <h4>Competitions</h4>
                    <h3>Name</h3>
                </div>
            </div>
            <div className="home-container">
                <div className="main-flex">
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span >First Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span >First Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span >First Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span >First Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span className="spot">Fourth Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-container">
                <div className="home-title">
                    <h4>Competitions</h4>
                    <h3>Name</h3>
                </div>
            </div>
            <div className="home-container">
                <div className="main-flex">
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span >First Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span >First Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span >First Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span >First Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-card-winners">
                        <div className="main-card-image">

                            <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                            <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            <span className="spot">Fourth Place</span>
                        </div>

                        <div className="main-card-content">
                            <h3>Project Name</h3>
                            <div className="site">
                                <p> From India</p>
                                <p>September 29, 2022</p>
                            </div>
                            <div className="vote">
                                <h3>vote now</h3>
                                <Link to="/details">
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
                                <div className="active2"></div>   <p >  Active</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>

    );
}

export default Winners;