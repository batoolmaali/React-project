
import React from "react";
import "./navbar.css";
import { GoLocation } from "react-icons/go";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsArrowRight } from "react-icons/bs";

function Footer() {
    return (
        <>
            <footer >
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img width={140} src="arcace-logo.png" />
                        </div>
                        <p>Arc!Ace Magazine,<br /> a place for designers and architects</p>
                        <div className="hover"><p >To Main Website</p> <BsArrowRight size={20} /></div>
                    </div>
                    <div className="footer-right">
                        <ul>
                            <li>home</li>
                            <li>Projects</li>
                            <li>Competitions</li>
                            <li>Winners</li>
                            <li>Log in</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-media">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <BsInstagram />
                </div>
                <div className="copyright">
                    Copyright 2012 - 2023 | by ArcAce | All Rights Reserved
                </div>
            </footer>

        </>
    );
}

export default Footer;