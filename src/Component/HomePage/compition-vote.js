import React, { useState, useEffect } from "react";
import './navbar.css';
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { BsShare, BsSearch } from "react-icons/bs";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaSearchPlus } from 'react-icons/fa'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { IoMdEye } from "react-icons/io";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from "axios";
function CompitionVote(props) {
    const location = useLocation();
    console.log(location.state.compitionId)
    const [compition, setcompition] = useState({});
    const [rate, setrate] = useState([]);
    const [rate2, setrate2] = useState([]);

    const percentage = 66;
    const [count, setcount] = useState(0);
    // const [value, setvalue] = useState([{ id: "", value: 0 }]);
    // const [value, setvalue] = useState({ 1: 4, 2:9, 3:6 });
    //1,2,3
    // const [value, setvalue] = useState(0)
    // const [value2, setvalue2] = useState({})


    const inc = (id) => {
        // console.log(id);
        // console.log(value2);
        // console.log(value2[id])
        // let newValue = 0;

        // if (!value2.hasOwnProperty(id)) {
        //     setvalue2({ ...value2, [id]: 0 })
        // } else {
        //     newValue = value2[id] + 1
        // }
        // newValue = value['id'] => 4 + 1 => 5
        //  setvalue({...value, id: newValue})
        // console.log('newValue', newValue)
        // setvalue2({ ...value2, [id]: newValue })


        const rat = rate2.find(item => item.id == id)
        console.log("rat2 before", rat)
        if (rat.value >= 10) {
            return;
        }

        rat.value = rat.value + 1;
        console.log("rat2 after", rat)
        console.log("new rate2 ", rate2)

        setrate2([...rate2])
        // rate.
        // const rat = rate.filter((item) => {
        //     if (item.rates.id == id) {
        //         if (value >= 10) {
        //             return 10;
        //         } else {
        //             return value + 1
        //         }


        //     }
        //     setvalue({ id, value })
        // });
    }
    const dec = (id, value) => {
        console.log(id);

        const rat = rate2.find(item => item.id == id)
        console.log("rat2 before", rat)
        if (rat.value <= 0) {
            return;
        }

        rat.value = rat.value - 1;
        console.log("rat2 after", rat)
        console.log("new rate2 ", rate2)

        setrate2([...rate2])


        // const rat = rate.filter((item) => {
        //     if (item.rates.id == id) {
        //         if (value <= 0) {
        //             return 0;
        //         }
        //         else {
        //             return value - 1
        //         }


        //     }
        //     setvalue({ id, value })
        // });
    }


    //---------------------------------------get rate by compition ----------------------------------------------
    useEffect(() => {
        axios.get(`https://arcace.ca/Arciace/api/compatitions/getRatesByCompatition?compatitionId=467bbe71-364b-46fa-9882-14d8f4a8f6fd`)
            .then((response) => {
                if (response.data.data) {
                    console.log(response.data.data);
                    setrate(response.data.data)

                    let rat2 = response.data.data.map(rat => {
                        return { id: rat.rates.id, value: 0, name: rat.rates.name }
                    })
                    // let postRates = rate2.map(item=>{
                    //     return {
                    //         rateID: item.id,
                    //         value: item.value
                    //     }
                    // })
                    console.log(rat2)
                    setrate2(rat2);

                    // {"6c21cc69-13a9-46a3-ab5d-c3a7125bb94d": 0, "6c21cc69-13a9-46a3-ab5d-c3a7125bb92d": 0}
                }
            })

    }, [])
    console.log('rate', rate);
    //---------------------------------------get compition by id ----------------------------------------------
    useEffect(() => {
        axios.get(`https://arcace.ca/Arciace/api/compatitions/getProjectById?id=${location.state.compitionId}`).then((response) => {
            console.log(response.data.data);
            setcompition(response.data.data)

        })

    }, [location])
    const rat = rate.map((item) => {
        return item.rates.name
    });
    // const rat = rate[1].rates.name;
    console.log(rat);


    // axios
    //     .post("https://arcace.ca/Arciace/api/compatitions/addRateValueToCompatition",
    //         {
    //             userID: localStorage.getItem('userid'),
    //             compatitionID: location.state.compitionId,
    //             rates: [
    //                 {
    //                     "rateID": "6c21cc69-13a9-46a3-ab5d-c3a7125bb92d",
    //                     "value": "7"
    //                 }
    //             ]
    //         })
    //     .then((response) => {
    //         console.log(response.data.data);

    //     })
    //     .catch((error) => {
    //         throw error;
    //     });
    //---------------------------------------send rate----------------------------------------------
    // useEffect(() => {
    //     axios.post("https://arcace.ca/Arciace/api/compatitions/addRateValueToCompatition")
    //         //     "userID":"67843683-e59b-4937-b676-21dbab7900ec",
    //         //     "compatitionID":"467bbe71-364b-46fa-9882-14d8f4a8f6fd",
    //         //     "rates":[
    //         //     {
    //         //         "rateID":"6c21cc69-13a9-46a3-ab5d-c3a7125bb92d",
    //         //         "value":"7"
    //         //     },
    //         //     {
    //         //         "rateID":"6c21cc69-13a9-46a3-ab5d-c3a7125bb94d",
    //         //         "value":"8"
    //         //     }
    //         //     ]
    //         // }'
    //         .then((response) => {
    //             if (response.data.data) {
    //                 console.log(response.data.data);
    //              
    //             }
    //         })

    // }, [])
    //---------------------------------------slide show----------------------------------------------

    // let SliderData = [];
    // SliderData.push({ img: project.sheet1 }, { img: project.sheet2 }, { img: project.sheet3 }, { img: project.sheet4 })
    // // console.log(SliderData);



    // const [Data, setData] = useState({ imgg: "", i: 0 })
    // const viewImge = (imgg, i) => {
    //     setData({ imgg, i })
    // }
    // const close = (action) => {
    //     if (!action) {
    //         setData({ imgg: "", i: 0 })
    //     }
    // }

    // const [Current, setCurrent] = useState(0);
    // const length = SliderData.length;

    // if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    //     return null;
    // }
    // const prevSlide = () => {
    //     setCurrent(Current === 0 ? length - 1 : Current - 1)
    // }
    // const nextSlide = () => {
    //     setCurrent(Current === length - 1 ? 0 : Current + 1)
    // }

    //---------------------------------------slide show----------------------------------------------




    return (
        <>

            {/* {Data.imgg &&

                <div style={{
                    width: "100%",
                    height: "100vh",
                    background: "rgba(0,0,0,0.85)",
                    position: "fixed",
                    top: "0",
                    left: "0",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "scroll"
                    , cursor: "pointer"
                }}>
                    <button style={{
                        position: "absolute", top: "20px", right: "20px", background: "#000000",
                        padding: "6px", wiidth: "50px", fontSize: "20", border: "none", color: "#FFFFFF", display: "flex",
                        justifyContent: "center", alignItems: "center", cursor: "pointer"
                    }} onClick={() => close()}><IoClose size={20} /></button>
                    <img src={Data.imgg}
                        style={{
                            width: "auto",



                        }} />                            </div>

            } */}

            <div className="project-container">

                <div className="flex-share">
                    <div className="home-title" style={{ padding: "0" }}>
                        <h4 style={{ padding: "5px" }}>Competitions</h4>
                        <h1>Tiny House Community</h1>
                    </div>
                    <div className="share-right">
                        <div className="share-icon"> <BsShare /></div>
                        <h3>SHARE</h3>
                    </div>
                </div>
            </div>

            <div className="project-container">
                <div className="home-title" style={{ width: "100%", padding: "0", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <h1>bbb</h1>
                </div>
                {/* <div className="project-container">
                    <div className="home-title" style={{ width: "100%", padding: "0", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                        <h4 style={{ padding: "10px", background: "#C3BE3A" }}> First Place</h4>
                        <h1>project name</h1>
                    </div> */}
                {/* <div className="project-people-team" >
                    <span> BY</span>
                    <div className="img-people" >
                        <img width={60} src="https://th.bing.com/th/id/OIP.oU4VRUfMRqARKBGLYkcIowHaHa?w=227&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                        <img width={60} src="https://th.bing.com/th/id/OIP.oU4VRUfMRqARKBGLYkcIowHaHa?w=227&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                        <img width={60} src="https://th.bing.com/th/id/OIP.oU4VRUfMRqARKBGLYkcIowHaHa?w=227&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                    </div>

                    <span>/159 team</span>
                </div>
                <div className="project-win">
                    <div className="project-win-pic">
                        <img src="https://th.bing.com/th/id/OIP.oU4VRUfMRqARKBGLYkcIowHaHa?w=227&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                        <h1>Jaffe pandera</h1>
                        <div className="social-win">
                            < FaFacebookF />  < FaLinkedinIn />  < BsInstagram />
                        </div>
                    </div>
                    <div className="project-win-brief">
                        <label>Brief:</label>
                        <br />
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </p>
                    </div>
                </div>
                <div className="project-win">
                    <div className="project-win-pic">
                        <img src="https://th.bing.com/th/id/OIP.oU4VRUfMRqARKBGLYkcIowHaHa?w=227&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                        <h1>Jaffe pandera</h1>
                        <div className="social-win">
                            < FaFacebookF />  < FaLinkedinIn />  < BsInstagram />
                        </div>
                    </div>
                    <div className="project-win-brief">
                        <label>Brief:</label>
                        <br />
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </p>
                    </div>
                </div>
                <div className="project-win">
                    <div className="project-win-pic">
                        <img src="https://th.bing.com/th/id/OIP.oU4VRUfMRqARKBGLYkcIowHaHa?w=227&h=220&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
                        <h1>Jaffe pandera</h1>
                        <div className="social-win">
                            < FaFacebookF />  < FaLinkedinIn />  < BsInstagram />
                        </div>
                    </div>
                    <div className="project-win-brief">
                        <label>Brief:</label>
                        <br />
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </p>
                    </div>
                </div> */}
            </div>
            <div className="project-container ">


                <div className="project-slider">
                    {/* <div className="slide-container">



                        {SliderData.map((data, index) => {
                            return (
                                <>
                                    <div className={index === Current ? "slideActive" : "slide"}>
                                        {index === Current && (
                                            <>



                                                <img src={data.img} key={index} onClick={() => viewImge(data.img, index)} />

                                                <h3> Sheet{index + 1}</h3>
                                            </>
                                        )}


                                    </div>
                                </>
                            )


                        })}
                    </div> */}
                    {/* <div className="slide-click">
                        < RiArrowLeftSLine onClick={prevSlide} size={50} />
                        <p><span>Slide</span>  {Current + 1} /{length}</p>
                        < RiArrowRightSLine onClick={nextSlide} size={50} />
                    </div> */}













                </div>

            </div>


            <div className="project-container">
                <div className="project-breif">
                    <h1>Brief Description Of The Concept</h1>
                    <p>bbbbb                  </p>
                    <br />
                    <br />
                    <p> We sincerely look forward to your participation in this mind-set changing design, so we can pass on with you a better city to future generations.</p>


                </div>

            </div>

            <div className="project-container">
                <div className="rateing">
                    <div className="rate-number">
                        <div style={{ height: "50%", display: "flex", flexDirection: "column", gap: "50px", paddingTop: "20px", alignItems: "center" }}>
                            <h2>RATEING</h2>
                            <h2>8.5/10</h2>
                        </div>

                        <div className="rate-m">
                            <div className="Moderators">
                                <p>Moderators Vote</p>
                                <p>8.0/10</p>
                            </div>
                            <div className="Audience">
                                <p>Audience Vote</p>
                                <p>9.0/10</p>
                            </div>
                        </div>
                    </div>

                    {/* <p>{item.rates.name}</p>
                    <p>{item.rates.id}</p> */}

                    <div className="rate-vote">
                        <div style={{ marginBottom: "10px" }}><small style={{ color: "#6E6E6E" }}>   <IoMdEye /> 550 Vote</small></div>

                        <div className="circle-mobile">
                            <div className="circle">
                                {/* {rate.map((item) => {
                                    return <>
                                        <div className="circle-div ">
                                            <CircularProgressbar value={value * 10} text={`${value}`} styles={{
                                                // Customize the root svg element
                                                root: {
                                                    width: "90px"
                                                },
                                                // Customize the path, i.e. the "completed progress"
                                                path: {
                                                    // Path color
                                                    stroke: `rgba(245, 168, 20,  ${percentage / 100})`,
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'butt',
                                                    // Customize transition animation
                                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                                    // Rotate the path
                                                    transform: 'rotate(0.25turn)',
                                                    transformOrigin: 'center center',
                                                    strokeWidth: 5
                                                },
                                                trail: {
                                                    // Trail color
                                                    stroke: 'rgba(245, 168, 20,0.3)',
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'butt',
                                                    // Rotate the trail
                                                    transform: 'rotate(0.25turn)',
                                                    transformOrigin: 'center center',
                                                    strokeWidth: 5
                                                },
                                                // Customize the text
                                                text: {
                                                    // Text color
                                                    fill: 'rgba(245, 168, 20)',
                                                    // Text size
                                                    fontSize: '16px',
                                                },
                                            }} />
                                            <span id={item.rates.id}>{item.rates.name}</span>
                                        </div>

                                    </>
                                })} */}

                                {rate2.map((item) => {
                                    console.log('item', item)
                                    return <>
                                        <div className="circle-div ">
                                            <CircularProgressbar value={item.value * 10} text={`${item.value}`} styles={{
                                                // Customize the root svg element
                                                root: {
                                                    width: "90px"
                                                },
                                                // Customize the path, i.e. the "completed progress"
                                                path: {
                                                    // Path color
                                                    stroke: `rgba(245, 168, 20,  ${percentage / 100})`,
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'butt',
                                                    // Customize transition animation
                                                    transition: 'stroke-dashoffset 0.5s ease 0s',
                                                    // Rotate the path
                                                    transform: 'rotate(0.25turn)',
                                                    transformOrigin: 'center center',
                                                    strokeWidth: 5
                                                },
                                                trail: {
                                                    // Trail color
                                                    stroke: 'rgba(245, 168, 20,0.3)',
                                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                                    strokeLinecap: 'butt',
                                                    // Rotate the trail
                                                    transform: 'rotate(0.25turn)',
                                                    transformOrigin: 'center center',
                                                    strokeWidth: 5
                                                },
                                                // Customize the text
                                                text: {
                                                    // Text color
                                                    fill: 'rgba(245, 168, 20)',
                                                    // Text size
                                                    fontSize: '16px',
                                                },
                                            }} />
                                            <span id={item.id}>{item.name}</span>
                                        </div>

                                    </>
                                })}
                            </div>

                            <p style={{ textAlign: "center", color: "#6E6E6E", fontSize: "13px", margin: "10px 0" }}>Your Vote</p>
                            <div className="your-vote">
                                {/* <div id={item.rates.id}><BiMinus onClick={(e) => dec(item.rates.id)} />{value}<BiPlus onClick={(e) => inc(item.rates.id)} /></div> */}
                                {/* {rate.map((item) => {
                                    return <>

                                        <div id={item.rates.id}><BiMinus onClick={(e) => dec(item.rates.id)} />{value}<BiPlus onClick={(e) => inc(item.rates.id)} /></div>

                                    </>

                                })} */}

                                {rate2.map((item) => {
                                    return <>

                                        <div id={item.id}><BiMinus onClick={(e) => dec(item.id)} />{item.value}<BiPlus onClick={(e) => inc(item.id)} /></div>

                                    </>

                                })}

                                {/* <div><BiMinus onClick={dec1} /> {SpacePlanning}<BiPlus onClick={inc1} /></div>
                                        <div><BiMinus onClick={dec2} />{SiteRespect}<BiPlus onClick={inc2} /></div>
                                        <div><BiMinus onClick={dec3} />{ConnectingPeople}<BiPlus onClick={inc3} /></div>
                                        <div><BiMinus onClick={dec4} /> {EnvironMental}<BiPlus onClick={inc4} /></div> */}
                            </div>
                        </div>


                        <div className="vote-btn">
                            <button>Vote Now</button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>

    );
}

export default CompitionVote;