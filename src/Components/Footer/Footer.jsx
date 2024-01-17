import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerLeft">
            <div>© 2024 Thirdi. All rights reserved.</div>
        </div>
        <div className="footerRight">
            <ul>
                <li><FaGithub size={35} /></li>
                <li><FaInstagram size={35}/></li>
                <li><FaLinkedin size={35}/></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
