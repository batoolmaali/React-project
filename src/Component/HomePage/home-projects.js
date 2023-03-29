import React, { useState, useEffect } from "react";
import Footer from "./footer";
import { FaCoins } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { BsShare, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import './navbar.css';
import ReactPaginate from 'react-paginate';
import dateFormat from 'dateformat';
const now = new Date();
function ProjectsHome() {

    const [projects, setProjects] = useState([]);

    const [Allcompatitions, setAllcompatitions] = useState([]);
    const [Typecompatitions, setTypecompatitions] = useState([]);
    const [newArr, setNewArr] = useState([]);
    // setNewArr([...newArr, ...Allcompatitions, ...projects]);
    // console.log("newarr", newArr);

    {/* ------------------------------getAllProjects--------------------------------------------- */ }
    useEffect(() => {


        axios.get('https://arcace.ca/Arciace/api/compatitions/getAllProjects').then((response) => {
            console.log(response.data.data);
            setProjects(response.data.data);
            setNewArr([...newArr, [response.data.data]])

        })
    }, []);

    {/* ------------------------------getAllCompatitions--------------------------------------------- */ }
    useEffect(() => {


        axios.get('https://arcace.ca/Arciace/api/compatitions/getAllCompatitions').then((response) => {
            if (response.data.data) {
                console.log(response.data.data);
                setAllcompatitions(response.data.data);
                setNewArr([...newArr, [response.data.data]])

                let comp = response.data.data.filter((item) => {
                    return item.types.type == "Compatition"
                });
                setTypecompatitions(comp)

            }
        })

    }, []);
    console.log("newarr", newArr);
    // console.log("allcomp", Allcompatitions);




    {/* ------------------------------paginate for compatitions--------------------------------------------- */ }

    const [currentItems, setCurrentItems] = useState([])
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 8;
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(projects.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(projects.length / itemsPerPage))
    }, [itemOffset, itemsPerPage, projects]);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % projects.length;
        setItemOffset(newOffset);
    };

    {/* ------------------------------paginate for projects--------------------------------------------- */ }
    const [currentItems2, setCurrentItems2] = useState([])
    const [pageCount2, setPageCount2] = useState(0);
    const [itemOffset2, setItemOffset2] = useState(0);
    const itemsPerPage2 = 4;
    useEffect(() => {
        const endOffset2 = itemOffset2 + itemsPerPage2;
        setCurrentItems2(Typecompatitions.slice(itemOffset2, endOffset2));
        setPageCount2(Math.ceil(Typecompatitions.length / itemsPerPage2))
    }, [itemOffset2, itemsPerPage2, Typecompatitions]);


    const handlePageClick2 = (event) => {
        const newOffset2 = (event.selected * itemsPerPage2) % Typecompatitions.length;
        setItemOffset2(newOffset2);
    };

    return (
        <>
            <div className="background-projects">
                <div className="overlay">
                    <div className="auto">
                        <h1>Projects</h1>
                        <p>You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete</p>

                        <div className="search">

                            <div className="searchbox">
                                <div className="inputfeild">
                                    <input type="text" placeholder="search" className="input" />
                                    <BsSearch className="search-icons" />
                                </div>
                                <div className='dropdown' >

                                    <select>
                                        <option>All</option>
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

                <div className="main-flex">
                    {currentItems2.map((item, i) => {
                        let { id } = item
                        return <>
                            <div className="home-title">
                                <h4>{item.types.type}</h4>
                                <h3>{item.name}</h3>
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

                                        <Link to={"/details"} state={{ projectId: id }}>
                                            <h3>vote now</h3>
                                        </Link>
                                        <Link to={"/CompitionVote"} state={{ compitionID: id }}>
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
                                        <div className="active"></div>   <p >  Active</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                    }

                    <div className="home-container">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={handlePageClick2}
                            pageRangeDisplayed={3}
                            pageCount={pageCount2}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                            containerClassName="pagination"
                            pageLinkClassName="page-num"
                            previousLinkClassName="page-num"
                            nextLinkClassName="page-num"
                            activeLinkClassName="active"
                        />
                    </div>

                </div>
            </div>


            <div className="home-container" >
                <div className="home-title3">
                    <h4>Projects</h4>


                </div>
                <div className="main-flex">
                    {currentItems.map((project, i) => {
                        const { id } = project;
                        return <div className="main-card">
                            <div className="main-card-image">

                                <img src={project.sheet1} />
                                <div className="main-card-share"><BsShare style={{ backgroundColor: "transparent" }} /></div>
                            </div>

                            <div className="main-card-content">
                                <h3>{project.name}</h3>
                                <div className="site">
                                    <p> From {project.owner_user.city}</p>

                                    <p>   {dateFormat(project.created_at, "mmmm dS, yyyy")}</p>
                                </div>
                                <div className="vote">
                                    <h3>vote now</h3>
                                    {/* <Link to={"/Details/" + id}>
                                        <button>see details</button>
                                    </Link>
                                    */}

                                    <Link to={"/vote"} state={{ projectId: id }}>
                                        <button>see details</button>
                                    </Link>
                                </div>

                            </div>
                            <hr />
                            <div className="main-card-bottom">
                                <div className="active">
                                    <img src="https://th.bing.com/th/id/OIP.LWXAxMTEcHfBztD0iaYSzgHaHP?pid=ImgDet&rs=1" />

                                    <p style={{ textTransform: "capitalize" }}>
                                        <span style={{ marginRight: "5px" }}>BY</span>
                                        {project.owner_user.name}</p>
                                </div>
                                <div className="active-icon">
                                    <div className="active"></div>   <p >  Active</p>
                                </div>
                            </div>
                        </div>



                    })}


                </div>
            </div>

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

            <Footer />

        </>

    );
}

export default ProjectsHome;