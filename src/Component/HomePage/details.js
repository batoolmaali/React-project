import React, { useEffect, useState } from "react";
import Footer from "./footer";
import { useLocation, useParams } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import './navbar.css';
import axios from "axios";
import dateFormat from 'dateformat';
const now = new Date();
function Details(props) {
    const location = useLocation();
    console.log(location.state.projectId)
    const [compatitionDetais, setcompatitionDetais] = useState({})
    useEffect(() => {
        axios.get(`https://arcace.ca/Arciace/api/compatitions/getCompatitionById?id=${location.state.projectId}`).then((response) => {
            console.log(response);
            setcompatitionDetais(response.data.data)

        })

    }, [location])

    return (
        <>
            <div className="background">


                <div className="background-head">
                    <div className="week">
                        <p>Competitions Of The Week</p>
                        <p>{dateFormat(compatitionDetais.created_at
                            , "mmmm dS, yyyy")}</p>
                    </div>
                    <div className="background-share">

                        <BsShare size={20} /></div>
                </div>
                <div className="background-content">

                    <div className="background-content-inner">
                        <h1>{compatitionDetais.name}</h1>
                        <p>{compatitionDetais.brief}</p>
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
                    <div className="Prize">Prize :{compatitionDetais.prize}$</div>
                    <div className="background-button">
                        <button className="btn-1">REGISTER NOW</button>
                        <button className="btn-2">Download Details</button>


                    </div>
                    <div className="price">
                        <p><FaCoins />  Designers :{compatitionDetais.paypal_arch_price}$</p>
                        <p><FaCoins />  Students:{compatitionDetais.paypal_student_price}$</p>
                    </div>
                </div>


            </div>
            <Footer />

        </>

    );
}

export default Details;